import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Drug from '../typeorm/entities/Drug';
import { DrugsRepository } from '../repositories/DrugsRepository';

interface IRequest {
  name: string;
  shortDescription: string;
}

class CreateDrugService {
  public async execute({ name, shortDescription }: IRequest): Promise<Drug> {
    const drugsRepository = getCustomRepository(DrugsRepository);
    const drugsIsAlreadyExists = await drugsRepository.findByName(name);

    if (drugsIsAlreadyExists) {
      throw new AppError('Drugs is already exists with this name');
    }

    const newDrug = drugsRepository.create({
      name,
      shortDescription,
    });

    await drugsRepository.save(newDrug);

    return newDrug;
  }
}

export default CreateDrugService;
