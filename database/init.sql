CREATE DATABASE  IF NOT EXISTS `meeting_management` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `meeting_management`;
-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: meeting_management
-- ------------------------------------------------------
-- Server version	9.5.0

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '1ab3d552-d13c-11f0-8a38-76bc9d3568ee:1-58';

--
-- Table structure for table `development_groups`
--

DROP TABLE IF EXISTS `development_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `development_groups` (
  `name` varchar(50) NOT NULL,
  `development_group_code` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`development_group_code`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `development_groups`
--

LOCK TABLES `development_groups` WRITE;
/*!40000 ALTER TABLE `development_groups` DISABLE KEYS */;
INSERT INTO `development_groups` VALUES ('webFlow',1),('AppGenius',2),('DataMinds',3),('CloudRunners',4),('FrontRunners ',5),('BackEndBuilders',6),('StackMasters',7),('NetSolution',8);
/*!40000 ALTER TABLE `development_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meetings`
--

DROP TABLE IF EXISTS `meetings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meetings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `development_group_code` int NOT NULL,
  `date_start_time` datetime NOT NULL,
  `date_end_time` datetime NOT NULL,
  `description` varchar(225) NOT NULL,
  `room_name` varchar(225) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meetings`
--

LOCK TABLES `meetings` WRITE;
/*!40000 ALTER TABLE `meetings` DISABLE KEYS */;
INSERT INTO `meetings` VALUES (1,1,'2025-12-26 09:00:00','2025-12-26 10:00:00','Planning session','Bug-Free Room'),(2,2,'2025-12-26 10:30:00','2025-12-26 11:30:00','Sprint kickoff','Hands-Off Room'),(3,3,'2025-12-27 09:00:00','2025-12-27 10:00:00','Code review','It-Works-On-My-Machine Room'),(4,4,'2025-12-27 11:00:00','2025-12-27 12:00:00','Backend sync','Just-a-Sec Room'),(5,5,'2025-12-28 09:30:00','2025-12-28 10:30:00','Frontend update','Five-Minute Room'),(6,6,'2025-12-28 11:00:00','2025-12-28 12:00:00','Database design','Production-Locked Room'),(7,7,'2025-12-29 09:00:00','2025-12-29 10:00:00','API discussion','Bug-Free Room'),(8,8,'2025-12-29 10:30:00','2025-12-29 11:30:00','Cloud deployment','Hands-Off Room'),(9,1,'2025-12-30 09:00:00','2025-12-30 10:00:00','Feature planning','It-Works-On-My-Machine Room'),(10,2,'2025-12-30 10:30:00','2025-12-30 11:30:00','Bug triage','Just-a-Sec Room'),(11,3,'2025-12-31 09:00:00','2025-12-31 10:00:00','Refactor session','Five-Minute Room'),(12,4,'2025-12-31 11:00:00','2025-12-31 12:00:00','Integration test','Production-Locked Room'),(13,5,'2026-01-02 09:30:00','2026-01-02 10:30:00','UI improvements','Bug-Free Room'),(14,6,'2026-01-02 11:00:00','2026-01-02 12:00:00','Security review','Hands-Off Room'),(15,7,'2026-01-03 09:00:00','2026-01-03 10:00:00','Code optimization','It-Works-On-My-Machine Room'),(16,8,'2026-01-03 10:30:00','2026-01-03 11:30:00','DevOps sync','Just-a-Sec Room'),(17,1,'2026-01-04 09:00:00','2026-01-04 10:00:00','New feature brainstorming','Five-Minute Room'),(18,2,'2026-01-04 10:30:00','2026-01-04 11:30:00','Sprint retrospective','Production-Locked Room'),(19,3,'2026-01-05 09:00:00','2026-01-05 10:00:00','Bug fixing','Bug-Free Room'),(20,4,'2026-01-05 11:00:00','2026-01-05 12:00:00','Frontend styling','Hands-Off Room'),(21,5,'2026-01-06 09:30:00','2026-01-06 10:30:00','Database tuning','It-Works-On-My-Machine Room'),(22,6,'2026-01-06 11:00:00','2026-01-06 12:00:00','API design','Just-a-Sec Room'),(23,7,'2026-01-07 09:00:00','2026-01-07 10:00:00','Deployment prep','Five-Minute Room'),(24,8,'2026-01-07 10:30:00','2026-01-07 11:30:00','Code review','Production-Locked Room'),(25,1,'2026-01-08 09:00:00','2026-01-08 10:00:00','Planning session','Bug-Free Room'),(26,2,'2026-01-08 10:30:00','2026-01-08 11:30:00','Feature update','Hands-Off Room'),(27,3,'2026-01-09 09:00:00','2026-01-09 10:00:00','Sprint planning','It-Works-On-My-Machine Room'),(28,4,'2026-01-09 11:00:00','2026-01-09 12:00:00','Integration test','Just-a-Sec Room'),(29,5,'2026-01-10 09:30:00','2026-01-10 10:30:00','UI review','Five-Minute Room'),(30,6,'2026-01-10 11:00:00','2026-01-10 12:00:00','Backend tuning','Production-Locked Room'),(31,1,'2026-02-15 10:00:00','2026-02-15 11:30:00','Weekly Sync','Blue Room');
/*!40000 ALTER TABLE `meetings` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-10 18:07:32
