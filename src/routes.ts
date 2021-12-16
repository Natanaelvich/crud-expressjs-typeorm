import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";

const routes = Router();

routes.get("/category", new GetAllCategoriesController().handle);
routes.post("/category", new CreateCategoryController().handle);
routes.delete("/category/:id", new DeleteCategoryController().handle);

export default routes;
