import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryRequest = {
  id: string;
  name: string;
  description: string;
};

export class UpdateCategoryService {
  async execute({ id, name, description }: CategoryRequest) {
    const repo = getRepository(Category);

    const category = await repo.findOne(id);

    if (!category) {
      return new Error("category not found");
    }

    const categoryExistsWithName = await repo.findOne({ name });

    if (categoryExistsWithName) {
      return new Error("category already exists with this name");
    }

    category.name = name;
    category.description = description;

    await repo.save(category);

    return category;
  }
}
