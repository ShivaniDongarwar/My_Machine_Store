import express from "express";
import { logOut, superAdminAuth, superAdminLogIn } from "../controllers/admin/superAdminAuth.js";
import {
  enquiryDetail,
  getEnquiry,
} from "../controllers/enquiry/tardeEnquiry.js";
import { approvedMail } from "../controllers/mail/approvedMail.js";
import { mail } from "../controllers/mail/mail.js";
import { addVendoProduct, productList, superAdminProductList } from "../controllers/vendor/product.js";
import { editProfile, profile } from "../controllers/vendor/profile.js";
import { vendorAuth, vendorlogOut } from "../controllers/vendor/vendorAuth.js";
import { vendorList } from "../controllers/vendor/vendorList.js";
import { authenticate, vendorAuthrisation } from "../middleware/authenticate.js";
// import { enquiryDetail } from "../controllers/enquiry.js";
// import { admin } from "../controllers/admin.js";
// import { edit } from "../controllers/edit.js";
// import { deleteData,deleteEntry  } from "../controllers/deleteData.js";
// import { adminLogIn } from "../controllers/adminLogIn.js";
// import { email } from "../controllers/email.js";
// import {vendorDetail} from "../controllers/adminDetail.js"
// import {login} from "../controllers/adminDetail.js"
// import {addVendoProduct,productList,superAdminProductList} from "../controllers/addVendoProduct.js"
// import {vendorAdmin,superAdmin} from "../controllers/vendorAdmin.js"
const routes = express.Router();

// routes.post("/detail", enquiryDetail);
// routes.get("/admin", admin);
// routes.put("/edit", edit);
// routes.delete("/delete", deleteData);
// routes.delete("/deleteEntry", deleteEntry );
// routes.post("/adminlogin", adminLogIn);
// routes.post("/email", email);
// routes.post("/adminDetail",vendorDetail );
// routes.get("/vendorAdmin",vendorAdmin );
// routes.get("/superAdmin",superAdmin );
// routes.post("/vendorAdminLogIN", login);
// routes.post("/addProduct", addVendoProduct);
// routes.get("/productList", productList);
// routes.get("/superAdminProductList", superAdminProductList);
routes.post("/superAdminLogIn", superAdminLogIn);
routes.post("/superAdmin", superAdminAuth);
routes.post("/logOut",authenticate, logOut);
routes.post("/vendorlogOut",vendorAuthrisation, vendorlogOut);
routes.post("/detail", enquiryDetail);
routes.get("/getEnquiry" ,getEnquiry);
routes.post("/approvedMail", approvedMail);
routes.post("/mail", mail);
routes.post("/vendorAdminLogIN", vendorAuth);
routes.post("/addProduct", vendorAuthrisation, addVendoProduct);
routes.get("/productList", vendorAuthrisation, productList);
routes.get("/vendorList",authenticate,vendorList);
routes.get("/superAdminProductList",authenticate, superAdminProductList);
routes.get("/vendorProfile",vendorAuthrisation, profile);
routes.put("/edit",vendorAuthrisation, editProfile);


export default routes;
