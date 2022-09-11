-- Dumping database structure for mygarden
CREATE DATABASE IF NOT EXISTS `mygarden`; USE `mygarden`;
/*
drop database mygarden
*/

/*
drop table samples;
drop table Users;
*/
CREATE TABLE samples(
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	dt_of_sample DATETIME DEFAULT CURRENT_TIMESTAMP,
 	key1 FLOAT NOT NULL,
 key2 FLOAT NOT NULL,
 key3 FLOAT NOT NULL,
 key4 FLOAT NOT NULL,
 key5 FLOAT NOT NULL,
 key6 FLOAT NOT NULL
);
INSERT INTO samples (KEY1, KEY2, KEY3, KEY4, KEY5, KEY6) VALUES (1, 2, 3, 4, 5, 6)
SELECT *
FROM samples;


/*histroy_and_reasons Table*/
CREATE TABLE `activation_history` (
	`dateTime_of_activation` DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`finish_hour` TIME DEFAULT CURRENT_TIMESTAMP() NOT NULL,
	`activation_code` INT(11) NOT NULL DEFAULT '0', PRIMARY KEY (`dateTime_of_activation`) USING BTREE, INDEX `activations_key` (`activation_code`) USING BTREE, CONSTRAINT `activation_key` FOREIGN KEY (`activation_code`) REFERENCES `mygarden`.`activation` (`activation_code`) ON
UPDATE NO ACTION ON
DELETE NO ACTION
) COLLATE='utf8mb4_general_ci' ENGINE=InnoDB
;

/*
INSERT INTO activation_history (activation_code)
VALUES (7)
*/
SELECT *
FROM activation_history;
/*
drop TABLE activation_history
*/



/*future activition times Table*/
CREATE TABLE `schedule_activation` (
	`start_hour` TIME NOT NULL,
	`time_to_live` INT NOT NULL,
	`sunday` TINYINT(1) NOT NULL,
	`monday` TINYINT(1) NOT NULL,
	`tuesday` TINYINT(1) NOT NULL,
	`wednesday` TINYINT(1) NOT NULL,
	`thursday` TINYINT(1) NOT NULL,
	`friday` TINYINT(1) NOT NULL,
	`saturday` TINYINT(1) NOT NULL,
	`air_sys` TINYINT(1) NOT NULL,
	`water_sys` TINYINT(1) NOT NULL,
	`light_sys` TINYINT(1) NOT NULL,
	`fertelize_sys` TINYINT(1) NOT NULL, PRIMARY KEY (`start_hour`) USING BTREE
)
SELECT *
FROM schedule_activation
DROP TABLE schedule_activation


/*exception Table*/
CREATE TABLE `exceptions` (
	`exception_code` INT(11) NOT NULL,
	`handle_description` VARCHAR(70) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_general_ci', PRIMARY KEY (`exception_code`) USING BTREE
) COLLATE='utf8mb4_general_ci' ENGINE=InnoDB
;


/*activition Table*/
CREATE TABLE `activation` (
	`activation_code` INT(11) NOT NULL,
	`activation_reason` VARCHAR(30) NOT NULL COLLATE 'utf8mb4_general_ci', PRIMARY KEY (`activation_code`) USING BTREE
) COLLATE='utf8mb4_general_ci' ENGINE=InnoDB
;
INSERT INTO activation (activation_code, activation_reason) VALUES
(1, '1a'),(2, '2a'),(3, '3a'),(4, '4a'),
(5, '5a'),(6, '6a'),(7, '7a'),(8, '8a'),
(9, '9a'),(10, '10a'),(11, '11a'),(12, '12a'),
(13, '13a'),(14, '14a'),(15, '15a'),(16, '16a');
SELECT *
FROM activation


/*currently_active*/
CREATE TABLE `currently_active` (
	`id` INT AUTO_INCREMENT NOT NULL PRIMARY KEY ,
	`air_sys` TINYINT(1) ZEROFILL DEFAULT(0) NOT NULL,
	`water_sys` TINYINT(1) ZEROFILL DEFAULT(0) NOT NULL,
	`light_sys` TINYINT(1) ZEROFILL DEFAULT(0) NOT NULL,
	`fertelize_sys` TINYINT(1) ZEROFILL DEFAULT(0) NOT NULL
) COLLATE='utf8mb4_general_ci'
;


DELETE
FROM currently_active;


SELECT * 
FROM currently_active  
ORDER BY id DESC
LIMIT 1
INSERT INTO currently_active(fertelize_sys) VALUES(1)


