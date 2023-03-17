import mongoose from "mongoose";
const userSchema = mongoose.Schema;
const newSchema = new userSchema({
  company_name: { type: String, require: true },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  phoneNo: { type: Number },
  mobileNo: { type: Number },
  emailId: { type: String, require: true},
  ownerName: { type: String } ,
  logo: { type: String },
  regNo: { type: String },
  panNo: { type: String },
  discription: { type: String },
  type: { type: String },
  password: { type: String, require: true },
  userName: { type: String },
  zip:{type: String},
  date: {
    type: Date,
    default: Date.now,
  },
  managerName: {
    type: String,
  },
  status: {
    type: String,
  },
  // updated_date: {
  //   type: Date,
  //   default: Date.now,
  // },
});
export default mongoose.model("adminDetail", newSchema);
