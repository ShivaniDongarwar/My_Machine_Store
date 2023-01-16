import mongoose from "mongoose";
const userSchema = mongoose.Schema;
const newSchema= new userSchema({
  company_name: { type: String, required: true },
  email: { type: String, required: true },
  phone_no: { type: String ,required:true},
  location: { type: String,required:true },
});
export default mongoose.model("enquires", newSchema);