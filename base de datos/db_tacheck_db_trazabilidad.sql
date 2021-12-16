-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_tacheck
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `db_trazabilidad`
--

DROP TABLE IF EXISTS `db_trazabilidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `db_trazabilidad` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rut` varchar(45) NOT NULL,
  `fecha` varchar(20) NOT NULL,
  `horaE` varchar(20) NOT NULL,
  `horaS` varchar(20) DEFAULT NULL,
  `cupo` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `rut_idx` (`rut`),
  CONSTRAINT `rut` FOREIGN KEY (`rut`) REFERENCES `db_usuarios` (`rut`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `db_trazabilidad`
--

LOCK TABLES `db_trazabilidad` WRITE;
/*!40000 ALTER TABLE `db_trazabilidad` DISABLE KEYS */;
INSERT INTO `db_trazabilidad` VALUES (17,'20133394-6','16-11-2021','12:21','15:50',0),(19,'19488487-7','16-11-2021','15:05','18:47',0),(20,'19403620-5','17-11-2021','09:40','12:20',0),(21,'20468825-7','17-11-2021','10:10','15:32',0),(23,'19403620-5','18-11-2021','10:30','13:30',0),(24,'20133394-6','18-11-2021','11:50','14:31',0),(25,'19488487-7','18-11-2021','12:00','17:05',0),(27,'20468825-7','18-11-2021','12:25','17:15',0),(28,'20133394-6','24-11-2021','15:00','19:26',0),(29,'20133394-6','25-11-2021','11:25','15:30',0),(30,'19488487-7','30-11-2021','18:00','19:30',0),(32,'20133394-6','30-11-2021','18:35','19:00',0),(33,'19488487-7','30-11-2021','19:52','20:35',0),(34,'20468825-7','1-12-2021','11:00','15:30',0),(37,'19488487-7','1-12-2021','11:25','14:25',0),(41,'19403620-5','1-12-2021','14:26','16:21',0),(43,'20133394-6','1-12-2021','15:30','17:00',0),(62,'20133394-6','1-12-2021','19:00','20:00',0),(63,'19403620-5','2-12-2021','10:25','15:30',0),(69,'19488487-7','2-12-2021','11:50','16:20',0),(72,'20468825-7','2-12-2021','12:05','17:30',1),(75,'20133394-6','2-12-2021','15:30','17:00',0),(79,'19403620-5','2-12-2021','14:37',NULL,1),(80,'19488487-7','2-12-2021','14:42','14:45',0),(81,'19488487-7','2-12-2021','14:58','14:59',0);
/*!40000 ALTER TABLE `db_trazabilidad` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-15 22:17:14
