import React from "react";

function ProductList({ productListResponse }) {
  console.log("productListResponse--->", productListResponse);
  return (
    <table role="grid" className="gridjs-table" style={{ height: "auto" }}>
      <thead className="gridjs-thead">
        <tr className="gridjs-tr">
          <th
            data-column-id="#"
            className="gridjs-th text-muted"
            style={{ width: "40px" }}
          >
            <div className="gridjs-th-content">#</div>
          </th>
          <th
            data-column-id="product"
            className="gridjs-th gridjs-th-sort text-muted"
            tabIndex={0}
            style={{ width: "360px" }}
          >
            <div className="gridjs-th-content">Product</div>
            <button
              tabIndex={-1}
              aria-label="Sort column ascending"
              title="Sort column ascending"
              className="gridjs-sort gridjs-sort-neutral"
            />
          </th>
          <th
            data-column-id="stock"
            className="gridjs-th gridjs-th-sort text-muted"
            tabIndex={0}
            style={{ width: "200px" }}
          >
            <div className="gridjs-th-content">Brand</div>
            <button
              tabIndex={-1}
              aria-label="Sort column ascending"
              title="Sort column ascending"
              className="gridjs-sort gridjs-sort-neutral"
            />
          </th>
          {/* <th
            data-column-id="stock"
            className="gridjs-th gridjs-th-sort text-muted"
            tabIndex={0}
            style={{ width: "100px" }}
          >
            <div className="gridjs-th-content">Brand</div>
            <button
              tabIndex={-1}
              aria-label="Sort column ascending"
              title="Sort column ascending"
              className="gridjs-sort gridjs-sort-neutral"
            />
          </th> */}
          <th
            data-column-id="price"
            className="gridjs-th gridjs-th-sort text-muted"
            tabIndex={0}
            style={{ width: "200px" }}
          >
            <div className="gridjs-th-content">Modal Number</div>
            <button
              tabIndex={-1}
              aria-label="Sort column ascending"
              title="Sort column ascending"
              className="gridjs-sort gridjs-sort-neutral"
            />
          </th>

          <th
            data-column-id="action"
            className="gridjs-th text-muted"
            style={{ width: "80px" }}
          >
            <div className="gridjs-th-content">Action</div>
          </th>
          <th
            data-column-id="action"
            className="gridjs-th text-muted"
            style={{ width: "100px" }}
          >
            <div className="gridjs-th-content">Status</div>
          </th>
        </tr>
      </thead>
      <tbody className="gridjs-tbody">
        {productListResponse?.map((product) => {
          return (
            <>
              <tr className="gridjs-tr" key={product._id}>
                <td data-column-id="#" className="gridjs-td">
                  <span>
                    <div className="form-check checkbox-product-list">
                      {" "}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue={1}
                        id="checkbox-1"
                      />{" "}
                      <label
                        className="form-check-label"
                        htmlFor="checkbox-1"
                      />{" "}
                    </div>
                  </span>
                </td>
                <td data-column-id="product" className="gridjs-td">
                  <span>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar-sm bg-light rounded p-1">
                          <img
                            src={`http://localhost:5001/${product.image}` || ""}
                            alt=""
                            className="img-fluid d-block"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="fs-14 mb-1">
                          <a
                            href="apps-ecommerce-product-details.html"
                            className="text-dark"
                          >
                            {product.product_name}
                          </a>
                        </h5>
                        <p className="text-muted mb-0">
                          Category :{" "}
                          <span className="fw-medium">{product.category}</span>
                        </p>
                      </div>
                    </div>
                  </span>
                </td>
                <td data-column-id="stock" className="gridjs-td">
                {product.brand}
                </td>
                {/* <td data-column-id="stock" className="gridjs-td">
                  {product.brand}
                </td> */}
                <td data-column-id="price" className="gridjs-td">
                  <span> {product.modalNum}</span>
                </td>
                <td data-column-id="action" className="gridjs-td">
                  <span>
                    <div className="dropdown">
                      <button
                        className="btn btn-soft-secondary btn-sm dropdown"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ri-more-fill" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a
                            className="dropdown-item"
                            href="apps-ecommerce-product-details.html"
                          >
                            <i className="ri-eye-fill align-bottom me-2 text-muted" />
                            View
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item edit-list"
                            data-edit-id={1}
                            href="apps-ecommerce-add-product.html"
                          >
                            <i className="ri-pencil-fill align-bottom me-2 text-muted" />
                            Edit
                          </a>
                        </li>
                        <li className="dropdown-divider" />
                        <li>
                          <a
                            className="dropdown-item remove-list"
                            href="#"
                            data-id={1}
                            data-bs-toggle="modal"
                            data-bs-target="#removeItemModal"
                          >
                            <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </span>
                </td>
                <td data-column-id="action" className="gridjs-td">
                  <span>
                    <div className="dropdown">
                      <button
                        className="btn btn-soft-secondary btn-sm dropdown"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {/* <i className="ri-more-fill" /> */}
                        Pending
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a
                            className="dropdown-item"
                            href="apps-ecommerce-product-details.html"
                          >
                            <i className="ri-eye-fill align-bottom me-2 text-muted" />{" "}
                            Active
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item edit-list"
                            data-edit-id={1}
                            href="apps-ecommerce-add-product.html"
                          >
                            <i className="ri-pencil-fill align-bottom me-2 text-muted" />{" "}
                            Deactive
                          </a>
                        </li>
                        <li className="dropdown-divider" />
                      </ul>
                    </div>
                  </span>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductList;
