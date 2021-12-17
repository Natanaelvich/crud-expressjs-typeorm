import "reflect-metadata";

import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

import "./database";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, _: Request, response: Response, __: NextFunction) => {
  // if (err instanceof AppError) {
  //   return response.status(err.statusCode).json({
  //     status: 'error',
  //     message: err.message,
  //   });
  // }

  return response.status(500).json({
    status: "error",
    message: `Internal server error: ${err.message}`,
  });
});

app.listen(3000, () => console.log("Server is running"));
