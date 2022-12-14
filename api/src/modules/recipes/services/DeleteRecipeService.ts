import { getCustomRepository } from 'typeorm';
import { RecipeRepository } from '../repositories/RecipesRepository';

interface IRequest {
  id: string;
}

export default class DeleteRecipeService {
  public async execute({ id }: IRequest): Promise<void> {
    const recipeRepository = getCustomRepository(RecipeRepository);

    const recipe = await recipeRepository.findOne(id);

    if (!recipe) throw new Error('Recipe not found');

    await recipeRepository.remove(recipe);
  }
}
