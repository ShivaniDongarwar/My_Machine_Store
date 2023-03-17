import mongoose from "mongoose";
const userSchema = mongoose.Schema;
const newSchema = new userSchema({
  companyName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNo: { type: String, required: true },
  location: { type: String, required: true },
  manager_name: { type: String },
  manager_number: { type: String, required: true },
  trade_enquiry_date: {
    type: Date,
    default: Date.now,
  },
  trade_enquiry_updated_date: {
    type: Date,
    default: Date.now,
  },
  status: { type: String },
});
export default mongoose.model("enquires", newSchema);
