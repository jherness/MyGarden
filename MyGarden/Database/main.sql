-- Dumping database structure for mygarden
CREATE DATABASE IF NOT EXISTS `mygarden`; 
USE `mygarden`;
/*
drop database mygarden
*/

/*
drop table samples;
drop table Users;
*/

create table samples(
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
		dt_of_sample datetime default CURRENT_TIMESTAMP,
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




/*histroy_and_reasons Table*/

CREATE TABLE `Activation History` (
	`DateTime_Of_Activiton` DATETIME NOT NULL,
	`Start_Hour` TIME NOT NULL,
	`Finish_Hour` TIME NOT NULL,
	`Activition_Code` INT(11) NOT NULL DEFAULT '0',
	`Exception_Code` INT(11) NOT NULL DEFAULT '0',
	PRIMARY KEY (`DateTime_Of_Activiton`) USING BTREE,
	INDEX `Activition_key` (`Activition_Code`) USING BTREE,
	INDEX `Exception_key` (`Exception_Code`) USING BTREE,
	CONSTRAINT `Activition_key` FOREIGN KEY (`Activition_Code`) REFERENCES `mygarden`.`activition` (`Activition_Code`) ON UPDATE NO ACTION ON DELETE NO ACTION,
	CONSTRAINT `Exception_key` FOREIGN KEY (`Exception_Code`) REFERENCES `mygarden`.`exception` (`Exception_Code`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
;


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
	`fertelize_sys` TINYINT(1) NOT NULL,
	PRIMARY KEY (`start_hour`) USING BTREE
)

SELECT * FROM schedule_activation

DROP TABLE schedule_activation


/*exception Table*/



CREATE TABLE `Exceptions` (
	`Exception_Code` INT(11) NOT NULL,
	`Handle_Description` VARCHAR(70) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_general_ci',
	PRIMARY KEY (`Exception_Code`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
;


/*activition Table*/


CREATE TABLE `Activation Reason` (
	`Activition_Code` INT(11) NOT NULL,
	`Activition_Reason` VARCHAR(30) NOT NULL COLLATE 'utf8mb4_general_ci',
	PRIMARY KEY (`Activition_Code`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
;

/*iNSERT fAKE vALUES FOR sAMPLE HISTORY*/

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

INSERT INTO `mygarden`.`exception` (`Exception_Code`) VALUES ('1');
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=1;
INSERT INTO `mygarden`.`exception` (`Exception_Code`) VALUES ('2');
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=2;
INSERT INTO `mygarden`.`exception` (`Exception_Code`) VALUES ('3');
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=3;
INSERT INTO `mygarden`.`exception` (`Exception_Code`) VALUES ('4');
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=4;
INSERT INTO `mygarden`.`exception` (`Exception_Code`) VALUES ('5');
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=5;
INSERT INTO `mygarden`.`exception` (`Exception_Code`) VALUES ('6');
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=6;
INSERT INTO `mygarden`.`exception` (`Exception_Code`) VALUES ('7');
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=7;
INSERT INTO `mygarden`.`exception` (`Exception_Code`) VALUES ('8');
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=8;
INSERT INTO `mygarden`.`exception` (`Exception_Code`) VALUES ('9');
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=9;
INSERT INTO `mygarden`.`exception` (`Exception_Code`) VALUES ('10');
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=10;
INSERT INTO `mygarden`.`exception` (`Exception_Code`) VALUES ('11');
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=11;
INSERT INTO `mygarden`.`exception` (`Exception_Code`) VALUES ('12');
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=12;
INSERT INTO `mygarden`.`exception` (`Exception_Code`) VALUES ('13');
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=13;
INSERT INTO `mygarden`.`exception` (`Exception_Code`) VALUES ('14');
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=14;
INSERT INTO `mygarden`.`exception` (`Exception_Code`) VALUES ('15');
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=15;
INSERT INTO `mygarden`.`exception` (`Exception_Code`) VALUES ('16');







UPDATE `mygarden`.`exception` SET `Handle_Description`='[False, False, False, False]' WHERE  `Exception_Code`=1;
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=1;
UPDATE `mygarden`.`exception` SET `Handle_Description`='[True, False, False, False]' WHERE  `Exception_Code`=2;
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=2;
UPDATE `mygarden`.`exception` SET `Handle_Description`='[False, True, False, False]' WHERE  `Exception_Code`=3;
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=3;
UPDATE `mygarden`.`exception` SET `Handle_Description`='[False, False, True, False]' WHERE  `Exception_Code`=4;
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=4;
UPDATE `mygarden`.`exception` SET `Handle_Description`='[False, False, False, True]' WHERE  `Exception_Code`=5;
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=5;
UPDATE `mygarden`.`exception` SET `Handle_Description`='[False, True, True, False]' WHERE  `Exception_Code`=6;
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=6;
UPDATE `mygarden`.`exception` SET `Handle_Description`='[False, True, True, True]' WHERE  `Exception_Code`=7;
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=7;
UPDATE `mygarden`.`exception` SET `Handle_Description`='[False, True, False, True]' WHERE  `Exception_Code`=8;
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=8;
UPDATE `mygarden`.`exception` SET `Handle_Description`='[False, False, True, True]' WHERE  `Exception_Code`=9;
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=9;
UPDATE `mygarden`.`exception` SET `Handle_Description`='[True, True, False, False]' WHERE  `Exception_Code`=10;
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=10;
UPDATE `mygarden`.`exception` SET `Handle_Description`='[True, False, True, False]' WHERE  `Exception_Code`=11;
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=11;
UPDATE `mygarden`.`exception` SET `Handle_Description`='[True, False, False, True]' WHERE  `Exception_Code`=12;
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=12;
UPDATE `mygarden`.`exception` SET `Handle_Description`='[True, True, True, False]' WHERE  `Exception_Code`=13;
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=13;
UPDATE `mygarden`.`exception` SET `Handle_Description`='[True, True, False, True]' WHERE  `Exception_Code`=14;
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=14;
UPDATE `mygarden`.`exception` SET `Handle_Description`='[True, True, True, True]' WHERE  `Exception_Code`=15;
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=15;
UPDATE `mygarden`.`exception` SET `Handle_Description`='[True, False, True, True]' WHERE  `Exception_Code`=16;
SELECT `Exception_Code`, `Handle_Description` FROM `mygarden`.`exception` WHERE  `Exception_Code`=16;
