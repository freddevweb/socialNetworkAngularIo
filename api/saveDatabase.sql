-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: socialnetwork
-- ------------------------------------------------------
-- Server version	5.6.34-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `aim`
--

DROP TABLE IF EXISTS `aim`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `aim` (
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `aimType` int(11) NOT NULL,
  PRIMARY KEY (`userId`,`postId`),
  KEY `FK_aim_Post` (`postId`),
  CONSTRAINT `FK_aim_Post` FOREIGN KEY (`postId`) REFERENCES `post` (`id`),
  CONSTRAINT `FK_aim_User` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aim`
--

LOCK TABLES `aim` WRITE;
/*!40000 ALTER TABLE `aim` DISABLE KEYS */;
INSERT INTO `aim` VALUES (1,1,1),(1,2,1),(1,3,1),(2,1,1),(2,3,1),(4,1,1),(4,3,1);
/*!40000 ALTER TABLE `aim` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `postId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `cdate` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Comment_User` (`userId`),
  KEY `FK_Comment_Post` (`postId`),
  CONSTRAINT `FK_Comment_Post` FOREIGN KEY (`postId`) REFERENCES `post` (`id`),
  CONSTRAINT `FK_Comment_User` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,1,1,'cool, oÃ¹.','2017-11-13 16:54:11'),(2,1,1,'cool, oÃ¹.','2017-11-13 16:57:26'),(3,1,1,'cool, oÃ¹.','2017-11-13 16:57:58'),(4,1,1,'cool, oÃ¹.','2017-11-13 16:58:02'),(5,1,1,'cool, oÃ¹.','2017-11-13 16:58:25'),(6,2,1,'helloword','2017-11-14 11:35:08'),(7,2,1,'helloword','2017-11-14 11:37:17'),(8,2,1,'helloword','2017-11-14 11:38:17'),(9,2,1,'helloword','2017-11-14 11:38:40'),(10,2,1,'helloword','2017-11-14 11:38:59'),(11,2,1,'helloword','2017-11-14 11:39:12'),(12,2,1,'helloword','2017-11-14 11:42:16'),(13,2,1,'helloword','2017-11-14 11:42:35'),(14,2,1,'helloword','2017-11-14 11:44:07'),(15,2,1,'helloword','2017-11-14 11:44:21'),(17,2,1,'helloword','2017-11-14 11:46:24'),(21,2,1,'qsdf','2017-11-14 11:52:27'),(22,2,1,'blabla','2017-11-14 12:03:44'),(23,2,1,'blabla','2017-11-14 12:03:46'),(24,2,1,'blabla','2017-11-14 12:03:46'),(25,2,1,'blabla','2017-11-14 12:03:55'),(26,2,1,'blabla','2017-11-14 12:03:56'),(27,2,1,'blabla','2017-11-14 12:03:56'),(28,2,1,'blabla','2017-11-14 12:03:56'),(29,2,1,'blabla','2017-11-14 12:04:13'),(30,2,1,'azer','2017-11-14 12:04:55'),(31,2,1,'ghj','2017-11-14 12:19:02'),(32,2,1,'qsdf','2017-11-14 12:21:27'),(33,1,1,'super','2017-11-14 12:21:59'),(34,3,1,'blabla','2017-11-14 15:18:00'),(35,3,1,'blabla','2017-11-14 15:18:10');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `follow` (
  `userId` int(11) NOT NULL,
  `FollowedId` int(11) NOT NULL,
  PRIMARY KEY (`userId`,`FollowedId`),
  KEY `FK_Follow_Followed` (`FollowedId`),
  CONSTRAINT `FK_Follow_Followed` FOREIGN KEY (`FollowedId`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_Follow_User` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow`
--

LOCK TABLES `follow` WRITE;
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
INSERT INTO `follow` VALUES (1,2),(3,2),(2,4);
/*!40000 ALTER TABLE `follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `texte` text NOT NULL,
  `publication` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_Post_User` (`userId`),
  CONSTRAINT `FK_Post_User` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,2,'Wah vous avez vu, il y a un nouveau reseau special gamers','2017-10-30 21:05:08'),(2,1,'C\'est quand qu\'on monte au ski ?','2017-11-08 08:00:00'),(3,4,'Ce soir 21h battle sur unreal tournement','2017-11-09 09:01:22');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prenom` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `photo_path` varchar(255) DEFAULT NULL,
  `inscription` date NOT NULL,
  `connection` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pseudo` (`pseudo`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Fred','MAS','Fred','fred@mail.com','570a90bfbf8c7eab5dc5d4e26832d5b1','','2016-08-11','2017-11-09 09:01:22'),(2,'Pierre','MAR','Pierre','pierre@mail.com','5fa9db2e335ef69a4eeb9fe7974d61f4','','2016-08-11','2017-10-30 21:00:08'),(3,'Paul','MAUVE','Paul','paul@mail.com','4de5322b1dba747ee87ac14bd5374849','','2016-08-11','2017-11-09 09:01:22'),(4,'Clement','GUANTER','Clem','clement@mail.com','8fd95827cccaa2c64bafc371436b50ca','','2016-08-11','2017-11-09 08:55:22');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-14 17:08:40
