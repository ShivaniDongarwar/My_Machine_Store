// import { useState } from 'react'

// function Pagination(props) {
//   const [pageNo, setPageNo] = useState(0);
//   const [totalPage, setTotalPage] = useState(0);
//   const pages = new Array(totalPage).fill(null).map((v, i) => i);

//   return (
//     <div className="row g-0 text-center text-sm-start align-items-center mb-3">
//     <div className="col-sm-6">
//       <div>
//         {/* <p className="mb-sm-0">Showing 1 to 10 of 12 entries</p> */}
//         <p className="mb-sm-0">Page of {props.pageNo + 1}</p>
//       </div>
//     </div>{" "}
//     {/* end col */}
//     <div className="col-sm-6">
//       <ul className="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
//         <li className="page-item disabled">
//           {" "}
//           <a href="#" className="page-link">
//             <i className="mdi mdi-chevron-left" />
//           </a>{" "}
//         </li>
//         {props.pages?.map((pageIndex) => {
//           return (
//             <li className="page-item active" key={pageIndex}>

//               <button
//                 href="#"
//                 className="page-link"
//                 onClick={() => {
//                   setPageNo(pageIndex);
//                 }}
//               >
//                 {pageIndex + 1}
//               </button>
//             </li>
//           );
//         })}

//         <li className="page-item">
//           {" "}
//           <a href="#" className="page-link">
//             <i className="mdi mdi-chevron-right" />
//           </a>{" "}
//         </li>
//       </ul>
//     </div>
//   </div>
//   )
// }

// export default Pagination