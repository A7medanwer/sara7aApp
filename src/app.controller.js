import authRouter from "./Modules/auth/auth.controller.js";
import userRouter from "./Modules/user/user.controller.js";
import messageRouter from "./Modules/message/message.controller.js";
import connectDB from "./DB/connectionDB.js";
import glopalErorrHandelar from "./Utils/errorHandelar.utils.js";
const bootstrap = async (app, express) => {
  app.use(express.json());
  await connectDB();

  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/message", messageRouter);

  app.all("/*dummy", (err, req, res, next) => {
    return res.status(404).json({ message: "not found handelar", err });
  });

  app.use(glopalErorrHandelar);
};
export default bootstrap;
