//import { sectionsType } from "./types";
//import { colors } from "color_codes";

// // const sectionNames = [
// //   "מבט על",
// //   "מדדים מרכזיים",
// //   "תחלואה ואשפןזי ילדים",
// //   "השפעת התחסנות על התחלואה",
// //   "נפטרים",
// //   "בדיקות",
// //   "תחקורים נוספים",
// //   "תחלואה חוזרת ומחלימים",
// //   "התחסנות האוכלוסיה",
// // ];

// const tltip_sc1_grp1_1 =
//   "מספר המאומתים לנגיף COVID-19 שאותרו משעה 00:00 עד שעה 23:59 של יום אתמול. סה&quot;כ: מספר המאומתים מפרוץ המגיפה, כולל מי שהתגלו כמאומתים לנגיף שוב. מאומתים - מי שנבדקו ונמצאו חיוביים לנגיף COVID-19 בבדיקת PCR או בבדיקת אנטיגן מפוקחת (החל מה 5.1.2022) , בין אם הופיעו אצלם תסמינים ובין אם לא, בין אם הם חולים, החלימו או נפטרו.";

// const tltip_sc1_grp1_2 =
//   "מספר החולים הפעילים במחלת הנגיף COVID-19, נכון למועד העדכון האחרון. חולים פעילים - מי שנבדקו ונמצאו חיוביים לנגיף בבדיקת PCR או בבדיקת אנטיגן מפוקחת (החל מה 5.1.2022) COVID-19, ללא קשר להופעת תסמינים, שעוד לא הוגדרו כמחלימים ושלא נפטרו.";

// const tltip_sc1_grp1_3 =
//   "מספר החולים במצב קשה וקריטי המאושפזים בבתי החולים. חולה קשה - מי שחולה במחלת נגיף COVID-19 ושהוגדר במצב קשה או קריטי על ידי מערכת הבריאות.";

// const tltip_sc1_grp1_4 =
//   "מספר מקבלי החיסון מפני נגיף COVID-19 מתחילת מבצע החיסונים. החלוקה למנות אינה כוללת אומיקרון";

// const tltip_sc1_grp1_5 =
//   "מספר הנפטרים המצטבר ממחלת הנגיף COVID-19 החל מפרוץ המגפה. נתוני הנפטרים מתעדכנים לאחר שנבדקו תעודות הפטירה לוידוא סיבת המוות ולכן ייתכנו עדכונים מאוחרים של מספר הנפטרים.";

