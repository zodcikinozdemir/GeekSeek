CREATE DATABASE GeekSeek_db;
USE GeekSeek_db;


CREATE TABLE Geek
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(100) NOT NULL,
	zipCode varchar(10),
	HTML varchar(5),
	CSS varchar(5),
	JAVASCRIPT varchar(5),
	MYSQL varchar(5),
	NODE varchar(5),
	created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

CREATE TABLE Seeker
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(100) NOT NULL,
	zipCode varchar(10),
	companyName varchar(100),
	devoured boolean not null default 0,
	created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

CREATE TABLE Skill
(
	id int NOT NULL AUTO_INCREMENT,
	skillName varchar(100) NOT NULL,
	difficulty integer default 0,
	active boolean not null default 1,
	created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

CREATE TABLE GeekSkill
(
	id int NOT NULL AUTO_INCREMENT,
	GeekId int NOT NULL,
	SkillId int NOT NULL,
	Rating int,
	created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

CREATE TABLE SeekerSkill
(
	id int NOT NULL AUTO_INCREMENT,
	SeekerId int NOT NULL,
	SkillId int NOT NULL,
	Rating int,
	Weight int,
	created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);
