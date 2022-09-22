-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.9.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
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
  `activation_reason` varchar(30) NOT NULL,
  PRIMARY KEY (`activation_code`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table mygarden.activation: ~16 rows (approximately)
/*!40000 ALTER TABLE `activation` DISABLE KEYS */;
INSERT INTO `activation` (`activation_code`, `activation_reason`) VALUES
	(1, '1a'),
	(2, '2a'),
	(3, '3a'),
	(4, '4a'),
	(5, '5a'),
	(6, '6a'),
	(7, '7a'),
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

-- Dumping data for table mygarden.currently_active: ~1 rows (approximately)
/*!40000 ALTER TABLE `currently_active` DISABLE KEYS */;
INSERT INTO `currently_active` (`id`, `air_sys`, `water_sys`, `light_sys`, `fertelize_sys`) VALUES
	(34, 0, 0, 0, 0);
/*!40000 ALTER TABLE `currently_active` ENABLE KEYS */;

-- Dumping structure for table mygarden.remote_activation
CREATE TABLE IF NOT EXISTS `remote_activation` (
  `start_data` datetime NOT NULL DEFAULT current_timestamp(),
  `finish_data` int(11) NOT NULL,
  `air_sys` tinyint(1) NOT NULL,
  `water_sys` tinyint(1) NOT NULL,
  `light_sys` tinyint(1) NOT NULL,
  `fertelize_sys` tinyint(1) NOT NULL,
  PRIMARY KEY (`start_data`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table mygarden.remote_activation: ~3 rows (approximately)
/*!40000 ALTER TABLE `remote_activation` DISABLE KEYS */;
INSERT INTO `remote_activation` (`start_data`, `finish_data`, `air_sys`, `water_sys`, `light_sys`, `fertelize_sys`) VALUES
	('2022-09-19 13:14:42', 1, 0, 0, 0, 0),
	('2022-09-19 13:16:46', 1, 0, 0, 0, 0),
	('2022-09-21 22:24:25', 1, 0, 0, 0, 0);
/*!40000 ALTER TABLE `remote_activation` ENABLE KEYS */;

-- Dumping structure for table mygarden.samples
CREATE TABLE IF NOT EXISTS `samples` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dt_of_sample` datetime DEFAULT current_timestamp(),
  `key1` float NOT NULL,
  `key2` float NOT NULL,
  `key3` float NOT NULL,
  `key4` float NOT NULL,
  `key5` float NOT NULL,
  `key6` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table mygarden.samples: ~25 rows (approximately)
/*!40000 ALTER TABLE `samples` DISABLE KEYS */;
INSERT INTO `samples` (`id`, `dt_of_sample`, `key1`, `key2`, `key3`, `key4`, `key5`, `key6`) VALUES
	(1, '2022-09-10 19:08:47', 1, 2, 3, 4, 5, 6),
	(2, '2022-09-10 19:08:49', 1, 2, 3, 4, 5, 6),
	(3, '2022-09-10 19:08:51', 1, 2, 3, 4, 5, 6),
	(4, '2022-09-10 19:08:53', 1, 2, 3, 4, 5, 6),
	(5, '2022-09-10 19:08:57', 1, 2, 3, 4, 5, 6),
	(6, '2022-09-10 19:09:00', 1, 2, 3, 4, 5, 6),
	(7, '2022-09-10 19:09:04', 1, 2, 3, 4, 5, 6),
	(8, '2022-09-10 19:09:08', 1, 2, 3, 4, 5, 6),
	(9, '2022-09-10 19:09:11', 1, 2, 3, 4, 5, 6),
	(10, '2022-09-10 19:09:15', 1, 2, 3, 4, 5, 6),
	(11, '2022-09-10 19:09:18', 1, 2, 3, 4, 5, 6),
	(12, '2022-09-10 19:09:22', 1, 2, 3, 4, 5, 6),
	(13, '2022-09-20 16:13:44', 1, 50, 3, 4, 5, 6),
	(14, '2022-09-20 16:16:27', 1, 40, 3, 4, 5, 6),
	(15, '2022-09-20 16:21:04', 1, 100, 3, 4, 5, 6),
	(16, '2022-09-20 16:25:10', 1, 1050, 3, 4, 5, 6),
	(17, '2022-09-21 10:24:22', 1, 800, 3, 4, 5, 6),
	(18, '2022-09-21 18:04:19', 20, 300, 300, 40, 50, 60),
	(19, '2022-09-21 18:04:46', 2, 30, 30, 4, 5, 6),
	(20, '2022-09-21 20:06:33', 2, 30, 30, 4, 5, 6),
	(21, '2022-09-21 20:07:37', 2, 30, 30, 4, 5, 6),
	(22, '2022-09-21 20:09:49', 2, 60, 90, 4, 5, 6),
	(23, '2022-09-21 22:11:23', 2, 70, 900, 4, 5, 6),
	(24, '2022-09-21 22:12:20', 2, 70, 900, 4, 5, 6),
	(25, '2022-09-21 22:12:58', 2, 70, 920, 4, 5, 6);
/*!40000 ALTER TABLE `samples` ENABLE KEYS */;

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

-- Dumping data for table mygarden.schedule_activation: ~14 rows (approximately)
/*!40000 ALTER TABLE `schedule_activation` DISABLE KEYS */;
INSERT INTO `schedule_activation` (`id`, `start_hour`, `time_to_live`, `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `air_sys`, `water_sys`, `light_sys`, `fertelize_sys`) VALUES
	(54, '00:00:01', 3, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1),
	(55, '00:00:01', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(56, '00:00:01', 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0),
	(57, '00:00:01', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(58, '00:00:01', 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0),
	(59, '13:44:00', 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0),
	(60, '00:00:01', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(61, '14:44:00', 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0),
	(62, '00:00:01', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(63, '12:44:00', 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0),
	(64, '08:04:00', 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0),
	(65, '00:02:00', 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0),
	(66, '00:00:01', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(67, '00:00:01', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
/*!40000 ALTER TABLE `schedule_activation` ENABLE KEYS */;

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
