import { Router } from "express";
import * as authRouter from "./auth.service.js";
const router = Router();

router.post("/signUp", authRouter.signUp);
router.post("/logIn", authRouter.logIn);
router.post("/upload", authRouter.upload);

export default router;
