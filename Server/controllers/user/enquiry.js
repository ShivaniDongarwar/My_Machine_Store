import userEnquiry from "../../modale/userEnquiry.js";
export const enquiry = async (req, res) => {
  console.log("req===>", req.body);
  const { name, email, PhoneNo, location } = req.body;

  try {
    const newUser = await userEnquiry.create({
      user_name: name,
      email: email,
      phone_no: PhoneNo,
      location: location,
    });
    console.log("newUser===>", newUser);
    return res.status(200).json({ result: newUser });
  } catch (err) {
    console.log("error----->", err.message);
    return res.status(500).json("someting went wrong......");
  }
};
export const getUserEnquiry = async (req, res) => {
  console.log("getreq===>", req.body);
  const pageSize = 10;
  const page = parseInt(req?.query?.page || "0");
  const total = await userEnquiry.countDocuments({});
  try {
    const newUser = await userEnquiry
      .find({}, { user_name: 1, email: 1, phone_no: 1, location: 1 })
      .limit(pageSize)
      .skip(pageSize * page);
    console.log("newUser2===>", newUser);
    return res
      .status(200)
      .json({ result: newUser, totalPages: Math.ceil(total / pageSize) });
  } catch (err) {
    console.log(err);
    return res.status(500).json("someting went wrong......");
  }
};
