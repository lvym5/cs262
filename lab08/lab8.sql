-- Lab #8: Lily McAboy and Kenny Howes
-- This SQL file is used to retrieve from the monopoly database set up in lab 7. 
-- Date: 11/1/2024

-- Exercise 8.1

-- Retrieve a list of all the games, ordered by date with the most recent game coming first. 
-- SELECT * FROM game ORDER BY time DESC;

-- Retrieve all the games that occured in the past week
-- SELECT * FROM game WHERE time >= '10/25/2024 12:00:00 AM';

-- Retrieve a list of players who have (non-NULL) names
-- SELECT ID FROM player WHERE name IS NOT NULL;

-- Retrieve a list of IDs for players who have some game score larger than 2000
-- SELECT playerid FROM playergame WHERE score > 2000;

-- Retrieve a list of players who have GMail accounts
-- SELECT ID FROM player WHERE emailaddress LIKE '%gmail%';

-- Exercise 8.2

-- Retrieve all "The King";s game scores in decreasing order
-- SELECT playergame.score FROM playergame, player WHERE playerid = player.id AND player.name = 'The King' ORDER BY score DESC;

-- Retrieve the name of the winer of the game played on 2006-06-28 13.20.00
-- SELECT player.name FROM playergame, game, player WHERE playergame.gameid = game.id AND playergame.playerid = player.id AND game.time = '2006-06-28 13:20:00' ORDER BY playergame.score ASC LIMIT 1;

-- What does that P1.ID < P2.ID clause do in the last example query?
-- Since ID is usually ordered by a the next distinct number, if p2.ID is greater than p1.ID, then player 1 was a registered player before player 2 became a registered player. 

-- The query that joined the player table to itself seems rather contrived. Can you think of a realisitc situation in whciih you'd want to join a table to itself? 
-- If you inner join a table on itself, it will filter out any null in the entire table without trying to find each column that has a null. Also, it allows you to find duplicates of a specific column that are actually two different entries because sometimes names or quantities have duplicates but the IDs are always unique. 
