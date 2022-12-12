import drugsRouter from '@modules/drugs/routes/drugs.routes';
import { Router } from 'express';

const router = Router();

router.use('/drugs', drugsRouter);

export default router;
