import { getCustomRepository } from 'typeorm';
import { RecipeRepository } from '../repositories/RecipesRepository';

interface IRequest {
  id: string;
}

export default class ShowRecipeService {
  public async execute({ id }: IRequest) {
    const recipeRepository = getCustomRepository(RecipeRepository);

    const recipe = await recipeRepository.find({ id });

    if (!recipe) throw new Error('Recipe not found');

    return recipe;
  }
}
