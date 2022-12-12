import { getCustomRepository, UpdateResult } from 'typeorm';
import { DrugsRepository } from '../typeorm/repositories/DrugsRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
  data: {
    name: string;
    shortDescription: string;
  };
}

class UpdateDrugService {
  public async execute({
    id,
    data: { name, shortDescription },
  }: IRequest): Promise<UpdateResult> {
    const drugsRepository = getCustomRepository(DrugsRepository);

    const drug = await drugsRepository.findOne(id);

    if (!drug) throw new AppError('Drug not found');

    const drugsIsAlreadyExists = await drugsRepository.findByName(name);

    if (drugsIsAlreadyExists && name !== drug.name) {
      throw new AppError('Drug with this name is already exists');
    }

    const updatedDrug = drugsRepository.update(id, {
      name,
      shortDescription,
    });

    return updatedDrug;
  }
}

export default UpdateDrugService;