// const tltip_sc1_grp1_6 =
//   "אחוז הנבדקים שנמצאו חיוביים לנגיף COVID-19 מתוך מספר נבדקים לגילוי הנגיף אתמול. נבדקים לגילוי הנגיף אתמול - מספר הנבדקים לאיתור ראשוני של הנגיף (ללא בדיקות נלוות לקביעת החלמה) בבדיקות PCR או אנטיגן מפוקחות, שהתבצעו ותוצאותיהן התקבלו משעה 00:00 עד שעה 23:59 של יום אתמול. כלל הבדיקות אתמול &ndash; מספר כל תוצאות הבדיקות לגילוי קורונה שבוצעו מסוג PCR או אנטיגן ,הן לבדיקה ראשונית לאיתור הנגיף והן לבדיקות נלוות לקביעת החלמה, שהתקבלו החל מחצות 00:00 עד שעה 23:59 של יום אתמול.";
// /////////////////////
// const tltip_sc1_grp2_4 =
//   "מספר הנבדקים בבדיקות לגילוי נגיף COVID-19 מסוג PCR או אנטיגן ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים. הנתון אינו כולל נבדקים בבדיקות נלוות לקביעת החלמה. נבדקים חיוביים - אחוז הנבדקים שנמצאו חיוביים לנגיף COVID-19 מתוך מספר הנבדקים לגילוי הנגיף ב 7 הימים האחרונים.";
// export const sections: sectionsType = [
//   {
//     id: "Overview",
//     title: "מבט על",
//     content: [
//       {
//         cards: {
//           active: [
//             {
//               section: "Overview",
//               name: "New_Cases_yesterday",
//               title: "מאומתים אתמול",
//               tooltip: tltip_sc1_grp1_1,
//               api: "Overview/New_Cases",
//               cardType: "text-line",
//               body: {
//                 // content: [
//                 //   { class: "font-big", line: { data: "" } },
//                 //   { class: "font-small", line: { data: "", text: "מחצות" } },
//                 //   { class: "font-small", line: { data: "", text: 'סה"כ' } },
//                 // ],
//               },
//             },
//             {
//               section: "Overview",
//               name: "active_cases",
//               title: "חולים פעילים",
//               tooltip: tltip_sc1_grp1_2,
//               api: "Overview/active_cases",
//               cardType: "text-line",
//               body: {
//                 // content: [
//                 //   { class: "font-big", line: { data: "" } },
//                 //   { class: "font-small", line: { data: "", text: 'בבי"ח' } },
//                 // ],
//               },
//             },
//             {
//               section: "Overview",
//               name: "severe_cases",
//               title: "חולים קשה",
//               tooltip: tltip_sc1_grp1_3,
//               api: "Overview/severe_cases",
//               cardType: "text-line",
//               body: {
//                 // content: [
//                 //   { class: "font-big", line: { data: "" } },
//                 //   {
//                 //     class: "font-small",
//                 //     line: {
//                 //       ball: colors.red,
//                 //       text: "מתוכם קריטי",
//                 //       data: "",
//                 //     },
//                 //   },
//                 //   {
//                 //     class: "font-small",
//                 //     line: {
//                 //       ball: colors.red,
//                 //       text: "מחוברים לאקמו",
//                 //       data: "",
//                 //     },
//                 //   },
//                 //   {
//                 //     class: "font-small",
//                 //     line: {
//                 //       ball: colors.yellow,
//                 //       text: "מונשמים",
//                 //       data: "",
//                 //     },
//                 //   },
//                 //   { class: "font-small", line: { br: 1 } },
//                 //   {
//                 //     class: "font-small",
//                 //     line: { text: "חולים בינוני", data: "" },
//                 //   },
//                 //   {
//                 //     class: "font-small",
//                 //     line: { text: "חולים קל", data: "" },
//                 //   },
//                 // ],
//               },
//             },
//             {
//               section: "Overview",
//               name: "vaccinated",
//               title: "מתחסנים",
//               tooltip: tltip_sc1_grp1_4,
//               api: "Overview/vaccinated",
//               cardType: "line-grid",
//               body: {
//                 // content: [
//                 //   [
//                 //     { line: { fontSize: "0.8rem", text: "מנה 1" } },
//                 //     { line: { fontSize: "1.1rem", data: "" } },
//                 //   ],
//                 //   [
//                 //     { line: { fontSize: "0.8rem", text: "מנה 2" } },
//                 //     { line: { fontSize: "1.1rem", data: "" } },
//                 //   ],
//                 //   [
//                 //     { line: { fontSize: "0.8rem", text: "מנה 3" } },
//                 //     { line: { fontSize: "1.1rem", data: "" } },
//                 //   ],
//                 //   [
//                 //     { line: { fontSize: "0.8rem", text: "מנה 4" } },
//                 //     { line: { fontSize: "1.1rem", data: "" } },
//                 //   ],
//                 //   [
//                 //     { line: { fontSize: "0.8rem", text: "אומיקרון" } },
//                 //     { line: { fontSize: "1.1rem", data: "" } },
//                 //   ],
//                 // ],
//               },
//             },
//             {
//               section: "Overview",
//               name: "cumulative_deaths",
//               title: "נפטרים מצטבר",
//               tooltip: tltip_sc1_grp1_5,
//               api: "overview/cumulative_deaths",
//               cardType: "text-line",
//               body: {
//                 // content: [{ class: "data-number-big", line: { data: "" } }],
//               },
//             },
//             {
//               section: "Overview",
//               name: "positives",
//               title: "אחוז נבדקים חיוביים אתמול",
//               tooltip: tltip_sc1_grp1_6,
//               api: "overview/positives",
//               cardType: "text-line",
//               body: {
//                 // content: [
//                 //   { class: "data-number-big", line: { data: "" } },
//                 //   {
//                 //     class: "data-small-right",
//                 //     line: { text: "נבדקים לגילוי הנגיף אתמול", data: "" },
//                 //   },
//                 //   {
//                 //     class: "data-small-right",
//                 //     line: { text: "כלל הבדיקות אתמול", data: "" },
//                 //   },
//                 // ],
//               },
//             },
//           ],
//           nonactive: [],
//         },
//       },
//       {
//         title: "סיכום 7 ימים אחרונים",
//         class: "solid",
//         cards: {
//           active: [
//             {
//               section: "Overview",
//               name: "confirmed_cases",
//               api: "Overview/confirmed_cases",
//               title: "מספר המאומתים",
//               tooltip:
//                 "מספר המאומתים לנגיף COVID-19 שאותרו ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.",
//               cardType: "text-line",
//               body: {
//                 content: [
//                   // { class: "data-number-big" },
//                   // { class: "data-small-right", text: "משבעה ימים קודמים" },
//                 ],
//               },
//             },
//             {
//               section: "Overview",
//               name: "severe_cases",
//               title: "מספר חולים קשה",
//               tooltip:
//                 "מספר החולים החדשים במצב קשה וקריטי במחלת נגיף COVID-19 ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.",
//               api: "Overview/severe_cases",
//               cardType: "text-line",
//               body: {
//                 content: [
//                   // { class: "data-number-big" },
//                   // { class: "data-small-right", text: "משבעה ימים קודמים" },
//                 ],
//               },
//             },
//             {
//               section: "Overview",
//               name: "deaths",
//               title: "מספר נפטרים",
//               tooltip:
//                 "מספר הנפטרים מנגיף COVID-19 ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.",
//               api: "Overview/deaths",
//               cardType: "text-line",
//               body: {
//                 content: [
//                   // { class: "data-number-big" },
//                   // { class: "data-small-right", text: "משבעה ימים קודמים" },
//                 ],
//               },
//             },
//             {
//               section: "Overview",
//               name: "tests",
//               title: "מספר נבדקים",
//               tooltip: tltip_sc1_grp2_4,
//               api: "Overview/tests",
//               cardType: "text-line",
//               body: {
//                 content: [
//                   // { class: "data-number-big" },
//                   // { class: "data-small-right", text: "משבעה ימים קודמים" },
//                   // { class: "data-small-right", text: "נבדקים חיוביים" },
//                 ],
//               },
//             },
//           ],
//           nonactive: [],
//         },
//       },
//     ],
//   },
//   {
//     id: "Key_Data",
//     title: "מדדים מרכזיים",
//     relatedLinks: [
//       {
//         title: "טבלת אימותים לאחר חיסון",

