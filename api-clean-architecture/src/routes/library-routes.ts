import express from "express";
import { listBooks, createBook } from '../controllers/library-controller';

const router = express.Router();


router.get('/books', listBooks);
router.post('/books', createBook);


export default router;