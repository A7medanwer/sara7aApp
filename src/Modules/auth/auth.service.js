import UserModel from "../../DB/models/user.model.js";
import successResponce from "../../Utils/successResponse.utils.js";
import * as dbService from "../../DB/db.service.js";
import { encrept } from "../../Utils/Encryption/encryption.utils.js";
import { emailSubject, sendEmail } from "../../Utils/Emails/email.utils.js";
import { eventEmitter } from "../../Utils/Events/email.event.utils.js";
import { customAlphabet } from "nanoid";
import { createHash } from "crypto";
import { template } from "../../Utils/Emails/generateHTML.js";

export const signUp = async (req, res, next) => {
  const { firstName, lastName, email, password, gender, phone } = req.body;
  // check if user(email)=> already exists or not
  //////////////
  // const checkUser = await UserModel.findOne({email}); //when you use "db.service.js"
  //////////////
  const checkUser = await dbService.findOne({
    model: UserModel,
    filter: { email },
  });

  if (checkUser) return next(new Error("User aleady exsist", { cause: 409 }));
  // encrept
  // const encreptedData = encrept(phone);
  const otp = customAlphabet("0123456789qwertyuiasdfghjkzxcv", 6)();

  const user = await dbService.create({
    model: UserModel,
    data: [
      {
        firstName,
        lastName,
        email,
        password,
        gender,
        confirmOTP: createHash("sha256").update(otp).digest("hex"),
        phone: encrept(phone),
      },
    ],
  });
  // emit
  eventEmitter.emit("ConfirmEmail", { to: email, otp, firstName });

  //you need to send email to usser to email.
  // send email ---> then confirm email//

  // await sendEmail({
  //   to: email,
  //   subject: emailSubject.confirmEmail,
  //   html: template(data.otp, data.firstName),
  // });
  // return res.status(200).json({message:"user created successfully",user}); // "db.service.js"
  return successResponce({
    res,
    statusCode: 201,
    message: "user created successfully",
    data: { user },
  });
};
export const logIn = async (req, res, next) => {
  const { email, password } = req.body;
  // check if user(email)=> already exists or not
  /////////
  // const checkUser = await UserModel.findOne({email,password});
  /////////
  const checkUser = await dbService.findOne({
    model: UserModel,
    filter: { email, password },
  });
  if (!checkUser) {
    return next(new Error("User not exsists", { cause: 404 }));
  }
  // return res.status(200).json({message:"User loggin successfully",checkUser});
  return successResponce({
    res,
    statusCode: 200,
    message: "User loggin successfully",
    data: { checkUser },
  });
};
