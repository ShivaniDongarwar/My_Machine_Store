import React from 'react';

import CountUp from 'react-countup';

const Counter = () => {
    const data = [
        { link: "View all products", endValue: 560, percentage: 5000, para: "Total Machines" },
        { link: "View all vendors", endValue: 560, percentage: 500, para: "Vendors" },
        { link: "View all enquiries", endValue: 560, percentage: 6000, para: "Total Enquires" },
        { link: "view all customers", endValue: 560, percentage: 20, para: "Customers" }

    ];
    return (
        <>
            <div className="row">
                {
                    data.map((val) => (
                        <div className="col-xl-3 col-md-6">


                            <div className="card card-animate">


                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1 overflow-hidden">
                                            <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                                                {val.para}</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <h5 className="text-success fs-14 mb-0">
                                                <i className="ri-arrow-right-up-line fs-13 align-middle" />
                                                {val.percentage}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-end justify-content-between mt-4">
                                        <div>
                                            <h4 className="fs-22 fw-semibold ff-secondary mb-4">$<CountUp className="counter-value" duration={4.75} start={0} end={val.endValue} />
                                            </h4>
                                            <a href="#" className="text-decoration-underline">{val.link}</a>
                                        </div>
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-soft-primary rounded fs-3">
                                                <i className="bx bx-dollar-circle text-primary" />
                                            </span>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Counter