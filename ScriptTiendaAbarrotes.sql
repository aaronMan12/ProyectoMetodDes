CREATE DATABASE  IF NOT EXISTS `tiendaabarrotes` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tiendaabarrotes`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: tiendaabarrotes
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `idProducto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `precio` float NOT NULL,
  `fotografia` longblob,
  `categoria` enum('Limpieza','Frutas y verduras','Higiene Personal','Productos Animales') NOT NULL,
  PRIMARY KEY (`idProducto`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'Jabon ZOte',22,NULL,'Limpieza'),(2,'Axión 1LT',54,NULL,'Limpieza'),(3,'Pinol 2LT',41,NULL,'Limpieza'),(4,'Salvo',50,NULL,'Limpieza'),(5,'Cloralex',50,NULL,'Limpieza'),(6,'Esponja de trastes',30,NULL,'Limpieza'),(7,'Harpic',60,NULL,'Limpieza'),(8,'Fabuloso 5L',110,NULL,'Limpieza'),(9,'Escoba',50,NULL,'Limpieza'),(10,'Recogedor',60,NULL,'Limpieza'),(11,'Piña',33,NULL,'Frutas y verduras'),(12,'Naranja',28,NULL,'Frutas y verduras'),(13,'Zanahoria',26,NULL,'Frutas y verduras'),(14,'Limón',47,NULL,'Frutas y verduras'),(15,'Nopal',33,NULL,'Frutas y verduras'),(16,'Guayaba',47,NULL,'Frutas y verduras'),(17,'Elote',12,NULL,'Frutas y verduras'),(18,'Platano Macho',40,NULL,'Frutas y verduras'),(19,'Toronja',28,NULL,'Frutas y verduras'),(20,'Chayote',52,NULL,'Frutas y verduras'),(21,'Brócoli',41,NULL,'Frutas y verduras'),(22,'Protector Solar',150,NULL,'Higiene Personal'),(23,'Jabón Dove',32,NULL,'Higiene Personal'),(24,'Equate Esponja',15,NULL,'Higiene Personal'),(25,'Shampoo Palmolive',60,NULL,'Higiene Personal'),(26,'Gel Ego',30,NULL,'Higiene Personal'),(27,'Gillete x4',118,NULL,'Higiene Personal'),(28,'Espuma Gillete',80,NULL,'Higiene Personal'),(29,'Colgate pasta',57,NULL,'Higiene Personal'),(30,'Listerine enjuage',75,NULL,'Higiene Personal'),(31,'Saba',66,NULL,'Higiene Personal'),(32,'Arena Gato',72,NULL,'Productos Animales'),(33,'Whiskas sobre',12,NULL,'Productos Animales'),(34,'Dog Chow 4',193,NULL,'Productos Animales'),(35,'Shampoo Animal Planet',63,NULL,'Productos Animales'),(36,'Plato aluminio',79,NULL,'Productos Animales'),(37,'Collar antipulgas',79,NULL,'Productos Animales'),(38,'Juguete',129,NULL,'Productos Animales'),(39,'Correa',110,NULL,'Productos Animales'),(40,'Pechera',130,NULL,'Productos Animales'),(41,'Cama',249,NULL,'Productos Animales'),(42,'Ropa',169,NULL,'Productos Animales');
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `password` varchar(8) NOT NULL,
  `correo` varchar(30) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-24 19:33:47
