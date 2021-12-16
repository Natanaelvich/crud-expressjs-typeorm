import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async execute({ name, description }: CategoryRequest) {
    const repo = getRepository(Category);

    const categoryExists = await repo.findOne({name})

    if(categoryExists){
         return new Error("category already exists")
    }

    const category = repo.create({
      name,
      description,
    });

    await repo.save(category);

    return category
  }
}
