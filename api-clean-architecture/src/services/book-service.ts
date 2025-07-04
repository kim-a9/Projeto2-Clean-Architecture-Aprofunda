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

    getBookById: (id: string): Book | undefined => {
        return bookStorage.getById(id);
    },

    updateBook: (id: string, data: Partial<BookData>): Book | null => {
        const book = bookStorage.getById(id);

        if (!book) {
            return null;
        }

        if (data.title != null) {
            book.title = data.title;
        }
        if (data.author != null) {
            book.author = data.author;
        }
        if (data.genre != null) {
            book.genre = data.genre;
        }

        return book;
    },

    delBook: (id: string): Book[] => {
        return bookStorage.deleteBook(id);

    }


};