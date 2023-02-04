import Header from "../components/Header";
import SideBar from "./sidebar/SideBar";
import MainContent from "./mainconten/MainConten";
import NavBar from "./navbar/NavBar";

function Admin() {
  return (
    <div id="layout-wrapper">
      <NavBar />
       <SideBar />
      <MainContent />
    </div>
  );
}

export default Admin;
