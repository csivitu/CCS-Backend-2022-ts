import axios from "axios";
import config from "config";
// import rp from "request-promise";
// import url from "url";
// import hbs from "express-handlebars";
// import { constants } from "./constants";
// import { UserDocument } from "../models/user.model";
import logger from "../utils/logger";

const SENGRID_API_KEY = config.get("sengrid_api_key");

export const sendMail = async (
  email: string,
  subject: string,
  content: string
) => {
  try {
    await axios.post("https://emailer-api.csivit.com/email", {
      html: content,
      subject,
      to: email,
      auth: SENGRID_API_KEY,
    });
    logger.info(`Mail sent to ${email} successfully`);
  } catch (e) {
    logger.error(e);
  }
};

// export const verifyRecaptcha = async (response: string) => {
//   const recaptcha = await rp({
//     method: "POST",
//     uri: "https://www.google.com/recaptcha/api/siteverify",
//     form: {
//       secret: process.env.RECAPTCHA_SECRET,
//       response,
//     },
//     json: true,
//   });
//   return recaptcha.success === true;
// };

export default sendMail;
