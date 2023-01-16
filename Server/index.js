import express from "express";
import mongoose from "mongoose";


import routes from "./routes/routes.js";
import cors from "cors"
const app=express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.get("/", (req, res) => {

  return res.send("This is the Trade Enquiry api");
});
app.use("/enquiry", routes);

const PORT = process.env.PORT || 5000;
const CONNECTION_URL =
"mongodb+srv://ShivaniGlassberry:ShivanI%400607@cluster0.gfsfdna.mongodb.net/?retryWrites=true&w=majority"
mongoose.set("strictQuery", true);

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });