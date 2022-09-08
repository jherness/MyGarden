-- Dumping database structure for mygarden
CREATE DATABASE IF NOT EXISTS `mygarden`; 
USE `mygarden`;
/*
drop database mygarden
*/

/*
drop table samples;
*/

create table samples(
   dt_of_sample datetime default CURRENT_TIMESTAMP PRIMARY KEY,
    key1 FLOAT NOT NULL,
    key2 FLOAT NOT NULL,
    key3 FLOAT NOT NULL,
    key4 FLOAT NOT NULL,
    key5 FLOAT NOT NULL,
    key6 FLOAT NOT NULL
);

INSERT INTO samples (KEY1, KEY2, KEY3, KEY4, KEY5, KEY6)
VALUES (1, 2, 3, 4, 5, 6)

select * from samples;