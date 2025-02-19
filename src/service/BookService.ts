///////////////////////////////////////Book/////////////////////////////////////

export interface Book {
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

////เพิ่ม function
// สร้าง function getBookByCategory(category: string) เพื่อค้นหา book ตาม category
export function getBookByCategory(category: string): Book[] {
    const filteredBooks = books.filter((book) => book.groups.includes(category));
    return filteredBooks;
}
// สร้าง function getAllEvents() เพื่อคืนค่า event ทั้งหมด
export function getAllBooks(): Book[] {
    return books;
}
// สร้าง function getBookById(id: number) เพื่อค้นหา book ตาม id 
export function getBookById(id: number): Book | undefined {
    return books.find((book) => book.id === id);
}
// สร้าง function addBook(newBook: Book) เพื่อเพิ่ม book ใหม่
export function addBook(newBook: Book): Book {
    newBook.id = books.length + 1;
    books.push(newBook);
    return newBook;
}
