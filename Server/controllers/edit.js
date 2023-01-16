import enquiry from "../modale/enquiry.js";
export const edit = async (req, res) => {
  console.log(req.body);
  // console.log(req.params.id)
  const _id = req.body.id;
  const uData=await enquiry.findByIdAndUpdate(
    _id,
    {
      company_name: req.body.company_name,
      email: req.body.email,
      location: req.body.location,
      phone_no: req.body.phone_no,
    },
    (err) => {
      if (err) {
        console.log("editError===>", err.message);
        res.status(500).send();
      } else {
        res.status(202).send({data:"Record has been Updated..!!"});
      }
    }
  ).clone();
};