/*Insert into samples*/
INSERT INTO `mygarden`.`sample history` (`DateTime_Of_Sample`) VALUES ('2022-09-10 00:12:34');
INSERT INTO `mygarden`.`sample history` (`DateTime_Of_Sample`) VALUES ('2022-09-10 00:12:50');
INSERT INTO `mygarden`.`sample history` (`DateTime_Of_Sample`) VALUES ('2022-09-10 00:13:07');
INSERT INTO `mygarden`.`sample history` (`DateTime_Of_Sample`) VALUES ('2022-09-10 00:13:12');
INSERT INTO `mygarden`.`sample history` (`DateTime_Of_Sample`) VALUES ('2022-09-10 00:13:24');
INSERT INTO `mygarden`.`sample history` (`DateTime_Of_Sample`) VALUES ('2022-09-10 00:13:34');
INSERT INTO `mygarden`.`sample history` (`DateTime_Of_Sample`) VALUES ('2022-09-10 00:13:38');
INSERT INTO `mygarden`.`sample history` (`DateTime_Of_Sample`) VALUES ('2022-09-10 00:13:46');
INSERT INTO `mygarden`.`sample history` (`DateTime_Of_Sample`) VALUES ('2022-09-10 00:13:51');
INSERT INTO `mygarden`.`sample history` (`DateTime_Of_Sample`) VALUES ('2022-09-10 00:13:58');
INSERT INTO `mygarden`.`sample history` (`DateTime_Of_Sample`) VALUES ('2022-09-10 00:14:07');
INSERT INTO `mygarden`.`sample history` (`DateTime_Of_Sample`) VALUES ('2022-09-10 00:14:16');
INSERT INTO `mygarden`.`sample history` (`DateTime_Of_Sample`) VALUES ('2022-09-10 00:14:19');



/*iNSERT  vALUES FOR exceptionexceptionORY*/
INSERT INTO `mygarden`.`exceptions` (`exception_code`) VALUES ('1');
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=1;
INSERT INTO `mygarden`.`exceptions` (`exception_code`) VALUES ('2');
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=2;
INSERT INTO `mygarden`.`exceptions` (`exception_code`) VALUES ('3');
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=3;
INSERT INTO `mygarden`.`exceptions` (`exception_code`) VALUES ('4');
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=4;
INSERT INTO `mygarden`.`exceptions` (`exception_code`) VALUES ('5');
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=5;
INSERT INTO `mygarden`.`exceptions` (`exception_code`) VALUES ('6');
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=6;
INSERT INTO `mygarden`.`exceptions` (`exception_code`) VALUES ('7');
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=7;
INSERT INTO `mygarden`.`exceptions` (`exception_code`) VALUES ('8');
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=8;
INSERT INTO `mygarden`.`exceptions` (`exception_code`) VALUES ('9');
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=9;
INSERT INTO `mygarden`.`exceptions` (`exception_code`) VALUES ('10');
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=10;
INSERT INTO `mygarden`.`exceptions` (`exception_code`) VALUES ('11');
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=11;
INSERT INTO `mygarden`.`exceptions` (`exception_code`) VALUES ('12');
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=12;
INSERT INTO `mygarden`.`exceptions` (`exception_code`) VALUES ('13');
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=13;
INSERT INTO `mygarden`.`exceptions` (`exception_code`) VALUES ('14');
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=14;
INSERT INTO `mygarden`.`exceptions` (`exception_code`) VALUES ('15');
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=15;
INSERT INTO `mygarden`.`exceptions` (`exception_code`) VALUES ('16');
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=16;
SELECT *
FROM exceptions
UPDATE `mygarden`.`exceptions` SET `handle_description`='[False, False, False, False]'
WHERE `exception_code`=1;
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=1;
UPDATE `mygarden`.`exceptions` SET `handle_description`='[True, False, False, False]'
WHERE `exception_code`=2;
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=2;
UPDATE `mygarden`.`exceptions` SET `handle_description`='[False, True, False, False]'
WHERE `exception_code`=3;
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=3;
UPDATE `mygarden`.`exceptions` SET `handle_description`='[False, False, True, False]'
WHERE `exception_code`=4;
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=4;
UPDATE `mygarden`.`exceptions` SET `handle_description`='[False, False, False, True]'
WHERE`exception_code`=5;
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=5;
UPDATE `mygarden`.`exceptions` SET `handle_description`='[False, True, True, False]'
WHERE `exception_code`=6;
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=6;
UPDATE `mygarden`.`exceptions` SET `handle_description`='[False, True, True, True]'
WHERE `exception_code`=7;
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=7;
UPDATE `mygarden`.`exceptions` SET `handle_description`='[False, True, False, True]'
WHERE `exception_code`=8;
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=8;
UPDATE `mygarden`.`exceptions` SET `handle_description`='[False, False, True, True]'
WHERE `exception_code`=9;
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=9;
UPDATE `mygarden`.`exceptions` SET `handle_description`='[True, True, False, False]'
WHERE `exception_code`=10;
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=10;
UPDATE `mygarden`.`exceptions` SET `handle_description`='[True, False, True, False]'
WHERE `exception_code`=11;
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=11;
UPDATE `mygarden`.`exceptions` SET `handle_description`='[True, False, False, True]'
WHERE `exception_code`=12;
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=12;
UPDATE `mygarden`.`exceptions` SET `handle_description`='[True, True, True, False]'
WHERE `exception_code`=13;
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=13;
UPDATE `mygarden`.`exceptions` SET `handle_description`='[True, True, False, True]'
WHERE `exception_code`=14;
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=14;
UPDATE `mygarden`.`exceptions` SET `handle_description`='[True, True, True, True]'
WHERE `exception_code`=15;
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=15;
UPDATE `mygarden`.`exceptions` SET `handle_description`='[True, False, True, True]'
WHERE `exception_code`=16;
SELECT `exception_code`, `handle_description`
FROM `mygarden`.`exceptions`
WHERE `exception_code`=16;
