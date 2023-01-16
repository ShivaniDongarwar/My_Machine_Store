import nodemailer from "nodemailer";
import enquiry from "../modale/enquiry.js";
export const email = async (req, res) => {
  // console.log(req)
  // const { id } = req.query;
  // console.log("id===>",id)
  //static
  // const URL = "http://localhost:3000/adminForm";
  // try {
  //   const transport = await nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //       user: "shivani06.dongarwar@gmail.com",
  //       pass: "ydubhqkvqsrvwpkq",
  //     },
  //     tls: {
  //       rejectUnauthorized: false,
  //     },
  //   });
  //   const mailOptions = {
  //     to: "shivanidongarwar96@gmail.com",
  //     from: "shivani06.dongarwar@gmail.com",
  //     subject: "this is the test email",
  //     text: "hello this is the body of the email",
  //     html:URL,
  //   };
  //    transport.sendMail(mailOptions);

  //   console.log("newUser===>", newUser);
  //   return res.status(200).json({ result: newUser });
  // } catch (err) {
  //   console.log("error----->", err.message);
  //   return res.status(500).json("someting went wrong......");
  // }

  const { id } = req.query;
  const { formUrl } = req.query;
  // console.log("id====>",req.query.id);
  // try {

  //   const newUser = await enquiry.findOne({
  //     _id:id
  //   });
  //   console.log("newUser===>", newUser);
  //   return res.status(200).json({ result: newUser });
  // } catch (err) {
  //    console.log("error----->",err.message)
  //   return res.status(500).json("someting went wrong......");

  // }
  try {
    const newUser = await enquiry.findOne({
          _id:id
        });
        console.log("newUser===>", newUser);
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "shivani06.dongarwar@gmail.com",
        pass: "ydubhqkvqsrvwpkq",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    console.log("transport===>", transport);

    const mailOptions = {
      to: `${newUser.email}`,
      from: "shivani06.dongarwar@gmail.com",
      subject: "this is the test email",
      text: "hello this is the body of the email",
      html: `${formUrl}`,
    };
    console.log("transport===>",mailOptions );

    const newUser2=await transport.sendMail(mailOptions);

    console.log("newUser===>", newUser);
    return res.status(200).json({ result: newUser2 });
  } catch (err) {
    console.log("error----->", err.message);
    return res.status(500).json("someting went wrong......");
  }
};
