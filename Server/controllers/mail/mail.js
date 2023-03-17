import nodemailer from "nodemailer";
import enquiry from "../../modale/enquiry.js";
import adminDetail from "../../modale/adminDetail.js";

export const mail = async (req, res) => {
  const { id } = req.query;
  const { formUrl } = req.query;

  try {
    const newUser = await enquiry.findOne({
      _id: id,
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
      subject: "MyMachineStore.com",
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

export const sign_in_mail = async (req, res) => {
  const { emailId } = req.body;
  try {
    const existingEmailId = await adminDetail.findOne({
      emailId: emailId,
    });
    if (!existingEmailId) {
      res.status(404).json("Not found");
    }
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
    const mailOptions = {
      to: `${existingEmailId.emailId}`,
      from: "shivani06.dongarwar@gmail.com",
      subject: "MyMachineStore.com",
      text: "hello this is the body of the email",
      html: `Thank you for registration this is your user name:${existingEmailId.emailId} and password:${existingEmailId.password}`,
    };
    await transport.sendMail(mailOptions)
    return res.status(200).json("Message send successful");

  } catch(err) {
    console.log("error----->", err.message);
    return res.status(500).json("someting went wrong......");
  }
};
