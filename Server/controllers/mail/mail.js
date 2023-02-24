import nodemailer from "nodemailer";
import enquiry from "../../modale/enquiry.js";
export const mail = async (req, res) => {
  const { id } = req.query;
  const { formUrl } = req.query;

  try {
    const newUser = await enquiry.findOne({
      _id: id,
    });
    // if (newUser) {
    //   await enquiry.findOneAndUpdate(
    //     { _id: id },
    //     {
    //       $addToSet: {
    //         "approve_vendor.$[].company_name": newUser.company_name,
    //         // "approve_vendor.$[].email": newUser.email,
    //         // "approve_vendor.$[].phone_no": newUser.phone_no,
    //         // "approve_vendor.$[].location": newUser.location,
    //       },
    //     }
    //   );
    // }
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
    console.log("transport===>", mailOptions);

    const newUser2 = await transport.sendMail(mailOptions);

    console.log("newUser===>", newUser);
    return res.status(200).json({ result: newUser });
  } catch (err) {
    console.log("error----->", err.message);
    return res.status(500).json("someting went wrong......");
  }
};
