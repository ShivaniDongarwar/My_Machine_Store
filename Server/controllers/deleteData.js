import enquiry from "../modale/enquiry.js";
import adminDetail from "../modale/adminDetail.js";

export const deleteData = async (req, res) => {
  console.log("delete====>",req.query.id);
  const {id} = req.query;
  try {

    const newUser = await enquiry.findByIdAndDelete({
      _id:id
    });
    console.log("newUser===>", newUser);
    return res.status(200).json({ result: newUser });
  } catch (err) {
     console.log("error----->",err.message)
    return res.status(500).json("someting went wrong......");

  }
};
export const deleteEntry = async (req, res) => {
  console.log("delete====>",req.query.id);
  const {id} = req.query;
  try {

    const newUser = await adminDetail.findByIdAndDelete({
      _id:id
    });
    console.log("newUser===>", newUser);
    return res.status(200).json({ result: newUser });
  } catch (err) {
     console.log("error----->",err.message)
    return res.status(500).json("someting went wrong......");

  }
};
