-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: telecom
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activecustomer`
--

DROP TABLE IF EXISTS `activecustomer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activecustomer` (
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `dob` varchar(100) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `custid` int NOT NULL AUTO_INCREMENT,
  `service` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`custid`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activecustomer`
--

LOCK TABLES `activecustomer` WRITE;
/*!40000 ALTER TABLE `activecustomer` DISABLE KEYS */;
INSERT INTO `activecustomer` VALUES ('Papiya Roy','papiyaroy1234@gmail.com','1971-10-23','F','129 Vivekananda Sarani',16,'Prepaid'),('Pratima Roy','proy.1950@yahoo.com','1950-12-26','F','129 Vivekananda Sarani',17,'Postpaid'),('P. K. Roy','pkr.1991@bsphcl.com','1991-07-10','M','121 C. Chowdhury Lane',18,'Prepaid'),('Aditi Sen','aditi.sen@gmail.com','2000-11-07','F','129 Gandhi Nagar',19,'Prepaid'),('Manjit Sharma','manjit@gmail.com','1997-06-11','M','121 B. K. C. Lane',20,'Prepaid'),('Vivek Oberoi','vivek@gmail.com','2003-02-11','M','21 Lal Bahadur Sashtri Road',24,'Prepaid'),('Siladitta Das','sil.das@yahoo.com','2017-01-01','M','12 BGV Sarani',25,'Prepaid'),('Ganesh Rautela','ganesh.ganesh@gmail.com','1995-06-14','M','34/C Lenin Road',26,'Prepaid'),('Ganesh Rautela','ganesh.ganesh@gmail.com','1995-06-14','M','34/C Lenin Road',27,'Prepaid'),('Devjeet Roy','devjeetroy.dr@gmail.com','1998-08-11','M','129 Vivekananda Sarani',28,'Postpaid'),('Adir Sen','devjeetr.cse2017@nsec.ac.in','1998-08-11','M','129 Vivekananda Sarani',29,'Prepaid'),('Mita Roy','mita@gmail.com','1991-01-30','F','129 Vivekananda Sarani',31,'Prepaid');
/*!40000 ALTER TABLE `activecustomer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `defaulters`
--

DROP TABLE IF EXISTS `defaulters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `defaulters` (
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `dob` varchar(100) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `custid` int NOT NULL AUTO_INCREMENT,
  `service` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`custid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `defaulters`
--

LOCK TABLES `defaulters` WRITE;
/*!40000 ALTER TABLE `defaulters` DISABLE KEYS */;
INSERT INTO `defaulters` VALUES ('Ajit Sharma','ajit@gmail.com','1971-10-23','M','121 C. C. Sarani',1,'Postpaid'),('Samrat Roy','samrat@gmail.com','1971-10-17','M','21 R. C. Sarani',3,'DTH');
/*!40000 ALTER TABLE `defaulters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `newprepaid`
--

DROP TABLE IF EXISTS `newprepaid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `newprepaid` (
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `dob` varchar(100) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `custid` int NOT NULL AUTO_INCREMENT,
  `service` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`custid`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newprepaid`
--

LOCK TABLES `newprepaid` WRITE;
/*!40000 ALTER TABLE `newprepaid` DISABLE KEYS */;
/*!40000 ALTER TABLE `newprepaid` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `postpaid`
--

DROP TABLE IF EXISTS `postpaid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postpaid` (
  `amt` int DEFAULT NULL,
  `calls` varchar(10) DEFAULT NULL,
  `data` varchar(10) DEFAULT NULL,
  `validity` varchar(15) DEFAULT NULL,
  `member` varchar(30) DEFAULT NULL,
  `planid` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`planid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postpaid`
--

LOCK TABLES `postpaid` WRITE;
/*!40000 ALTER TABLE `postpaid` DISABLE KEYS */;
INSERT INTO `postpaid` VALUES (199,'Unlimited','25','28','1',3),(299,'Unlimited','75','28','1',4),(599,'Unlimited','150','28','2',6),(799,'Unlimited','300','28','2',7),(799,'Unlimited','300','28','2',8),(999,'Unlimited','500','28','3',9),(1299,'Unlimited','500','84','3',10),(1299,'Unlimited','500','84','3',11),(1599,'Unlimited','1000','84','3',12),(144,'Unlimited','0.5','7','1',13);
/*!40000 ALTER TABLE `postpaid` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prepaid`
--

DROP TABLE IF EXISTS `prepaid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prepaid` (
  `amt` int DEFAULT NULL,
  `calls` varchar(10) DEFAULT NULL,
  `data` varchar(10) DEFAULT NULL,
  `validity` varchar(15) DEFAULT NULL,
  `planid` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`planid`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prepaid`
--

LOCK TABLES `prepaid` WRITE;
/*!40000 ALTER TABLE `prepaid` DISABLE KEYS */;
INSERT INTO `prepaid` VALUES (99,'Unlimited','1','18',12),(199,'Unlimited','2','24',13),(219,'Unlimited','2.5','30',14),(270,'Unlimited','4','56',15),(400,'Unlimited','4','84',18),(600,'Unlimited','5','84',19),(1699,'Unlimited','2','365',21),(2999,'Unlimited','4','365',22),(49,'Unlimited','1','7',25),(19,'Unlimited','3','1',26);
/*!40000 ALTER TABLE `prepaid` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `Pnumber` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `country` varchar(15) DEFAULT NULL,
  `connection` varchar(15) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `usertype` varchar(100) NOT NULL,
  PRIMARY KEY (`id`,`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Susmita Das',NULL,'sd.dr@gmail.com',NULL,NULL,'$2b$10$oTLz1zGbpUJES/3nGyITHeP7/ILPs16zHPIHnP3Zu9aSbW47ZpJRK','USER'),(2,'Devjeet Roy',NULL,'devjeetroy.dr@gmail.com',NULL,NULL,'$2b$10$A/s1583ee8ZsFIlZGzdn9utJEyQGxxXSZE1T9Vz.ViCJ..WHxasMW','USER'),(4,'Samrat Roy',NULL,'devjeetroy1998@gmail.com',NULL,NULL,'$2b$10$EYgBKtKRadQuRM0.P4GEyOkN8.N8F7wC4li9CCYX26tCPujOPzRa6','ADMIN');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-09 17:22:36
