///////////////////////////////////////Event/////////////////////////////////////

export interface Event {
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
////เพิ่ม function

// สร้าง function getEventByCategory(category: string) เพื่อค้นหา event ตาม category
export function getEventByCategory(category: string): Promise<Event[] {
    const filteredEvents = events.filter((event) => event.category === category);
    return Promise.resolve(filteredEvents);
}
// สร้าง function getAllEvents() เพื่อคืนค่า event ทั้งหมด
export function getAllEvents(): Promise<Event[] {
    return Promise.resolve(events);
}
// สร้าง function getEventById(id: number) เพื่อค้นหา event ตาม id 
export function getEventById(id: number): Promise<Event | undefined {
    return Promise.resolve(events.find((event) => event.id === id));
}
// สร้าง function addEvent(newEvent: Event) เพื่อเพิ่ม event ใหม่
export function addEvent(newEvent: Event): Promise<Event {
    newEvent.id = events.length + 1;
    events.push(newEvent);
    return Promise.resolve(newEvent);
}



