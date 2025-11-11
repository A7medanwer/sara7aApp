import { EventEmitter } from "node:events";
import { template } from "../Emails/generateHTML.js";
import { emailSubject, sendEmail } from "../../Utils/Emails/email.utils.js";
export const eventEmitter = new EventEmitter();

eventEmitter.on("confirmEmail", async (data) => {
  await sendEmail({
    to: data.to,
    subject: emailSubject.confirmEmail,
    html: template(data.otp, data.firstName),
  }).catch((err) => {
    console.log(`Error in sending confirm email ${err}`);
  });
});
