CREATE DATABASE GeekSeek_db;
USE GeekSeek_db;

CREATE TABLE Geek
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	phone varchar(25),
	zip varchar(10),
	created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

CREATE TABLE Seeker
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(100) NOT NULL,
	company varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	phone varchar(25),
	zip varchar(10),
	devoured boolean not null default 0,
	created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

CREATE TABLE Skill
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(100) NOT NULL,
	dificulty integer default 0,
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
