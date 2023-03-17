import React from "react";
import axios from "../api/axios";
import SideBar from "../utils/SideBar";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AddVendor() {
  // const { _id } = JSON.parse(localStorage.getItem("superAdminvendorid"));
  const navigate = useNavigate();

  const deleteHandler = async (id) => {
    console.log("id===>", id);
    const data = await axios
      .delete(`/enquiry/deleteCompany?id=${id}`)
      .then((res) => console.log("res===>", res))
      .then(() => {
        toast.success("Delete Successfully !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/Companylist");
      })
      .catch((error) => {
        console.log("error=>>", error);

        toast.success(`${error.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  return (
    <div className="page-content">
      <SideBar
        title="Vendors"
        AddProductlink="/AddCompanySuperAdmin"
        URL={`/enquiry/superAdminCompanyList`}
        ProductDetailLink="/companyDetailPage"
        AddVendorLink="/AddCompany"
        tag="Edit"
        tag_2="Delete"
        onDelete={deleteHandler}
        addProduct="Add Vendor"
        navigateTo="/Companylist"
      />
      <ToastContainer />
    </div>
    //   <div className="page-content">
    //   <div className="container-fluid">
    //     {/* start page title */}
    //     <div className="row">
    //       <div className="col-12">
    //         <div className="page-title-box d-sm-flex align-items-center justify-content-between">
    //           <h4 className="mb-sm-0">Vendor</h4>
    //           <div className="page-title-right">
    //             <ol className="breadcrumb m-0">
    //               <li className="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
    //               <li className="breadcrumb-item active">Vendor</li>
    //             </ol>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/* end page title */}
    //     <div className="card">
    //       <div className="card-header border-0 rounded">
    //         <div className="row g-2">
    //           <div className="col-xl-3">
    //             <div className="search-box">
    //               <input type="text" className="form-control search" placeholder="Search for sellers & owner name or something..." /> <i className="ri-search-line search-icon" />
    //             </div>
    //           </div>
    //           {/*end col*/}
    //           <div className="col-xl-2 ms-auto">
    //             <div>
    //               <select className="form-control" data-choices data-choices-search-false>
    //                 <option value>Select Categories</option>
    //                 <option value="All">All</option>
    //                 <option value="Retailer">Retailer</option>
    //                 <option value="Health & Medicine">Health &amp; Medicine</option>
    //                 <option value="Manufacturer">Manufacturer</option>
    //                 <option value="Food Service">Food Service</option>
    //                 <option value="Computers & Electronics">Computers &amp; Electronics</option>
    //               </select>
    //             </div>
    //           </div>
    //           {/*end col*/}
    //           <div className="col-lg-auto">
    //             <div className="hstack gap-2">
    //               <button type="button" className="btn btn-danger"><i className="ri-equalizer-fill me-1 align-bottom" /> Filters</button>
    //               <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addSeller"><i className="ri-add-fill me-1 align-bottom" /> Add Seller</button>
    //             </div>
    //           </div>
    //           {/*end col*/}
    //         </div>
    //         {/*end row*/}
    //       </div>
    //     </div>
    //     <div className="row mt-4">
    //     {/* {companyList?.map((item)=>{
    //       return
    //     })} */}
    //       <div className="col-xl-3 col-lg-6">
    //         <div className="card ribbon-box right overflow-hidden">
    //           <div className="card-body text-center p-4">
    //             <div className="ribbon ribbon-info ribbon-shape trending-ribbon"><i className="ri-flashlight-fill text-white align-bottom" /> <span className="trending-ribbon-text">Trending</span></div>
    //             <img src="assets/images/companies/img-1.png" alt="" height={45} />
    //             <h5 className="mb-1 mt-4"><a href="apps-ecommerce-seller-details.html" className="link-primary">Force Medicines</a></h5>
    //             <p className="text-muted mb-4">David Marshall</p>
    //             <div className="row justify-content-center">
    //               <div className="col-lg-8">
    //                 <div id="chart-seller1" data-colors="[&quot;--vz-danger&quot;]" />
    //               </div>
    //             </div>
    //             <div className="row mt-4">
    //               <div className="col-lg-6 border-end-dashed border-end">
    //                 <h5>452</h5>
    //                 <span className="text-muted">Item Stock</span>
    //               </div>
    //               <div className="col-lg-6">
    //                 <h5>$45,415</h5>
    //                 <span className="text-muted">Wallet Balance</span>
    //               </div>
    //             </div>
    //             <div className="mt-4">
    //               <a href="apps-ecommerce-seller-details.html" className="btn btn-light w-100">View Details</a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/*end col*/}
    //       <div className="col-xl-3 col-lg-6">
    //         <div className="card">
    //           <div className="card-body text-center p-4">
    //             <img src="assets/images/companies/img-2.png" alt="" height={45} />
    //             <h5 className="mb-1 mt-4"><a href="apps-ecommerce-seller-details.html" className="link-primary">Micro Design</a></h5>
    //             <p className="text-muted mb-4">Katia Stapleton</p>
    //             <div className="row justify-content-center">
    //               <div className="col-lg-8">
    //                 <div id="chart-seller2" data-colors="[&quot;--vz-success&quot;]" />
    //               </div>
    //             </div>
    //             <div className="row mt-4">
    //               <div className="col-lg-6 border-end-dashed border-end">
    //                 <h5>784</h5>
    //                 <span className="text-muted">Item Stock</span>
    //               </div>
    //               <div className="col-lg-6">
    //                 <h5>$97,642</h5>
    //                 <span className="text-muted">Wallet Balance</span>
    //               </div>
    //             </div>
    //             <div className="mt-4">
    //               <a href="apps-ecommerce-seller-details.html" className="btn btn-light w-100">View Details</a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/*end col*/}
    //       <div className="col-xl-3 col-lg-6">
    //         <div className="card">
    //           <div className="card-body text-center p-4">
    //             <img src="assets/images/companies/img-3.png" alt="" height={45} />
    //             <h5 className="mb-1 mt-4"><a href="apps-ecommerce-seller-details.html" className="link-primary">Nesta Technologies</a></h5>
    //             <p className="text-muted mb-4">Harley Fuller</p>
    //             <div className="row justify-content-center">
    //               <div className="col-lg-8">
    //                 <div id="chart-seller3" data-colors="[&quot;--vz-warning&quot;]" />
    //               </div>
    //             </div>
    //             <div className="row mt-4">
    //               <div className="col-lg-6 border-end-dashed border-end">
    //                 <h5>320</h5>
    //                 <span className="text-muted">Item Stock</span>
    //               </div>
    //               <div className="col-lg-6">
    //                 <h5>$27,102</h5>
    //                 <span className="text-muted">Wallet Balance</span>
    //               </div>
    //             </div>
    //             <div className="mt-4">
    //               <a href="apps-ecommerce-seller-details.html" className="btn btn-light w-100">View Details</a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/*end col*/}
    //       <div className="col-xl-3 col-lg-6">
    //         <div className="card ribbon-box right overflow-hidden">
    //           <div className="card-body text-center p-4">
    //             <div className="ribbon ribbon-info ribbon-shape trending-ribbon"><i className="ri-flashlight-fill text-white align-bottom" /> <span className="trending-ribbon-text">Trending</span></div>
    //             <img src="assets/images/companies/img-4.png" alt="" height={45} />
    //             <h5 className="mb-1 mt-4"><a href="apps-ecommerce-seller-details.html" className="link-primary">iTest Factory</a></h5>
    //             <p className="text-muted mb-4">Oliver Tyler</p>
    //             <div className="row justify-content-center">
    //               <div className="col-lg-8">
    //                 <div id="chart-seller4" data-colors="[&quot;--vz-success&quot;]" />
    //               </div>
    //             </div>
    //             <div className="row mt-4">
    //               <div className="col-lg-6 border-end-dashed border-end">
    //                 <h5>159</h5>
    //                 <span className="text-muted">Item Stock</span>
    //               </div>
    //               <div className="col-lg-6">
    //                 <h5>$14,933</h5>
    //                 <span className="text-muted">Wallet Balance</span>
    //               </div>
    //             </div>
    //             <div className="mt-4">
    //               <a href="apps-ecommerce-seller-details.html" className="btn btn-light w-100">View Details</a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/*end col*/}
    //       <div className="col-xl-3 col-lg-6">
    //         <div className="card">
    //           <div className="card-body text-center p-4">
    //             <img src="assets/images/companies/img-5.png" alt="" height={45} />
    //             <h5 className="mb-1 mt-4"><a href="apps-ecommerce-seller-details.html" className="link-primary">Meta4Systems</a></h5>
    //             <p className="text-muted mb-4">Zoe Dennis</p>
    //             <div className="row justify-content-center">
    //               <div className="col-lg-8">
    //                 <div id="chart-seller5" data-colors="[&quot;--vz-warning&quot;]" />
    //               </div>
    //             </div>
    //             <div className="row mt-4">
    //               <div className="col-lg-6 border-end-dashed border-end">
    //                 <h5>363</h5>
    //                 <span className="text-muted">Item Stock</span>
    //               </div>
    //               <div className="col-lg-6">
    //                 <h5>$73,426</h5>
    //                 <span className="text-muted">Wallet Balance</span>
    //               </div>
    //             </div>
    //             <div className="mt-4">
    //               <a href="apps-ecommerce-seller-details.html" className="btn btn-light w-100">View Details</a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/*end col*/}
    //       <div className="col-xl-3 col-lg-6">
    //         <div className="card ribbon-box right overflow-hidden">
    //           <div className="card-body text-center p-4">
    //             <div className="ribbon ribbon-info ribbon-shape trending-ribbon"><i className="ri-flashlight-fill text-white align-bottom" /> <span className="trending-ribbon-text">Trending</span></div>
    //             <img src="assets/images/companies/img-6.png" alt="" height={45} />
    //             <h5 className="mb-1 mt-4"><a href="apps-ecommerce-seller-details.html" className="link-primary">Digitech Galaxy</a></h5>
    //             <p className="text-muted mb-4">John Roberts</p>
    //             <div className="row justify-content-center">
    //               <div className="col-lg-8">
    //                 <div id="chart-seller6" data-colors="[&quot;--vz-success&quot;]" />
    //               </div>
    //             </div>
    //             <div className="row mt-4">
    //               <div className="col-lg-6 border-end-dashed border-end">
    //                 <h5>412</h5>
    //                 <span className="text-muted">Item Stock</span>
    //               </div>
    //               <div className="col-lg-6">
    //                 <h5>$34,241</h5>
    //                 <span className="text-muted">Wallet Balance</span>
    //               </div>
    //             </div>
    //             <div className="mt-4">
    //               <a href="apps-ecommerce-seller-details.html" className="btn btn-light w-100">View Details</a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/*end col*/}
    //       <div className="col-xl-3 col-lg-6">
    //         <div className="card ribbon-box right overflow-hidden">
    //           <div className="card-body text-center p-4">
    //             <div className="ribbon ribbon-info ribbon-shape trending-ribbon"><i className="ri-flashlight-fill text-white align-bottom" /> <span className="trending-ribbon-text">Trending</span></div>
    //             <img src="assets/images/companies/img-7.png" alt="" height={45} />
    //             <h5 className="mb-1 mt-4"><a href="apps-ecommerce-seller-details.html" className="link-primary">Syntyce Solutions</a></h5>
    //             <p className="text-muted mb-4">Demi Allen</p>
    //             <div className="row justify-content-center">
    //               <div className="col-lg-8">
    //                 <div id="chart-seller7" data-colors="[&quot;--vz-danger&quot;]" />
    //               </div>
    //             </div>
    //             <div className="row mt-4">
    //               <div className="col-lg-6 border-end-dashed border-end">
    //                 <h5>945</h5>
    //                 <span className="text-muted">Item Stock</span>
    //               </div>
    //               <div className="col-lg-6">
    //                 <h5>$17,200</h5>
    //                 <span className="text-muted">Wallet Balance</span>
    //               </div>
    //             </div>
    //             <div className="mt-4">
    //               <a href="apps-ecommerce-seller-details.html" className="btn btn-light w-100">View Details</a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/*end col*/}
    //       <div className="col-xl-3 col-lg-6">
    //         <div className="card">
    //           <div className="card-body text-center p-4">
    //             <img src="assets/images/companies/img-8.png" alt="" height={45} />
    //             <h5 className="mb-1 mt-4"><a href="apps-ecommerce-seller-details.html" className="link-primary">Zoetic Fashion</a></h5>
    //             <p className="text-muted mb-4">James Bowen</p>
    //             <div className="row justify-content-center">
    //               <div className="col-lg-8">
    //                 <div id="chart-seller8" data-colors="[&quot;--vz-warning&quot;]" />
    //               </div>
    //             </div>
    //             <div className="row mt-4">
    //               <div className="col-lg-6 border-end-dashed border-end">
    //                 <h5>784</h5>
    //                 <span className="text-muted">Item Stock</span>
    //               </div>
    //               <div className="col-lg-6">
    //                 <h5>$97,642</h5>
    //                 <span className="text-muted">Wallet Balance</span>
    //               </div>
    //             </div>
    //             <div className="mt-4">
    //               <a href="apps-ecommerce-seller-details.html" className="btn btn-light w-100">View Details</a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/*end col*/}
    //     </div>
    //     {/*end row*/}
    //     <div className="row g-0 text-center text-sm-start align-items-center mb-3">
    //       <div className="col-sm-6">
    //         <div>
    //           <p className="mb-sm-0">Showing 1 to 8 of 12 entries</p>
    //         </div>
    //       </div> {/* end col */}
    //       <div className="col-sm-6">
    //         <ul className="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
    //           <li className="page-item disabled"> <a href="#" className="page-link"><i className="mdi mdi-chevron-left" /></a> </li>
    //           <li className="page-item active"> <a href="#" className="page-link">1</a> </li>
    //           <li className="page-item "> <a href="#" className="page-link">2</a> </li>
    //           <li className="page-item"> <a href="#" className="page-link">3</a> </li>
    //           <li className="page-item"> <a href="#" className="page-link">4</a> </li>
    //           <li className="page-item"> <a href="#" className="page-link">5</a> </li>
    //           <li className="page-item"> <a href="#" className="page-link"><i className="mdi mdi-chevron-right" /></a> </li>
    //         </ul>
    //       </div>{/* end col */}
    //     </div>{/* end row */}
    //     {/* Modal */}
    //     <div className="modal fade zoomIn" id="addSeller" tabIndex={-1} aria-labelledby="addSellerLabel" aria-hidden="true">
    //       <div className="modal-dialog modal-dialog-centered modal-lg">
    //         <div className="modal-content">
    //           <div className="modal-header">
    //             <h5 className="modal-title" id="addSellerLabel">Add Seller</h5>
    //             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
    //           </div>
    //           <div className="modal-content border-0 mt-3">
    //             <ul className="nav nav-tabs nav-tabs-custom nav-success p-2 pb-0 bg-light" role="tablist">
    //               <li className="nav-item">
    //                 <a className="nav-link active" data-bs-toggle="tab" href="#personalDetails" role="tab" aria-selected="true">
    //                   Personal Details
    //                 </a>
    //               </li>
    //               <li className="nav-item">
    //                 <a className="nav-link" data-bs-toggle="tab" href="#businessDetails" role="tab" aria-selected="false">
    //                   Business Details
    //                 </a>
    //               </li>
    //               <li className="nav-item">
    //                 <a className="nav-link" data-bs-toggle="tab" href="#bankDetails" role="tab" aria-selected="false">
    //                   Bank Details
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //           <div className="modal-body">
    //             <div className="tab-content">
    //               <div className="tab-pane active" id="personalDetails" role="tabpanel">
    //                 <form action="#">
    //                   <div className="row">
    //                     <div className="col-lg-6">
    //                       <div className="mb-3">
    //                         <label htmlFor="firstnameInput" className="form-label">First Name</label>
    //                         <input type="text" className="form-control" id="firstnameInput" placeholder="Enter your firstname" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-6">
    //                       <div className="mb-3">
    //                         <label htmlFor="lastnameInput" className="form-label">Last Name</label>
    //                         <input type="text" className="form-control" id="lastnameInput" placeholder="Enter your lastname" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-6">
    //                       <div className="mb-3">
    //                         <label htmlFor="contactnumberInput" className="form-label">Contact Number</label>
    //                         <input type="number" className="form-control" id="contactnumberInput" placeholder="Enter your number" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-6">
    //                       <div className="mb-3">
    //                         <label htmlFor="phonenumberInput" className="form-label">Phone Number</label>
    //                         <input type="number" className="form-control" id="phonenumberInput" placeholder="Enter your number" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-6">
    //                       <div className="mb-3">
    //                         <label htmlFor="emailidInput" className="form-label">Email</label>
    //                         <input type="email" className="form-control" id="emailidInput" placeholder="Enter your email" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-6">
    //                       <div className="mb-3">
    //                         <label htmlFor="birthdayidInput" className="form-label">Date of Birth</label>
    //                         <input type="text" id="birthdayidInput" className="form-control" data-provider="flatpickr" placeholder="Enter your date of birth" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-4">
    //                       <div className="mb-3">
    //                         <label htmlFor="cityidInput" className="form-label">City</label>
    //                         <input type="text" className="form-control" id="cityidInput" placeholder="Enter your city" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-4">
    //                       <div className="mb-3">
    //                         <label htmlFor="countryidInput" className="form-label">Country</label>
    //                         <input type="text" className="form-control" id="countryidInput" placeholder="Enter your country" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-4">
    //                       <div className="mb-3">
    //                         <label htmlFor="zipcodeidInput" className="form-label">Zip Code</label>
    //                         <input type="text" className="form-control" id="zipcodeidInput" placeholder="Enter your zipcode" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-12">
    //                       <div className="mb-3">
    //                         <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
    //                         <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Enter description" defaultValue={""} />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-12">
    //                       <div className="hstack gap-2 justify-content-end">
    //                         <button className="btn btn-link link-success text-decoration-none fw-medium" data-bs-dismiss="modal"><i className="ri-close-line me-1 align-middle" /> Close</button>
    //                         <button type="submit" className="btn btn-primary"><i className="ri-save-3-line align-bottom me-1" /> Save</button>
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                   </div>
    //                   {/*end row*/}
    //                 </form>
    //               </div>
    //               <div className="tab-pane" id="businessDetails" role="tabpanel">
    //                 <form action="#">
    //                   <div className="row">
    //                     <div className="col-lg-12">
    //                       <div className="mb-3">
    //                         <label htmlFor="companynameInput" className="form-label">Company Name</label>
    //                         <input type="text" className="form-control" id="companynameInput" placeholder="Enter your company name" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-6">
    //                       <div className="mb-3">
    //                         <label htmlFor="choices-single-default" className="form-label">Company Type</label>
    //                         <select className="form-control" data-trigger name="choices-single-default" id="choices-single-default">
    //                           <option value>Select type</option>
    //                           <option value="All" selected>All</option>
    //                           <option value="Merchandising">Merchandising</option>
    //                           <option value="Manufacturing">Manufacturing</option>
    //                           <option value="Partnership">Partnership</option>
    //                           <option value="Corporation">Corporation</option>
    //                         </select>
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-6">
    //                       <div className="mb-3">
    //                         <label htmlFor="pancardInput" className="form-label">Pan Card Number</label>
    //                         <input type="text" className="form-control" id="pancardInput" placeholder="Enter your pan-card number" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-4">
    //                       <div className="mb-3">
    //                         <label htmlFor="websiteInput" className="form-label">Website</label>
    //                         <input type="url" className="form-control" id="websiteInput" placeholder="Enter your URL" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-4">
    //                       <div className="mb-3">
    //                         <label htmlFor="faxInput" className="form-label">Fax</label>
    //                         <input type="text" className="form-control" id="faxInput" placeholder="Enter your fax" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-4">
    //                       <div className="mb-3">
    //                         <label htmlFor="companyemailInput" className="form-label">Email</label>
    //                         <input type="email" className="form-control" id="companyemailInput" placeholder="Enter your email" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-6">
    //                       <div className="mb-3">
    //                         <label htmlFor="worknumberInput" className="form-label">Number</label>
    //                         <input type="number" className="form-control" id="worknumberInput" placeholder="Enter your number" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-6">
    //                       <div className="mb-3">
    //                         <label htmlFor="companylogoInput" className="form-label">Company Logo</label>
    //                         <input type="file" className="form-control" id="companylogoInput" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-12">
    //                       <div className="hstack gap-2 justify-content-end">
    //                         <button className="btn btn-link link-success text-decoration-none fw-medium" data-bs-dismiss="modal"><i className="ri-close-line me-1 align-middle" /> Close</button>
    //                         <button type="submit" className="btn btn-primary"><i className="ri-save-3-line align-bottom me-1" /> Save</button>
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                   </div>
    //                   {/*end row*/}
    //                 </form>
    //               </div>
    //               <div className="tab-pane" id="bankDetails" role="tabpanel">
    //                 <form action="#">
    //                   <div className="row">
    //                     <div className="col-lg-6">
    //                       <div className="mb-3">
    //                         <label htmlFor="banknameInput" className="form-label">Bank Name</label>
    //                         <input type="text" className="form-control" id="banknameInput" placeholder="Enter your bank name" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-6">
    //                       <div className="mb-3">
    //                         <label htmlFor="branchInput" className="form-label">Branch</label>
    //                         <input type="text" className="form-control" id="branchInput" placeholder="Branch" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-12">
    //                       <div className="mb-3">
    //                         <label htmlFor="accountnameInput" className="form-label">Account Holder Name</label>
    //                         <input type="text" className="form-control" id="accountnameInput" placeholder="Enter account holder name" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-6">
    //                       <div className="mb-3">
    //                         <label htmlFor="accountnumberInput" className="form-label">Account Number</label>
    //                         <input type="number" className="form-control" id="accountnumberInput" placeholder="Enter account number" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-6">
    //                       <div className="mb-3">
    //                         <label htmlFor="ifscInput" className="form-label">IFSC</label>
    //                         <input type="number" className="form-control" id="ifscInput" placeholder="IFSC" />
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                     <div className="col-lg-12">
    //                       <div className="hstack gap-2 justify-content-end">
    //                         <button className="btn btn-link link-success text-decoration-none fw-medium" data-bs-dismiss="modal"><i className="ri-close-line me-1 align-middle" /> Close</button>
    //                         <button type="submit" className="btn btn-primary"><i className="ri-save-3-line align-bottom me-1" /> Save</button>
    //                       </div>
    //                     </div>
    //                     {/*end col*/}
    //                   </div>
    //                   {/*end row*/}
    //                 </form>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {/*end modal*/}
    //   </div>
    //   {/* container-fluid */}
    // </div>
  );
}

export default AddVendor;
