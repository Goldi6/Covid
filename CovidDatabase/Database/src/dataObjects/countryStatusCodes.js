


const dataArr = [
{id:1,color:'green'},
{id:2,color:'green'},
{id:3,color:'yellow'},
{id:4,color:'yellow'},
{id:5,color:'orange'},
{id:6,color:'orange'},
{id:7,color:'red'},
{id:8,color:'red'},



]





const SqlConverted = () => {
    const Sql = dataArr.map((item) => {
      return `(${item.id},  '${item.color}')`;
    });
    return Sql.join(",");

  };
  
module.exports = SqlConverted;  