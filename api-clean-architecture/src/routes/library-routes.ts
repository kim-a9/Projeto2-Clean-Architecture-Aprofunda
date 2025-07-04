import express from "express";
import { listBooks, createBook, listBook } from '../controllers/library-controller';

const router = express.Router();


router.get('/books', listBooks);    // Listagem de todos os livros
router.post('/books', createBook);  //  Criação de livros
router.get('/book', listBook);  // Listagem de livro pelo id


export default router;