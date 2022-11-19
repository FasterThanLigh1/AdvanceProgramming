import {Router} from 'express';

import {createBook, findBook , listBooks, findMyBooks} from '../controller/book.api.js';

const router = Router();

router.put('/', createBook);
router.get('/id/:bookId', findBook);
// router.get('/all', findAllBooks);
router.get('/:userId', findMyBooks);
router.get('/:userId/all', listBooks);

export default router;
