const hospitalsArray = [
  { name: "מרכז רפואי שיבא", Internal_department_beds: 76, beds: 16 },
  { name: "מרכז רפואי תל אביב", Internal_department_beds: 89, beds: 95 },
  { name: "מרכז רפואי אסף הרופא", Internal_department_beds: 75, beds: 79 },
  { name: "מרכז רפואי רבין", Internal_department_beds: 7, beds: 43 },
  { name: "בית חולים מאיר", Internal_department_beds: 58, beds: 5 },
  { name: "כפר סבא", Internal_department_beds: 46, beds: 88 },
  { name: "מרכז רפואי קפלן", Internal_department_beds: 30, beds: 90 },
  { name: "מרכז רפואי לניאדו", Internal_department_beds: 6, beds: 18 },
  { name: "מרכז רפואי מעיני הרפואה", Internal_department_beds: 44, beds: 53 },
  { name: "בית החולים וולפסון", Internal_department_beds: 94, beds: 87 },
  { name: "בית החולים שניידר", Internal_department_beds: 52, beds: 23 },
  { name: "בית החולים ספרא לילדים", Internal_department_beds: 23, beds: 29 },
  { name: "מרכז הגריאטרי המשולב ע\"ש שוהם בפרדס-חנה", Internal_department_beds: 42, beds: 56 },
  { name: "מרכז הגריאטרי בראשון לציון", Internal_department_beds: 51, beds: 72 },
  { name: "מרכז רפואי גריאטרי שמואל הרופא", Internal_department_beds: 13, beds: 25 },
  { name: "בית חולים זיו", Internal_department_beds: 32, beds: 10 },
  { name: "בית חולים פורייה", Internal_department_beds: 77, beds: 85 },
  { name: "בית חולים גליל מערבי", Internal_department_beds: 40, beds: 97 },
  { name: "בית חולים כרמל", Internal_department_beds: 19, beds: 99 },
  { name: "בית חולים רמבם", Internal_department_beds: 9, beds: 98 },
  { name: "בית חולים בני ציון", Internal_department_beds: 31, beds: 57 },
  { name: "בית חולים האיטלקי", Internal_department_beds: 62, beds: 37 },
  { name: "בית חולים מאייר לילדים", Internal_department_beds: 83, beds: 76 },
  { name: "מרכז רפואי גריאטרי דורות", Internal_department_beds: 45, beds: 63 },
  { name: "מרכז הגריאטרי שיקומי ע\"ש פלימן", Internal_department_beds: 79, beds: 28 },
  { name: "בית חולים יוספטל", Internal_department_beds: 93, beds: 49 },
  { name: "מרכז רפואי סורוקה", Internal_department_beds: 48, beds: 86 },
  { name: "מרכז רפואי ברזילי", Internal_department_beds: 85, beds: 67 },
  { name: "מרכז רפואי הדסה עין כרם", Internal_department_beds: 22, beds: 74 },
  { name: "הדסה הר הצופים", Internal_department_beds: 21, beds: 58 },
  { name: "מרכז רפואי שערי צדק", Internal_department_beds: 12, beds: 42 },
  { name: "בית החולים אלין לשיקום ילדים ונוער", Internal_department_beds: 54, beds: 54 },
  { name: "בית החולים ביקור חולים", Internal_department_beds: 96, beds: 70 },
  { name: "בית חולים המרכזי בעמק", Internal_department_beds: 18, beds: 47 },
  { name: "בית חולים ע\"ש יוספטל", Internal_department_beds: 92, beds: 31 },
  { name: "בית חולים ע\"ש ליידי דיויס שבכרמל", Internal_department_beds: 50, beds: 14 },
  { name: "בית חולים ע\"ש קפלן ברחובות", Internal_department_beds: 16, beds: 59 },
  { name: "מרכז רפואי ע\"ש ספיר", Internal_department_beds: 27, beds: 81 },
  { name: "מרכז רפואי ע\"ש רבין", Internal_department_beds: 56, beds: 36 },
  { name: "מרכז רפואי ע\"ש רבין קמפוס גולדה", Internal_department_beds: 69, beds: 33 }
];



  const hospitalsSqlConverted = () => {
    const hospitalsSql = hospitalsArray.map((hospital) => {
      return `(N'${hospital.name}', ${hospital.Internal_department_beds}, ${hospital.beds})`;
    });
    return hospitalsSql.join(",");

    console.log(hospitalsSql)
  };
  
module.exports = hospitalsSqlConverted;  