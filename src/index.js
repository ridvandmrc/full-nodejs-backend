import express from "express";
import cors from "cors";
import { countryRouter } from "./module/index.js";

const app = express();

app.use("/country", countryRouter);

app.get("/", (req, response) => {
  response.json({ message: "loo" });
});

/* app.options("*", cors()); */

app.listen(80);
