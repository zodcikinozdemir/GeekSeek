CREATE TABLE Users
(
    id INTEGER  NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    zipCode varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    salt varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Geeks
(
    id INTEGER  NOT NULL AUTO_INCREMENT,
    html INTEGER,
    css INTEGER,
    javascript INTEGER,
    mysql INTEGER,
    node INTEGER,
    UserId INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (UserId) REFERENCES Users(id)
);

CREATE TABLE Seekers
(
    id INTEGER  NOT NULL AUTO_INCREMENT,
    companyName varchar(255),
    UserId INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (UserId) REFERENCES Users(id)
);

CREATE TABLE Queries
(
    id INTEGER  NOT NULL AUTO_INCREMENT,
    queryName varchar(255) NOT NULL,
    html INTEGER,
    css INTEGER,
    javascript INTEGER,
    mysql INTEGER,
    node INTEGER,
    UserId INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (UserId) REFERENCES Users(id)
);

CREATE TABLE Skills
(
    id INTEGER  NOT NULL AUTO_INCREMENT,
    skillName varchar(100) NOT NULL,
    difficulty integer default 0,
    active boolean not null default 1,
    PRIMARY KEY (id)
);