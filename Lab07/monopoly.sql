﻿--
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author kvlinden
-- @version Summer, 2015
--

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;
DROP TABLE IF EXISTS PropertyLocation;
DROP TABLE IF EXISTS PlayerGameHouses;
DROP TABLE IF EXISTS PlayerGameHotels;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY,
	time timestamp
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer,
	cash integer,
	pieceLocation varchar(50) 
	);

CREATE TABLE PropertyLocation (
	propertyName varchar(50) PRIMARY KEY,
	owner varchar(50),
	cost integer
	); 

CREATE TABLE PlayerGameHouses (
	PlayerGameID integer REFERENCES Player(ID),
	houseLocation varchar(50),
	numberOfHouses integer
	);

CREATE TABLE PlayerGameHotels (
	PlayerGameID integer REFERENCES Player(ID),
	hotelLocation varchar(50), 
	numberOfHotels integer
	); 

-- Allow users to select data from the tables.

INSERT INTO Game VALUES (1, '2006-06-27 08:00:00');
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00');
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00');

INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

INSERT INTO PlayerGame VALUES (1, 1, 0.00, 7485, 'Boardwalk');
INSERT INTO PlayerGame VALUES (1, 2, 0.00, 29484, 'Atlantic Avenue');
INSERT INTO PlayerGame VALUES (1, 3, 2350.00, 100, 'States Avenue');
INSERT INTO PlayerGame VALUES (2, 1, 1000.00, 95739, 'Jail');
INSERT INTO PlayerGame VALUES (2, 2, 0.00, 248, 'Mediterranean Avenue');
INSERT INTO PlayerGame VALUES (2, 3, 500.00, 1937, 'Pacific Avenue');
INSERT INTO PlayerGame VALUES (3, 2, 0.00, 1963, 'Marvin Gardens');
INSERT INTO PlayerGame VALUES (3, 3, 5500.00, 9372, 'Indiana Avenue');

INSERT INTO PropertyLocation(propertyName, cost) VALUES ('St. James Place', 100);
INSERT INTO PropertyLocation VALUES ('Kentucky Avenue', 'Dogbreath', 220);
INSERT INTO PropertyLocation VALUES ('Park Place', 'The King', 350);
INSERT INTO PropertyLocation VALUES ('Pacific Avenue', 'Dogbreath', 300);

INSERT INTO PlayerGameHouses VALUES (3, 'Kentucky Avenue', 2);
INSERT INTO PlayerGameHouses VALUES (2, 'Park Place', 1);

INSERT INTO PlayerGameHotels VALUES (3, 'Pacific Avenue', 1);
INSERT INTO PlayerGameHotels VALUES (2, 'Park Place', 0);
