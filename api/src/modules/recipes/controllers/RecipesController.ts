import { Request, Response } from 'express';
import CreateRecipeService from '../services/CreateRecipeService';
import DeleteRecipeService from '../services/DeleteRecipeService';
import ListRecipeService from '../services/ListRecipeService';
import ShowRecipeService from '../services/ShowRecipeService';
import UpdateRecipeService from '../services/UpdateRecipeService';

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

    const createRecipeService = new CreateRecipeService();

    const recipe = await createRecipeService.execute({
      title,
      shortDescription,
      medicName,
      documentPath,
      relatedDrugs,
    });

    return response.status(200).json(recipe);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { title, shortDescription, medicName, documentPath, relatedDrugs } =
      request.body;

    const updateRecipeService = new UpdateRecipeService();

    await updateRecipeService.execute(id, {
      title,
      shortDescription,
      medicName,
      documentPath,
      relatedDrugs,
    });

    return response.sendStatus(204);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteRecipeService = new DeleteRecipeService();

    await deleteRecipeService.execute({ id });

    return response.sendStatus(204);
  }
}
