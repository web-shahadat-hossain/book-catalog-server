import express from 'express';
import { bookController } from './book.controller';

const router = express.Router();

router.post(
  '/create-book',
bookController.createBook

);
router.get(
  '/:id',
bookController.getSingleBook
);


router.patch(
  '/:email',
bookController.updateBook
);

router.delete(
  '/:email',
bookController.deleteBook
);


router.get(
  '/',
bookController.getAllBook

);


export const bookRouters = {
  router,
};