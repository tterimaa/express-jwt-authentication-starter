import { Router } from "express";
import registrationService from "../../services/registration";
import loginService from "../../services/login";
import { checkRole } from "../middlewares/authorization";
import passport from "passport";
import asyncHandler from "express-async-handler";

const route = Router();

export default (app: Router) => {
  app.use("/users", route);

  route.post(
    "/register",
    asyncHandler(async (req, res, _next) => {
      const user = await registrationService.registerUser(req.body);
      res.status(200).json({ success: true, msg: user });
    })
  );

  route.post(
    "/login",
    asyncHandler(async (req, res, _next) => {
      const { username, password } = req.body;
      const tokenObject = await loginService.login(username, password);

      res.status(200).json({
        success: true,
        token: tokenObject.token,
        expires: tokenObject.expires,
      });
    })
  );

  route.get(
    "/protected",
    passport.authenticate("jwt", { session: false }),
    (_req, res, _next) => {
      res.status(200).json({
        success: true,
        msg: "This route is visible for all authenticated users!",
      });
    }
  );

  route.get(
    "/protected-admin",
    passport.authenticate("jwt", { session: false }),
    checkRole(["admin"]),
    (_req, res, _next) => {
      res.status(200).json({
        success: true,
        msg: "This route is for admin users only!",
      });
    }
  );
};
