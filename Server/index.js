import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes/routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import multer from "multer";
import cloudinary  from "cloudinary"
import bodyParser from "body-parser";
import fs from "fs"
// import crypto from "crypto"
// const key=crypto.randomBytes(64).toString('hex');
// console.log("key===>",key)
dotenv.config({ path: "./config.env" });
const app1 = express();
const app2 = express();
app1.use(express.json({  extended: true }));
app2.use(express.json({ extended: true }));
app1.use(express.urlencoded({  extended: true }));
app2.use(express.urlencoded({ extended: true }));

app1.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    exposedHeaders: ["Set-Cookie", "Date", "ETag"],
  })
);
app2.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
    exposedHeaders: ["Set-Cookie", "Date", "ETag"],
  })
);

app1.get("/", (req, res) => {
  return res.send("This is the Trade Enquiry api");
});
app2.get("/", (req, res) => {
  return res.send("This is the Trade Enquiry api");
});
app1.use("/enquiry", routes);
app2.use("/enquiry", routes);
// const storage=multer.diskStorage({
//   destination:function(req,file,cb){
//     cb(null,"uploads")
//   },
//   filename: function (req, file, cb) {
//     cb(null , file.originalname);
//  }
// })
// let upload=multer({storage:storage})
app2.use(bodyParser.urlencoded({ extended: true }));
app2.use(bodyParser.json())
app2.use("/uploads",express.static("uploads"))
app2.use("/logo",express.static("logo"))
// app2.use(multer().any())

app2.use(cookieParser());
app1.use(cookieParser());
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET
// });
const PORT1 = process.env.PORT || 5000;
const PORT2 = process.env.PORT || 5001;
const CONNECTION_URL = process.env.DATABASE;

mongoose.set("strictQuery", true);

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    if (app1) {
      app1.listen(PORT1, () => {
        console.log(`server running on ${PORT1}`);
      });
    }
    if (app2) {
      app2.listen(PORT2, () => {
        console.log(`server running on ${PORT2}`);
      });
    }
  })
  .catch((error) => {
    console.log(error.message);
  });
