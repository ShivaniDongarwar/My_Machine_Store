import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login";
import Main from "../components/Main";
import CompanyList from "../pages/CompanyList";
import ApprovedList from "../pages/ApprovedList";
import ProductList from "../pages/ProductList";
import ProductEnquiryList from "../pages/ProductEnquiryList";
import NoMatch from "./NoMatch";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/Companylist" element={<CompanyList />} /> */}

      <Route element={<ProtectedRoute />}>
        <Route path="/superAdmin" element={<>Super Admin Component</>} />
        <Route path="/Companylist" element={<CompanyList />} />
        <Route path="/Productenquirylist" element={<ProductEnquiryList />} />
        <Route path="/Approvedlist" element={<ApprovedList />} />
        <Route path="/Productlist" element={<ProductList />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
}

export default AllRoutes;
