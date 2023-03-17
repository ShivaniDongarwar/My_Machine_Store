import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { superAdminProductList } from "../api/apiEndpoints";
import axios from "../api/axios";
import SideBar from "../utils/SideBar";

const ProductList = () => {
  const navigate = useNavigate();

  const deleteHandler = async (id) => {
    console.log("id===>", id);
    const data = await axios
      .delete(`/enquiry/deleteProduct?id=${id}`)
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
    <>
      <div className="page-content">
        <SideBar
          title="Product List"
          URL={superAdminProductList}
          tag_2="Delete"
          onDelete={deleteHandler}
          addProduct="Filter"
          // AddVendorLink="/productFilter"
        />
      </div>
      <ToastContainer />

    </>
  );
};

export default ProductList;
