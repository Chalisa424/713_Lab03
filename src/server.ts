/////////////////////////////////Lab03 ///////////////////////////////////////
// Lab03 ขอทำแยกจากงานเดิมนะคะ มีการเพิ่มเติมข้อมูลของ Book และ Event จาก Lab02 ในไฟล์นี้นะคะ

import express, { Request, Response } from 'express';
import { getAllEvents, getEventByCategory, getEventById, addEvent } from "./service/EventService";
import type { Event } from "./service/EventService";

import { getAllBooks, getBookByCategory, getBookById, addBook } from "./service/BookService";
import type { Book } from "./service/BookService";

const app = express();
const port = 3000;
app.use(express.json());
app.set("json spaces", 2);


///////////////////////////////////////Event/////////////////////////////////////
////endpoint
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

//เพิ่ม endpoint /test เพื่อรับค่า id และส่งค่า id กลับไป
app.get("/test", (req, res) => {
    const id = req.query.id;
    const output = `id: ${id}`;
    res.send(output);
});

// เพิ่ม endpoint /events เพื่อกรองข้อมูลตาม category
app.get("/events", async (req, res) => {
    if (req.query.category) {
        const category = req.query.category;
        const filteredEvents = await getEventByCategory(category as string);
        res.json(filteredEvents);
    } else {
        res.json(await getAllEvents());
    }
});



// เพิ่ม endpoint /events/:id เพื่อดึงข้อมูล event ตาม id
app.get("/events/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const event = await getEventById(id);
    if (event) {
        res.json(event);
    } else {
        res.status(404).send("Event not found");
    }
});

//เพิ่ม endpoint /events แบบ POST เพื่อเพิ่มข้อมูล event
app.post("/events", async (req, res) => { 
    const newEvent: Event = req.body;
    await addEvent(newEvent);
    res.json(newEvent);
});


///////////////////////////////////////Book/////////////////////////////////////

////endpoint
// เปลี่ยน res.json(books);เป็น res.json(getAllBooks()); เพื่อให้เรียก function ที่สร้างไว้
app.get('/books', (req: Request, res: Response) => {
    res.json(getAllBooks());
});

// เพิ่ม endpoint /search-books เพื่อค้นหาหนังสือตาม category
app.get('/search-books', (req: Request, res: Response) => {
    const category = req.query.category as string;
    if (category) {
        res.json(getBookByCategory(category));
    } else {
        res.json([]);
    }
});


////endpoint
// เพิ่ม endpoint /books/:id เพื่อดึงข้อมูล book ตาม id
app.get("/books/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const book = getBookById(id);

    if (book) {
        res.json(book);
    } else {
        res.status(404).send("Book not found");
    }
});

//สร้าง post methods เพื่อเพิ่มข้อมูล
app.post("/books", (req: Request, res: Response) => {
    const newBook: Book = req.body;

    // เช็คว่า id ของหนังสือที่ส่งมามีอยู่ในระบบหรือไม่
    const existingBookIndex = getAllBooks().findIndex((book) => book.id === newBook.id);

    if (existingBookIndex !== -1) {
        addBook(newBook);
        res.json({ message: "Book updated successfully", book: newBook });
    } else {
        const addedBook = addBook(newBook);
        res.json({ message: "Book added successfully", book: addedBook });
    }
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
