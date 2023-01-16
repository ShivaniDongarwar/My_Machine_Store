import mongoose from "mongoose";
const userSchema = mongoose.Schema;
const newSchema= new userSchema({

  product_name: { type: String, required: true },
  price: { type: String, required: true },
  discriptrion: { type: String, required: true },
  image: { type: String ,required:true},
  user_id:{type:String}
});
export default mongoose.model("addProduct", newSchema);