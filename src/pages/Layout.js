import { Outlet } from "react-router-dom";
import SideBar from "../Components/UI/SideBar";

const Layout = () => {
  return (
    <>
      <SideBar />
      <div id="content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
