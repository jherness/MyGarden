-- --------------------------------------------------------
-- Host:                         192.168.1.157
-- Server version:               10.5.15-MariaDB-0+deb11u1 - Raspbian 11
-- Server OS:                    debian-linux-gnueabihf
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for mygarden
CREATE DATABASE IF NOT EXISTS `mygarden` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `mygarden`;

-- Dumping structure for table mygarden.activation
CREATE TABLE IF NOT EXISTS `activation` (
  `activation_code` int(11) NOT NULL,
  `activation_reason` varchar(30) NOT NULL,remote_activation_before_insert
  PRIMARY KEY (`activation_code`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table mygarden.activation: ~16 rows (approximately)
/*!40000 ALTER TABLE `activation` DISABLE KEYS */;
INSERT INTO `activation` (`activation_code`, `activation_reason`) VALUES
	(1, 'Low Humidity'),
	(2, 'High Humidity'),
	(3, 'Remote Activation'),
	(4, 'Schedule Activation'),
	(5, 'High Temp & Low Humidity'),
	(6, 'Low Temp'),
	(7, 'High Temp'),
	(8, '8a'),
	(9, '9a'),
	(10, '10a'),
	(11, '11a'),
	(12, '12a'),
	(13, '13a'),
	(14, '14a'),
	(15, '15a'),
	(16, '16a');
/*!40000 ALTER TABLE `activation` ENABLE KEYS */;

-- Dumping structure for table mygarden.activation_history
CREATE TABLE IF NOT EXISTS `activation_history` (
  `dateTime_of_activation` datetime NOT NULL DEFAULT current_timestamp(),
  `finish_hour` time NOT NULL DEFAULT current_timestamp(),
  `activation_code` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`dateTime_of_activation`) USING BTREE,
  KEY `activations_key` (`activation_code`) USING BTREE,
  CONSTRAINT `activation_key` FOREIGN KEY (`activation_code`) REFERENCES `activation` (`activation_code`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table mygarden.activation_history: ~8 rows (approximately)
/*!40000 ALTER TABLE `activation_history` DISABLE KEYS */;
INSERT INTO `activation_history` (`dateTime_of_activation`, `finish_hour`, `activation_code`) VALUES
	('2022-09-10 18:32:43', '18:32:43', 1),
	('2022-09-10 18:32:49', '18:32:49', 2),
	('2022-09-10 18:32:56', '18:32:56', 3),
	('2022-09-10 18:33:01', '18:33:01', 4),
	('2022-09-10 18:33:05', '18:33:05', 5),
	('2022-09-10 18:33:09', '18:33:09', 6),
	('2022-09-11 10:56:01', '10:56:01', 7),
	('2022-09-22 12:42:55', '12:42:55', 7);
/*!40000 ALTER TABLE `activation_history` ENABLE KEYS */;

-- Dumping structure for table mygarden.currently_active
CREATE TABLE IF NOT EXISTS `currently_active` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `air_sys` tinyint(1) unsigned zerofill NOT NULL DEFAULT 0,
  `water_sys` tinyint(1) unsigned zerofill NOT NULL DEFAULT 0,
  `light_sys` tinyint(1) unsigned zerofill NOT NULL DEFAULT 0,
  `fertelize_sys` tinyint(1) unsigned zerofill NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4;

DELETE FROM currently_active
-- Dumping data for table mygarden.currently_active: ~0 rows (approximately)
/*!40000 ALTER TABLE `currently_active` DISABLE KEYS */;
INSERT INTO `currently_active` (`id`, `air_sys`, `water_sys`, `light_sys`, `fertelize_sys`) VALUES
	(1, 0, 0, 0, 0);
	
SELECT * FROM currently_active

	
	/*
	UPDATE currently_active
	SET air_sys = 1, water_sys =1, light_sys = 1, fertelize_sys = 1
	WHERE id = 1
	*/
/*!40000 ALTER TABLE `currently_active` ENABLE KEYS */;

-- Dumping structure for table mygarden.remote_activation
CREATE TABLE IF NOT EXISTS `remote_activation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_data` datetime NOT NULL DEFAULT current_timestamp(),
  `finish_data` int(11) NOT NULL,
  `air_sys` tinyint(1) NOT NULL,
  `water_sys` tinyint(1) NOT NULL,
  `light_sys` tinyint(1) NOT NULL,
  `fertelize_sys` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;


DELETE FROM remote_activation

SELECT * FROM remote_activation

-- Dumping data for table mygarden.remote_activation: ~3 rows (approximately)
/*!40000 ALTER TABLE `remote_activation` DISABLE KEYS */;
INSERT INTO `remote_activation` (`id`, `finish_data`, `air_sys`, `water_sys`, `light_sys`, `fertelize_sys`) VALUES
	(1, 0, 0, 0, 0, 0)
	/*!40000 ALTER TABLE `remote_activation` ENABLE KEYS */;
	
	
CREATE TRIGGER `remote_activation_after_insert` AFTER UPDATE ON `remote_activation` FOR EACH ROW BEGIN
UPDATE currently_active
	SET air_sys = NEW.air_sys, water_sys = NEW.water_sys,
	 light_sys = NEW.light_sys, fertelize_sys = NEW.fertelize_sys
	WHERE id = 1;
END

-- Dumping structure for table mygarden.samples
CREATE TABLE IF NOT EXISTS `samples` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dt_of_sample` datetime NOT NULL DEFAULT current_timestamp(),
  `temperature` float NOT NULL,
  `humidity` float NOT NULL,
  `pressure` float NOT NULL, 
  `light` float NOT NULL, 
  `ground_humidity1` float NOT NULL, 
  `ground_humidity2` float NOT NULL, 
	`ground_humidity3` float NOT NULL, 
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=UTF8MB4;

DELETE FROM samples

-- Dumping data for table mygarden.samples: ~10 rows (approximately)
INSERT INTO `samples` (`id`, `dt_of_sample`,`temperature`, `humidity`, `pressure`, `light`,
 `ground_humidity1`, `ground_humidity2`,`ground_humidity3`) VALUES
	(1, '2022-09-10 19:08:47', 25, 50, 1009, 1399, 70, 50, 60),
	(2, '2022-09-16 19:08:49', 27, 60, 1008, 400, 50, 50, 60),
	(3, '2022-09-20 19:08:51', 30, 55, 1013, 1020, 60, 50, 60),
	(4, '2022-09-23 19:08:53', 22, 77, 1010, 1100, 60, 50, 60),
	(5, '2022-09-24 19:08:57', 35, 70, 1020, 1300, 70, 50, 60),
	(6, '2022-09-25 19:09:00', 31, 95, 1022, 1100, 70, 50, 60),
	(7, '2022-09-28 19:09:04', 26, 43, 1009, 971, 70, 50, 60),
	(6, '2022-09-10 19:09:00', 0, 0, 0, 0, 0, 0, 0),
	(7, '2022-09-10 19:09:04', 0, 0, 0, 0, 0, 0, 0),
	(8, '2022-09-10 19:09:08', 0, 0, 0, 0, 0, 0, 0),
	(9, '2022-09-10 19:09:11', 0, 0, 0, 0, 0, 0, 0),
	(10, '2022-09-10 19:09:15', 0, 0, 0, 0, 0, 0, 0),

-- Dumping data for table mygarden.samples: ~27 rows (approximately)


-- Dumping structure for table mygarden.schedule_activation
CREATE TABLE IF NOT EXISTS `schedule_activation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_hour` time NOT NULL,
  `time_to_live` int(11) NOT NULL,
  `sunday` tinyint(1) NOT NULL,
  `monday` tinyint(1) NOT NULL,
  `tuesday` tinyint(1) NOT NULL,
  `wednesday` tinyint(1) NOT NULL,
  `thursday` tinyint(1) NOT NULL,
  `friday` tinyint(1) NOT NULL,
  `saturday` tinyint(1) NOT NULL,
  `air_sys` tinyint(1) NOT NULL,
  `water_sys` tinyint(1) NOT NULL,
  `light_sys` tinyint(1) NOT NULL,
  `fertelize_sys` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4;


DELETE FROM schedule_activation

SELECT * FROM schedule_activation


-- Dumping data for table mygarden.schedule_activation: ~14 rows (approximately)
/*!40000 ALTER TABLE `schedule_activation` DISABLE KEYS */;
INSERT INTO `schedule_activation` (`id`, `start_hour`, `time_to_live`, `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `air_sys`, `water_sys`, `light_sys`, `fertelize_sys`) VALUES
	(1, '00:00:01', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	


	UPDATE schedule_activation
	SET start_hour = '00:00:00', time_to_live = 1, sunday = 1, monday = 1, tuesday = 1,
	 wednesday = 1, thursday = 1, friday = 1, saturday = 1,
	air_sys = 1, water_sys =1, light_sys = 1, fertelize_sys = 1
	WHERE id = 1;


-- Dumping structure for table mygarden.sys_mod
CREATE TABLE IF NOT EXISTS `sys_mod` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `is_auto` tinyint(1) NOT NULL DEFAULT 0,
  `max_temp` int(11) NOT NULL DEFAULT 35,
  `min_moist` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table mygarden.sys_mod: ~62 rows (approximately)
/*!40000 ALTER TABLE `sys_mod` DISABLE KEYS */;
INSERT INTO `sys_mod` (`id`, `is_auto`, `max_temp`, `min_moist`) VALUES
	(4, 0, 35, 0),
	(5, 1, 20, 20),
	(6, 0, 20, 20),
	(7, 0, 40, 20),
	(8, 1, 46, 26),
	(9, 1, 46, 1),
	(10, 0, 43, 1),
	(11, 1, 43, 1),
	(12, 0, 43, 1),
	(13, 1, 43, 1),
	(14, 0, 43, 1),
	(15, 1, 43, 1),
	(16, 1, 43, 1),
	(17, 0, 43, 1),
	(18, 1, 43, 1),
	(19, 1, 43, 1),
	(20, 0, 43, 1),
	(21, 0, 43, 1),
	(22, 1, 43, 1),
	(23, 1, 43, 1),
	(24, 0, 43, 1),
	(25, 0, 27, 72),
	(26, 1, 27, 72),
	(27, 1, 27, 72),
	(28, 0, 27, 72),
	(29, 1, 26, 72),
	(30, 1, 26, 72),
	(31, 0, 26, 72),
	(32, 1, 26, 72),
	(33, 0, 26, 72),
	(34, 1, 26, 72),
	(35, 0, 26, 72),
	(36, 0, 26, 72),
	(37, 1, 26, 72),
	(38, 0, 26, 72),
	(39, 1, 26, 72),
	(40, 0, 26, 66),
	(41, 1, 26, 66),
	(42, 1, 26, 66),
	(43, 0, 26, 66),
	(44, 1, 26, 66),
	(45, 0, 26, 66),
	(46, 0, 26, 66),
	(47, 0, 26, 66),
	(48, 0, 26, 66),
	(49, 1, 31, 61),
	(50, 1, 31, 61),
	(51, 0, 31, 61),
	(52, 1, 31, 61),
	(53, 1, 31, 61),
	(54, 0, 31, 61),
	(55, 0, 31, 61),
	(56, 1, 31, 61),
	(57, 0, 31, 61),
	(58, 1, 37, 61),
	(59, 0, 37, 61),
	(60, 1, 37, 61),
	(61, 0, 37, 61),
	(62, 1, 37, 61),
	(63, 0, 44, 67),
	(64, 1, 44, 67),
	(65, 0, 43, 67);
/*!40000 ALTER TABLE `sys_mod` ENABLE KEYS */;

-- Dumping structure for trigger mygarden.remote_activation_before_insert
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `remote_activation_before_insert` BEFORE INSERT ON `remote_activation` FOR EACH ROW BEGIN
DELETE FROM currently_active;
INSERT INTO currently_active(water_sys, air_sys, light_sys, fertelize_sys)
 VALUES (NEW.water_sys, NEW.air_sys, NEW.light_sys, NEW.fertelize_sys);
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
