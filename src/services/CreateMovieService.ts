import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Movie } from "../entities/Movie";

type MovieRequest = {
  name: string;
  description: string;
  duration: number;
  category_id: string;
};

export class CreateMovieService {
  async execute({ name, description, category_id, duration }: MovieRequest) {
    const repo = getRepository(Movie);
    const repoCategory = getRepository(Category);

    const categoryExists = await repoCategory.findOne({ id: category_id });

    if (!categoryExists) {
      return new Error("category does not exists!");
    }

    const movie = repo.create({
      name,
      description,
      duration,
      category_id,
    });

    await repo.save(movie);

    return movie;
  }
}
