import { Book } from '../models/Book';
import * as repo from "../repository/BookRepository";

export function getBookByCategory(category: string): Promise<Book[]> {
    return repo.getBookByCategory(category);
}

export function getAllBooks(): Promise<Book[]> {
    return repo.getAllBooks();
}

export function getBookById(id: number): Promise<Book | undefined> {
    return repo.getBookById(id);
}

export function addBook(newBook: Book): Promise<Book> {
    return repo.addBook(newBook);
}





