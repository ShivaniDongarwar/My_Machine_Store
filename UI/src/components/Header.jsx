import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
// import { useState } from "react";
import { LOG_OUT, VENDOR_LOG_OUT } from "../api/apiEndpoints";
import axios from "../api/axios";
const Header = ({ toggle }) => {
  const [searchParam] = useSearchParams();

  // const superAdminID = localStorage.getItem("superAdminID");
  // const superAdminID = searchParam.get("superAdminId");

  // const { logo, userName } = JSON.parse(localStorage.getItem("vendor"));
  const data = JSON.parse(localStorage.getItem("vendor")) || "";
  // console.log("data===>", data);
  // const [response, setResponse] = useState({});
  const navigate = useNavigate();
  const logOutHndler = async (e) => {
    e.stopPropagation();
    try {
      const auth = await axios.post(LOG_OUT);
      if (auth.status === 200) {
        localStorage.clear("superAdminID");
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/");
      }
    } catch (err) {
      console.log("message====>", err.message);
      toast.error(`${err.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const clickHandler = async (e) => {
    e.stopPropagation();
    try {
      const auth = await axios.post(VENDOR_LOG_OUT);
      if (auth.status === 200) {
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        localStorage.clear("vendor");
        navigate("/");
      }
    } catch (err) {
      console.log("message====>", err.message);
      toast.error(`${err.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    navigate("/vendorAuth");
  };
  return (
    <header id="page-topbar" style={{ left: toggle ? "70px" : "250px" }}>
      <div className="layout-width">
        <div className="navbar-header">
          <div className="d-flex">
            {/* LOGO */}
            <div className="navbar-brand-box horizontal-logo">
              <a href="index.html" className="logo logo-dark">
                <span className="logo-sm">
                  <img src="assets/images/logo-sm.png" alt="logo" height={22} />
                </span>
                {/* <span className="logo-lg">
                <img src="assets/images/logo-dark.png" alt height={17} />
              </span> */}
              </a>
              <a href="index.html" className="logo logo-light">
                <span className="logo-sm">
                  <img
                    src="assets/images/logo-sm.png"
                    alt="logo2"
                    height={22}
                  />
                </span>
                <span className="logo-lg">
                  <img
                    src="assets/images/logo-light.png"
                    alt="logo3"
                    height={17}
                  />
                </span>
              </a>
            </div>
            <button
              type="button"
              className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
              id="topnav-hamburger-icon"
            >
              {/* <span onClick={onToggle}  className={toggle? "hamburger-icon open":"hamburger-icon"}>
                    <span />
                    <span />
                    <span />
                  </span> */}
            </button>
            {/* App Search*/}
            <form className="app-search d-none d-md-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  autoComplete="off"
                  id="search-options"
                  style={{width:"300px"}}
                />
                <span className="mdi mdi-magnify search-widget-icon" />
                <span
                  className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none"
                  id="search-close-options"
                />
              </div>

            </form>
          </div>
          <div className="d-flex align-items-center">
            <div className="dropdown ms-sm-3 header-item topbar-user">
              <button
                type="button"
                className="btn"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="d-flex align-items-center">
                  <img
                    className="rounded-circle header-profile-user"
                    src="assets/images/users/avatar-1.jpg"
                    alt="Header Avatar"
                  />
                  <span className="text-start ms-xl-2">
                    <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                      My Machine Store
                    </span>
                    <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">
                      Founder
                    </span>
                  </span>
                </span>
              </button>

              <div className="dropdown-menu dropdown-menu-end">
                <h6 className="dropdown-header">Welcome Anna!</h6>
                <Link
                  to={"/profile"}
                  className="dropdown-item"
                  href="pages-profile.html"
                >
                  <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1" />
                  <span className="align-middle">Profile</span>
                </Link>

                <button
                  className="dropdown-item"
                  href="#"
                  onClick={logOutHndler}
                >
                  <i className="mdi mdi-logout text-muted fs-16 align-middle me-1" />{" "}
                  <span className="align-middle" data-key="t-logout">
                    Logout
                  </span>
                </button>
              </div>
              {/* {superAdminID ? (
                <>
                <button  type="button"
                className="btn"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <span className="d-flex align-items-center">
                    <img
                      className="rounded-circle header-profile-user"
                      src="assets/images/users/avatar-1.jpg"
                      alt="Header Avatar"
                    />
                    <span className="text-start ms-xl-2">
                      <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                        My Machine Store
                      </span>
                      <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">
                        Founder
                      </span>
                    </span>
                  </span>
                </button>

                  <div className="dropdown-menu dropdown-menu-end">
                    <h6 className="dropdown-header">Welcome Anna!</h6>
                    <Link
                      to={"/profile"}
                      className="dropdown-item"
                      href="pages-profile.html"
                    >
                      <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1" />
                      <span className="align-middle">Profile</span>
                    </Link>

                    <button
                      className="dropdown-item"
                      href="#"
                      onClick={logOutHndler}
                    >
                      <i className="mdi mdi-logout text-muted fs-16 align-middle me-1" />{" "}
                      <span className="align-middle" data-key="t-logout">
                        Logout
                      </span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                <button  type="button"
                className="btn"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <span className="d-flex align-items-center">
                    <img
                      className="rounded-circle header-profile-user"
                      src="assets/images/users/avatar-1.jpg"
                      alt="Header Avatar"
                    />
                    <span className="text-start ms-xl-2">
                      <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                       {data?.company_name}
                      </span>
                      <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">

                      </span>
                    </span>
                  </span>
                </button>

                  <div className="dropdown-menu dropdown-menu-end">
                    <h6 className="dropdown-header">
                      Welcome {data?.userName}!
                    </h6>
                    <Link
                      to={"/profile"}
                      className="dropdown-item"
                      href="pages-profile.html"
                    >
                      <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1" />{" "}
                      <span className="align-middle">Profile</span>
                    </Link>

                    <button
                      className="dropdown-item"
                      href="#"
                      onClick={clickHandler}
                    >
                      <i className="mdi mdi-logout text-muted fs-16 align-middle me-1" />{" "}
                      <span className="align-middle" data-key="t-logout">
                        Logout
                      </span>
                    </button>
                  </div>
                </>
              )} */}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header;
