import { DrugsRepository } from '@modules/drugs/repositories/DrugsRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { RecipeRepository } from '../repositories/RecipesRepository';
import Recipe from '../typeorm/entities/Recipe';

interface IRequest {
  title: string;
  shortDescription: string;
  medicName: string;
  documentPath: string;
  relatedDrugs: string[];
  consumer?: string;
}

export default class CreateRecipeService {
  public async execute({
    title,
    shortDescription,
    medicName,
    documentPath,
    relatedDrugs,
  }: IRequest): Promise<Recipe> {
    const recipeRepository = getCustomRepository(RecipeRepository);
    const drugRepository = getCustomRepository(DrugsRepository);

    const recipeIsAlreadyExists = await recipeRepository.findByTitle(title);

    if (recipeIsAlreadyExists) throw new AppError('Title is already exists');

    const drugs = await drugRepository.findByIds(relatedDrugs);

    if (drugs.length === 0) {
      throw new AppError('Does not find any drugs with ids.');
    }

    const newRecipe = recipeRepository.create({
      title,
      shortDescription,
      medicName,
      documentPath,
      relatedDrugs: drugs,
    });

    await recipeRepository.save(newRecipe);

    return newRecipe;
  }
}
