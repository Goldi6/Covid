const colors = {
  sky: "rgb(44, 210, 219)",
  atomic: "rgb(155, 233, 133)",
  lavender: "rgb(186, 161, 239)",
  orange: "rgb(253, 130, 100)",
  yellow: "rgb(252, 197, 55)",
  red: "rgb(226, 29, 72)",
  mountain: "rgb(0, 127, 127)",
};

module.exports = [

  {
    order: 1,
    name: 'New_Cases,yest',
    title: 'מאומתים אתמול',
    view: 'new_cases_yesterday_view',
    section: 'Overview',
    subGroup: false,
    tooltip: 'מספר המאומתים לנגיף COVID-19 שאותרו משעה 00:00 עד שעה 23:59 של יום אתמול. סה"כ: מספר המאומתים מפרוץ המגיפה, כולל מי שהתגלו כמאומתים לנגיף שוב. מאומתים - מי שנבדקו ונמצאו חיוביים לנגיף COVID-19 בבדיקת PCR או בבדיקת אנטיגן מפוקחת (החל מה 5.1.2022) , בין אם הופיעו אצלם תסמינים ובין אם לא, בין אם הם חולים, החלימו או נפטרו.',
    shareable: false,
    fieldsToCount: [],
    fieldsToSelect: [],
    fieldsToGroupBy: [],
    content: {
        filters: [],
        type: 'line',
        data: {
            lines: [
                {
                    name: 'yesterday',
                    type: 'main'
                },
                {
                    title: 'מחצות',
                    name: 'since_midnight'
                },
                {
                    title: 'סה"כ',
                    name: 'total'
                }
            ]
        }
    },
    _id: "64d866ca14bdc9df27db6b44",
  },
  {
    order: 2,
    name: 'Active_Cases',
    title: 'חולים פעילים',
    view: 'active_cases_view',
    section: 'Overview',
    subGroup: false,
    tooltip: 'מספר החולים הפעילים במחלת הנגיף COVID-19, נכון למועד העדכון האחרון. חולים פעילים - מי שנבדקו ונמצאו חיוביים לנגיף בבדיקת PCR או בבדיקת אנטיגן מפוקחת (החל מה 5.1.2022) COVID-19, ללא קשר להופעת תסמינים, שעוד לא הוגדרו כמחלימים ושלא נפטרו.',
    shareable: false,
    fieldsToCount: [],
    fieldsToSelect: [],
    fieldsToGroupBy: [],
    content: {
        type: 'line',
        data: {
            style: {
                fontSize: '0.75rem',
                mobileMainFontSize: '1rem',
                mainFontSize: '1.4rem',
                className: 'line'
            },
            lines: [
                {
                    name: 'active_cases',
                    type: 'main'
                },
                {
                    name: 'hospitalized',
                    title: 'בבי"ח'
                }
            ]
        },
        filters: []
    },   _id: "64d866ca14bdc9df27db6b45",
  },
  {
    order: 4,
    name: 'Vaccinated',
    title: 'מתחסנים',
    view: 'Vaccinated_view',
    section: 'Overview',
    subGroup: false,
    tooltip: 'מספר מקבלי החיסון מפני נגיף COVID-19 מתחילת מבצע החיסונים. החלוקה למנות אינה כוללת אומיקרון',
    shareable: false,
    fieldsToCount: [],
    fieldsToSelect: [],
    fieldsToGroupBy: [],
    content: {
        type: 'line',
        data: {
            fontSize: '0.8rem',
            mobileMainFontSize: '0.9rem',
            mainFontSize: '1.1rem',
            className: 'line-flex',
            lines: [
                {
                    title: 'מנה 1',
                    name: '1st_dose'
                },
                {
                    title: 'מנה 2',
                    name: '2nd_dose'
                },
                {
                    title: 'מנה 3',
                    name: '3rd_dose'
                },
                {
                    title: 'מנה 4',
                    name: '4th_dose'
                },
                {
                    title: 'אומיקרון',
                    name: 'Omicron'
                }
            ]
        },
        filters: []
    },
    _id: "64d866ca14bdc9df27db6b46",
  },
  {
    order: 6,
    name: '%_Positives,_yest.',
    title: 'אחוז נבדקים חיוביים אתמול',
    view: 'positive_yesterday_view',
    section: 'Overview',
    subGroup: false,
    tooltip: 'אחוז הנבדקים שנמצאו חיוביים לנגיף COVID-19 מתוך מספר נבדקים לגילוי הנגיף אתמול. נבדקים לגילוי הנגיף אתמול - מספר הנבדקים לאיתור ראשוני של הנגיף (ללא בדיקות נלוות לקביעת החלמה) בבדיקות PCR או אנטיגן מפוקחות, שהתבצעו ותוצאותיהן התקבלו משעה 00:00 עד שעה 23:59 של יום אתמול. כלל הבדיקות אתמול &ndash; מספר כל תוצאות הבדיקות לגילוי קורונה שבוצעו מסוג PCR או אנטיגן ,הן לבדיקה ראשונית לאיתור הנגיף והן לבדיקות נלוות לקביעת החלמה, שהתקבלו החל מחצות 00:00 עד שעה 23:59 של יום אתמול.',
    shareable: false,
    fieldsToCount: [],
    fieldsToSelect: [],
    fieldsToGroupBy: [],
    content: {
        filters: [],
        type: 'line',
        data: {
            lines: [
                {
                    type: 'main',
                    precent: true,
                    name: 'tested_positive_yest_percent'
                },
                {
                    title: 'נבדקים לגילוי הנגיף אתמול',
                    name: 'tested_positive_yest_reveal'
                },
                {
                    title: 'כלל הבדיקות אתמול',
                    name: 'total_tests_yest'
                }
            ]
        }
    },   _id: "64d866ca14bdc9df27db6b47",
  },
  {
    order: 4,
    name: 'Tests',
    title: 'מספר נבדקים',
    view: 'tests_7_days_view',
    section: 'Overview',
    subGroup: true,
    tooltip: 'מספר הנבדקים בבדיקות לגילוי נגיף COVID-19 מסוג PCR או אנטיגן ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים. הנתון אינו כולל נבדקים בבדיקות נלוות לקביעת החלמה. נבדקים חיוביים - אחוז הנבדקים שנמצאו חיוביים לנגיף COVID-19 מתוך מספר הנבדקים לגילוי הנגיף ב 7 הימים האחרונים.',
    shareable: false,
    fieldsToCount: [],
    fieldsToSelect: [],
    fieldsToGroupBy: [],
    content: {
        filters: [],
        type: 'line',
        data: {
            lines: [
                {
                    name: 'tests',
                    type: 'main'
                },
                {
                    name: 'prior_7_days',
                    precent: 'true',
                    title: 'משבעה ימים קודמים'
                },
                {
                    name: 'positive_results',
                    precent: 'true',
                    title: 'נבדקים חיוביים'
                }
            ]
        }
    },   _id: "64d866ca14bdc9df27db6b48",
  },
  {
    order: 1,
    name: 'Confirmed_Cases',
    title: 'מספר המאומתים',
    view: 'confirmed_cases_7_days_view',
    section: 'Overview',
    subGroup: true,
    tooltip: 'מספר המאומתים לנגיף COVID-19 שאותרו ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.',
    shareable: false,
    fieldsToCount: [],
    fieldsToSelect: [],
    fieldsToGroupBy: [],
    content: {
        filters: [],
        type: 'line',
        data: {
            lines: [
                {
                    name: 'confirmed_cases',
                    type: 'main'
                },
                {
                    name: 'prior_7_days',
                    precent: true,
                    title: 'משבעה ימים קודמים'
                }
            ]
        }
    },  _id: "64d866ca14bdc9df27db6b49",
  },
  {
    order: 1,
    section: "Overview",
    title: "מספר המאומתים",
    subGroup: true,
    name: "Confirmed_Cases",
    view: "confirmed_cases_7_days_view",
    content: {
      type: "line",
      filters: [],
      data: {
        lines: [
          {
            name: "confirmed_cases",
            type: "main",
          },
          {
            name: "prior_7_days",
            precent: true,
            title: "משבעה ימים קודמים",
          },
        ],
      },
    },
    tooltip:
      "מספר המאומתים לנגיף COVID-19 שאותרו ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.",
    _id: "64d866ca14bdc9df27db6b4a",
  },
  {
    order: 5,
    name: 'Cumulative_Deaths',
    title: 'נפטרים מצטבר',
    view: 'cumulative_deaths_view',
    section: 'Overview',
    subGroup: false,
    tooltip: 'מספר הנפטרים המצטבר ממחלת הנגיף COVID-19 החל מפרוץ המגפה. נתוני הנפטרים מתעדכנים לאחר שנבדקו תעודות הפטירה לוידוא סיבת המוות ולכן ייתכנו עדכונים מאוחרים של מספר הנפטרים.',
    shareable: false,
    fieldsToCount: [],
    fieldsToSelect: [],
    fieldsToGroupBy: [],
    content: {
        filters: [],
        type: 'line',
        data: {
            lines: [
                {
                    name: 'cumulative_deaths',
                    type: 'main'
                }
            ]
        }
    }, _id: "64d866ca14bdc9df27db6b4b",
  },
  {
    order: 3,
    name: 'Severe_Cases',
    title: 'חולים קשה',
    view: 'SevereCases_view',
    section: 'Overview',
    subGroup: false,
    tooltip: 'מספר החולים במצב קשה וקריטי המאושפזים בבתי החולים. חולה קשה - מי שחולה במחלת נגיף COVID-19 ושהוגדר במצב קשה או קריטי על ידי מערכת הבריאות.',
    shareable: false,
    fieldsToCount: [],
    fieldsToSelect: [],
    fieldsToGroupBy: [],
    content: {
        filters: [],
        type: 'line',
        data: {
            fontSize: '0.8rem',
            mobileMainFontSize: '1rem',
            mainFontSize: '1.4rem',
            className: 'line-end',
            lines: [
                {
                    type: 'main',
                    name: 'hospitalized'
                },
                {
                    ballColor: 'rgb(226, 29, 72)',
                    title: 'מתוכם קריטי',
                    name: 'critical'
                },
                {
                    ballColor: 'rgb(226, 29, 72)',
                    title: 'מחוברים לאקמו',
                    name: 'on_ECMO'
                },
                {
                    ballColor: 'rgb(252, 197, 55)',
                    title: 'מונשמים',
                    name: 'ventilated'
                },
                {
                    type: 'br'
                },
                {
                    title: 'חולים בינוני',
                    name: 'moderate'
                },
                {
                    title: 'חולים קל',
                    name: 'mild'
                }
            ]
        }
    }, _id: "64d866ca14bdc9df27db6b4c",
  },
  {
    order: 2,
    name: 'severe_cases',
    title: 'מספר חולים קשה',
    view: 'severe_cases_7_days_view',
    section: 'Overview',
    subGroup: true,
    tooltip: 'מספר החולים החדשים במצב קשה וקריטי במחלת נגיף COVID-19 ב-7 הימים האחרונים (לא כולל את יום העדכון) והשינוי באחוזים לעומת 7 הימים הקודמים.',
    shareable: false,
    fieldsToCount: [],
    fieldsToSelect: [],
    fieldsToGroupBy: [],
    content: {
        filters: [],
        type: 'line',
        data: {
            lines: [
                {
                    name: 'severe_cases',
                    type: 'main'
                },
                {
                    name: 'prior_7_days',
                    percent: true,
                    title: 'משבעה ימים קודמים'
                }
            ]
        }
    },   _id: "64d866ca14bdc9df27db6b4d",
  },
  {
    order: 1,
    name: 'Hospitalizations',
    title: 'מספר מאושפזים – יומי',
    defaultApiParams: 'time=oneMo',
    view: 'Hospitalizations_view',
    section: 'Key_Data',
    subGroup: false,
    tooltip: 'מספר החולים היומי במחלת נגיף COVID-19 המאושפזים בבתי חולים בחלוקה לפי מצב רפואי : קשה (כולל קריטי, בינוני וקל.',
    shareable: true,
    fieldsToCount: [],
    fieldsToSelect: [],
    fieldsToGroupBy: [],
    content: {
        filters: [
            {
                name: 'time',
                title: 'תאריך'
            },
            {
                name: 'state',
                key: 'name',
                type: 'check',
                title: 'מצב מאושפזים'
            }
        ],
        type: 'graph',
        data: {
            graph: {
                xAxis: {
                    name: 'Date',
                    type: 'category'
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'Severe',
                        title: 'קשה',
                        type: 'line',
                        colorLight: 'sky',
                        colorDark: 'cyan',
                        areaStyle: {}
                    },
                    {
                        name: 'Moderate',
                        title: 'בינוני',
                        type: 'line',
                        colorDark: 'pastelOrange',
                        colorLight: 'apple',
                        areaStyle: {}
                    },
                    {
                        name: 'Mild',
                        title: 'קל',
                        type: 'line',
                        colorLight: 'mountain',
                        colorDark: 'pastelGreen',
                        areaStyle: {}
                    }
                ]
            }
        }
    },
    _id: "64d866ca14bdc9df27db6b4e",
  },
  {
    order: 1,
    name: 'Hospital_Occupation',
    title: 'תפוסת מיטות בביה"ח',
    view: 'HospitalOccupation_view',
    section: 'General_Morbidity_Indicators',
    subGroup: false,
    tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis ante nec neque mollis volutpat. Vivamus efficitur id nulla vel sagittis. Duis massa odio, placerat et ipsum eu, mattis ultricies nisi. Vivamus dapibus nulla sit amet fringilla volutpat. Proin rutrum, eros non venenatis volutpat, nulla dui placerat nibh, at venenatis lorem turpis ac ex. Fusce magna magna, laoreet ut condimentum a, feugiat non massa. Vestibulum faucibus nulla libero, vitae scelerisque nunc aliquet eu. Nam et volutpat nulla, et viverra ex.',
    shareable: true,
    fieldsToCount: [],
    fieldsToSelect: [],
    fieldsToGroupBy: [],
    content: {
        filters: [
            {
                name: 'hospital',
                key: 'hospital',
                type: 'check',
                helpText: 'בתי חולים/מוסדות נבחרו',
                title: '',
                searchField: true,
                show: 'count',
                useDictionary: true
            }
        ],
        type: 'table',
        data: {
            table: {
                labels: [
                    {
                        name: 'hospital',
                        title: 'בית חולים'
                    },
                    {
                        name: 'general',
                        title: '% תפוסה כללית',
                        progress: true
                    },
                    {
                        name: 'internal',
                        title: '% תפוסת מחלקה פנימית',
                        progress: true
                    }
                ]
            }
        }
    },
    _id: "64d866ca14bdc9df27db6123",
  },

  {
    order: 1,
    name: 'Positive_Arrivals',
    title: 'מאומתים הנכנסים לישראל לפי מדינות',
    defaultApiParams: 'time=oneMo',
    view: 'CountryArrivals_view',
    section: 'Morbidity_From_Abroad',
    subGroup: false,
    tooltip: 'Lorem ipsum',
    shareable: true,
    timeGroupingCount: true,
    fieldsToCount: [
        'arrivals',
        'positive_residents',
        'positive_foreigners'
    ],
    fieldsToSelect: [
        'country',
        'color',
        '  CAST((SUM(positive_residents) + SUM(positive_foreigners)) * 100 / SUM(arrivals) AS INT) as positive_arriavls_percent'
    ],
    fieldsToGroupBy: [
        'country',
        'color'
    ],
    content: {
        filters: [
            {
                name: 'country',
                key: 'country',
                type: 'check',
                helpText: 'מדינות נבחרו',
                title: '',
                searchField: true,
                show: 'count'
            },
            {
                name: 'time',
                title: 'תאריך'
            }
        ],
        type: 'table',
        data: {
            table: {
                labels: [
                    {
                        name: 'country',
                        title: 'מדינה'
                    },
                    {
                        name: 'color',
                        title: 'צבע',
                        useColor: true
                    },
                    {
                        name: 'arrivals',
                        title: 'נכנסים לישראל'
                    },
                    {
                        name: 'positive_residents',
                        title: 'אזרחים מאומתחם'
                    },
                    {
                        name: 'positive_foreigners',
                        title: 'זרים מאומתים'
                    },
                    {
                        name: 'positive_arriavls_percent',
                        title: '% מאומתים מהנכנסים',
                        percent: true
                    }
                ]
            }
        }
    },
    _id: "64ef8fa80ba92802de611195",
  },{
    _id: '64f907085614e4116bace621',
    order: 3,
    name: 'Daily_Cases',
    title: 'מאומתים חדשים יומי',
    defaultApiParams: 'time=oneMo',
    view: 'dailyPositiveCases_view',
    section: 'Key_Data',
    subGroup: false,
    tooltip: 'המספר היומי של נדבקים בנגיף COVID-19 והממוצע נע ב 7 ימים.',
    shareable: true,
    fieldsToCount: [],
    fieldsToSelect: [],
    fieldsToGroupBy: [],
    content: {
        filters: [
            {
                name: 'time',
                title: 'תאריך'
            }
        ],
        type: 'graph',
        data: {
            graph: {
                xAxis: {
                    name: 'Date',
                    type: 'category'
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: 'Positives',
                        title: 'מאומתים חדשים',
                        type: 'bar',
                        colorLight: 'sky',
                        colorDark: 'rgb(44, 210, 219)'
                    },
                    {
                        name: 'Seven_Day_Moving_Average',
                        title: 'ממוצע נע מאומתים',
                        type: 'line',
                        colorDark: 'rgb(252, 197, 55)',
                        colorLight: 'rgb(255, 125, 103)'
                    }
                ]
            }
        }
    },

  },{


 _id: '64f90d045614e4116bace623',
 order: 1,
 name: 'Tested_by_Age_Groups',
 title: 'מספר נבדקים לפי קבוצות גיל',
 defaultApiParams: 'time=oneMo',
 proc: 'getTestCasesAgeGrouped_byDays_sp',
 section: 'Testing',
 subGroup: false,
 tooltip: 'מספר הנבדקים בבדיקות PCR או בבדיקות אנטיגן מפוקחות (החל מה 5.1.2022), לפי קבוצות גיל מכלל האוכלוסיה, ומתוכם את מספר הנבדקים שנמצאו חיוביים לנגיף COVID-19.',
 shareable: true,
 fieldsToCount: [],
 fieldsToSelect: [],
 fieldsToGroupBy: [],
 content: {
     filters: [
         {
             name: 'time',
             title: 'תאריך'
         }
     ],
     type: 'graph',
     data: {
         graph: {
             xAxis: {
                 type: 'value',
                 title: 'סה"כ'
             },
             yAxis: {
                 type: 'category',
                 name: 'AgeGroup',
                 title: 'קבוצת גיל',
                 splitLine: {
                     show: true
                 },
                 axisLine: {
                     show: false
                 }
             },
             functions: [
                 {
                     path: 'tooltip.formatter',
                     func: 'verticalTotalBar'
                 }
             ],
             series: [
                 {
                     name: 'Positive',
                     title: 'נבדקים חיוביים',
                     type: 'bar',
                     colorLight: 'rgb(0, 127, 127)',
                     colorDark: 'rgb(155, 233, 133)'
                 },
                 {
                     name: 'Negative',
                     title: 'נבדקים',
                     type: 'bar',
                     colorLight: 'rgb(80, 203, 253)',
                     colorDark: 'cyan'
                 }
             ]
         }
     }
 },


  },
  {
    order: 1,
    name: 'ramzor',
    title: 'תוכנית הרמזור',
    view: 'ramzor_view',
    section: 'Settlement_Ramzor',
    'class': 'span_2',
    subGroup: false,
    tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis ante nec neque mollis volutpat. Vivamus efficitur id nulla vel sagittis. Duis massa odio, placerat et ipsum eu, mattis ultricies nisi. Vivamus dapibus nulla sit amet fringilla volutpat. Proin rutrum, eros non venenatis volutpat, nulla dui placerat nibh, at venenatis lorem turpis ac ex. Fusce magna magna, laoreet ut condimentum a, feugiat non massa. Vestibulum faucibus nulla libero, vitae scelerisque nunc aliquet eu. Nam et volutpat nulla, et viverra ex.',
    shareable: true,
    fieldsToCount: [],
    fieldsToSelect: [],
    fieldsToGroupBy: [],
    colorHelpers: [
        {
            name: '',
            text: 'אדום',
            subText: 'ציון מעל 7.5',
            light: 'red',
            dark: 'red',
            min: 7.5,
            max: 10
        },
        {
            name: '',
            text: 'כתום',
            subText: 'ציון בין 6-7.5',
            light: 'pastelOrange',
            dark: 'pastelOrange',
            min: 6,
            max: 7.4
        },
        {
            name: '',
            text: 'צהוב',
            subText: 'ציון בין 4.5-6',
            light: 'yellow',
            dark: 'yellow',
            min: 4.5,
            max: 5.9
        },
        {
            name: '',
            text: 'ירוק',
            subText: 'ציון מתחת ל4.5',
            light: 'pastelGreen',
            dark: 'pastelGreen',
            min: 0,
            max: 4.5
        }
    ],
    content: {
        filters: [
            {
                name: 'city',
                key: 'city',
                type: 'check',
                helpText: 'ערים נבחרו',
                title: '',
                searchField: true,
                show: 'count',
                useDictionary: true
            }
        ],
        type: 'table',
        data: {
            table: {
                labels: [
                    {
                        name: 'city',
                        title: 'בית חולים'
                    },
                    {
                        name: 'daily_score',
                        title: 'ציון וצבע יומי',
                        colorByValue: true
                    },
                    {
                        name: 'per10000',
                        title: 'חולים חגשים לכל 10,000 נפש'
                    },
                    {
                        name: 'positives_percent',
                        title: '% הבדיקות החיוביות'
                    },
                    {
                        name: 'percent_difference',
                        title: 'שעור שינוי המאומתים'
                    },
                    {
                        name: 'active_cases',
                        title: 'חולים פעילים'
                    }
                ]
            }
        }
    }
  },{
    _id: '650ecf45d501bd27be2337ad',
    title: 'placeholder_1',
    order: 1,
    name: 'placeholder_1'
  },{
    _id: '650f092cd501bd27be2337b3',
    name: 'Cases_by_Age_and_Vaccination_Status',
    title: 'חולים פעילים - גיל והתחסנות',
    tooltip: 'ל מספר החולים הפעילים וחולים קשה במחלת נגיף COVID-19, לפי קבוצות גיל באוכלוסייה ולפי מצבי התחסנות בכל קבוצת גיל.',
    section: 'Vaccination_Effectiveness',
    order: 3,
    defaultApiParams: 'check=active&metric=1000',
    view: '',
    subGroup: false,
    shareable: true,
    fieldsToCount: [],
    fieldsToSelect: [],
    fieldsToGroupBy: [],
    content: {
        filters: [
            {
                name: 'metric',
                type: 'metric',
                title: 'סוג ניתוח'
            },
            {
                name: 'view',
                type: 'radio',
                title: 'משתנה'
            }
        ],
        type: 'graph',
        data: {
            graph: {
                xAxis: {
                    name: 'AgeGroup',
                    type: 'category',
                    title: 'קבוצת גיל'
                },
                yAxis: {
                    type: 'value',
                    title: 'מספר חולים פעילים'
                },
                series: [
                    {
                        name: 'Unvaccinated',
                        title: 'לא מחוסנים',
                        type: 'bar',
                        colorLight: 'sky',
                        colorDark: 'cyan'
                    },
                    {
                        name: 'Expired',
                        title: 'מחוסנים ללא תוקף',
                        type: 'bar',
                        colorLight: 'apple',
                        colorDark: 'pastelOrange'
                    },
                    {
                        name: 'Vaccinated',
                        title: 'מחוסנים',
                        type: 'bar',
                        colorLight: 'mountain',
                        colorDark: 'pastelGreen'
                    }
                ]
            }
        }
    }
  },{
    _id: '650ecf50d501bd27be2337af',
    title: 'placeholder_2',
    order: 2,
    name: 'placeholder_2'
  },{
    _id: '650ecf5cd501bd27be2337b1',
    title: 'placeholder_3',
    order: 3,
    name: 'placeholder_3'
  }
];


