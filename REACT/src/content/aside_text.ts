import closeSVG from "../assets/close.svg";
import homeSVG from "../assets/homePage.svg";

export const asideNavHomeButton = {
  id: "homeLink",

  homeButton: {
    text: "עמוד הבית",
    href: "/",
    alt: "home icon",
    src: homeSVG,
  },
  closeButton: {
    src: closeSVG,
    alt: "close menu",
  },
};

export const asideNavTextContent = [
  {
    id: "dashboard",
    links: [
      { href: "/portal/dashboard/childCheckup", name: "גדילה והנקה בילדים" },
      {
        href: "/portal/dashboard/serviceQuality",
        name: "איכות במערכת הבריאות",
      },
      { href: "/portal/dashboard/corona", name: "קורונה" },
    ],
  },

  {
    id: "info",
    links: [
      { href: "/portal/info/about", name: "אודות" },
      { href: "/portal/info/accessibility", name: "הצהרת נגישות" },
      { href: "/portal/info/terms", name: "תנאי שימוש" },
    ],
  },
];
