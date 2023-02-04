import bcrypt from "bcryptjs";
import adminDetail from "../../modale/adminDetail.js";

export const approvedMail = async (req, res) => {
  console.log("req===>", req.body);
  const {
    company_name,
    address,
    city,
    state,
    country,
    phoneNo,
    mobileNo,
    emailId,
    ownerName,
    logo,
    regNo,
    panNo,
    discription,
    type,
    userName,
    password,
  } = req.body;

  try {
    // const existinguser = await users.findOne(req.body);
    const existinguser = await adminDetail.findOne(req.body);

    // console.log("user------->", existinguser);
    if (existinguser) {
      return res.status(404).json({ message: "User already exit" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await adminDetail.create({
      company_name:company_name,
      address:address,
      city:city,
      state:state,
      country:country,
      phoneNo:phoneNo,
      mobileNo:mobileNo,
      emailId:emailId,
      ownerName:ownerName,
      logo:logo,
      regNo:regNo,
      panNo:panNo,
      discription:discription,
      type:type,
      userName:userName,
      password:hashedPassword,
    });
    // const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test", {
    //   expiresIn: "1hr",
    // });
    // return res.status(200).json({ result: newUser });
    return res.status(200).json({ result: {userName:newUser.userName,logo:newUser.logo} });
    //  return res.status(200).json({ result: newUser, token:token });
  } catch (err) {
    console.log(err);
    return res.status(500).json("someting went wrong......");
  }
};
