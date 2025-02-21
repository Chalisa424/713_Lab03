import mysql from 'mysql2/promise';

// Connection สำหรับฐานข้อมูล events
const eventConnection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'rootpassword',
  database: 'events',  // ฐานข้อมูล events
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Connection สำหรับฐานข้อมูล books
const bookConnection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'rootpassword',
  database: 'books',  // ฐานข้อมูล books
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export ทั้งสอง connection
export { eventConnection, bookConnection };