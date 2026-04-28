import { Router } from "express";
import { authController } from "../controllers";
import { validate } from "../middleware";
import { registerSchema, loginSchema } from "../validators/userValidator";

const router = Router() as Router;

router.post("/register", validate(registerSchema), authController.register);
router.post("/login", validate(loginSchema), authController.login);
router.post("/logout", authController.logout);
router.post("/refreshToken", authController.refreshToken);

export default router;
