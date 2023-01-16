import mongoose from "mongoose";
const userSchema = mongoose.Schema;
const newSchema= new userSchema({

  email: { type: String, required: true },
  password:{type:String,required:true}
});
export default mongoose.model("adminAuthentication", newSchema);