export type chartType = {
  data: {
    xAxis?: any;

    yAxis?: any;
    series: any;
    functions?: functions;
  };
};

type functions = {path:'string',func:'string'}[];
