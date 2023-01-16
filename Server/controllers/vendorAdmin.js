import adminDetail from "../modale/adminDetail.js";
export const vendorAdmin = async (req, res) => {
  // console.log("getreq===>", req.body);
  const id = req.query.id;
  console.log("id====>", id);
  try {
    const newUser = await adminDetail.findOne({
      _id: id,
    });

    return res.status(200).json({ result: newUser });
  } catch (err) {
    return res.status(500).json("someting went wrong......");
  }
};
export const superAdmin = async (req, res) => {
  try {
    const newUser = await adminDetail.find({});

    return res.status(200).json({ result: newUser });
  } catch (err) {
    return res.status(500).json("someting went wrong......");
  }
};
