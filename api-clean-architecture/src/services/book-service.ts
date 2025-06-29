import bookStorage from '../storage/book-storage';
import bookFactory from '../factories/book-factory';

interface BookData {
    title: string;
    author: string;
    genre: string; 
}

interface Book extends BookData {
    id: string;
    created_at: string;
}

export default {
    createBook: ({ title, author, genre }: BookData): Book => {
        const newBook = bookFactory.create({ title, author, genre })
        bookStorage.add(newBook);

        return newBook;
    }, 

    getAllBooks: (): Book[] => {
        return bookStorage.getAll();
    },

    // editBookByID: (id: string) =>{},
    // delBookByID: (id: string): Book[] => {},

};