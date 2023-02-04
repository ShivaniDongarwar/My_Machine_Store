import enquiry from "../../modale/enquiry.js";
export const enquiryDetail = async (req, res) => {
  console.log("req===>", req.body);
  const { name, email, PhoneNo, location, MName, MNum } = req.body;

  try {
    const newUser = await enquiry.create({
      company_name: name,
      email: email,
      phone_no: PhoneNo,
      location: location,
      manager_name: MName,
      manager_number: MNum,
    });
    console.log("newUser===>", newUser);
    return res.status(200).json({ result: newUser });
  } catch (err) {
    console.log("error----->", err.message);
    return res.status(500).json("someting went wrong......");
  }
};
export const getEnquiry = async (req, res) => {
  console.log("getreq===>", req.body);
  try {
    const newUser = await enquiry.find({},{company_name:1,email:1,phone_no:1,location:1});
    console.log("newUser2===>", newUser);
    return res.status(200).json({ result: newUser });
  } catch (err) {
    console.log(err);
    return res.status(500).json("someting went wrong......");
  }
};
