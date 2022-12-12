import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import DrugsController from '../controllers/DrugsController';

const drugsRouter = Router();
const drugsController = new DrugsController();

drugsRouter.get('/', drugsController.index);

drugsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  drugsController.show,
);

drugsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      shortDescription: Joi.string().required(),
    },
  }),
  drugsController.store,
);

drugsRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      shortDescription: Joi.string().required(),
    },
  }),
  drugsController.update,
);

drugsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  drugsController.delete,
);

export default drugsRouter;
