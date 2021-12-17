import { plainToInstance } from "class-transformer";
import { getRepository } from "typeorm";
import { Movie } from "../entities/Movie";

export class GetAllMoviesService {
  async execute() {
    const repo = getRepository(Movie);

    const categories = await repo.find({relations : ['category']})

    return plainToInstance(Movie,categories)
  }
}
