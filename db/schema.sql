DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
use burger_db;
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);