import { Navigate } from "react-router-dom";
import Main from "../components/Main";

const ProtectedRoute = () => {
  const authentication = {
    token: localStorage.getItem("superAdminID"),
  };
  // return authentication.token ? <Outlet /> : <Navigate to="/" />;
  return authentication?.token ? <Main /> : <Navigate to="/" />;
};

export default ProtectedRoute;
