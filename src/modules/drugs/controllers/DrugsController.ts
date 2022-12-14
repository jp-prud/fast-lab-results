import { Request, Response } from 'express';

import CreateDrugService from '../services/CreateDrugService';
import DeleteDrugService from '../services/DeleteDrugService';
import ListDrugService from '../services/ListDrugService';
import ShowDrugService from '../services/ShowDrugService';
import UpdateDrugService from '../services/UpdateDrugService';

export default class DrugsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listDrugService = new ListDrugService();

    const drugs = await listDrugService.execute();

    return response.status(200).json(drugs);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showDrugService = new ShowDrugService();

    const drug = await showDrugService.execute({ id });

    return response.status(200).json(drug);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const { name, shortDescription } = request.body;

    const createDrugService = new CreateDrugService();

    const drug = await createDrugService.execute({ name, shortDescription });

    return response.status(200).json(drug);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, shortDescription } = request.body;

    const updateDrugService = new UpdateDrugService();

    await updateDrugService.execute({
      id,
      data: { name, shortDescription },
    });

    return response.sendStatus(204);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteDrugService = new DeleteDrugService();

    await deleteDrugService.execute({ id });

    return response.sendStatus(204);
  }
}
