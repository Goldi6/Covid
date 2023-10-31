export const headerSchema = {
  header: {
    breakPoint: "480px",
    lightBorder: "1px solid rgba(199,199,199,.5)",
    greyTextColor: "#5f7280",
    textColor: "#000",
  },
  sideNav: {
    fontSize: "14px",
    aside: {
      breakPoint: "450px",
      background: "#fff",
      boxShadow: "0 -10px 50px #b1b1b180",
      borderTop: "1px solid #d8dde0",
      width: "275px",
    },
    menu: {
      buttonHeight: "38px",
      homeButton: {
        margin: "10px 0",
        padding: "1px 10px 1px 0",
        textPadding: "0 7px 0 0",
      },
    },
  },
};

export const fontSchema = {
  filter: {
    fontSize: "14px",
    panel: {
      buttonFontSize: "16px",
    },
  },
  tooltip: "0.8rem",
};

export const positionSchema = {
  sectionMinHeight: "467px",
  select: {
    borderRadius: "1.5rem",
    border: "1px solid #e4e9f2",
  },
  card: {
    marginBottom: "20px",
    padding: "0 10px",
    header: {
      fontWeight: 600,
      padding: "16px 16px 0 16px",
    },
  },
  maxMainWidth: "1920px",
  sectionBreakpoint_big: "1280px",

  sectionBreakpoint_small: "768px",
};

export const colorSchema = {
  dark: {
    text: "#ffffff",
    background: "#4B6170",
    card: {
      background: "#374F60",
      boxShadow: "rgba(26,31,51,0.18) 0 8px 4px 0",
      divider_1: "d8d8d9",
      border: "1px solid rgba(186,186,186,.23)",
      shareHoverBG: "#2a3b47",
      shareBorderColor: "#79858e",
    },
    filter: {
      border: "1px solid #79858e",
      button: {
        background: "#4e6275",
        border: "1px solid   #79858e",
      },
      panel: {
        background: "#374F60",
        button: {
          background: "#2a3b47",
        },
      },
    },
    tooltip: {
      boxShadow: "0 10px 20px 10px #00000029",
      border: "1px solid #b3b3b5",
    },
    section: {
      borderTop: "1px solid rgba(199,199,199,.5)",
      button: {
        background: "#374F60",
        border: "1px solid #8394a0",
        smallLinkColor: "#308bf6",
      },
    },
  },

  light: {
    text: "#233333",
    background: "#F8FAFD",
    card: {
      background: "#fff",
      boxShadow: "none",
      divider_1: "d8d8d9",
      shareHoverBG: "#e6f1f4",
      shareBorderColor: "#e4e9f2",
      border: "1px solid rgba(186,186,186,.23)",
    },
    filter: {
      border: "1px solid #e4e9f2",

      button: {
        background: "#f7f9fc",
        border: "1px solid   #e4e9f2",
      },
      panel: {
        background: "#fff",
        button: {
          background: "#e6f1f4",
        },
      },
    },
    tooltip: {
      boxShadow: "3px 3px 11px #465a7a1c;",
      border: "1px solid #fff",
    },
    section: {
      button: {
        background: "#fff",
        border: "1px solid #c3cacf",
        smallLinkColor: "#9ee4ff",
      },
    },
  },
};

export const mainSchema = {
  positionSchema,
  scrollbar: {
    background: "#adadad",
    borderRadius: "20px",
  },
  nav: {
    background: "rgb(55, 79, 96)",
    padding: "9px 0",

    listItem: {
      color: "#fff",
      fontSize: "14px",
      padding: "6px 15px",
      margin: "0 4px",
      firstItem: {
        marginRight: "30px",
      },
      selected: {
        borderRadius: "20px",
        color: "#233333",
        background: "#fff",
      },
    },
  },
};
