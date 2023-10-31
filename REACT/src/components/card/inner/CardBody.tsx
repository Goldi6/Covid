import { colorHelpersType } from "../../../types/typesToApi";
import Chart from "../../Echart/Chart";
import Line from "../../Line/Line";
import Table from "../../Table/Table";



type cardBodyType = any;

type cardBodyProps = { cardBody: cardBodyType,type:cardBodyType,colorHelpers:colorHelpersType[]  };

export default function CardBody({ cardBody ,type,colorHelpers}: cardBodyProps) {
  

  

  
return<>
  
    {type === "table" && <Table tdata={cardBody} colorHelpers={colorHelpers}/>}
    {type === "line" && <Line data={cardBody.data} style={cardBody.style} />}
    {type === "graph" && <Chart data={cardBody.data} />}
</>
   

}
