import expressLoader from "./express";
import mongooseLoader from "./mongoose";
import express from "express";
import passport from "passport";
import passportLoader from "./passport";

export default async ({ expressApp }: { expressApp: express.Application }) => {
  await mongooseLoader();
  console.log("Database connected");

  passportLoader(passport);
  console.log("Passport configured");

  expressLoader({ app: expressApp });
  console.log("Express loaded");
};
