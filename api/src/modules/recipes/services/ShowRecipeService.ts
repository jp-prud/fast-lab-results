import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { RecipeRepository } from '../repositories/RecipesRepository';
import Recipe from '../typeorm/entities/Recipe';

interface IRequest {
  id: string;
}

export default class ShowRecipeService {
  public async execute({ id }: IRequest): Promise<Recipe> {
    const recipeRepository = getCustomRepository(RecipeRepository);

    const recipe = await recipeRepository.findOne(id);

    if (!recipe) throw new AppError('Recipe not found');

    return recipe;
  }
}
