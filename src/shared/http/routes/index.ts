import { Router } from 'express';

import drugsRouter from '@modules/drugs/routes/drugs.routes';
import recipesRouter from '@modules/recipes/routes/recipes.routes';

const router = Router();

router.use('/drugs', drugsRouter);
router.use('/recipes', recipesRouter);

export default router;
