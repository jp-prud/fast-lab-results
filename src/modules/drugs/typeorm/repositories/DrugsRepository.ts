import { EntityRepository, Repository } from 'typeorm';
import Drug from '../entities/Drug';

@EntityRepository(Drug)
export class DrugsRepository extends Repository<Drug> {
  public async findByName(name: string): Promise<Drug | undefined> {
    return await this.findOne({
      where: {
        name,
      },
    });
  }
}
