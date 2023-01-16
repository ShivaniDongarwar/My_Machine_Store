import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = () => {
  const [toggle, setToggle] = useState(false);
/**
 * @func toggleButton
 * to hide/unhide side bar
 */
  const toggleButton = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <Sidebar onToggle={toggleButton} toggle={toggle} />
      <Header toggle={toggle} />
      <div className={toggle ? "ml70" : "main-content"}>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Main;
