/////////////////////////////////Lab03 ///////////////////////////////////////
// Lab03 ขอทำแยกจากงานเดิมนะคะ มีการเพิ่มเติมข้อมูลของ Book และ Event จาก Lab02 ในไฟล์นี้นะคะ

import express, { Request, Response } from 'express';
const app = express();
const port = 3000;
app.use(express.json());
app.set("json spaces", 2);
///////////////////////////////////////Event/////////////////////////////////////
// เพิ่มการประกาศ interface Event
interface Event {
    id: number;
    category: string;
    title: string;
    description: string;
    location: string;
    date: string;
    time: string;
    petsAllowed: boolean;
    organizer: string;
}


// สร้างตัวแปร events เพื่อเก็บข้อมูล list ของ events
const events: Event[] = [
    {
        id: 1,
        category: "Sports",
        title: "Football Match",
        description: "A football match between two local teams.",
        location: "City Stadium",
        date: "2025-03-10",
        time: "18:00",
        petsAllowed: false,
        organizer: "City Sports Club",
    },
    {
        id: 2,
        category: "Music",
        title: "Music Concert",
        description: "A live music concert featuring popular bands.",
        location: "Downtown Arena",
        date: "2025-04-05",
        time: "20:00",
        petsAllowed: true,
        organizer: "Live Music Events",
    },
    {
        id: 3,
        category: "Art",
        title: "Art Exhibition",
        description: "An exhibition showcasing modern art.",
        location: "Art Museum",
        date: "2025-05-15",
        time: "10:00",
        petsAllowed: false,
        organizer: "Modern Art Association",
    },
    {
        id: 4,
        category: "Sports",
        title: "Basketball Game",
        description: "A basketball game between two rival teams.",
        location: "National Basketball Court",
        date: "2025-06-20",
        time: "19:30",
        petsAllowed: false,
        organizer: "National Sports League",
    },
    {
        id: 5,
        category: "Technology",
        title: "Tech Conference",
        description: "A conference on the latest trends in technology.",
        location: "Convention Center",
        date: "2025-07-10",
        time: "09:00",
        petsAllowed: false,
        organizer: "Tech Innovators Group",
    },
    {
        id: 6,
        category: "Food",
        title: "Food Festival",
        description: "A festival featuring various local and international cuisines.",
        location: "City Park",
        date: "2025-08-15",
        time: "12:00",
        petsAllowed: true,
        organizer: "Gourmet Events",
    },
];


///////////////////////////////////////Book/////////////////////////////////////
// เพิ่มการประกาศ interface Book
interface Book {
    id: number;
    title: string;
    author_name: string;
    description: string;
    groups: string[];
    publication_year?: number;
    pages?: number;
    language?: string;
    available_copies?: number;
}

// สร้างตัวแปร books เพื่อเก็บข้อมูล list ของ books
const books: Book[] = [
    {
        id: 1,
        title: "Fullmetal Alchemist",
        author_name: "Hiromu Arakawa",
        description:
            "Edward and Alphonse Elric break alchemy's ultimate taboo—human transmutation—to revive their mother, but their attempt fails disastrously. Edward loses a leg, Alphonse his body, and Edward sacrifices an arm to bind his brother's soul to armor. Seeking to restore themselves, they pursue the Philosopher's Stone, uncovering sinister truths along the way.",
        groups: ["Group1", "Group2"],
        publication_year: 2001,
        pages: 108,
        language: "Japanese",
        available_copies: 5,
    },
    {
        id: 2,
        title: "Attack on Titan",
        author_name: "Hajime Isayama",
        description:
            "In a world where humanity resides within enormous walled cities to escape the monstrous Titans, young Eren Yeager vows to eliminate them after witnessing the destruction of his home. As he joins the military, he uncovers deep conspiracies about the Titans' true origins.",
        groups: ["Group2", "Group3"],
        publication_year: 2009,
        pages: 120,
        language: "Japanese",
        available_copies: 3,
    },
    {
        id: 3,
        title: "Death Note",
        author_name: "Tsugumi Ohba",
        description:
            "A high school student, Light Yagami, discovers a mysterious notebook that allows him to kill anyone whose name he writes in it. With his newfound power, he sets out to cleanse the world of criminals, but soon finds himself in a cat-and-mouse game with the genius detective L.",
        groups: ["Group1", "Group3"],
        publication_year: 2003,
        pages: 108,
        language: "Japanese",
        available_copies: 7,
    },
    {
        id: 4,
        title: "One Piece",
        author_name: "Eiichiro Oda",
        description:
            "Monkey D. Luffy, a young pirate with the ability to stretch his body like rubber, sets out on a grand adventure to find the legendary One Piece and become the King of the Pirates. Along the way, he gathers a diverse crew and faces formidable foes.",
        groups: ["Group1", "Group2"],
        publication_year: 1997,
        pages: 200,
        language: "Japanese",
        available_copies: 10,
    },
    {
        id: 5,
        title: "Naruto",
        author_name: "Masashi Kishimoto",
        description:
            "Naruto Uzumaki, an orphaned ninja, dreams of becoming the strongest ninja and earning the title of Hokage. With the power of the Nine-Tailed Fox sealed within him, he faces many trials, makes loyal friends, and battles powerful enemies to achieve his goal.",
        groups: ["Group2", "Group3"],
        publication_year: 1999,
        pages: 150,
        language: "Japanese",
        available_copies: 6,
    },
    {
        id: 6,
        title: "Dragon Ball",
        author_name: "Akira Toriyama",
        description:
            "The adventures of Goku, a powerful martial artist with a pure heart, as he trains, fights powerful enemies, and seeks the mystical Dragon Balls that grant any wish. Along the way, he forms friendships and battles legendary warriors.",
        groups: ["Group1", "Group3"],
        publication_year: 1984,
        pages: 180,
        language: "Japanese",
        available_copies: 4,
    },
];

