import express from "express";
import chalk from "chalk";
import { country } from "../../data";
import { response } from "../../model";
import cors from "cors";

const countryRouter = express.Router();

countryRouter.use(cors({ origin: "*" }));

countryRouter.use((req, res, next) => {
  console.log(chalk.green("Country Middleware: ", Date.now()));
  next();
});

countryRouter.route("/").get((req, res) => {
  res.json(response(country));
});

export { countryRouter };
