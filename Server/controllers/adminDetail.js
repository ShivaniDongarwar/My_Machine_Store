import adminDetail from "../modale/adminDetail.js";
import bcrypt from "bcryptjs";

export const vendorDetail = async (req, res) => {
  console.log("req===>", req.body);
  const {companyName,
    companyId,
    email,
    phoneNumber,
    location,
    userName,
    password,} = req.body;

  try {
    // const existinguser = await users.findOne(req.body);
    const existinguser = await adminDetail.findOne(req.body);

    // console.log("user------->", existinguser);
    if (existinguser) {
      return res.status(404).json({ message: "User already exit" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await adminDetail.create({
      company_name: companyName,
      company_id: companyId,
      email: email,
      phone_no: phoneNumber,
      location: location,
      user_name: userName,
      password: hashedPassword,
    });
    // const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test", {
    //   expiresIn: "1hr",
    // });
    return res.status(200).json({ result: newUser });
    //  return res.status(200).json({ result: newUser, token:token });
  } catch (err) {
    console.log(err)
    return res.status(500).json("someting went wrong......");
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existinguser = await adminDetail.findOne({ email: email });
    // const userDetail = await user.findOne({ user_id: existinguser._id });

    console.log("existinguser=====>", existinguser);
    // console.log("userDetail=====>", userDetail);

    if (!existinguser) {
      return res.status(404).json({ message: "User don't Exist." });
    }
    // if (!userDetail) {
    //   return res.json({ message: "Add data" });
    // }
    const isPasswordCrt = await bcrypt.compare(password, existinguser.password);
    if (!isPasswordCrt) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // const token = jwt.sign({ email: existinguser.email, id:existinguser._id}, process.env.JWT_SECRET , { expiresIn: '1h'});
    res.status(200).json({ result: { existinguser} });
  } catch (error) {
    res.status(500).json("Something went worng...");
  }}