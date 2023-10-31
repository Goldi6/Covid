import useDisplayToggle from "../../hooks/displayHook";
import MainHeader from "./components/mainHeader/MainHeader";
import SideNav from "./components/sideNav/SideNav";

type fixedHeaderProps = {
  lastUpdate: Date;
};

export default function FixedHeader(props: fixedHeaderProps) {
  const menuDisplay = useDisplayToggle("block", true, true);
  return (
    <>
      <MainHeader
        lastUpdate={props.lastUpdate}
        openNav={menuDisplay.func.open}
      />
  {menuDisplay.isDisplayed &&    <SideNav
        closePanel={menuDisplay.func.close}
        displayStyle={menuDisplay.displayStyle}
      />}
    </>
  );
}
