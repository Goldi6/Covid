import burgerSVG from "../assets/burgerNavButton.svg";
import langSVG from "../assets/lang.svg";
import themeSVG from "../assets/mode.svg";

export const headerTextContent = {
  mainTitle: "עולם הדאטה - נגיף הקורונה בישראל",
  logo: {
    src: "https://datadashboard.health.gov.il/assets/images/logo.svg",
    href: "https://datadashboard.health.gov.il/portal/dashboard/health",
    alt: "logo",
  },
  burgerButton: {
    src: "../assets/burgerNavButton.svg",
    icon: burgerSVG,
    alt: "menu icon",
  },
  smallTitle: "עדכון אחרון:",
  themeButton: {
    src: themeSVG,
    alt: "color theme icon",
  },
  languageButton: {
    src: langSVG,
    alt: "change language icon",
  },
  languageList: [
    { name: "English", symbol: "en" },
    { name: "עברית", symbol: "he" },
  ],
};
