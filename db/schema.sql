CREATE TABLE Users
(
    id INTEGER  NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    zipCode varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    salt varchar(255) NOT NULL,
    createdAt TIMESTAMP, 
    updatedAt TIMESTAMP, 
    deletedAt TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE Geeks
(
    id INTEGER  NOT NULL AUTO_INCREMENT,
    -- username varchar(100) NOT NULL,
    -- zipCode varchar(10),
    html INTEGER,
    css INTEGER,
    javascript INTEGER,
    mysql INTEGER,
    node INTEGER,
    UserId INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (UserId) REFERENCES Users(id)
    -- FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE Seekers
(
    id INTEGER  NOT NULL AUTO_INCREMENT,
    -- username varchar(100) NOT NULL,
    -- zipCode varchar(10),
    companyName varchar(255),
    updatedAt TIMESTAMP, 
    deletedAt TIMESTAMP, 
    UserId INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (UserId) REFERENCES Users(id)
);

CREATE TABLE Querys
(
    id INTEGER  NOT NULL AUTO_INCREMENT,
    queryName varchar(255) NOT NULL,
    html INTEGER,
    css INTEGER,
    javascript INTEGER,
    mysql INTEGER,
    node INTEGER,
    UserId INTEGER,
    -- created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (UserId) REFERENCES Users(id)
);

CREATE TABLE Skills
(
    id INTEGER  NOT NULL AUTO_INCREMENT,
    skillName varchar(100) NOT NULL,
    difficulty integer default 0,
    active boolean not null default 1,
    createdAt TIMESTAMP, 
    updatedAt TIMESTAMP,
    UserId INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (UserId) REFERENCES Users(id)
);