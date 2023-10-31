import { Outlet, useLoaderData } from "react-router-dom";
import ThemeContextProvider from "../../context/ThemeContext";
import { GlobalStyle } from "../../components/globalStyle/globalStyle";
import FixedHeader from "../../components/header/FixedHeader";
import getLastUpdate from "../../serverFuncs/getLastUpdate";
import SectionsContextProvider from "../../context/SectionsContext";
import { sectionsType } from "../../types/typesToApi";

export default function Root() {
  const sections: sectionsType = useLoaderData() as sectionsType;
  return (
    <>
      <GlobalStyle />
      <ThemeContextProvider>
        <SectionsContextProvider sections={sections}>
          <div className="container">
            <FixedHeader lastUpdate={getLastUpdate()} />
            <Outlet />
          </div>
        </SectionsContextProvider>
      </ThemeContextProvider>
    </>
  );
}
