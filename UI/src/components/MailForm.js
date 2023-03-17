import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { ADD_COMPANY_DETAILS_VENDOR, Mail, SUCCESS_STATUS } from "../api/apiEndpoints";
import axios from "../api/axios";
import MailData from "../data/MailData";
import { statusActions } from "../reducers/status/statusSlice";
import AddCompanyForm from "./company/AddCompanyForm";
function EnquiryMail({ companyDetails }) {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imgHandler = (event) => {
    if (event.target && event.target.files[0]) {
      setImage(event.target.files[0]);
    } else {
      console.log("Something went wrong");
    }
  };
  console.log("img", image);
  const navigate = useNavigate();
  // const submitHandler = async (data) => {
  //   console.log("data===>", localStorage.getItem("Approve"));
  //   const formData = new FormData();

  //   // formData.append('file', data.file[0]);
  //   try {
  //     formData.append("company_name", data.company_name);
  //     formData.append("address", data.address);
  //     formData.append("city", data.city);
  //     formData.append("state", data.state);
  //     formData.append("country", data.country);
  //     formData.append("phoneNo", data.phoneNo);
  //     formData.append("mobileNo", data.mobileNo);
  //     formData.append("emailId", data.emailId);
  //     formData.append("ownerName", data.ownerName);
  //     formData.append("logo", data.logo[0]);
  //     formData.append("regNo", data.regNo);
  //     formData.append("panNo", data.panNo);
  //     formData.append("discription", data.discription);
  //     formData.append("type", data.type);
  //     formData.append("userName", data.userName);
  //     formData.append("password", data.password);

  //     // const res = await axios.post(Mail, {...data});
  //     const res = await axios.post(Mail, formData, {
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });
  //     console.log("res===>", res);
  //     if (res.status === 200) {
  //       dispatch(statusActions.enquiryStatus("Sucessful"));

  //       try {
  //         const statusUpdate = await axios.put(SUCCESS_STATUS, {
  //           id: localStorage.getItem("Approve"),
  //           status: "Successful",
  //         });
  //         console.log("statusUpdate===>", statusUpdate);
  //         if (statusUpdate.status === 200) {
  //           console.log("Status update successfully");
  //         }
  //       } catch (error) {
  //         console.log("message====>", error.message);
  //       }
  //       navigate("/mail");
  //     }
  //   } catch (error) {
  //     console.log("post error===>", error.message);
  //   }
  // };

  // const status = useSelector((state) => {
  //   return state.status.status;
  // });
  // const statusUpdate= async()=>{
  //   try {
  //     const statusUpdate = await axios.put(SUCCESS_STATUS, {
  //       id: res.data.result._id,status:status
  //     });
  //     console.log("statusUpdate===>", statusUpdate);
  //     if (statusUpdate.status === 200) {
  //       console.log("Status update successfully");
  //     }
  //   } catch (error) {
  //     console.log("message====>", error.message);
  //   }
  // }

  return (
    // <div
    //   id="layout-wrapper"
    //   style={{ backgroundColor: "#000000" }}
    // >



    // </div>
    <>
      <div id="layout-wrapper">
      <nav
        className="navbar navbar-expand-lg navbar-landing navbar-light fixed-top navbar-header"
        id="navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            {/* <img
              src="assets/images/logo-dark.png"
              className="card-logo card-logo-dark"
              alt="logo dark"
              height={17}
            /> */}
            <img
              src="assets/images/logo3.png"
              className="card-logo card-logo-light"
              alt="logo light"
              style={{ height: "50px" }}
            />
          </a>
          <button
            className="navbar-toggler py-0 fs-20 text-body"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0" id="navbar-example">
              {/* <li className="nav-item">
                <a className="nav-link active" href="#hero">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#wallet">Wallet</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#marketplace">Marketplace</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#categories">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#creators">Creators</a>
              </li> */}
            </ul>
            <div className="gap-2 d-flex align-items-center">
              <Link to="/enquiryForm" className="btn btn-success">
                Start Selling
              </Link>
              <Link to="/vendorAuth" className="btn btn-success">
                Login
              </Link>
              {/* <div className="dropdown ms-sm-3 header-item topbar-vendor"> */}
                <button
                  type="button"
                  className="btn btn-success"
                  // id="page-header-user-dropdown"
                  // data-bs-toggle="dropdown"
                  // aria-haspopup="true"
                  // aria-expanded="false"
                >
                  <span className="d-flex align-items-center">
                    <img
                      className="rounded-circle header-profile-user"
                      src="assets/images/users/avatar-1.jpg"
                      alt="Header Avatar"
                    />
                    <span className="text-start ms-xl-2">
                      <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                        Anna Adame
                      </span>
                      <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">
                        Founder
                      </span>
                    </span>
                  </span>
                </button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </nav>
      </div>
      <div className="page-content">
        <div className="container-fluid">

          <AddCompanyForm companyDetails={companyDetails} ADD_COMPANY_DETAILS={ADD_COMPANY_DETAILS_VENDOR} navigateTo="/thankYou"/>
        </div>
      </div>
    </>
  );
}

export default EnquiryMail;
