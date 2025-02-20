CREATE TABLE events (
    id INT PRIMARY KEY,
    category VARCHAR(255),
    title VARCHAR(255),
    description TEXT,
    location VARCHAR(255),
    date DATE,
    time TIME,
    petsAllowed BOOLEAN,
    organizer VARCHAR(255)
);
