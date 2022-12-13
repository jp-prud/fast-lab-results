import Router from 'express';
import RecipesController from '../controllers/RecipesController';

const recipesRouter = Router();
const recipesController = new RecipesController();

recipesRouter.get('/', recipesController.index);
recipesRouter.get('/:id', recipesController.show);
recipesRouter.post('/', recipesController.store);
recipesRouter.patch('/:id', recipesController.update);
recipesRouter.delete('/:id', recipesController.delete);

export default recipesRouter;
