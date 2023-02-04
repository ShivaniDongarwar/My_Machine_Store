import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login";
import CompanyList from "../pages/CompanyList";
import ApprovedList from "../pages/ApprovedList";
import ProductList from "../pages/ProductList";
import ProductEnquiryList from "../pages/ProductEnquiryList";
import NoMatch from "./NoMatch";
import EnquiryList from "../pages/EnquiryList";
import EnquiryMail from "../components/MailForm";
import Admin from "../vendor/Admin";
import VendorAuth from "../vendor/VendorAuth";
import Counter from "../components/Counter";
import Charts from "../components/Charts";
import EditProfile from "../components/EditProfile";
import Profile from "../pages/Profile";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/mail" element={<EnquiryMail />} />
      {/* <Route path="/vendorAdminPanel" element={<Admin />} /> */}
      <Route path="/vendorAuth" element={<VendorAuth />} />


      <Route element={<ProtectedRoute />}>
      <Route path="/profile" element={<Profile />} />
      <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/sidebarDashboards" element={<Counter />} />
        <Route path="/sidebarDashboards" element={<Charts />} />
        {/* <Route path="/profile" element={<Profile />}/> */}
        <Route path="/Companylist" element={<CompanyList />} />
        <Route path="/Enquirylist" element={<EnquiryList />} />
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
