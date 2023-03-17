import axios from "../api/axios";
import { useForm } from "react-hook-form";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// import { vendorAction } from "../reducers/vendor/VendorAuthAction";
// import { useEffect } from "react";
// import { useState } from "react";
import { VENDOR_AUTH } from "../api/apiEndpoints";
import { useState } from "react";

function VendorAuth(props) {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mendatory")
      .min(3, "Password must be at 3 char long"),

    email: Yup.string().required("Email is mendatory"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  // const dispatch=useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const navigate = useNavigate();
  const logInHandler = async (data, e) => {
    try {
      e.stopPropagation();
      const detail = await axios.post(VENDOR_AUTH, {
        email: data.email,
        password: data.password,
      });
      console.log("detail===>", detail);
      if (detail.status === 200) {
        const vendorid = localStorage.setItem(
          "vendor",
          JSON.stringify(detail.data.result.vendorDetails)
        );
        console.log("vendorid===>", vendorid);
        navigate({
          pathname: "/vendorAdminPanel",
          search: createSearchParams({
            vendorId: detail.data.result.vendorDetails._id,
          }).toString(),
        });
        // navigate("/vendorAdminPanel")

        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (err) {
      console.log("message====>", err.message);
      toast.error(`${err.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    // setRes({email:data.email,password:data.password})

    // dispatch(vendorAction({email:data.email,password:data.password}));
  };

  // console.log("res2===>",res)

  // useEffect(()=>{
  //   if(res){
  //     dispatch(vendorAction(res))
  //     navigate("/vendorAdminPanel");
  //   }
  //  },[dispatch,res])
  return (
    <>
      <div className="auth-page-wrapper pt-5">
        {/* auth page bg */}
        <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
          <div className="bg-overlay" />
          <div className="shape">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1440 120"
            >
              <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z" />
            </svg>
          </div>
        </div>
        {/* auth page content */}
        <div className="auth-page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    <a href="index.html" className="d-inline-block auth-logo">
                      <img
                        className="logoo"
                        src="assets/images/logowhite.png"
                        alt="MyMachineStore"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* end row */}
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card mt-4">
                  <div className="card-body p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Welcome Back !</h5>
                      {/* <p className="text-muted">
                        Sign in to continue to Velzon.
                      </p> */}
                    </div>
                    <div className="p-2 mt-4">
                      {/* <form action="https://themesbrand.com/velzon/html/interactive/index.html"> */}
                      <form onSubmit={handleSubmit(logInHandler)}>
                        <div className="mb-3">
                          <label htmlFor="username" className="form-label">
                            Email
                          </label>
                          <input
                            type="text"
                            name="email"
                            className={`form-control ${
                              errors.email ? "is-invalid" : ""
                            }`}
                            id="email"
                            placeholder="Enter Email"
                            {...register("email", {
                              required: true,
                              pattern: {
                                value:
                                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                              },
                            })}
                          />
                          <div className="invalid-feedback">
                            {errors.email?.message}
                          </div>
                        </div>

                        <div className="mb-3">
                          {/* <div className="float-end">
                            <a
                              href="auth-pass-reset-basic.html"
                              className="text-muted"
                            >
                              Forgot password?
                            </a>
                          </div> */}
                          <label
                            className="form-label"
                            htmlFor="password-input"
                          >
                            Password
                          </label>
                          <div className="position-relative auth-pass-inputgroup mb-3">
                            <input
                              name="password"
                              type="password"
                              className={`form-control ${
                                errors.password ? "is-invalid" : ""
                              }`}
                              placeholder="Enter password"
                              id="password"
                              {...register("password", { required: true })}
                              aria-invalid={errors.password ? "true" : "false"}
                            />
                            <div className="invalid-feedback">
                              {errors.password?.message}
                            </div>
                            {/* <button
                              className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted "
                              type="button"
                              id="password-addon"
                            >
                              <i className="ri-eye-fill align-middle"></i>
                            </button> */}
                          </div>
                        </div>

                        {/* <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="auth-remember-check"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="auth-remember-check"
                          >
                            Remember me
                          </label>
                        </div> */}

                        <div className="mt-4">
                          <button
                            className="btn btn-info w-100"
                            // onClick={formSubmitHandler}
                            type="submit"
                          >
                            Sign In
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        {/* end auth page content */}
      </div>
      <ToastContainer />
    </>
  );
}

export default VendorAuth;
