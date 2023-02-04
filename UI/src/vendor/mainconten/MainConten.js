import { useState, useEffect } from "react";
import axios from "../../api/axios";
import { ADD_PRODUCT } from "../../api/apiEndpoints";
import { useSelector } from "react-redux";
const MainContent = () => {
  const [productName, setProductName] = useState("");
  const [discription, setDiscription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [response, setResponse] = useState([]);
  // const { userToken } = useSelector((state) => state.vendorAuth);
  // console.log("userToken===>", userToken);
  const{ _id }= JSON.parse(localStorage.getItem("vendor"));
  console.log("adminId====>",_id)
  const saveHandler = async (e) => {
    e.preventDefault();
    try {
      const detail = await axios.post(ADD_PRODUCT, {
        productName: productName,
        discription: discription,
        price: price,
        image: image,
        id: _id,
      });
      console.log("detail===>", detail.data.result);
      // setResponse(detail.data.result)
    } catch (error) {
      console.log("error===>", error.message);
    }
    setProductName("");
    setDiscription("");
    setPrice("");
    setImage("");
    // navigate("/")
  };
  const enquiryDetail = async () =>
    await axios
      .get(`/enquiry/productList?id=${_id}`)
      .then((res) => {
        // console.log(res?.data?.result);
        setResponse(res?.data?.result);
      })
      .catch((error) => {
        console.log(error.message);
      });

  useEffect(() => {
    enquiryDetail();
  }, []);
  // let data=[];
  //   data.push(response);
  console.log("productListres===>", response);
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header border-0 rounded">
              <div className="row g-2">
                <div className="col-xl-3">
                  <div className="page-title1-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0">Product List</h4>
                  </div>
                </div>

                <div className="col-xl-2 ms-auto">
                  <div>
                    <select
                      className="form-control"
                      data-choices
                      data-choices-search-false
                    >
                      <option value="">Select Categories</option>
                      <option value="All">All</option>
                      <option value="Retailer">Retailer</option>
                      <option value="Health & Medicine">
                        Health & Medicine
                      </option>
                      <option value="Manufacturer">Manufacturer</option>
                      <option value="Food Service">Food Service</option>
                      <option value="Computers & Electronics">
                        Computers & Electronics
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-auto">
                  <div className="hstack gap-2">
                    <button type="button" className="btn btn-danger">
                      <i className="ri-equalizer-fill me-1 align-bottom"></i>{" "}
                      Filters
                    </button>
                    <button
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#addSeller"
                    >
                      <i className="ri-add-fill me-1 align-bottom"></i> Add
                      Product
                    </button>
                  </div>
                </div>
              </div>
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
                        <th scope="col" style={{ width: "10px" }}>
                          <div className="form-check">
                            <input
                              className="form-check-input fs-15"
                              type="checkbox"
                              id="checkAll"
                              value="option"
                            />
                          </div>
                        </th>
                        {/* <th data-ordering="false">SR No.</th> */}
                        {/* <th data-ordering="false">ID</th> */}
                        <th data-ordering="false">Product Name</th>
                        <th data-ordering="false">Discription</th>
                        <th data-ordering="false">Price</th>
                        <th>Image</th>
                      </tr>
                    </thead>
                    {/* {response.length===null?<p>{}</p>:{}} */}
                    {response?.map((ele) => {
                      return (
                        <tbody className="bg-slight-white" key={ele._id}>
                          <tr className="border-slight-grey">
                            <th scope="row">
                              <div className="form-check">
                                <input
                                  className="form-check-input fs-15"
                                  type="checkbox"
                                  name="checkAll"
                                  value="option1"
                                />
                              </div>
                            </th>
                            <td className="td-grey-col">{ele.product_name}</td>
                            <td className="td-grey-col">{ele.discriptrion}</td>
                            <td className="td-grey-col">{ele.price}</td>
                            <td className="td-grey-col">{ele.image}</td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-0 text-center text-sm-start align-items-center mb-3">
            <div className="col-sm-6">
              <div>
                <p className="mb-sm-0">Showing 1 to 8 of 12 entries</p>
              </div>
            </div>
            <div className="col-sm-6">
              <ul className="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                <li className="page-item disabled">
                  {" "}
                  <a href="#" className="page-link">
                    <i className="mdi mdi-chevron-left"></i>
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
                    <i className="mdi mdi-chevron-right"></i>
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>

          <div
            className="modal fade zoomIn"
            id="addSeller"
            tabIndex="-1"
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
                  ></button>
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
                                Product Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="firstnameInput"
                                placeholder="Enter your product name"
                                onChange={(e) => {
                                  setProductName(e.target.value);
                                }}
                                value={productName}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                htmlFor="lastnameInput"
                                className="form-label"
                              >
                                Product Discription
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="lastnameInput"
                                placeholder="Enter your product's discription"
                                onChange={(e) => {
                                  setDiscription(e.target.value);
                                }}
                                value={discription}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                htmlFor="contactnumberInput"
                                className="form-label"
                              >
                                Price
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="contactnumberInput"
                                placeholder="Enter your product's price"
                                onChange={(e) => {
                                  setPrice(e.target.value);
                                }}
                                value={price}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                htmlFor="phonenumberInput"
                                className="form-label"
                              >
                                Product Image
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="phonenumberInput"
                                placeholder="Submit your product's image"
                                onChange={(e) => {
                                  setImage(e.target.value);
                                }}
                                value={image}
                              />
                            </div>
                          </div>
                          {/* <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label htmlFor="emailidInput" className="form-label">Email</label>
                                                    <input type="email" className="form-control" id="emailidInput" placeholder="Enter your email"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label htmlFor="birthdayidInput" className="form-label">Date of Birth</label>
                                                    <input type="text" id="birthdayidInput" className="form-control" data-provider="flatpickr" placeholder="Enter your date of birth"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="mb-3">
                                                    <label htmlFor="cityidInput" className="form-label">City</label>
                                                    <input type="text" className="form-control" id="cityidInput" placeholder="Enter your city"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="mb-3">
                                                    <label htmlFor="countryidInput" className="form-label">Country</label>
                                                    <input type="text" className="form-control" id="countryidInput" placeholder="Enter your country"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="mb-3">
                                                    <label htmlFor="zipcodeidInput" className="form-label">Zip Code</label>
                                                    <input type="text" className="form-control" id="zipcodeidInput" placeholder="Enter your zipcode"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter description"></textarea>
                                                </div>
                                            </div> */}
                          <div className="col-lg-12">
                            <div className="hstack gap-2 justify-content-end">
                              <button
                                className="btn btn-link link-success text-decoration-none fw-medium"
                                data-bs-dismiss="modal"
                              >
                                <i className="ri-close-line me-1 align-middle"></i>{" "}
                                Close
                              </button>
                              {/* <button  className="btn btn-primary"><i className="ri-save-3-line align-bottom me-1" onClick={saveHandler}></i> Save</button> */}
                              <button onClick={saveHandler}> Save</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* <div className="tab-pane" id="businessDetails" role="tabpanel">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label htmlFor="companynameInput" className="form-label">Company Name</label>
                                                    <input type="text" className="form-control" id="companynameInput" placeholder="Enter your company name"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label htmlFor="choices-single-default" className="form-label">Company Type</label>
                                                    <select className="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                                                        <option value="">Select type</option>
                                                        <option value="All" selected>All</option>
                                                        <option value="Merchandising">Merchandising</option>
                                                        <option value="Manufacturing">Manufacturing</option>
                                                        <option value="Partnership">Partnership</option>
                                                        <option value="Corporation">Corporation</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label htmlFor="pancardInput" className="form-label">Pan Card Number</label>
                                                    <input type="text" className="form-control" id="pancardInput" placeholder="Enter your pan-card number"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="mb-3">
                                                    <label htmlFor="websiteInput" className="form-label">Website</label>
                                                    <input type="url" className="form-control" id="websiteInput" placeholder="Enter your URL"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="mb-3">
                                                    <label htmlFor="faxInput" className="form-label">Fax</label>
                                                    <input type="text" className="form-control" id="faxInput" placeholder="Enter your fax"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="mb-3">
                                                    <label htmlFor="companyemailInput" className="form-label">Email</label>
                                                    <input type="email" className="form-control" id="companyemailInput" placeholder="Enter your email"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label htmlFor="worknumberInput" className="form-label">Number</label>
                                                    <input type="number" className="form-control" id="worknumberInput" placeholder="Enter your number"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label htmlFor="companylogoInput" className="form-label">Company Logo</label>
                                                    <input type="file" className="form-control" id="companylogoInput"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="hstack gap-2 justify-content-end">
                                                    <button className="btn btn-link link-success text-decoration-none fw-medium" data-bs-dismiss="modal"><i className="ri-close-line me-1 align-middle"></i> Close</button>
                                                    <button type="submit" className="btn btn-primary"><i className="ri-save-3-line align-bottom me-1"></i> Save</button>
                                                </div>
                                            </div>

                                        </div>

                                    </form>
                                </div>
                                <div className="tab-pane" id="bankDetails" role="tabpanel">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label htmlFor="banknameInput" className="form-label">Bank Name</label>
                                                    <input type="text" className="form-control" id="banknameInput" placeholder="Enter your bank name"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label htmlFor="branchInput" className="form-label">Branch</label>
                                                    <input type="text" className="form-control" id="branchInput" placeholder="Branch"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label htmlFor="accountnameInput" className="form-label">Account Holder Name</label>
                                                    <input type="text" className="form-control" id="accountnameInput" placeholder="Enter account holder name"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label htmlFor="accountnumberInput" className="form-label">Account Number</label>
                                                    <input type="number" className="form-control" id="accountnumberInput" placeholder="Enter account number"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label htmlFor="ifscInput" className="form-label">IFSC</label>
                                                    <input type="number" className="form-control" id="ifscInput" placeholder="IFSC"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="hstack gap-2 justify-content-end">
                                                    <button className="btn btn-link link-success text-decoration-none fw-medium" data-bs-dismiss="modal"><i className="ri-close-line me-1 align-middle"></i> Close</button>
                                                    <button type="submit" className="btn btn-primary"><i className="ri-save-3-line align-bottom me-1"></i> Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <script>document.write(new Date().getFullYear())</script> ©
              MyMachineStore.
            </div>
            <div className="col-sm-6">
              <div className="text-sm-end d-none d-sm-block">
                Design & Develop by Glassberry
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainContent;
