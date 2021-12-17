import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateMovieController } from "./controllers/CreateMovieController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { GetAllMoviesController } from "./controllers/GetAllMoviesController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";

const routes = Router();

routes.get("/category", new GetAllCategoriesController().handle);
routes.post("/category", new CreateCategoryController().handle);
routes.put("/category/:id", new UpdateCategoryController().handle);
routes.delete("/category/:id", new DeleteCategoryController().handle);

routes.get("/movie", new GetAllMoviesController().handle);
routes.post("/movie", new CreateMovieController().handle);

export default routes;
