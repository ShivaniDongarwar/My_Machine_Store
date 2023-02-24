import mongoose from "mongoose";
const userSchema = mongoose.Schema;
const newSchema= new userSchema({
  user_name: { type: String, required: true },
  email: { type: String, required: true },
  phone_no: { type: String ,required:true},
  location: { type: String,required:true },
  enquiry_date: {
    type: Date,
    default: Date.now
},
  enquiry_updated_date: {
    type: Date,
    default: Date.now
}

});
export default mongoose.model("userEnquires", newSchema);