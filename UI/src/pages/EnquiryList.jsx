// import { useEffect, useState } from "react";
import { TRADE_ENQUIRY } from "../api/apiEndpoints";
import axios from "../api/axios";
import SideBar from "../utils/SideBar";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { statusActions } from "../reducers/status/statusSlice";
import { useState } from "react";

const EnquiryList = () => {
  const [updatedStatus, setUpdatedStatus] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const status=useSelector((state)=>{ return state.status.status})

  // const [response, setResponse] = useState([]);
  // const [deleteData, setDeleteData] = useState("");

  // const enquiryDetail = async () =>
  //   await axios
  //     .get(TRADE_ENQUIRY)
  //     .then((res) => {
  //       // console.log(res?.data?.result);
  //       setResponse(res?.data?.result);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });

  // useEffect(() => {
  //   enquiryDetail();
  // }, []);
  dispatch(statusActions.enquiryStatus("Pending"));

  const formUrl = "http://localhost:3001/mail";
  const mailHandler = async (id) => {
    localStorage.setItem("Approve", id);

    await axios
      .post(`/enquiry/mail?id=${id}&formUrl=${formUrl}`)
      .then((res) => {
        console.log("res====>", res);
      })
      .then(() => {
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/Enquirylist")
      })
      .catch((error) => {
        console.log("error===>", error.message);
      });
  };
  const status = useSelector((state) => {
    return state.status.status;
  });
  console.log("enquiryStatus===>", status);
  const statusHandler = async (id) => {
    try {
      const uStatus = await axios.post("/enquiry/status", {
        _id: id,
        status: status,
      });
      if (uStatus.status === 200) {
        setUpdatedStatus(uStatus.data.result.status);
      //  const id=  localStorage.setItem("EnquiryId",uStatus.data.result._id );
// console.log("idfeferg----->",id)
      }
    } catch (error) {
      console.log("error===>", error);
    }
  };
  const deleteHandler = async (id) => {
    console.log("id===>", id);
    const data = await axios
      .delete(`/enquiry/deleteEnquiry?id=${id}`)
      .then((res) => console.log("res===>", res))
      .then(() => {
        toast.success("Delete Successfully !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/Enquirylist");
      })
      .catch((error) => {
        console.log("error=>>", error);

        toast.success(`${error.message}`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  console.log("updatedStatus===>", updatedStatus);
  return (
    <div className="page-content">
      <SideBar
        title="Enquiry List"
        onClick={mailHandler}
        URL={TRADE_ENQUIRY}
        searchItem="company_name"
        onDelete={deleteHandler}
        tag_2="Delete"
        statusHandler={statusHandler}
        updatedStatus={updatedStatus}
        navigateTo="/Enquirylist"
      />
      <ToastContainer />
    </div>
  );
};

export default EnquiryList;
