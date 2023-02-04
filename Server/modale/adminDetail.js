import mongoose from "mongoose";
const userSchema = mongoose.Schema;
const newSchema= new userSchema({
  company_name: { type: String, required: true }, address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  phoneNo: { type: String, required: true },
  mobileNo: { type: String, required: true },
  emailId: { type: String, required: true },
  ownerName: { type: String, required: true },
  logo: { type: String, required: true },
  regNo: { type: String, required: true },
  panNo: { type: String, required: true },
  discription: { type: String, required: true },
  type: { type: String, required: true },
  password: { type: String, required: true },
  userName: { type: String, required: true }

});
export default mongoose.model("adminDetail", newSchema);