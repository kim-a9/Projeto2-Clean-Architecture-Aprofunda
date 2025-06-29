import { v4 as uuidv4 } from 'uuid';
import { Book } from '../models/book-model';

interface BookData {
    title: string;
    author: string;
    genre: string; 
}

export default {
    create: ({ title, author, genre }: BookData) => {
        return new Book ({
            id: uuidv4(),
            title,
            author,
            genre,
            created_at: new Date().toLocaleDateString('pt-BR')
        });
    },
};

