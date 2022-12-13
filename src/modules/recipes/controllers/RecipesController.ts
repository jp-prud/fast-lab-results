import { Request, Response } from 'express';
import DeleteRecipeService from '../services/DeleteRecipeService';
import ListRecipeService from '../services/ListRecipeService';
import ShowRecipeService from '../services/ShowRecipeService';

export default class RecipesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listRecipeService = new ListRecipeService();

    const recipes = await listRecipeService.execute();

    return response.status(200).json(recipes);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showRecipeService = new ShowRecipeService();

    const recipe = await showRecipeService.execute({ id });

    return response.status(200).json(recipe);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const { title, shortDescription, medicName, documentPath, relatedDrugs } =
      request.body;

    console.log({
      title,
      shortDescription,
      medicName,
      documentPath,
      relatedDrugs,
    });

    return response.status(200);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { title, shortDescription, medicName, documentPath, relatedDrugs } =
      request.body;

    console.log({
      title,
      shortDescription,
      medicName,
      documentPath,
      relatedDrugs,
    });

    return response.status(200);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteRecipeService = new DeleteRecipeService();

    await deleteRecipeService.execute({ id });

    return response.status(201);
  }
}
