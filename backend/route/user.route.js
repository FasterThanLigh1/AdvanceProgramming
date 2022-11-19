import {Router} from 'express';

import {createUser, findUser, findAll} from '../controller/user.api.js';

const router = Router();

router.put('/', createUser);
router.get('/:userId', findUser);
router.get('/all', findAll);

export default router;
