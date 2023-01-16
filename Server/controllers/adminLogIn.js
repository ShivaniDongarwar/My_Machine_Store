import superAdminAuthentication from "../modale/superAdminAuthentication.js";
import bcrypt from "bcryptjs";
// import auth from "../modale/adminAuthentication.js"
export const adminLogIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existinguser = await superAdminAuthentication.findOne({
      email: email,
    });

    console.log("existinguser=====>", existinguser);
    const id = existinguser._id;

    if (!existinguser) {
      return res.status(404).json({ message: "Please Enter valid credential" });
    }

    const isPasswordCrt = await bcrypt.compare(password, existinguser.password);
    if (!isPasswordCrt) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ result: { id } });
  } catch (error) {
    res.status(500).json("Something went worng...");
  }
};
