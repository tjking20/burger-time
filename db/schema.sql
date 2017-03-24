CREATE DATABASE burgers_db;
use burgers_db;

CREATE TABLE burgers
(
	id INTEGER AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);