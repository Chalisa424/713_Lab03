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

CREATE TABLE books (
    id INT PRIMARY KEY,         
    title VARCHAR(255),                      
    author_name VARCHAR(255),                
    description TEXT,                                        
    publication_year YEAR,                     
    pages INT,                                  
    language VARCHAR(255),                      
    available_copies INT                        
);

