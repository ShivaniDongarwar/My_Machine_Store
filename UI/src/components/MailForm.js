import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { Mail } from "../api/apiEndpoints";
import axios from "../api/axios";
import MailData from "../data/MailData";
function EnquiryMail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const submitHandler = async (data) => {
    try {
      const res = await axios.post(Mail, {
        ...data,
      });
      console.log("res===>", res);
      if (res.status === 200) {
        navigate("/vendorAuth");
      }
    } catch (error) {
      console.log("post error===>", error.message);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit(submitHandler)}>
      {MailData.map((data) => {
        return (
          <div className="row mb-3" key={data.idx}>
            <div className="col-lg-3">
              <label htmlFor={data.htmlFor} className="form-label">
                {data.title}
              </label>
            </div>
            <div className="col-lg-9">
              <input
                type="text"
                className="form-control"
                id={data.id}
                placeholder={data.placeholder}
                {...register(`${data.name}`, {
                  required: true,
                })}
              />
            </div>
          </div>
        );
      })}

      <div className="text-end">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
}

export default EnquiryMail;
