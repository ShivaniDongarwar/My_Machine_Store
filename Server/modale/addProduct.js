
import mongoose from "mongoose";
const userSchema = mongoose.Schema;
const newSchema = new userSchema({
  product_name: { type: String, required: true },
  discription:{type: String},
  MetaTitle: { type: String },
  Publish_By: { type: String },
  user_id: { type: String },
  image: { type: String },
  Publish_Date: {
    type: Date,
    default: Date.now,
  },
  Updated_On: {
    type: Date,
  },
  brand: { type: String },
  category: { type: String },
  colour: { type: String },
  manufacturerName: { type: String },
  metaDescription: { type: String },
  metaKey: { type: String },
  modalNum: { type: String },
  scope: { type: String },
  skuNum: { type: String },
  supplier: { type: String },
  warranty: { type: String },
  weight: { type: String },
  shortDiscription:{type:String}
});
export default mongoose.model("addProduct", newSchema);
