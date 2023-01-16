import mongoose from "mongoose";
const userSchema = mongoose.Schema;
const newSchema= new userSchema({

  company_name: { type: String, required: true },
  company_id: { type: String, required: true },
  email: { type: String, required: true },
  phone_no: { type: String ,required:true},
  user_name: { type: String,required:true },
  password: { type: String, required:true},
  location: { type: String, required:true},
  user_id:{type:String}
});
export default mongoose.model("adminDetail", newSchema);