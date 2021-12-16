import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryRequest = {
  id: string;
};

export class DeleteCategoryService {
  async execute({ id }: CategoryRequest) {
    const repo = getRepository(Category);

    const categoryExists = await repo.findOne({id})

    if(!categoryExists){
        return new Error("Category not found")
    }
    
    await repo.delete({ id });
  }
}
