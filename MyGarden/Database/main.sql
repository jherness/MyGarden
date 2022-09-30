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
CREATE DATABASE IF NOT EXISTS `mygarden` /*!40100 DEFAULT CHARACTER SET utf8mb4 */; USE `mygarden`;

-- Dumping structure for table mygarden.activation
CREATE TABLE IF NOT EXISTS `activation` (
 `activation_code` INT(11) NOT NULL,
 `activation_reason` VARCHAR(30) NOT NULL,remote_activation_before_insert PRIMARY KEY (`activation_code`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table mygarden.activation: ~16 rows (approximately)
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

-- Dumping structure for table mygarden.activation_history
CREATE TABLE IF NOT EXISTS `activation_history` (
 `dateTime_of_activation` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
 `finish_hour` TIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
 `activation_code` INT(11) NOT NULL DEFAULT 0, PRIMARY KEY (`dateTime_of_activation`) USING BTREE, KEY `activations_key` (`activation_code`) USING BTREE, CONSTRAINT `activation_key` FOREIGN KEY (`activation_code`) REFERENCES `activation` (`activation_code`) ON
DELETE NO ACTION ON
UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table mygarden.activation_history: ~8 rows (approximately)
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


f"INSERT INTO {TABLE_NAME} (`dateTime_of_activation`, `finish_hour`, `activation_code`)" \
            f" VALUES ({data['dateTime_of_activation']}," \
            
            f" {data['finish_hour']}, {data['activation_reason']})" 




-- Dumping structure for table mygarden.currently_active
CREATE TABLE IF NOT EXISTS `currently_active` (
 `id` INT(11) NOT NULL AUTO_INCREMENT,
 `air_sys` TINYINT(1) UNSIGNED ZEROFILL NOT NULL DEFAULT 0,
 `water_sys` TINYINT(1) UNSIGNED ZEROFILL NOT NULL DEFAULT 0,
 `light_sys` TINYINT(1) UNSIGNED ZEROFILL NOT NULL DEFAULT 0,
 `fertelize_sys` TINYINT(1) UNSIGNED ZEROFILL NOT NULL DEFAULT 0, PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table mygarden.currently_active: ~0 rows (approximately)
INSERT INTO `currently_active` (`id`, `air_sys`, `water_sys`, `light_sys`, `fertelize_sys`) VALUES
	(1, 0, 0, 0, 0);

-- Dumping structure for table mygarden.remote_activation
CREATE TABLE IF NOT EXISTS `remote_activation` (
 `id` INT(11) NOT NULL AUTO_INCREMENT,
 `start_data` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
 `finish_data` INT(11) NOT NULL,
 `air_sys` TINYINT(1) NOT NULL,
 `water_sys` TINYINT(1) NOT NULL,
 `light_sys` TINYINT(1) NOT NULL,
 `fertelize_sys` TINYINT(1) NOT NULL, PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8MB4;
DELETE
FROM remote_activation
SELECT *
FROM remote_activation

-- Dumping data for table mygarden.remote_activation: ~3 rows (approximately)
INSERT INTO `remote_activation` (`id`, `finish_data`, `air_sys`, `water_sys`, `light_sys`, `fertelize_sys`) VALUES
	(1, 0, 0, 0, 0, 0)


-- Dumping structure for table mygarden.samples
CREATE TABLE IF NOT EXISTS `samples` (
 `id` INT(11) NOT NULL AUTO_INCREMENT,
 `dt_of_sample` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
 `temperature` FLOAT NOT NULL,
 `humidity` FLOAT NOT NULL,
 `pressure` FLOAT NOT NULL, 
 `light` FLOAT NOT NULL, 
 `ground_humidity1` FLOAT NOT NULL, 
 `ground_humidity2` FLOAT NOT NULL, 
	`ground_humidity3` FLOAT NOT NULL, PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=UTF8MB4;
CREATE DEFINER=`irruser`@`%` TRIGGER `organize_history` AFTER DELETE ON `samples` FOR EACH ROW BEGIN
DELETE FROM activation_history WHERE dateTime_of_activation < DATE_SUB(NOW(),INTERVAL 1 MONTH);
END

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

-- Dumping structure for table mygarden.schedule_activation
CREATE TABLE IF NOT EXISTS `schedule_activation` (
 `id` INT(11) NOT NULL AUTO_INCREMENT,
 `start_hour` TIME NOT NULL,
 `time_to_live` INT(11) NOT NULL,
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
 `fertelize_sys` TINYINT(1) NOT NULL, PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table mygarden.schedule_activation: ~1 row (approximately)
INSERT INTO `schedule_activation` (`id`, `start_hour`, `time_to_live`, `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `air_sys`, `water_sys`, `light_sys`, `fertelize_sys`) VALUES
	(1, '00:00:01', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	
UPDATE schedule_activation SET start_hour = '18:32:43', time_to_live = 0, water_sys = 0
WHERE id = 1
	
	
		('2022-09-10 18:32:43', '18:32:43', 1),

-- Dumping structure for table mygarden.sys_mod
CREATE TABLE IF NOT EXISTS `sys_mod` (
 `id` INT(11) NOT NULL AUTO_INCREMENT,
 `is_auto` TINYINT(1) NOT NULL DEFAULT 0,
 `max_temp` INT(11) NOT NULL DEFAULT 35,
 `min_moist` INT(11) NOT NULL DEFAULT 0, PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table mygarden.sys_mod: ~1 row (approximately)
INSERT INTO `sys_mod` (`id`, `is_auto`, `max_temp`, `min_moist`) VALUES
	(1, 0, 35, 35);
CREATE DEFINER=`irruser`@`%` TRIGGER `remote_activation_after_insert` AFTER
UPDATE ON `remote_activation` FOR EACH ROW BEGIN
UPDATE currently_active SET air_sys = NEW.air_sys, water_sys = NEW.water_sys,
	 light_sys = NEW.light_sys, fertelize_sys = NEW.fertelize_sys
WHERE id = 1; END

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
