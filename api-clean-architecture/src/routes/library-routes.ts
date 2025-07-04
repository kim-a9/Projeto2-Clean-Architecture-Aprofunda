import express from "express";
import { listBooks, createBook, listBook, updateBook } from '../controllers/library-controller';

const router = express.Router();


router.get('/books', listBooks);    // Listagem de todos os livros
router.post('/books', createBook);  //  Criação de livros
router.get('/book', listBook);  // Listagem de livro pelo id
router.patch('/book/:id', updateBook);  //Atualiza informações do livro


export default router;