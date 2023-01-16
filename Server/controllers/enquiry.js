import enquiry from "../modale/enquiry.js";
export const enquiryDetail = async (req, res) => {
  console.log("req===>", req.body);
  const { company_name, email, phone_no, location } = req.body;

  try {

    const newUser = await enquiry.create({
      company_name: company_name,
      email: email,
      phone_no: phone_no,
      location: location,
    });
    console.log("newUser===>", newUser);
    return res.status(200).json({ result: newUser });
  } catch (err) {
     console.log("error----->",err.message)
    return res.status(500).json("someting went wrong......");

  }
};
