import { getCustomRepository } from 'typeorm';
import { RecipeRepository } from '../repositories/RecipesRepository';
import Recipe from '../typeorm/entities/Recipe';

export default class ListRecipeService {
  public async execute(): Promise<Recipe[]> {
    const recipeRepository = getCustomRepository(RecipeRepository);
    const recipes = await recipeRepository.find();
    return recipes;
  }
}
