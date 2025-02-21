import type { Book } from "../models/Book";
import { bookConnection } from "../db";

export async function getBookByCategory(category: string): Promise<Book[]> {
  const [rows] = await bookConnection.execute('SELECT * FROM books WHERE category = ?', [category]);
  return rows as Book[];
}

export async function getAllBooks(): Promise<Book[]> {
  const [rows] = await bookConnection.execute('SELECT * FROM books');
  return rows as Book[];
}

export async function getBookById(id: number): Promise<Book | undefined> {
  const [rows] = await bookConnection.execute('SELECT * FROM books WHERE id = ?', [id]);
  const books = rows as Book[];
  return books.length > 0 ? books[0] : undefined;
}

export async function addBook(newBook: Book): Promise<Book> {
  const { title, author_name, description, publication_year, pages, language, available_copies } = newBook;

  const [result] = await bookConnection.execute(
    'INSERT INTO books (title, author_name, description, publication_year, pages, language, available_copies) VALUES (?, ?, ?, ?, ?, ?, ?)', // ลบ placeholder ตัวที่ 8 ออก
    [title, author_name, description, publication_year, pages, language, available_copies]
  );
  

  // เพิ่ม id ที่ได้จาก insertId ไปยัง newBook
  const insertedBook: Book = {
    ...newBook, // ใช้ข้อมูลจาก newBook
    id: (result as any).insertId // เพิ่ม id ที่ได้จากการ insert
  };

  return insertedBook; // คืนค่าหนังสือที่มี id
}

