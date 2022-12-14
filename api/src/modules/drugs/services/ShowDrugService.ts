import { getCustomRepository } from 'typeorm';
import Drug from '../typeorm/entities/Drug';
import AppError from '@shared/errors/AppError';
import { DrugsRepository } from '../repositories/DrugsRepository';

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
