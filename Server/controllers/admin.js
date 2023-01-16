import enquires from "../modale/enquiry.js";
export const admin = async (req, res) => {
  console.log("getreq===>", req.body);
  try {
    const newUser = await enquires.find({});
    console.log("newUser2===>", newUser);
     return res.status(200).json({ result: newUser });
  } catch (err) {
console.log(err)
    return res.status(500).json("someting went wrong......");
  }
};
