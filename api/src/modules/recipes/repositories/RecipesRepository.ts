import { EntityRepository, Repository } from 'typeorm';
import Recipe from '../typeorm/entities/Recipe';

@EntityRepository(Recipe)
export class RecipeRepository extends Repository<Recipe> {
  public async findByName(name: string): Promise<Recipe | undefined> {
    return await this.findOne({
      where: {
        name,
      },
    });
  }
}
