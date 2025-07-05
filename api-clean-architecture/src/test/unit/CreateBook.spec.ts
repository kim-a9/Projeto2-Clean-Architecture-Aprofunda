import bookServices from '../../services/book-service';
import bookStorage from '../../storage/book-storage';

describe('createBook', () => {
    beforeEach(() => {
        bookStorage.books = [];
    })

    it('deve criar um livro e guardar no storage', async () => {
        const book = bookServices.createBook({
            title: "Quarto de Despejo", 
            author: "Carolina Maria de Jesus", 
            genre: "diario"
        });

        expect(book).toHaveProperty('id');
        expect(bookStorage.books).toHaveLength(1);
        
    });

    // it('não permite que um livro seja registrado duas vezes')
    



});