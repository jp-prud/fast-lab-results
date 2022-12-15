import { celebrate, Joi, Segments } from 'celebrate';
import Router from 'express';
import RecipesController from '../controllers/RecipesController';

const recipesRouter = Router();
const recipesController = new RecipesController();

recipesRouter.get('/', recipesController.index);

recipesRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  recipesController.show,
);

recipesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().max(150).required(),
      shortDescription: Joi.string().required(),
      medicName: Joi.string().max(100).required(),
      documentPath: Joi.string().required(),
      relatedDrugs: Joi.array()
        .items(Joi.string().uuid().required())
        .required(),
      consumer: Joi.string(),
    },
  }),
  recipesController.store,
);

recipesRouter.patch(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      title: Joi.string().max(150).required(),
      shortDescription: Joi.string().required(),
      medicName: Joi.string().max(100).required(),
      documentPath: Joi.string().required(),
      relatedDrugs: Joi.array().items(Joi.string()),
    },
  }),
  recipesController.update,
);

recipesRouter.delete(

  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),

  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  recipesController.delete,
,
);

export default recipesRouter;
