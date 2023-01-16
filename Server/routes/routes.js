import express from "express";
import { superAdminAuth } from "../controllers/admin/superAdminAuth.js";
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
routes.post("/superAdmin",superAdminAuth)


export default routes;