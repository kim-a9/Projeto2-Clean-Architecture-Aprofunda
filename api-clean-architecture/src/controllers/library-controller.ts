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

export const listBook = (req: Request, res: Response): void => {
    const { id } = req.query;

    const book = bookServices.getBookById(id as string);    ///book?id=
    if(!book) {
        res.status(404).json({ message: `Livro ${id} não foi encontrado`});
        return;
    }
    res.json(book);
};

export const updateBook = (req: Request, res: Response): void => {
  const { id } = req.params;
  const updateBook = bookServices.updateBook(id, req.body);

  if (!updateBook) {
    res.status(404).json({ message: `Livro ${id} não foi encontrado` });
    return;
  }
  res.json({ message:  `Livro ${id} editado com sucesso` });
};



