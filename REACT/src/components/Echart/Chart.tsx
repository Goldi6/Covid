import { useRef, useEffect, useContext } from "react";
import * as echarts from "echarts";
import { chartType } from "../../types/chartType";
import { ThemeContext } from "../../context/ThemeContext";
import chartFuncs from "./chartFuncs";

import { colors, isRGBColor, ColorName } from "../../assets/colors";

function functionDefineColor(theme: string, series: any) {
  return series.map((item: any) => {
    //get mode from theme and set color
    let color = theme === "light" ? item.colorLight : item.colorDark;
    color = isRGBColor(color) ? color : colors[color as ColorName];

    //set border color
    let borderC = theme === "light" ? "#fff" : "#666";
    if (item.type === "bar") {
      borderC = color;
      item.barCategoryGap = "50%";
    }

    //configure styles
    let colorConfig = {
      lineStyle: {
        color,
        opacity: 1,
      },
      itemStyle: {
        borderColor: borderC,
        color,
        borderWidth: 1,
      },
      symbol: "circle",
      symbolSize: 7,
      stack: "Total",
    };
    const area = {
      areaStyle: {
        color,

        opacity: 0.7,
      },
    };

    if ("areaStyle" in item) colorConfig = { ...colorConfig, ...area };
    const i = { ...item };
    delete i.colorLight;
    delete i.colorDark;
    const colored = { ...i, ...colorConfig };

    return colored;
  });
}

export default function Chart({ data }: chartType) {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme as string;

  const chartRef = useRef<HTMLDivElement>(null);

  const axisStyle = {
    nameLocation: "middle",
    nameGap: 42,
    nameTextStyle: {
      fontSize: 14,
      color: theme === "light" ? "#111" : "#fff",
    },
    axisLabel: {
      color: theme === "light" ? "#111" : "#fff",
    },
  };
  if (data.xAxis.data) {
    if (isTimestampString(data.xAxis.data[0])) {
      data.xAxis.data = data.xAxis.data.map((dStr: string) => {
        return new Date(dStr).getDate() + "." + (new Date(dStr).getMonth() + 1);
      });
    }
  }

  data.xAxis = { ...data.xAxis, ...axisStyle };
  data.yAxis = { ...data.yAxis, ...axisStyle };

  if (data.yAxis.type === "category") {
    data.yAxis.axisLabel.interval = 0;
  }


  useEffect(() => {
    let chartInstance = echarts.init(chartRef.current);
    const options = {
      grid: {
        left: "0",
        right: "0", 
        top: "5%", 
        bottom: "20%", 
        containLabel: true,
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: data.xAxis
        ? data.xAxis
        : {
            type: "value",
          },
      yAxis: data.yAxis
        ? data.yAxis
        : {
            type: "value",
          },
      series: functionDefineColor(theme, data.series),
    };

    //additional styles or configuration options

    //functions that manipulate the chart and defined in chartFuncs.ts && mongo database
    if (data.functions) {
      data.functions.forEach((func) => {
        const name = func.path.split(".");
        let curr: any = options;

        for (let i = 0; i < name.length - 1; i++) {
          if (!curr[name[i]]) {
            curr[name[i]] = {};
          }
          curr = curr[name[i]];
        }

        const lastPropertyName = name[name.length - 1];
        curr[lastPropertyName] = chartFuncs[func.func]; // Assign the function
      });
      delete data.functions;
    }

    chartInstance.setOption(options);

    const handleResize = () => {
      chartInstance.resize();
    };

    const gridContainer = chartRef.current?.parentElement;
    gridContainer?.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      chartInstance.dispose();
      gridContainer?.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleResize);
    };
  }, [data, theme]);

  return <div ref={chartRef} style={{ width: "100%", height: "234px" }} />;
}

function isTimestampString(input: string) {
  // Regular expression pattern for timestamp in YYYY-MM-DDTHH:mm:ss.sssZ format
  const timestampPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;

  return timestampPattern.test(input);
}
