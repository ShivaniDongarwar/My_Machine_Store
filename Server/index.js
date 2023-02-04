import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes/routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

// import crypto from "crypto"
// const key=crypto.randomBytes(64).toString('hex');
// console.log("key===>",key)
dotenv.config({ path: "./config.env" });
const app1 = express();
const app2 = express();
app1.use(express.json({ limit: "30mb", extended: true }));
app2.use(express.json({ limit: "30mb", extended: true }));
app1.use(express.urlencoded({ limit: "30mb", extended: true }));
app2.use(express.urlencoded({ limit: "30mb", extended: true }));

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
app2.use(cookieParser());
app1.use(cookieParser());
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
