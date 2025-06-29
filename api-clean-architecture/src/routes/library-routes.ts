import express from "express";
import { listBooks, createBook } from '../controllers/library-controller';

const router = express.Router();


router.get('/books', listBooks);
router.post('/books', createBook);

// router.get('/books/:id', listBookByID);

// router.patch('/books/:id', editBook);
// router.delete('books/:id', delBook;



export default router;