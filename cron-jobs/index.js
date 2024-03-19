import mongoose from "mongoose";
import nodemailer from "nodemailer";
import { DB_NAME } from "../server/constants.js";
import { Contact } from "../server/models/Contact.model.js";
import cron from "node-cron";
import dotenv from "dotenv";
import axios from "axios";
import mongodb from "mongodb";
dotenv.config({
  path: "../server/.env",
});

// mongoose
//   .connect(`${process.env.DB_URL}/${DB_NAME}`)
//   .then(() => {
//     console.log("Database is connected");
//   })
//   .catch((err) => {
//     console.log(`Database connection failed ${err}`);
//   });

// // const transporter = nodemailer.createTransport({
// //   service: `${process.env.SERVICE}`,
// //   auth: {
// //     user: `${process.env.USER_ID}`,
// //     pass: `${process.env.PASSWORD}`,
// //   },
// // });
// // console.log(process.env.SERVICE,process.env.USER_ID,process.env.PASSWORD)

// // const sendEmailNotification = async (submission) => {
// //   const mailOptions = {
// //     from: `${process.env.USER_ID}@${process.env.SERVICE}.com`,
// //     to: `${process.env.EMAIL}`,
// //     subject: `${submission.subject}`,
// //     text: `
// //         Email: ${submission.email}
// //         Message: ${submission.message}
// //       `,
// //   };
// //   try {
// //     await transporter.sendMail(mailOptions);
// //     console.log("Email notification sent for new contact form submission");
// //   } catch (error) {
// //     console.error("Error sending email notification:", error);
// //   }
// // };

// // const checkAndSendEmailNotifications = async () => {
// //   try {
// //     const newSubmissions = await ContactSchema.find({
// //       sentNotification: false,
// //     }).exec();
// //     console.log(newSubmissions);

// //     for (const submission of newSubmissions) {
// //       await sendEmailNotification(submission);

// //       submission.sentNotification = true;
// //       await submission.save();
// //     }
// //   } catch (error) {
// //     console.error("Error checking and sending email notifications:", error);
// //   }
// // };

// // const checkAndSendEmailNotifications = async () => {
// //   try {
// //     const updatedSubmissions = await ContactSchema.aggregate([
// //       {
// //         $match: { sentNotification: false },
// //       },
// //       {d
// //         $set: { sentNotification: true },
// //       },
// //       {
// //         $maxTimeMS: 30000,
// //       },
// //     ]).exec();

// //     console.log(updatedSubmissions);

// //     // for (const submission of updatedSubmissions) {
// //     //   await sendEmailNotification(submission);
// //     // }
// //   } catch (error) {
// //     console.error("Error checking and sending email notifications:", error);
// //   }
// // };

// // checkAndSendEmailNotifications();

// // setInterval(checkAndSendEmailNotifications, 1000);

// // const fetchDataWithSentNotificationFalse = async () => {
// //   try {
// //     const data = (await axios.get(`http://localhost:8080/contact/getall`)).data
// //       .data;

// //     return data;
// //   } catch (error) {
// //     throw new Error(
// //       "Error fetching data with sentNotification false: " + error.message
// //     );
// //   }
// // };

// // fetchDataWithSentNotificationFalse()
// //   .then((datas) => {
// //     for (const data of datas) {
// //       const { email, subject, message } = data;
// //       console.log(email, subject, message);
// //     }
// //   })
// //   .catch((error) => {
// //     console.error(error);
// //   });

// const getallContacts = async (req, res) => {
//   const users = await Contact.find({ sentNotification: false });
//   //   console.log(users);
//   return res
//     .status(200)
//     .json(new ApiResponse(200, users, "All details recieved successfully"));
// };

// getallContacts();

const MongoClient = mongodb.MongoClient;

// MongoDB connection URL
const url = process.env.DB_URL;
// Database Name
const dbName = DB_NAME;
// Collection Name
const collectionName = "contacts";

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: `${process.env.SERVICE}`,
  auth: {
    user: `${process.env.USER_ID}`,
    pass: `${process.env.PASSWORD}`,
  },
});
// const transporter = nodemailer.createTransport({
//   service: "your_email_service_provider",
//   auth: {
//     user: "your_email@example.com",
//     pass: "your_email_password",
//   },
// });


// Connect to MongoDB
mongoose
  .connect(`${process.env.DB_URL}/${DB_NAME}`,)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(`Database connection failed ${err}`);
  });

MongoClient.connect(url, function (err, client) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  // Find documents where sentNotification is false
  collection
    .find({ sentNotification: false })
    .toArray(function (err, messages) {
      if (err) {
        console.log(err);
        return;
      }

      messages.forEach((message) => {
        const mailOptions = {
          from: `${process.env.USER_ID}@${process.env.SERVICE}.com`,
          to: `${process.env.EMAIL}`,
          subject: message.subject,
          text: `
              Email: ${submission.email},
              Message: ${submission.message}message.message
              `,
        };

        // Send mail with defined transport object
        transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
            console.log(err);
            return;
          }
          console.log("Email sent: " + info.response);

          // Update the document in MongoDB to mark as sent and record the timestamp
          collection.updateOne(
            { _id: message._id },
            { $set: { sentNotification: true, sent_at: new Date() } },
            function (err, result) {
              if (err) {
                console.log(err);
              }
            }
          );
        });
      });
    });
});
