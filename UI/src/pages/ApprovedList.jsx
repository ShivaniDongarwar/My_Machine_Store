import React from "react";

const ApprovedList = () => {
  return (
    <>
        <div className="page-content">
          <div className="container-fluid">
            <div className="card">
              <div className="card-header border-0 rounded">
                <div className="row g-2">
                  <div className="col-xl-3">
                    <div className="page-title1-box d-sm-flex align-items-center justify-content-between">
                      <h4 className="mb-sm-0">Approved List</h4>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-xl-2 ms-auto">
                    <div>
                      <select
                        className="form-control"
                        data-choices
                        data-choices-search-false
                      >
                        <option value>Select Categories</option>
                        <option value="All">All</option>
                        <option value="Retailer">Retailer</option>
                        <option value="Health & Medicine">
                          Health &amp; Medicine
                        </option>
                        <option value="Manufacturer">Manufacturer</option>
                        <option value="Food Service">Food Service</option>
                        <option value="Computers & Electronics">
                          Computers &amp; Electronics
                        </option>
                      </select>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-lg-auto">
                    <div className="hstack gap-2">
                      <button type="button" className="btn btn-danger">
                        <i className="ri-equalizer-fill me-1 align-bottom" />{" "}
                        Filters
                      </button>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <table
                      id="example"
                      className="table table-bordered dt-responsive nowrap table-striped align-middle"
                      style={{ width: "100%" }}
                    >
                      <thead className="bg-slight-white">
                        <tr className="border-slight-grey">
                          <th scope="col" style={{ width: 10 }}>
                            <div className="form-check">
                              <input
                                className="form-check-input fs-15"
                                type="checkbox"
                                id="checkAll"
                                defaultValue="option"
                              />
                            </div>
                          </th>
                          <th data-ordering="false">SR No.</th>
                          <th data-ordering="false">ID</th>
                          <th data-ordering="false">Vendor Name</th>
                          <th data-ordering="false">Email id</th>
                          <th data-ordering="false">Phone</th>
                          <th>Location</th>
                          <th>Enquiry Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody className="bg-slight-white">
                        <tr className="border-slight-grey">
                          <th scope="row">
                            <div className="form-check">
                              <input
                                className="form-check-input fs-15"
                                type="checkbox"
                                name="checkAll"
                                defaultValue="option1"
                              />
                            </div>
                          </th>
                          <td className="td-grey-col">01</td>
                          <td className="td-grey-col">VLZ-452</td>
                          <td className="td-grey-col">VLZ1400087402</td>
                          <td>
                            <a href="#!">Post launch reminder/ post list</a>
                          </td>
                          <td className="td-grey-col">Joseph Parker</td>
                          <td className="td-grey-col">Alexis Clarke</td>
                          <td className="td-grey-col">03 Oct, 2021</td>
                          <td className="td-grey-col">
                            <button className="btn btn-sm btn-soft-info">
                              Approved
                            </button>
                          </td>
                        </tr>
                        <tr className="border-slight-grey">
                          <th scope="row">
                            <div className="form-check">
                              <input
                                className="form-check-input fs-15"
                                type="checkbox"
                                name="checkAll"
                                defaultValue="option1"
                              />
                            </div>
                          </th>
                          <td className="td-grey-col">01</td>
                          <td className="td-grey-col">VLZ-452</td>
                          <td className="td-grey-col">VLZ1400087402</td>
                          <td>
                            <a href="#!">Post launch reminder/ post list</a>
                          </td>
                          <td className="td-grey-col">Joseph Parker</td>
                          <td className="td-grey-col">Alexis Clarke</td>
                          <td className="td-grey-col">03 Oct, 2021</td>
                          <td className="td-grey-col">
                            <button className="btn btn-sm btn-soft-info">
                              Approved
                            </button>
                          </td>
                        </tr>
                        <tr className="border-slight-grey">
                          <th scope="row">
                            <div className="form-check">
                              <input
                                className="form-check-input fs-15"
                                type="checkbox"
                                name="checkAll"
                                defaultValue="option1"
                              />
                            </div>
                          </th>
                          <td className="td-grey-col">02</td>
                          <td className="td-grey-col">VLZ-452</td>
                          <td className="td-grey-col">VLZ1400087402</td>
                          <td>
                            <a href="#!">Post launch reminder/ post list</a>
                          </td>
                          <td className="td-grey-col">Joseph Parker</td>
                          <td className="td-grey-col">Alexis Clarke</td>
                          <td className="td-grey-col">03 Oct, 2021</td>
                          <td className="td-grey-col">
                            <button className="btn btn-sm btn-soft-info">
                              Approved
                            </button>
                          </td>
                        </tr>
                        <tr className="border-slight-grey">
                          <th scope="row">
                            <div className="form-check">
                              <input
                                className="form-check-input fs-15"
                                type="checkbox"
                                name="checkAll"
                                defaultValue="option1"
                              />
                            </div>
                          </th>
                          <td className="td-grey-col">03</td>
                          <td className="td-grey-col">VLZ-452</td>
                          <td className="td-grey-col">VLZ1400087402</td>
                          <td>
                            <a href="#!">Post launch reminder/ post list</a>
                          </td>
                          <td className="td-grey-col">Joseph Parker</td>
                          <td className="td-grey-col">Alexis Clarke</td>
                          <td className="td-grey-col">03 Oct, 2021</td>
                          <td className="td-grey-col">
                            <button className="btn btn-sm btn-soft-info">
                              Approved
                            </button>
                          </td>
                        </tr>
                        <tr className="border-slight-grey">
                          <th scope="row">
                            <div className="form-check">
                              <input
                                className="form-check-input fs-15"
                                type="checkbox"
                                name="checkAll"
                                defaultValue="option1"
                              />
                            </div>
                          </th>
                          <td className="td-grey-col">04</td>
                          <td className="td-grey-col">VLZ-452</td>
                          <td className="td-grey-col">VLZ1400087402</td>
                          <td>
                            <a href="#!">Post launch reminder/ post list</a>
                          </td>
                          <td className="td-grey-col">Joseph Parker</td>
                          <td className="td-grey-col">Alexis Clarke</td>
                          <td className="td-grey-col">03 Oct, 2021</td>
                          <td className="td-grey-col">
                            <button className="btn btn-sm btn-soft-info">
                              Approved
                            </button>
                          </td>
                        </tr>
                        <tr className="border-slight-grey">
                          <th scope="row">
                            <div className="form-check">
                              <input
                                className="form-check-input fs-15"
                                type="checkbox"
                                name="checkAll"
                                defaultValue="option1"
                              />
                            </div>
                          </th>
                          <td className="td-grey-col">05</td>
                          <td className="td-grey-col">VLZ-452</td>
                          <td className="td-grey-col">VLZ1400087402</td>
                          <td>
                            <a href="#!">Post launch reminder/ post list</a>
                          </td>
                          <td className="td-grey-col">Joseph Parker</td>
                          <td className="td-grey-col">Alexis Clarke</td>
                          <td className="td-grey-col">03 Oct, 2021</td>
                          <td className="td-grey-col">
                            <button className="btn btn-sm btn-soft-info">
                              Approved
                            </button>
                          </td>
                        </tr>
                        <tr className="border-slight-grey">
                          <th scope="row">
                            <div className="form-check">
                              <input
                                className="form-check-input fs-15"
                                type="checkbox"
                                name="checkAll"
                                defaultValue="option1"
                              />
                            </div>
                          </th>
                          <td className="td-grey-col">06</td>
                          <td className="td-grey-col">VLZ-452</td>
                          <td className="td-grey-col">VLZ1400087402</td>
                          <td>
                            <a href="#!">Post launch reminder/ post list</a>
                          </td>
                          <td className="td-grey-col">Joseph Parker</td>
                          <td className="td-grey-col">Alexis Clarke</td>
                          <td className="td-grey-col">03 Oct, 2021</td>
                          <td className="td-grey-col">
                            <button className="btn btn-sm btn-soft-info">
                              Approved
                            </button>
                          </td>
                        </tr>
                        <tr className="border-slight-grey">
                          <th scope="row">
                            <div className="form-check">
                              <input
                                className="form-check-input fs-15"
                                type="checkbox"
                                name="checkAll"
                                defaultValue="option1"
                              />
                            </div>
                          </th>
                          <td className="td-grey-col">07</td>
                          <td className="td-grey-col">VLZ-452</td>
                          <td className="td-grey-col">VLZ1400087402</td>
                          <td>
                            <a href="#!">Post launch reminder/ post list</a>
                          </td>
                          <td className="td-grey-col">Joseph Parker</td>
                          <td className="td-grey-col">Alexis Clarke</td>
                          <td className="td-grey-col">03 Oct, 2021</td>
                          <td className="td-grey-col">
                            <button className="btn btn-sm btn-soft-info">
                              Approved
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/*end row*/}
            <div className="row g-0 text-center text-sm-start align-items-center mb-3">
              <div className="col-sm-6">
                <div>
                  <p className="mb-sm-0">Showing 1 to 8 of 12 entries</p>
                </div>
              </div>{" "}
              {/* end col */}
              <div className="col-sm-6">
                <ul className="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                  <li className="page-item disabled">
                    {" "}
                    <a href="#" className="page-link">
                      <i className="mdi mdi-chevron-left" />
                    </a>{" "}
                  </li>
                  <li className="page-item active">
                    {" "}
                    <a href="#" className="page-link">
                      1
                    </a>{" "}
                  </li>
                  <li className="page-item ">
                    {" "}
                    <a href="#" className="page-link">
                      2
                    </a>{" "}
                  </li>
                  <li className="page-item">
                    {" "}
                    <a href="#" className="page-link">
                      3
                    </a>{" "}
                  </li>
                  <li className="page-item">
                    {" "}
                    <a href="#" className="page-link">
                      4
                    </a>{" "}
                  </li>
                  <li className="page-item">
                    {" "}
                    <a href="#" className="page-link">
                      5
                    </a>{" "}
                  </li>
                  <li className="page-item">
                    {" "}
                    <a href="#" className="page-link">
                      <i className="mdi mdi-chevron-right" />
                    </a>{" "}
                  </li>
                </ul>
              </div>
              {/* end col */}
            </div>
            {/* end row */}
            {/* Modal */}
            <div
              className="modal fade zoomIn"
              id="addSeller"
              tabIndex={-1}
              aria-labelledby="addSellerLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="addSellerLabel">
                      Add Seller
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-content border-0 mt-3">
                    <ul
                      className="nav nav-tabs nav-tabs-custom nav-success p-2 pb-0 bg-light"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-bs-toggle="tab"
                          href="#personalDetails"
                          role="tab"
                          aria-selected="true"
                        >
                          Personal Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#businessDetails"
                          role="tab"
                          aria-selected="false"
                        >
                          Business Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#bankDetails"
                          role="tab"
                          aria-selected="false"
                        >
                          Bank Details
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="modal-body">
                    <div className="tab-content">
                      <div
                        className="tab-pane active"
                        id="personalDetails"
                        role="tabpanel"
                      >
                        <form action="#">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="firstnameInput"
                                  className="form-label"
                                >
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="firstnameInput"
                                  placeholder="Enter your firstname"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="lastnameInput"
                                  className="form-label"
                                >
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastnameInput"
                                  placeholder="Enter your lastname"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="contactnumberInput"
                                  className="form-label"
                                >
                                  Contact Number
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="contactnumberInput"
                                  placeholder="Enter your number"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="phonenumberInput"
                                  className="form-label"
                                >
                                  Phone Number
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="phonenumberInput"
                                  placeholder="Enter your number"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="emailidInput"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="emailidInput"
                                  placeholder="Enter your email"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="birthdayidInput"
                                  className="form-label"
                                >
                                  Date of Birth
                                </label>
                                <input
                                  type="text"
                                  id="birthdayidInput"
                                  className="form-control"
                                  data-provider="flatpickr"
                                  placeholder="Enter your date of birth"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="cityidInput"
                                  className="form-label"
                                >
                                  City
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="cityidInput"
                                  placeholder="Enter your city"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="countryidInput"
                                  className="form-label"
                                >
                                  Country
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="countryidInput"
                                  placeholder="Enter your country"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="zipcodeidInput"
                                  className="form-label"
                                >
                                  Zip Code
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="zipcodeidInput"
                                  placeholder="Enter your zipcode"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-12">
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleFormControlTextarea1"
                                  className="form-label"
                                >
                                  Description
                                </label>
                                <textarea
                                  className="form-control"
                                  id="exampleFormControlTextarea1"
                                  rows={3}
                                  placeholder="Enter description"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-12">
                              <div className="hstack gap-2 justify-content-end">
                                <button
                                  className="btn btn-link link-success text-decoration-none fw-medium"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="ri-close-line me-1 align-middle" />{" "}
                                  Close
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  <i className="ri-save-3-line align-bottom me-1" />{" "}
                                  Save
                                </button>
                              </div>
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                        </form>
                      </div>
                      <div
                        className="tab-pane"
                        id="businessDetails"
                        role="tabpanel"
                      >
                        <form action="#">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="mb-3">
                                <label
                                  htmlFor="companynameInput"
                                  className="form-label"
                                >
                                  Company Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="companynameInput"
                                  placeholder="Enter your company name"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="choices-single-default"
                                  className="form-label"
                                >
                                  Company Type
                                </label>
                                <select
                                  className="form-control"
                                  data-trigger
                                  name="choices-single-default"
                                  id="choices-single-default"
                                >
                                  <option value>Select type</option>
                                  <option value="All" selected>
                                    All
                                  </option>
                                  <option value="Merchandising">
                                    Merchandising
                                  </option>
                                  <option value="Manufacturing">
                                    Manufacturing
                                  </option>
                                  <option value="Partnership">
                                    Partnership
                                  </option>
                                  <option value="Corporation">
                                    Corporation
                                  </option>
                                </select>
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="pancardInput"
                                  className="form-label"
                                >
                                  Pan Card Number
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="pancardInput"
                                  placeholder="Enter your pan-card number"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="websiteInput"
                                  className="form-label"
                                >
                                  Website
                                </label>
                                <input
                                  type="url"
                                  className="form-control"
                                  id="websiteInput"
                                  placeholder="Enter your URL"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="faxInput"
                                  className="form-label"
                                >
                                  Fax
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="faxInput"
                                  placeholder="Enter your fax"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="companyemailInput"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="companyemailInput"
                                  placeholder="Enter your email"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="worknumberInput"
                                  className="form-label"
                                >
                                  Number
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="worknumberInput"
                                  placeholder="Enter your number"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="companylogoInput"
                                  className="form-label"
                                >
                                  Company Logo
                                </label>
                                <input
                                  type="file"
                                  className="form-control"
                                  id="companylogoInput"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-12">
                              <div className="hstack gap-2 justify-content-end">
                                <button
                                  className="btn btn-link link-success text-decoration-none fw-medium"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="ri-close-line me-1 align-middle" />{" "}
                                  Close
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  <i className="ri-save-3-line align-bottom me-1" />{" "}
                                  Save
                                </button>
                              </div>
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                        </form>
                      </div>
                      <div
                        className="tab-pane"
                        id="bankDetails"
                        role="tabpanel"
                      >
                        <form action="#">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="banknameInput"
                                  className="form-label"
                                >
                                  Bank Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="banknameInput"
                                  placeholder="Enter your bank name"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="branchInput"
                                  className="form-label"
                                >
                                  Branch
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="branchInput"
                                  placeholder="Branch"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-12">
                              <div className="mb-3">
                                <label
                                  htmlFor="accountnameInput"
                                  className="form-label"
                                >
                                  Account Holder Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="accountnameInput"
                                  placeholder="Enter account holder name"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="accountnumberInput"
                                  className="form-label"
                                >
                                  Account Number
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="accountnumberInput"
                                  placeholder="Enter account number"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="ifscInput"
                                  className="form-label"
                                >
                                  IFSC
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="ifscInput"
                                  placeholder="IFSC"
                                />
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-lg-12">
                              <div className="hstack gap-2 justify-content-end">
                                <button
                                  className="btn btn-link link-success text-decoration-none fw-medium"
                                  data-bs-dismiss="modal"
                                >
                                  <i className="ri-close-line me-1 align-middle" />{" "}
                                  Close
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  <i className="ri-save-3-line align-bottom me-1" />{" "}
                                  Save
                                </button>
                              </div>
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  );
};

export default ApprovedList;
