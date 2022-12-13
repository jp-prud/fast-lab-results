import { getCustomRepository } from 'typeorm';
import Drug from '../typeorm/entities/Drug';
import { DrugsRepository } from '../repositories/DrugsRepository';

class ListDrugService {
  public async execute(): Promise<Drug[]> {
    const drugsRepository = getCustomRepository(DrugsRepository);

    const drugs = await drugsRepository.find();

    return drugs;
  }
}

export default ListDrugService;
