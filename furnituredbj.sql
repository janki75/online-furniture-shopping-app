-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 21, 2020 at 08:20 AM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `furnituredb`
--

-- --------------------------------------------------------

--
-- Table structure for table `advertise_table`
--

DROP TABLE IF EXISTS `advertise_table`;
CREATE TABLE IF NOT EXISTS `advertise_table` (
  `furnitureAdvId` int(11) NOT NULL AUTO_INCREMENT,
  `furnitureAdvAmount` double NOT NULL,
  `furnitureAdvUsedTime` varchar(30) NOT NULL,
  `furnitureAdvSize` varchar(50) NOT NULL,
  `furnitureAdvBrand` varchar(50) NOT NULL,
  `furnitureAdvImg` varchar(200) NOT NULL,
  `advFkUserEmailId` varchar(30) NOT NULL,
  `advFkUserMobileNo` bigint(20) NOT NULL,
  `furnitureAdvCondition` varchar(150) NOT NULL,
  `advFkCategoryId` int(11) NOT NULL,
  PRIMARY KEY (`furnitureAdvId`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `advertise_table`
--

INSERT INTO `advertise_table` (`furnitureAdvId`, `furnitureAdvAmount`, `furnitureAdvUsedTime`, `furnitureAdvSize`, `furnitureAdvBrand`, `furnitureAdvImg`, `advFkUserEmailId`, `advFkUserMobileNo`, `furnitureAdvCondition`, `advFkCategoryId`) VALUES
(5, 10000, '5months', '20H*13W*22D', 'Mocha', 'tdw5.jpg', 'jankiringwala@gmail.com', 8976543219, 'good', 101),
(6, 9000, '10 days', '90 h', 'Amberville', 'sb4.jpg', 'jankiringwala@gmail.com', 8238586057, 'Brand New', 102),
(9, 20000, '2 year', '70 H*20 W', 'Anamika', 'tss1.jpg', 'jankiringwala@gmail.com', 8238586057, 'Good', 105),
(10, 400, '2 month', '80 h', 'nobu', 'tss7.jpg', 'shivaniapatel56@gmail.com', 9976543219, 'Good', 104);

-- --------------------------------------------------------

--
-- Table structure for table `cart_table`
--

DROP TABLE IF EXISTS `cart_table`;
CREATE TABLE IF NOT EXISTS `cart_table` (
  `cartId` int(11) NOT NULL AUTO_INCREMENT,
  `cartQuantity` int(11) NOT NULL,
  `cartAmount` int(11) NOT NULL,
  `fkUserEmailId` varchar(50) NOT NULL,
  `fkFurnitureId` int(11) NOT NULL,
  `fkFurnitureName` varchar(50) NOT NULL,
  `fkFurnitureImg` varchar(200) NOT NULL,
  `fkFurniturePrice` int(11) NOT NULL,
  `fkCategoryId` int(11) NOT NULL,
  `fkRentAmount` int(11) NOT NULL,
  PRIMARY KEY (`cartId`)
) ENGINE=MyISAM AUTO_INCREMENT=57 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category_table`
--

DROP TABLE IF EXISTS `category_table`;
CREATE TABLE IF NOT EXISTS `category_table` (
  `categoryId` int(11) NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(20) NOT NULL,
  PRIMARY KEY (`categoryId`)
) ENGINE=MyISAM AUTO_INCREMENT=135 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category_table`
--

INSERT INTO `category_table` (`categoryId`, `categoryName`) VALUES
(101, 'Wardrobes'),
(102, 'Beds'),
(103, 'Dining Tables'),
(104, 'Sofa And Lounges'),
(105, 'Study Tables'),
(106, 'Decor Pieces'),
(107, 'Chairs And Stools'),
(108, 'Kitchen Appliances');

-- --------------------------------------------------------

--
-- Table structure for table `furniture_table`
--

DROP TABLE IF EXISTS `furniture_table`;
CREATE TABLE IF NOT EXISTS `furniture_table` (
  `furnitureId` int(11) NOT NULL AUTO_INCREMENT,
  `furnitureName` varchar(50) NOT NULL,
  `furniturePrice` double NOT NULL,
  `furnitureBrand` varchar(50) NOT NULL,
  `furnitureSize` varchar(50) NOT NULL,
  `fkCategoryId` int(11) NOT NULL,
  `furnitureImg` varchar(200) NOT NULL,
  `rentFlag` tinyint(1) NOT NULL,
  `rentAmount` int(11) NOT NULL,
  `rentDescription` varchar(200) NOT NULL,
  `furnitureDescription` varchar(200) NOT NULL,
  `furnitureRating` int(11) NOT NULL,
  `fkSubCatId` int(11) NOT NULL,
  PRIMARY KEY (`furnitureId`)
) ENGINE=MyISAM AUTO_INCREMENT=80 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `furniture_table`
--

INSERT INTO `furniture_table` (`furnitureId`, `furnitureName`, `furniturePrice`, `furnitureBrand`, `furnitureSize`, `fkCategoryId`, `furnitureImg`, `rentFlag`, `rentAmount`, `rentDescription`, `furnitureDescription`, `furnitureRating`, `fkSubCatId`) VALUES
(1, 'Marion Two Door Wardrobe', 25000, 'Crystal Furnitech', 'H 75*W 47*D 19 ', 101, 'tdw3.jpg', 1, 1200, 'Weight:200 Kg=\r\nPrimary Material:Engineered Wood=\r\nColor:Cream and Brown=\r\nQuick delivery & Free Service\r\n', 'Warranty:12 Months=\r\nWeight:65 Kg=\r\nPrimary Material:Engineered Wood=\r\nColor:Cream and Brown=\r\nExpected Delivery:7 days=\r\nCondition:Very classy and contemporary design=\r\nQuick delivery\r\n', 3, 1),
(2, 'Aramika Two Door Wardrobe', 31200, 'Mudramark', 'H 72*W 22*D 20', 101, 'tdw4.jpg', 1, 1500, 'Weight:180 Kg=\r\nPrimary Material:Engineered Wood=\r\nColor:Cream and Brown=\r\nQuick delivery & Free Service\r\n', 'Warranty:-36 Months=\r\nWeight:190 Kg=\r\nPrimary Material:Sheeshan Wood\r\nColor:Light Gray=\r\nExpected Delivery:-7 Days', 4, 1),
(3, 'Louis Queen Size Bed', 47000, 'Amberville', 'H 44*W 63*D 82', 102, 'db3.png', 1, 3000, 'Weight:230 Kg=\r\nPrimary Material:Engineered Wood=\r\nColor:Light Grey=\r\nQuick delivery & Free Service\r\n', 'Warranty:36 Months=\r\nWeight:160 Kg=\r\nPrimary Material:Sheeshan Wood=\r\nColor:Light blue=\r\nExpected Delivery:-7 Days', 4, 4),
(4, 'Acropolis Solid Wood Bed', 38000, 'Woodsworth', 'H 29*W 62*D 84', 102, 'db5.jpg', 1, 2700, 'Warranty:36 Months=\r\nWeight:160 Kg=\r\nPrimary Material:Sheeshan Wood=\r\nColor:-Light Gray=\r\nExpected Delivery:-5 Days\r\n', 'Warranty:36 Months=\r\nWeight:160 Kg=\r\nPrimary Material:Sheeshan Wood=\r\nColor:-Light Gray=\r\nExpected Delivery:-5 Days\r\n', 4, 4),
(7, 'Aura Two Seater Sofa', 19500, 'Mudramark', 'H 33*W 46*D 27', 104, 'tss4.jpg', 1, 2200, 'Warranty:36 Months=\r\nWeight:35 Kg=\r\nPrimary Material:-Sheeshan Wood=\r\nColor:-Brown=\r\nExpected Delivery:7 Days\r\n', 'Warranty:36 Months=\r\nWeight:35 Kg=\r\nPrimary Material:-Sheeshan Wood=\r\nColor:-Brown=\r\nExpected Delivery:7 Days\r\n', 3, 7),
(8, 'Oriel Wood  Sofa', 22499, 'Woodsworth', 'H 33*W 57*D 31.5', 104, 'tss7.jpg', 1, 2500, 'Weight:120 Kg= \r\nPrimary Material:Engineered Wood=\r\nColor:Cream= \r\nQuick delivery & Free Service', 'Warranty:36 Months=\r\nWeight:120 Kg=\r\nPrimary Material:Sheeshan Wood\r\n->Color:Brown=\r\n->Expected Delivery:7 Days=', 4, 7),
(9, 'Portable Study Table', 4200, 'Sattva', 'H 9.5*W 23.5*D 13', 105, 'mst5.jpg', 1, 600, 'Weight:30 Kg=\r\nPrimary Material:Engineered Wood=Color:White=\r\nQuick delivery & Free Service\r\n', 'warranty:12 months=\r\nWeight:30 Kg=\r\nPrimary Material:Engineered Wood= \r\nColor:White= \r\nQuick delivery & Free Service', 4, 9),
(10, 'Nobu Study Table', 3900, 'Mintwud', 'H 30*W 64*D 41', 105, 'mst6.jpg', 0, 0, '', 'warranty:30 months=\r\nWeight:60 Kg=\r\nPrimary Material:Engineered Wood=\r\nColor:White=\r\nQuick delivery & Free Service', 4, 9),
(11, 'Multicolor port & planters', 1200, 'Venis', '4.7*7.9 inches', 106, 'pp4.jpg', 1, 600, 'Weight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service=\r\nCombo of 3 Vases', 'warranty:6 months\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service=\r\nCombo of 3 Vases', 4, 11),
(12, 'Transparent Water Vase', 1300, 'Decardo', '04 H*03 W*04 D', 106, 'pp9.jpg', 0, 0, '', 'warranty:8 months=\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service', 4, 11),
(13, 'Colorful Chairs & Stools', 3500, 'Woodsworth', 'H 29.5*W 20*D 21', 107, 'pc1.jpg', 1, 900, 'warranty:9 months=\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service', 'warranty:9 months=\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service', 3, 13),
(14, 'Pink Chair & Stool', 1900, 'Woodsworth', 'H 18.3*W 15*D 15', 107, 'pc3.jpg', 1, 800, 'Weight:90 Kg=\r\nPrimary Material:Metal Iron=\r\nColor:Met Black=\r\nQuick delivery & Free Service\r\n', 'warranty:12 months=\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service', 4, 13),
(15, 'Handle Paniarakkal Pan', 1200, 'Hindware', '2 H*6 W*2 D', 108, 'ck6.jpeg', 1, 350, 'Weight:13 Kg=\r\nPrimary Material:Steel=\r\nColor:Steel silver=\r\nQuick delivery & Free Service\r\n', 'warranty:12 months=\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service\r\n', 3, 15),
(16, 'Ekovana Nonstick', 1009, 'Ekovana', '4 H*6 W*2 D', 108, 'ck9.jpg', 0, 0, '', 'warranty:12 months=\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service', 4, 15),
(36, 'Kera Two door wardrobes', 36000, 'sattva', 'H 29*w 46*D 15', 101, 'tdw7.jpg', 1, 2200, 'Weight:230 Kg=\r\nPrimary Material:Engineered Wood=\r\nColor:Cream and Brown=\r\nQuick delivery & Free Service\r\n', 'warranty:36 months=\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service', 3, 1),
(38, 'Wooden Four Door wardrobes', 48000, 'woodsworth', 'H 35*w 46*D 15', 101, 'fdw8.jpg', 0, 0, '', 'warranty:36 months=\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service\r\n', 3, 2),
(57, 'Beverge Sofas', 25000, 'woody', '10 H*19 W*14 D', 104, 'tss2.jpg', 0, 0, '', 'Warranty:36 Months=\r\nWeight:35 Kg=\r\nPrimary Material:-Sheeshan Wood=\r\nColor:-Brown=\r\nExpected Delivery:7 Days\r\n', 3, 7),
(44, 'Status R Queen Bed', 39000, 'Clouddio', '75 H*60 w*4', 102, 'db9.jpg', 1, 2200, 'warranty:36 months= Weight:30 Kg= Color:Grey & White= Quick delivery & Free Service', 'warranty:36 months= Weight:30 Kg= Color:Grey & White= Quick delivery & Free Service', 3, 4),
(45, 'ProActiv Double Beds', 23000, 'Springfit', '75 H*60 W*18 D', 102, 'sb7.jpg', 1, 3100, 'warranty:36 months=\r\nWeight:30 Kg=\r\nColor:Grey & White\r\n\r\nQuick delivery & Free Service\r\n', 'warranty:36 months=\r\nWeight:30 Kg=\r\nColor:Grey & White\r\n\r\nQuick delivery & Free Service\r\n', 4, 3),
(46, 'Wesely  Dining Tables', 24000, 'Dalla', '75 H * 26 W ', 103, 'sdt6.jpg', 0, 0, '-', 'warranty:36 months=\r\nWeight:30 Kg=\r\nColor:Black=\r\nQuick delivery & Free Service\r\n', 5, 5),
(47, 'Glass Top  Dining Tables', 23000, 'Louis', '15 H*20 W', 103, 'sdt5.jpg', 1, 2400, '-', 'warranty:36 months=\r\nWeight:30 Kg=\r\nColor:Black And White=\r\nQuick delivery & Free Service', 3, 5),
(48, 'Novi 4 Seater Dining Table', 20000, 'Novi', '35 H*20 W', 103, 'fdt6.jpg', 0, 0, '-', 'warranty:36 months=\r\nWeight:30 Kg=\r\nColor:Black=\r\nQuick delivery & Free Service\r\n', 3, 6),
(49, 'Royal Oak Dining Table', 16500, 'Royal', '75 H*  20 W', 103, 'fdt3.jpg', 0, 0, '-', 'warranty:36 months=\r\nWeight:30 Kg=\r\nColor:Black=\r\nQuick delivery & Free Service\r\n', 4, 6),
(50, 'Gravie Sofa', 51000, 'Gravie', '35 H*20 W*14 D', 104, 'fss1.jpg', 0, 0, '-', 'warranty:36 months=\r\nWeight:30 Kg=\r\nColor:Dark Grey=\r\nQuick delivery & Free Service', 4, 8),
(51, 'Rickon sofas', 48000, 'Rickonees', 'H 44*W 63*D 82', 104, 'fss2.jpg', 0, 0, '-', 'warranty:36 months=\r\nWeight:30 Kg=\r\nColor:Grey=\r\nQuick delivery & Free Service', 4, 8),
(52, 'Denamik Sofa', 53000, 'Denamik', 'H 33*W 46*D 27', 104, 'fss6.jpg', 1, 4500, 'warranty:36 months=\r\nWeight:30 Kg=\r\nColor:White=\r\nQuick delivery & Free Service\r\n', 'warranty:36 months=\r\nWeight:30 Kg=\r\nColor:White=\r\nQuick delivery & Free Service\r\n', 4, 8),
(53, 'krainee study table', 3500, 'krainee', 'H 44*W 63*D 82', 105, 'mst8.png', 0, 0, '-', 'warranty:36 months=\r\nWeight:30 Kg=\r\nColor:White=\r\nQuick delivery & Free Service=\r\n', 3, 9),
(54, 'Nemestern', 3400, 'Nemestern', 'H 29*W 62*D 84', 105, 'est6.jpg', 0, 0, '-', 'warranty:36 months=\r\nWeight:30 Kg=\r\nColor:Black=\r\nQuick delivery & Free Service=\r\n', 3, 10),
(55, 'inema study table', 2900, 'inema', 'H 29*W 62*D 84', 105, 'est4.jpg', 1, 900, '->warranty:12 months=\r\n->Weight:30 Kg=\r\n->Color:Brown=\r\n->Quick delivery & Free Service=\r\n', '->warranty:12 months=\r\n->Weight:30 Kg=\r\n->Color:Brown=\r\n->Quick delivery & Free Service=\r\n', 3, 10),
(56, 'nilenia study table', 3100, 'nilenia', 'H 13*W 23*D 11', 105, 'est8.jpg', 0, 0, '-', '->warranty:12 months=\r\n->Weight:30 Kg=\r\n->Color:Brown=\r\n->Quick delivery & Free Service=\r\n', 4, 10),
(60, 'Arnamika Four Door Wardrobe', 42000, 'Arnamika', 'H 44*W 63*D 82', 101, 'fdw7.jpg', 1, 2800, 'Warranty:12 Months=\r\nWeight:65 Kg=\r\nPrimary Material:Engineered Wood=\r\nColor:Cream and Brown=\r\nExpected Delivery:7 days=\r\nCondition:Very classy and contemporary design=\r\nQuick delivery\r\n', 'Warranty:12 Months=\r\nWeight:65 Kg=\r\nPrimary Material:Engineered Wood=\r\nColor:Cream and Brown=\r\nExpected Delivery:7 days=\r\nCondition:Very classy and contemporary design=\r\nQuick delivery\r\n', 3, 2),
(63, 'kaison Double Beds', 24500, 'kaison ', '75 H*60 W*18 D', 102, 'sb2.jpg', 1, 3100, 'warranty:36 months=\r\nWeight:30 Kg=\r\nColor:Grey & White\r\n\r\nQuick delivery & Free Service\r\n', 'warranty:36 months=\r\nWeight:30 Kg=\r\nColor:Grey & White\r\n\r\nQuick delivery & Free Service\r\n', 3, 3),
(62, 'Rickon Four Door Wardrobe', 58000, 'Rickon High', 'H 42*W 45*D 20', 101, 'fdw4.jpg', 1, 4800, 'jni', 'hoil', 4, 2),
(64, 'Arnamika Single Bed', 17000, 'Arnamika', '75 H*60 w*4', 102, 'sb4.jpg', 1, 2200, 'warranty:36 months= Weight:30 Kg= Color:Grey & White= Quick delivery & Free Service', 'warranty:36 months= Weight:30 Kg= Color:Grey & White= Quick delivery & Free Service', 3, 3),
(65, 'Wooden Pure Dining Table', 20500, 'Royal', '75 H*  20 W', 103, 'fdt8.jpg', 0, 0, '-', 'warranty:36 months=\r\nWeight:30 Kg=\r\nColor:Black=\r\nQuick delivery & Free Service\r\n', 3, 6),
(67, 'Rocky 6 Seater Dining Tables', 33000, 'Rocky', '75 H * 26 W * 11 D', 103, 'sdt4.jpg', 0, 0, '-', 'warranty:36 months=\r\nWeight:30 Kg=\r\nColor:Black=\r\nQuick delivery & Free Service\r\n', 4, 5),
(68, 'Brown Vase', 1100, 'Decardo', '04 H*03 W*04 D', 106, 'pp6.jpg', 0, 0, '', 'warranty:8 months=\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service', 4, 11),
(69, 'Multi Wall Art', 3400, 'Venis', '6 H*14 W*8 D', 106, 'wa2.jpg', 1, 1000, 'Weight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service=\r\nCombo of 3 Vases', 'warranty:6 months\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service=\r\nCombo of 3 Vases', 4, 12),
(70, 'Multi Mirror Wall Art', 4000, 'Mernish', '4.7*7.9 inches', 106, 'wa7.jpg', 1, 1200, 'Weight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service=\r\nCombo of 3 Vases', 'warranty:6 months\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service=\r\nCombo of 3 Vases', 4, 12),
(71, 'Round Wall Art', 3800, 'Rendish', '8 H*11 W*9 D', 106, 'wa9.jpg', 1, 900, 'Weight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service=\r\nCombo of 3 Vases', 'warranty:6 months\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service=\r\nCombo of 3 Vases', 3, 12),
(72, 'Green Chairs & Stools', 1700, 'Rennish', 'H 29.5*W 20*D 21', 107, 'pc5.jpg', 0, 0, '', 'warranty:9 months=\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service', 3, 13),
(73, 'solid wood Chair & Stool', 3600, 'Woodsworth', 'H 18.3*W 15*D 15', 107, 'swc1.jpeg', 1, 1200, 'Weight:90 Kg=\r\nPrimary Material:Metal Iron=\r\nColor:Met Black=\r\nQuick delivery & Free Service\r\n', 'warranty:12 months=\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service', 4, 14),
(74, 'Multi color Chair & Stool', 4000, 'Rennish', 'H 18.3*W 15*D 15', 107, 'swc9.jpg', 1, 1300, 'Weight:90 Kg=\r\nPrimary Material:Metal Iron=\r\nColor:Met Black=\r\nQuick delivery & Free Service\r\n', 'warranty:12 months=\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service', 4, 14),
(75, 'Wooden Chair & Stool', 3500, 'Rennish', 'H 18.3*W 15*D 15', 107, 'swc8.jpg', 0, 0, '', 'warranty:12 months=\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service', 4, 14),
(76, 'Swiss Souce Pan', 2800, 'Swiss', '3 H*7 W*2 D', 108, 'ck13.jpg', 0, 0, '', 'warranty:12 months=\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service', 4, 15),
(77, 'Cook-Ez Kitchen Tool', 650, 'Hindware', '2 H*6 W*2 D', 108, 'kt1.jpg', 0, 0, '', 'warranty:12 months=\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service\r\n', 4, 16),
(78, 'Kranjalica Westmark Tool', 650, 'Celina', '2 H*6 W*2 D', 108, 'kt9.jpg', 1, 150, 'warranty:12 months=\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service\r\n', 'warranty:12 months=\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service\r\n', 4, 16),
(79, 'Ensc Prep Knife', 350, 'Celina', '2 H*4 W*1.5 D', 108, 'kt10.jpg', 0, 0, '', 'warranty:12 months=\r\nWeight:30 Kg=\r\nColor:Multicolor=\r\nQuick delivery & Free Service\r\n', 3, 16);

-- --------------------------------------------------------

--
-- Table structure for table `orderdetail_table`
--

DROP TABLE IF EXISTS `orderdetail_table`;
CREATE TABLE IF NOT EXISTS `orderdetail_table` (
  `orderDetailId` int(11) NOT NULL AUTO_INCREMENT,
  `orderFurnitureQty` int(11) NOT NULL,
  `fkFurnitureName` varchar(50) NOT NULL,
  `fkFurniturePrice` double NOT NULL,
  `orderDetailPrice` double NOT NULL,
  `fkCategoryId` int(11) NOT NULL,
  `fkOrderId` int(11) NOT NULL,
  `fkFurnitureId` int(11) NOT NULL,
  PRIMARY KEY (`orderDetailId`)
) ENGINE=MyISAM AUTO_INCREMENT=86 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `orderdetail_table`
--

INSERT INTO `orderdetail_table` (`orderDetailId`, `orderFurnitureQty`, `fkFurnitureName`, `fkFurniturePrice`, `orderDetailPrice`, `fkCategoryId`, `fkOrderId`, `fkFurnitureId`) VALUES
(83, 2, 'Wesely Six Seater Dining Tables', 10000, 20000, 103, 50, 46),
(82, 1, 'Marion Two Door Wardrobe', 25000, 25000, 101, 50, 1),
(81, 2, 'Marion Two Door Wardrobe', 25000, 1800, 101, 49, 1),
(84, 1, 'Wooden Four Door wardrobes', 48000, 48000, 101, 52, 38),
(85, 2, 'Louis Queen Size Bed', 47000, 94000, 102, 53, 3);

-- --------------------------------------------------------

--
-- Table structure for table `order_table`
--

DROP TABLE IF EXISTS `order_table`;
CREATE TABLE IF NOT EXISTS `order_table` (
  `orderId` int(11) NOT NULL AUTO_INCREMENT,
  `orderTotalQty` int(11) NOT NULL,
  `orderTotalPrice` double NOT NULL,
  `fkUserEmailId` varchar(30) NOT NULL,
  `orderDate` datetime NOT NULL,
  PRIMARY KEY (`orderId`)
) ENGINE=MyISAM AUTO_INCREMENT=54 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_table`
--

INSERT INTO `order_table` (`orderId`, `orderTotalQty`, `orderTotalPrice`, `fkUserEmailId`, `orderDate`) VALUES
(50, 2, 45000, 'jankiringwala@gmail.com', '2019-04-18 11:45:05'),
(49, 1, 1800, 'jankiringwala@gmail.com', '2019-04-17 17:14:01'),
(51, 2, 1000, 'jankiringwala@gmail.com', '2019-04-20 00:00:00'),
(52, 1, 48000, 'jankiringwala@gmail.com', '2019-04-20 08:11:29'),
(53, 1, 94000, 'jankiringwala@gmail.com', '2019-04-20 16:48:45');

-- --------------------------------------------------------

--
-- Table structure for table `subcat_table`
--

DROP TABLE IF EXISTS `subcat_table`;
CREATE TABLE IF NOT EXISTS `subcat_table` (
  `subCatId` int(11) NOT NULL AUTO_INCREMENT,
  `subCatName` varchar(30) NOT NULL,
  `fkCategoryId` int(11) NOT NULL,
  PRIMARY KEY (`subCatId`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subcat_table`
--

INSERT INTO `subcat_table` (`subCatId`, `subCatName`, `fkCategoryId`) VALUES
(1, '2 Door Wardrobes', 101),
(2, '3 Door Wardrobes', 101),
(3, 'Single Beds', 102),
(4, 'Double Beds', 102),
(5, '6 Seater Dining Tables', 103),
(6, '4 Seater Dining Tables', 103),
(7, 'Two Seater Sofas', 104),
(8, 'Four Seater Sofas', 104),
(9, 'Modern Study Tables', 105),
(10, 'Ethenic Study Tables', 105),
(11, 'Ports and Planters', 106),
(12, 'Wall Arts', 106),
(13, 'Plastic Chairs & Stools', 107),
(14, 'Solid Wood Chairs & Stools', 107),
(15, 'Cookware', 108),
(16, 'Kitchen Tools', 108);

-- --------------------------------------------------------

--
-- Table structure for table `user_table`
--

DROP TABLE IF EXISTS `user_table`;
CREATE TABLE IF NOT EXISTS `user_table` (
  `userEmailId` varchar(50) NOT NULL,
  `userPassword` varchar(20) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `userMobileNo` bigint(20) NOT NULL,
  `userCity` varchar(20) NOT NULL,
  `userGender` varchar(6) NOT NULL,
  `userAddress` varchar(200) NOT NULL,
  `userType` varchar(5) NOT NULL,
  `userPhoto` varchar(200) NOT NULL,
  PRIMARY KEY (`userEmailId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_table`
--

INSERT INTO `user_table` (`userEmailId`, `userPassword`, `userName`, `userMobileNo`, `userCity`, `userGender`, `userAddress`, `userType`, `userPhoto`) VALUES
('shivaniapatel56@gmail.com', 'shivani2811', 'shivani patel', 9976543219, 'Baroda', 'female', '302,pooja apartment,makarpura', 'admin', 'shivani.jpg'),
('jankiringwala@gmail.com', 'janki7599', 'janki Ringwala', 8238586057, 'Ahmedabad', 'female', '11 shivam flat,maninagar.', 'user', 'image-1555726722758.jpeg'),
('bhumibhavsar2598@gmail.com', 'bhumi2598', 'bhumiii', 8401977551, 'Mumbai', 'male', 'Ishanpur.', 'user', 'image-1555341397573.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
