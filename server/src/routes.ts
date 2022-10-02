import { Router } from 'express';
import * as controllers from './controllers';



export const router = Router();

router.get('/', controllers.test)
