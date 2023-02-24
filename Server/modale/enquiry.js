import mongoose from "mongoose";
const userSchema = mongoose.Schema;
const newSchema = new userSchema({
  company_name: { type: String, required: true },
  email: { type: String, required: true },
  phone_no: { type: String, required: true },
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
  approve_vendor: [
    { company_name:{type:String} , email: String, phone_no: String, location: String },
  ],
});
export default mongoose.model("enquires", newSchema);
