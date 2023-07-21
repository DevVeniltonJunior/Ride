CREATE USER IF NOT EXISTS user_user WITH PASSWORD 'Userpass@@1';

CREATE DATABASE IF NOT EXISTS v1_rider;

DROP TABLE IF EXISTS `v1_rider`.`migrations`;

CREATE TABLE `v1_rider``.migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1175 DEFAULT CHARSET=utf8;

LOCK TABLES `v1_rider`.`migrations` WRITE;

INSERT INTO `v1_rider``migrations` VALUES (1,'2019_08_08_111945_create_agendas_table',1);

UNLOCK TABLES;
