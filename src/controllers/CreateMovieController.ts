import { Request, Response } from "express";
import { CreateMovieService } from "../services/CreateMovieService";

export class CreateMovieController {
  async handle(request: Request, response: Response) {
    const { name, description, duration, category_id } = request.body;

    const service = new CreateMovieService();

    const result = await service.execute({
      name,
      description,
      duration,
      category_id,
    });

    if (result instanceof Error) {
      return response.status(400).json({ message: result.message });
    }

    return response.json(result);
  }
}
