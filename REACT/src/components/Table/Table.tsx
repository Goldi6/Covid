import { colorHelpersType, tableType } from "../../types/typesToApi";
import { useReorder } from "../../hooks/useReorder";
import ColorSquare from "./ColorSquare";
import {
  Scrollable,
  THeadStyled,
  TableStyled,
  TbodyStyled,
} from "./Table.styled";

import { ColorName,colors, isRGBColor } from "../../assets/colors";
import { useContext } from "react";
import {ThemeContext} from "../../context/ThemeContext";

type tablePropsType = { tdata: tableType; colorHelpers: colorHelpersType[] };







export default function Table({ tdata, colorHelpers }: tablePropsType) {
  const data = tdata.data;


  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme as string;


  type Color= {
    min?: number;
    max?: number;
    light: string;
  }
    //get the color by the value of the cell
    const getColor = (
      val: number
    ): { backgroundColor?: string } => {
      const color = colorHelpers.find((c: Color) => {
        if (c.min !== undefined && c.max !== undefined) {
          return c.min <= val && c.max >= val;
        } else {
          return false;
        }
      });
      
      if (color) {

        let c = color[theme as "light" | "dark"] ;
        if(!isRGBColor(c)) c = colors[c as ColorName];
        return { backgroundColor: c };
      } else {
        return {};
      }
    };


  const { orderedData, reorderBy } = useReorder(data.rows);
  return (
    <Scrollable>
      <TableStyled>
        <THeadStyled>
          <tr>
            {data.labels.map((label, i) => {
              return (
                <th
                  key={i}
                  onClick={() => {
                    reorderBy(label.name);
                  }}
                >
                  {label.title}
                </th>
              );
            })}
          </tr>
        </THeadStyled>
        <TbodyStyled>
          {orderedData.map((row, i) => (
            <tr key={i}>
              {data.labels.map((l, key) => {
              
            

                const color = l.colorByValue
                  ? getColor(parseFloat(row[l.name]))
                  : {};
                const data = l.useColor ? (
                  <ColorSquare color={row[l.name]} />
                ) : (
                  row[l.name]
                );
                const progressClass =
                  parseInt(row[l.name]) > 80 ? "heigh-value" : "";
                return (
                  <td key={key}>
                    <span>
                      {/* add progress bar if needed */}
                      {l.progress && (
                        <progress
                          max="100"
                          value={row[l.name]}
                          className={progressClass}
                        ></progress>
                      )}

                      {color.backgroundColor ? (
                        <span className="colored-data" style={color}>
                          {data}
                          {l.percent && "%"}
                        </span>
                      ) : (
                        <span>
                          {data}
                          {l.percent && "%"}
                        </span>
                      )}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </TbodyStyled>
      </TableStyled>
    </Scrollable>
  );
}
