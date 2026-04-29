import { Router } from "express";
import { authController } from "../controllers";
import * as middleware from "../middleware";
import { registerSchema, loginSchema } from "../validators/userValidator";

const router = Router() as Router;

router.post(
  "/register",
  middleware.validate(registerSchema),
  authController.register,
);
router.post("/login", middleware.validate(loginSchema), authController.login);
router.post("/logout", authController.logout);
router.post("/refreshToken", authController.refreshToken);

export default router;
