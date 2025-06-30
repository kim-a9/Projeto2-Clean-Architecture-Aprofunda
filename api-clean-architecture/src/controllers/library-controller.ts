import { Request, Response } from 'express';
import bookServices from '../services/book-service';

export const createBook = (req: Request, res: Response): void => {
    const { title, author, genre } = req.body;

    const newBook = bookServices.createBook({ title, author, genre });
    res.status(201).json({message: `Livro ${newBook.title} adicionado com sucesso`});
};

export const listBooks = (req: Request, res: Response): void => {
    const allBooks = bookServices.getAllBooks();
    res.json(allBooks); 
};

