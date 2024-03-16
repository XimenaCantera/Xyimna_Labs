-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 16-03-2024 a las 05:52:09
-- Versión del servidor: 8.0.27
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mastershoes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

DROP TABLE IF EXISTS `compra`;
CREATE TABLE IF NOT EXISTS `compra` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) CHARACTER SET ucs2 COLLATE ucs2_spanish2_ci NOT NULL,
  `precio` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `compra`
--

INSERT INTO `compra` (`id`, `nombre`, `precio`) VALUES
(1, 'Botas de piel', 150),
(2, 'Chamarra de cuero', 200),
(3, 'Guantes de gamuza', 50),
(4, 'Cinturón de piel', 30),
(5, 'Bolsa de mano', 80),
(6, 'Zapatos de charol', 120),
(7, 'Bufanda de lana', 25),
(8, 'Gorrito tejido', 15),
(9, 'Abrigo de piel', 300),
(10, 'Billetera de cuero', 40);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puesto`
--

DROP TABLE IF EXISTS `puesto`;
CREATE TABLE IF NOT EXISTS `puesto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `puesto`
--

INSERT INTO `puesto` (`id`, `titulo`) VALUES
(1, 'Mantenimiento'),
(2, 'Reparación'),
(3, 'Gerente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajador`
--

DROP TABLE IF EXISTS `trabajador`;
CREATE TABLE IF NOT EXISTS `trabajador` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `correo` varchar(100) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `local` varchar(100) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `id_puesto` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_puesto` (`id_puesto`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `trabajador`
--

INSERT INTO `trabajador` (`id`, `nombre`, `correo`, `local`, `id_puesto`) VALUES
(1, 'Juan Pérez', 'juan.perez@example.com', 'Local 1', 1),
(2, 'María García', 'maria.garcia@example.com', 'Local 2', 2),
(3, 'Pedro López', 'pedro.lopez@example.com', 'Local 3', 3),
(4, 'Ana Martínez', 'ana.martinez@example.com', 'Local 1', 1),
(5, 'Luis Rodríguez', 'luis.rodriguez@example.com', 'Local 2', 2),
(6, 'Laura Sánchez', 'laura.sanchez@example.com', 'Local 3', 3),
(7, 'Carlos Gómez', 'carlos.gomez@example.com', 'Local 1', 1),
(8, 'Sofía Hernández', 'sofia.hernandez@example.com', 'Local 2', 2),
(9, 'Jorge Díaz', 'jorge.diaz@example.com', 'Local 3', 3),
(10, 'Fernanda Ruiz', 'fernanda.ruiz@example.com', 'Local 1', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajador_compra`
--

DROP TABLE IF EXISTS `trabajador_compra`;
CREATE TABLE IF NOT EXISTS `trabajador_compra` (
  `id_trabajador` int NOT NULL,
  `id_compra` int NOT NULL,
  PRIMARY KEY (`id_trabajador`,`id_compra`),
  KEY `id_compra` (`id_compra`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `trabajador_compra`
--

INSERT INTO `trabajador_compra` (`id_trabajador`, `id_compra`) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 2),
(5, 3),
(6, 3),
(7, 4),
(8, 4),
(9, 5),
(10, 5),
(1, 6),
(2, 6),
(3, 7),
(4, 7),
(5, 8),
(6, 8),
(7, 9),
(8, 9),
(9, 10),
(10, 10);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `trabajador`
--
ALTER TABLE `trabajador`
  ADD CONSTRAINT `trabajador_ibfk_1` FOREIGN KEY (`id_puesto`) REFERENCES `puesto` (`id`);

--
-- Filtros para la tabla `trabajador_compra`
--
ALTER TABLE `trabajador_compra`
  ADD CONSTRAINT `trabajador_compra_ibfk_1` FOREIGN KEY (`id_trabajador`) REFERENCES `trabajador` (`id`),
  ADD CONSTRAINT `trabajador_compra_ibfk_2` FOREIGN KEY (`id_compra`) REFERENCES `compra` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
