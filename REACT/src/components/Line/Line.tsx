import {
  BallStyled,
  FlexLineStyled,
  LineContainer,
} from "./LineContainer.styled";
import { positionSchema } from "../../assets/styleSchema";

type LineProps = {
  style: LineStyle;
  data: any;
};

type LineStyle = {
  fontSize: string;
  mobileMainFontSize: string;
  mainFontSize: string;
  className: "line-flex" | "line";
};

export default function Line({ data, style }: any) {
  const mediaQueryStyles = {
    fontSize: style.mainFontSize,
    [`@media screen and (maxWidth: ${positionSchema.sectionBreakpoint_small})`]:
      {
        fontSize: style.mobileMainFontSize,
      },
  };

  return (
    <LineContainer
      className={style.className}
      style={{ fontSize: style.fontSize }}
    >
      {data.map((item: any, i: number) => {

        if (item?.type === "br") return <br key={i} />;
        return (
          <SingleLine
            key={i}
            title={item.title}
            name={item.name}
            data={item.data}
            ballColor={item?.ballColor}
            type={item?.type}
            combinedStyle={mediaQueryStyles}
            fontSize={style.fontSize}
            classN={style.className}
          />
        );
      })}
    </LineContainer>
  );
}

type SingleLineProps = {
  title: string;
  name: string;
  data: number;
  ballColor?: string;
  type?: "br" | "main" | "line" | undefined;
  combinedStyle: any;
  fontSize: string;
  classN: string;
};

function SingleLine({
  title,
  classN,
  data,
  ballColor,
  type,
  combinedStyle,
  fontSize,
}: SingleLineProps) {
  return (
    <FlexLineStyled className={classN}>
      {ballColor && (
        <BallStyled className="ball" style={{ backgroundColor: ballColor }} />
      )}
      <span className="data">
        <h4
          style={
            type === "main" || classN === "line-flex"
              ? combinedStyle
              : { fontSize }
          }
        >
          {data}
        </h4>
      </span>
      {title && <span className="title">{title}</span>}
    </FlexLineStyled>
  );
}
