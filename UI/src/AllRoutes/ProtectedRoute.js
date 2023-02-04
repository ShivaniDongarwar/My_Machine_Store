import { Navigate } from "react-router-dom";
import Main from "../components/Main";

const ProtectedRoute = () => {
  // const authentication = {
  //   token: localStorage.getItem("superAdminID"),
  // };
  // return authentication?.token ? <Main /> : <Navigate to="/" />;

  const  _id  = JSON.parse(localStorage.getItem("vendor"));
  const superAdminID = localStorage.getItem("superAdminID");
  let token;
  if (_id === null) {
    token = superAdminID;
    //  token =_id
  } else {
    //  token = superAdminID
    token = _id;
  }

  // const token = superAdminID||_id
  return token ? <Main /> : <Navigate to="/" />;
};

export default ProtectedRoute;