//         href: "https://data.gov.il/dataset/covid-19/resource/9b623a64-f7df-4d0c-9f57-09bd99a88880",
//       },
//       {
//         title: "תעופה בזמן קורונה",
//         subTitle: "רמזור מדינות העולם לפי רמת סיכון",
//         href: "https://experience.arcgis.com/experience/23d35bf0ccbc40d1ad5b5af92b967c95",
//         subLinkText: "https://experience.arcgis.com",
//       },
//     ],
//     content: [
//       {
//         cards: {
//           active: [
//             {
//               section: "Key_Data",
//               name: "Hospitalizations",
//               api: "Key_Data/Hospitalizations",

//               shareable: true,
//               title: "מספר מאושפזים – יומי",
//               tooltip:
//                 "מספר החולים היומי במחלת נגיף COVID-19 המאושפזים בבתי חולים בחלוקה לפי מצב רפואי : קשה (כולל קריטי), בינוני וקל.",

//               cardType: "graph",
//               body: {
//                 filters: ["field", "time"],
//                 colorHelpers: [
//                   { name: "SevereCases", color: colors.sky, text: "קשה" },
//                   {
//                     name: "ModerateCases",
//                     color: colors.orange,
//                     text: "בינוני",
//                   },
//                   { name: "MildCases", color: colors.atomic, text: "קל" },
//                 ],
//                 content: {
//                   xAxis: {
//                     name: "Date",
//                     type: "category",
//                     label: "תאריך",
//                     data: [],
//                   },
//                   yAxis: { name: "Admissions", type: "value" },
//                   series: [
//                     {
//                       name: "MildCases",
//                       type: "line",
//                     },
//                     {
//                       name: "ModerateCases",
//                       type: "line",
//                     },
//                     {
//                       name: "SevereCases",
//                       type: "line",
//                     },
//                   ],
//                 },
//               },
//             },
//           ],
//           nonactive: [],
//         },
//       },
//     ],
//   },
//   {
//     id: "child_cases-and-hospitalizations",
//     title: "תחלואה ואשפוזי ילדים",
//     content: [{ cards: { active: [], nonactive: [] } }],
//   },
//   {
//     id: "vaccination_effectiveness",
//     title: "השפעת התחסנות על התחלואה",
//     content: [{ cards: { active: [], nonactive: [] } }],
//   },
//   {
//     id: "deaths",
//     title: "נפטרים",
//     content: [{ cards: { active: [], nonactive: [] } }],
//   },
//   {
//     id: "testing",
//     title: "בדיקות",
//     content: [{ cards: { active: [], nonactive: [] } }],
//   },
//   {
//     id: "tested_by_age_groups",
//     title: "תחקורים נוספים",
//     content: [{ cards: { active: [], nonactive: [] } }],
//   },
//   {
//     id: "additional_data",
//     title: "תחלואה חוזרת ומחלימים",
//     content: [{ cards: { active: [], nonactive: [] } }],
//   },
//   {
//     id: "daily_recovered",
//     title: "התחסנות האוכלוסיה",

//     content: [{ cards: { active: [], nonactive: [] } }],
//   },
// ];


export {}