///////////////////////////////////////Event/////////////////////////////////////
////เพิ่ม function
// สร้าง function getEventByCategory(category: string) เพื่อค้นหา event ตาม category
function getEventByCategory(category: string): Event[] {
    const filteredEvents = events.filter((event) => event.category === category);
    return filteredEvents;
}
// สร้าง function getAllEvents() เพื่อคืนค่า event ทั้งหมด
function getAllEvents(): Event[] {
    return events;
}
// สร้าง function getEventById(id: number) เพื่อค้นหา event ตาม id 
function getEventById(id: number): Event | undefined {
    return events.find((event) => event.id === id);
}
// สร้าง function addEvent(newEvent: Event) เพื่อเพิ่ม event ใหม่
function addEvent(newEvent: Event): Event {
    newEvent.id = events.length + 1;
    events.push(newEvent);
    return newEvent;
}

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
app.get("/events", (req, res) => {
    if (req.query.category) {
        const category = req.query.category as string;
        const filteredEvents = getEventByCategory(category as string);
        res.json(filteredEvents);
    } else {
        res.json(getAllEvents());
    }
});


// เพิ่ม endpoint /events/:id เพื่อดึงข้อมูล event ตาม id
app.get("/events/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const event = getEventById(id);
    if (event) {
        res.json(event);
    } else {
        res.status(404).send("Event not found");
    }
});

//เพิ่ม endpoint /events แบบ POST เพื่อเพิ่มข้อมูล event
app.post("/events", (req, res) => {       
    const newEvent: Event = req.body;
    addEvent(newEvent);
    res.json(newEvent);
});

///////////////////////////////////////Book/////////////////////////////////////
////เพิ่ม function
// สร้าง function getBookByCategory(category: string) เพื่อค้นหา book ตาม category
function getBookByCategory(category: string): Book[] {
    const filteredBooks = books.filter((book) => book.groups.includes(category));
    return filteredBooks;
}
// สร้าง function getAllEvents() เพื่อคืนค่า event ทั้งหมด
function getAllBooks(): Book[] {
    return books;
}
// สร้าง function getBookById(id: number) เพื่อค้นหา book ตาม id 
function getBookById(id: number): Book | undefined {
    return books.find((book) => book.id === id);
}
// สร้าง function addBook(newBook: Book) เพื่อเพิ่ม book ใหม่
function addBook(newBook: Book): Book {
    newBook.id = books.length + 1;
    books.push(newBook);
    return newBook;
}


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
    const existingBookIndex = books.findIndex((book) => book.id === newBook.id);

    if (existingBookIndex !== -1) {
        books[existingBookIndex] = newBook;
        res.json({ message: "Book updated successfully", book: newBook });
    } else {
        const addedBook = addBook(newBook);
        res.json({ message: "Book added successfully", book: addedBook });
    }
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
