import { useState } from "react";

export default function useThemeToggle() {
  type themeType = "dark" | "light";

  function getThemeFromStorage(): themeType {
    const savedTheme = localStorage.getItem("theme");

    let currTheme: themeType = "light";

    if (savedTheme !== null && savedTheme === "dark") {
      currTheme = savedTheme;
    }
    return currTheme;
  }

  function setThemeInStorage(): themeType {
    let newTheme: themeType =
      localStorage.getItem("theme") === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    return newTheme;
  }
  let currTheme = getThemeFromStorage();

  const [theme, setTheme] = useState<themeType>(currTheme);

  function toggleAppTheme() {
    const t = setThemeInStorage();
    setTheme((a) => t);
  }

  return { theme, toggleAppTheme };
}
