import express from "express";
import cors from "cors";
import { countryRouter, serviceRouter } from "./module/index.js";

const app = express();

app.use("/country", countryRouter);

app.use(serviceRouter);

app.get("*", (req, response) => {
  response.json({ message: "loo" });
});

/* app.options("*", cors()); */

app.listen(process.env.PORT || 8081);
