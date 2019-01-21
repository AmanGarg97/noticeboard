-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 21, 2019 at 12:09 AM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notice`
--

-- --------------------------------------------------------

--
-- Table structure for table `notices`
--

DROP TABLE IF EXISTS `notices`;
CREATE TABLE IF NOT EXISTS `notices` (
  `id` int(11) NOT NULL,
  `notice` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT 'NOTICE',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `imagepath` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notices`
--

INSERT INTO `notices` (`id`, `notice`, `title`, `createdAt`, `updatedAt`, `imagepath`) VALUES
(1, 'This is sample notice 1', 'NOTICE', '2018-09-10 06:55:43', '2019-01-20 16:59:56', 'public\\uploads\\myImage-1548003596499.jpg'),
(2, 'This is sample notice 2', 'NOTICE', '2018-09-10 06:55:56', '2019-01-20 16:43:44', ''),
(3, 'This is sample notice 3', 'NOTICE', '2018-09-10 06:56:04', '2018-09-10 06:56:04', ''),
(4, 'This is sample notice 4', 'NOTICE', '2018-09-10 06:56:12', '2018-09-10 06:56:12', ''),
(5, 'In seminar', 'NOTICE', '2018-09-10 06:57:37', '2019-01-20 09:08:38', ''),
(6, 'In seminar hall', 'Workshop', '2018-09-10 06:59:34', '2019-01-20 09:07:00', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
