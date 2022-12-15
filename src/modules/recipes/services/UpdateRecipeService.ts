import { DrugsRepository } from "@modules/drugs/repositories/DrugsRepository";
import AppError from "@shared/errors/AppError";
import { RecipeRepository } from "../repositories/RecipesRepository";

interface IRequest {
  title: string;
  shortDescription: string;
  medicName: string;
  documentPath: string;
  relatedDrugs: any;
  consumer?: string;
}

export default class UpdateRecipeService {
  public async execute(
    id: string,
    { title, shortDescription, medicName, documentPath, relatedDrugs }: IRequest
  ): Promise<UpdateResult> {
    const recipeRepository = getCustomRepository(RecipeRepository);
    const drugRepository = getCustomRepository(DrugsRepository);

    const recipe = await recipeRepository.findOne(id);

    if (!recipe) throw new AppError("Does not exist recipe with this id");

    const recipeIsAlreadyExists = await recipeRepository.findByTitle(title);

    if (recipeIsAlreadyExists && id !== recipe.id)
      throw new AppError("Recipe with this name is already exists");

    const drugs: any = await drugRepository.findByIds(relatedDrugs);

    if (drugs.length === 0) {
      throw new AppError("Does not find any drugs with ids.");
    }

    const updatedRecipe = await recipeRepository.update(id, {
      title,
      shortDescription,
      medicName,
      documentPath,
      relatedDrugs: drugs,
    });

    return updatedRecipe;
  }
}
function getCustomRepository(DrugsRepository: any) {
  throw new Error("Function not implemented.");
}

