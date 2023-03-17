import React from 'react'

function VendorList() {
  return (
    <div className="page-content">
    <div className="container-fluid">
      {/* start page title */}
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0">Seller Details</h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                <li className="breadcrumb-item active">Seller Details</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* end page title */}
      <div className="row">
        <div className="col-xxl-3">
          <div className="card">
            <div className="card-body p-4">
              <div>
                <div className="flex-shrink-0 avatar-md mx-auto">
                  <div className="avatar-title bg-light rounded">
                    <img src="assets/images/companies/img-2.png" alt="" height={50} />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h5 className="mb-1">Force Medicines</h5>
                  <p className="text-muted">Since 1987</p>
                </div>
                <div className="table-responsive">
                  <table className="table mb-0 table-borderless">
                    <tbody>
                      <tr>
                        <th><span className="fw-medium">Owner Name</span></th>
                        <td>David Marshall</td>
                      </tr>
                      <tr>
                        <th><span className="fw-medium">Company Type</span></th>
                        <td>Partnership</td>
                      </tr>
                      <tr>
                        <th><span className="fw-medium">Email</span></th>
                        <td>forcemedicines@gamil.com</td>
                      </tr>
                      <tr>
                        <th><span className="fw-medium">Website</span></th>
                        <td><a href="javascript:void(0);" className="link-primary">www.forcemedicines.com</a></td>
                      </tr>
                      <tr>
                        <th><span className="fw-medium">Contact No.</span></th>
                        <td>+(123) 9876 654 321</td>
                      </tr>
                      <tr>
                        <th><span className="fw-medium">Fax</span></th>
                        <td>+1 999 876 5432</td>
                      </tr>
                      <tr>
                        <th><span className="fw-medium">Location</span></th>
                        <td>United Kingdom</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/*end card-body*/}
            <div className="card-body border-top border-top-dashed p-4">
              <div>
                <h6 className="text-muted text-uppercase fw-semibold mb-4">Customer Reviews</h6>
                <div>
                  <div>
                    <div className="bg-light px-3 py-2 rounded-2 mb-2">
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <div className="fs-16 align-middle text-warning">
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-fill" />
                            <i className="ri-star-half-fill" />
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <h6 className="mb-0">4.5 out of 5</h6>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-muted">Total <span className="fw-medium">5.50k</span> reviews</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="row align-items-center g-2">
                      <div className="col-auto">
                        <div className="p-1">
                          <h6 className="mb-0">5 star</h6>
                        </div>
                      </div>
                      <div className="col">
                        <div className="p-1">
                          <div className="progress animated-progress progress-sm">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '50.16%'}} aria-valuenow="50.16" aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="p-1">
                          <h6 className="mb-0 text-muted">2758</h6>
                        </div>
                      </div>
                    </div>
                    {/* end row */}
                    <div className="row align-items-center g-2">
                      <div className="col-auto">
                        <div className="p-1">
                          <h6 className="mb-0">4 star</h6>
                        </div>
                      </div>
                      <div className="col">
                        <div className="p-1">
                          <div className="progress animated-progress progress-sm">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '29.32%'}} aria-valuenow="29.32" aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="p-1">
                          <h6 className="mb-0 text-muted">1063</h6>
                        </div>
                      </div>
                    </div>
                    {/* end row */}
                    <div className="row align-items-center g-2">
                      <div className="col-auto">
                        <div className="p-1">
                          <h6 className="mb-0">3 star</h6>
                        </div>
                      </div>
                      <div className="col">
                        <div className="p-1">
                          <div className="progress animated-progress progress-sm">
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '18.12%'}} aria-valuenow="18.12" aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="p-1">
                          <h6 className="mb-0 text-muted">997</h6>
                        </div>
                      </div>
                    </div>
                    {/* end row */}
                    <div className="row align-items-center g-2">
                      <div className="col-auto">
                        <div className="p-1">
                          <h6 className="mb-0">2 star</h6>
                        </div>
                      </div>
                      <div className="col">
                        <div className="p-1">
                          <div className="progress animated-progress progress-sm">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '4.98%'}} aria-valuenow="4.98" aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="p-1">
                          <h6 className="mb-0 text-muted">227</h6>
                        </div>
                      </div>
                    </div>
                    {/* end row */}
                    <div className="row align-items-center g-2">
                      <div className="col-auto">
                        <div className="p-1">
                          <h6 className="mb-0">1 star</h6>
                        </div>
                      </div>
                      <div className="col">
                        <div className="p-1">
                          <div className="progress animated-progress progress-sm">
                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '7.42%'}} aria-valuenow="7.42" aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="p-1">
                          <h6 className="mb-0 text-muted">408</h6>
                        </div>
                      </div>
                    </div>{/* end row */}
                  </div>
                </div>
              </div>
            </div>
            {/*end card-body*/}
            <div className="card-body p-4 border-top border-top-dashed">
              <h6 className="text-muted text-uppercase fw-semibold mb-4">Products Reviews</h6>
              {/* Swiper */}
              <div className="swiper vertical-swiper" style={{height: '242px'}}>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="card border border-dashed shadow-none">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex-shrink-0 avatar-sm">
                            <div className="avatar-title bg-light rounded">
                              <img src="assets/images/companies/img-1.png" alt="" height={30} />
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <div>
                              <p className="text-muted mb-1 fst-italic">" Great product and looks great, lots of features. "</p>
                              <div className="fs-11 align-middle text-warning">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                              </div>
                            </div>
                            <div className="text-end mb-0 text-muted">
                              - by <cite title="Source Title">Force Medicines</cite>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card border border-dashed shadow-none">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img src="assets/images/users/avatar-3.jpg" alt="" className="avatar-sm rounded" />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <div>
                              <p className="text-muted mb-1 fst-italic">" Amazing template, very easy to understand and manipulate. "</p>
                              <div className="fs-11 align-middle text-warning">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-half-fill" />
                              </div>
                            </div>
                            <div className="text-end mb-0 text-muted">
                              - by <cite title="Source Title">Henry Baird</cite>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card border border-dashed shadow-none">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex-shrink-0 avatar-sm">
                            <div className="avatar-title bg-light rounded">
                              <img src="assets/images/companies/img-8.png" alt="" height={30} />
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <div>
                              <p className="text-muted mb-1 fst-italic">"Very beautiful product and Very helpful customer service."</p>
                              <div className="fs-11 align-middle text-warning">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-line" />
                                <i className="ri-star-line" />
                              </div>
                            </div>
                            <div className="text-end mb-0 text-muted">
                              - by <cite title="Source Title">Zoetic Fashion</cite>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="card border border-dashed shadow-none">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex-shrink-0">
                            <img src="assets/images/users/avatar-2.jpg" alt="" className="avatar-sm rounded" />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <div>
                              <p className="text-muted mb-1 fst-italic">" The product is very beautiful. I like it. "</p>
                              <div className="fs-11 align-middle text-warning">
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-fill" />
                                <i className="ri-star-half-fill" />
                                <i className="ri-star-line" />
                              </div>
                            </div>
                            <div className="text-end mb-0 text-muted">
                              - by <cite title="Source Title">Nancy Martino</cite>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3">
                <a href="javascript:void(0)" className="link-primary">View All Reviews <i className="ri-arrow-right-line align-bottom ms-1" /></a>
              </div>
            </div>
            <div className="card-body p-4 border-top border-top-dashed">
              <h6 className="text-muted text-uppercase fw-semibold mb-4">Contact Support</h6>
              <form action="#">
                <div className="mb-3">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows={4} placeholder="Enter your messages..." defaultValue={""} />
                </div>
                <div className="text-end">
                  <button type="submit" className="btn btn-primary"><i className="ri-mail-send-line align-bottom me-1" /> Send
                    Messages</button>
                </div>
              </form>
            </div>
            {/*end card-body*/}
          </div>
          {/*end card*/}
        </div>
        {/*end col*/}
        <div className="col-xxl-9">
          <div className="card">
            <div className="card-header border-0 align-items-center d-flex">
              <h4 className="card-title mb-0 flex-grow-1">Revenue</h4>
              <div>
                <button type="button" className="btn btn-soft-info btn-sm">
                  ALL
                </button>
                <button type="button" className="btn btn-soft-info btn-sm">
                  1M
                </button>
                <button type="button" className="btn btn-soft-info btn-sm">
                  6M
                </button>
                <button type="button" className="btn btn-soft-primary btn-sm">
                  1Y
                </button>
              </div>
            </div>{/* end card header */}
            <div className="card-header p-0 border-0 bg-soft-light">
              <div className="row g-0 text-center">
                <div className="col-6 col-sm-3">
                  <div className="p-3 border border-dashed border-start-0">
                    <h5 className="mb-1"><span className="counter-value" data-target={7585}>0</span>
                    </h5>
                    <p className="text-muted mb-0">Orders</p>
                  </div>
                </div>
                {/*end col*/}
                <div className="col-6 col-sm-3">
                  <div className="p-3 border border-dashed border-start-0">
                    <h5 className="mb-1">$<span className="counter-value" data-target="22.89">0</span>k</h5>
                    <p className="text-muted mb-0">Earnings</p>
                  </div>
                </div>
                {/*end col*/}
                <div className="col-6 col-sm-3">
                  <div className="p-3 border border-dashed border-start-0">
                    <h5 className="mb-1"><span className="counter-value" data-target={367}>0</span>
                    </h5>
                    <p className="text-muted mb-0">Refunds</p>
                  </div>
                </div>
                {/*end col*/}
                <div className="col-6 col-sm-3">
                  <div className="p-3 border border-dashed border-start-0 border-end-0">
                    <h5 className="mb-1 text-success"><span className="counter-value" data-target="18.92">0</span>%</h5>
                    <p className="text-muted mb-0">Conversation Ratio</p>
                  </div>
                </div>
                {/*end col*/}
              </div>
            </div>{/* end card header */}
            <div className="card-body p-0 pb-2">
              <div>
                <div id="customer_impression_charts" data-colors="[&quot;--vz-info&quot;, &quot;--vz-primary&quot;, &quot;--vz-danger&quot;]" className="apex-charts" />
              </div>
            </div>{/* end card body */}
          </div>{/* end card */}
          <div className="row g-4 mb-3">
            <div className="col-sm-auto">
              <div>
                <a href="apps-ecommerce-add-product.html" className="btn btn-info"><i className="ri-add-line align-bottom me-1" /> Add New</a>
              </div>
            </div>
            <div className="col-sm">
              <div className="d-flex justify-content-sm-end">
                <div className="search-box ms-2">
                  <input type="text" className="form-control" placeholder="Search Products..." />
                  <i className="ri-search-line search-icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div id="table-product-list-all" className="table-card gridjs-border-none" />
            </div>
          </div>
        </div>
        {/*end col*/}
      </div>
      {/*end row*/}
    </div>
    {/* container-fluid */}
  </div>
  )
}

export default VendorList