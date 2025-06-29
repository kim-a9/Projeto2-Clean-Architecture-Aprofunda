export class Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    created_at: string;

    constructor({ id, title, author, genre, created_at}: {
        id: string;
        title: string;
        author: string;
        genre: string;
        created_at: string;
    }) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.created_at = created_at;
    }
}