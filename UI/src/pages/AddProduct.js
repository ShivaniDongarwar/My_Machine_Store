import React from "react";
import SideBar from "../utils/SideBar";
// import { useSearchParams } from "react-router-dom";
function AddProduct() {
  // const [searchParam] = useSearchParams();
  // console.log("searchParam===>", searchParam);
  // console.log("vendorId===>",searchParam.get("vendorId"))
  const { _id } = JSON.parse(localStorage.getItem("vendor"));

  return (
    <div className="page-content">
      <SideBar
        title="Product List"
        URL={`/enquiry/productList`}
        _id={_id}
        AddVendorLink="/AddProduct"
        ProductDetailLink="/ProductDetail"
        addProduct="Add Product"
        searchItem={"product_name"}
      />
    </div>
  );
}

export default AddProduct;
