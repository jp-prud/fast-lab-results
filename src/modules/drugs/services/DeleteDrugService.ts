import { getCustomRepository } from 'typeorm';
import { DrugsRepository } from '../repositories/DrugsRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}

class DeleteDrugService {
  public async execute({ id }: IRequest): Promise<void> {
    const drugsRepository = getCustomRepository(DrugsRepository);

    const drug = await drugsRepository.findOne(id);

    if (!drug) throw new AppError('Drug not found');

    await drugsRepository.remove(drug);
  }
}

export default DeleteDrugService;
