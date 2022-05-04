import { Router } from 'express';
import { test } from '../controllers/TestController.js';
const router = Router();


router.get('/api/test', test);

export default router;