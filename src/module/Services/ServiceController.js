import chalk from "chalk";
import express from "express";
import { services } from "../../data";
import { response } from "../../model";

const serviceRouter = express.Router();

serviceRouter.use((req, res, next) => {
  console.log(chalk.green("serviceController: ", Date.now()));
  next();
});

serviceRouter.route("/services").get((req, res, next) => {
  res.json(response(services));
});

serviceRouter.get("/services/:id", (req, res) => {
  const { id } = req.params;
  const serviceDetail = services.find((service) => service.id == id);

  res.json(
    response(
      serviceDetail,
      serviceDetail
        ? null
        : {
            code: 302,
            message: "Service Detail can not be found",
          }
    )
  );
});
export { serviceRouter };
