import { getCustomRepository } from 'typeorm';
import Drug from '../typeorm/entities/Drug';
import { DrugsRepository } from '../typeorm/repositories/DrugsRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

class ShowDrugService {
  public async execute({ id }: IRequest): Promise<Drug> {
    const drugsRepository = getCustomRepository(DrugsRepository);

    const drug = await drugsRepository.findOne(id);

    if (!drug) throw new AppError('Drug not found');

    return drug;
  }
}

export default ShowDrugService;
