-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 18, 2025 at 05:46 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fitflex_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` varchar(50) NOT NULL,
  `quantity` int(11) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` varchar(50) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `image` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `discount`, `category`, `brand`, `stock`, `rating`, `image`) VALUES
('sw-001', 'Men\'s Running Shoes', 'Lightweight breathable shoes designed for long-distance running.', 75.00, 10, 'Footwear', 'Nike', 30, 4.6, 'https://nov-random-3.myshopify.com/cdn/shop/products/1_e0dd2ab4-9e90-4a9c-8256-839418377dc7_1120x.png?v=1629363074'),
('sw-002', 'Men\'s Black Running Jacket', 'Lightweight, breathable, and water-resistant jacket designed for optimal running performance in all weather.', 69.99, 10, 'Clothing', 'Nike', 40, 4.6, 'https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-list-sidebar-35.jpg'),
('sw-003', 'Unisex Training T-Shirt', 'Sweat-wicking T-shirt suitable for all kinds of training sessions.', 29.99, 5, 'Clothing', 'Puma', 70, 4.4, 'https://res.cloudinary.com/dv7clkufx/image/upload/v1750148457/whiteTshirts_seyw02.jpg'),
('sw-004', 'Sports Hoodie', 'Comfortable hoodie with moisture-wicking fabric and thermal lining.', 59.00, 20, 'Clothing', 'Under Armour', 40, 4.7, 'https://nov-random-3.myshopify.com/cdn/shop/products/1_f18e2e69-0538-4947-bf6d-205dfa37ab74_1120x.png?v=1631163100'),
('sw-005', 'Compression Arm Sleeves', 'Elastic arm sleeves for support during workouts or outdoor sports.', 19.99, 0, 'Accessories', 'Reebok', 100, 4.2, 'https://res.cloudinary.com/dv7clkufx/image/upload/v1748872441/armsSleeves_yahrkf.jpg'),
('sw-006', 'Men\'s Basketball Shorts', 'Loose fit shorts with mesh panels for ventilation and comfort.', 34.50, 10, 'Clothing', 'Jordan', 60, 4.5, 'https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-list-sidebar-54.jpg'),
('sw-007', 'Men\'s Basketball Shorts', 'Loose fit shorts with mesh panels for ventilation and comfort.', 34.50, 10, 'Clothing', 'Jordan', 60, 4.5, 'https://hexo-demo.myshopify.com/cdn/shop/files/Active_wear_06_360x.png?v=1731488973'),
('sw-008', 'Stripes Rain.RDY Jacket', 'Water-repellent women\'s jacket with breathable fabric and stylish stripe design.', 89.99, 15, 'Clothing', 'Adidas', 40, 4.7, 'https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/grouped-product-photo-3-600x750.jpg'),
('sw-009', 'Ultraboost 21', 'High-performance running shoes with responsive Boost cushioning and sock-like fit.', 180.00, 20, 'Footwear', 'Adidas', 25, 4.8, 'https://res.cloudinary.com/dv7clkufx/image/upload/v1750086223/shoe1_zdfmar.webp'),
('sw-010', 'Adidas Samba', 'Classic indoor soccer shoes turned casual with sleek leather upper.', 100.00, 10, 'Footwear', 'Adidas', 35, 4.6, 'https://res.cloudinary.com/dv7clkufx/image/upload/v1750086222/shoe2_jhro6g.webp'),
('sw-011', 'Ultraboost Running', 'Responsive and stylish running shoes with superior grip and support.', 160.00, 15, 'Footwear', 'Adidas', 20, 4.7, 'https://res.cloudinary.com/dv7clkufx/image/upload/v1750086223/shoe3_fymkff.webp'),
('sw-012', 'Urban Gray Backpack', 'Durable and spacious gray backpack designed for sports and daily use.', 85.00, 10, 'Gear & Equipment', 'Nike', 15, 4.5, 'https://res.cloudinary.com/dv7clkufx/image/upload/v1750100081/grayBagpack_hj7okz.jpg'),
('sw-013', 'Blue Rucksack Backpack', 'Stylish blue rucksack backpack with multiple compartments for organized storage.', 95.00, 12, 'Gear & Equipment', 'Under Armour', 10, 4.6, 'https://res.cloudinary.com/dv7clkufx/image/upload/v1750100078/blue_bag_ty6pjm.jpg'),
('sw-014', 'Compact Black Belt Bag', 'Sleek and compact black belt bag perfect for carrying essentials hands-free during workouts or casual outings.', 45.00, 8, 'Gear & Equipment', 'Puma', 25, 4.4, 'https://res.cloudinary.com/dv7clkufx/image/upload/v1750100266/beltBag_zz9hdg.jpg'),
('sw-015', 'Men\'s Red Sport Shirt', 'Breathable and sweat-wicking red sport shirt ideal for intense workouts and outdoor activities.', 34.99, 20, 'Clothing', 'Puma', 60, 4.7, 'https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-single-3.jpg'),
('sw-016', 'Women\'s Full-Zip Hoodie', 'Cozy and stylish full-zip hoodie perfect for casual wear, workouts, or layering on chilly days.', 59.99, 10, 'Clothing', 'Under Armour', 45, 4.9, 'https://wpbingo-azeno.myshopify.com/cdn/shop/files/Women_s-Jacket-Down-Fill-1_1080x1080.jpg?v=1722313217'),
('sw-017', 'Adidas Sneakers', 'Lightweight breathable shoes designed for long-distance running.', 75.00, 10, 'Shoes', 'Nike', 30, 4.6, 'https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-list-filter-13-600x750.jpg'),
('sw-018', 'Beige Lifestyle Shoes', 'High-waisted stretchable yoga pants perfect for workouts and daily wear.', 42.99, 15, 'Bottoms', 'Nike', 50, 4.8, 'https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/home-7-img-1-600x750.jpg'),
('sw-019', 'Black Nike Shoes', 'Sweat-wicking T-shirt suitable for all kinds of training sessions.', 29.99, 5, 'Tops', 'Puma', 70, 4.4, 'https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-list-sidebar-01-600x750.jpg'),
('sw-020', 'Black Yellow', 'Comfortable hoodie with moisture-wicking fabric and thermal lining.', 59.00, 20, 'Outerwear', 'Adidas', 40, 4.7, 'https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/home-7-img-13-600x750.jpg'),
('sw-021', 'Lifestyle Shoes', 'Elastic arm sleeves for support during workouts or outdoor sports.', 19.99, 0, 'Accessories', 'Nike', 100, 4.2, 'https://dunker.qodeinteractive.com/wp-content/uploads/2022/12/shop-variabale-img-3-600x750.jpg'),
('sw-022', 'Red Jordans', 'Loose fit shorts with mesh panels for ventilation and comfort.', 34.50, 10, 'Bottoms', 'Jordan', 60, 4.5, 'https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/home-2-product-13-600x510.jpg'),
('sw-023', 'Nike Sneakers Everyday', 'Loose fit shorts with mesh panels for ventilation and comfort.', 34.50, 10, 'Bottoms', 'Jordan', 60, 4.5, 'https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/home-5-img14-600x750.jpg'),
('sw-024', 'Yellow Lifestyle Shoes', 'Water-repellent women\'s jacket with breathable fabric and stylish stripe design.', 89.99, 15, 'Outerwear', 'Adidas', 40, 4.7, 'https://dunker.qodeinteractive.com/wp-content/uploads/2023/01/home-7-img-55-600x750.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `product_colors`
--

CREATE TABLE `product_colors` (
  `id` int(11) NOT NULL,
  `product_id` varchar(50) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_colors`
--

INSERT INTO `product_colors` (`id`, `product_id`, `color`) VALUES
(1, 'sw-001', 'black'),
(2, 'sw-001', 'white'),
(3, 'sw-001', 'blue'),
(4, 'sw-002', 'black'),
(5, 'sw-003', 'navy'),
(6, 'sw-003', 'red'),
(7, 'sw-003', 'gray'),
(8, 'sw-004', 'black'),
(9, 'sw-004', 'olive'),
(10, 'sw-004', 'maroon'),
(11, 'sw-005', 'black'),
(12, 'sw-005', 'white'),
(13, 'sw-006', 'black'),
(14, 'sw-006', 'white'),
(15, 'sw-006', 'red'),
(16, 'sw-007', 'black'),
(17, 'sw-007', 'white'),
(18, 'sw-007', 'red'),
(19, 'sw-008', 'navy'),
(20, 'sw-008', 'gray'),
(21, 'sw-008', 'white'),
(22, 'sw-009', 'black'),
(23, 'sw-009', 'white'),
(24, 'sw-009', 'solar yellow'),
(25, 'sw-010', 'black'),
(26, 'sw-010', 'white'),
(27, 'sw-010', 'gum'),
(28, 'sw-011', 'gray'),
(29, 'sw-011', 'navy'),
(30, 'sw-011', 'white'),
(31, 'sw-012', 'gray'),
(32, 'sw-013', 'blue'),
(33, 'sw-014', 'black'),
(34, 'sw-015', 'red'),
(35, 'sw-016', 'black'),
(36, 'sw-016', 'grey'),
(37, 'sw-016', 'navy'),
(38, 'sw-017', 'black'),
(39, 'sw-017', 'white'),
(40, 'sw-017', 'blue'),
(41, 'sw-018', 'black'),
(42, 'sw-018', 'gray'),
(43, 'sw-018', 'purple'),
(44, 'sw-019', 'navy'),
(45, 'sw-019', 'red'),
(46, 'sw-019', 'gray'),
(47, 'sw-020', 'black'),
(48, 'sw-020', 'olive'),
(49, 'sw-020', 'maroon'),
(50, 'sw-021', 'black'),
(51, 'sw-021', 'white'),
(52, 'sw-022', 'black'),
(53, 'sw-022', 'white'),
(54, 'sw-022', 'red'),
(55, 'sw-023', 'black'),
(56, 'sw-023', 'white'),
(57, 'sw-023', 'red'),
(58, 'sw-024', 'navy'),
(59, 'sw-024', 'gray'),
(60, 'sw-024', 'white');

-- --------------------------------------------------------

--
-- Table structure for table `product_delivery_info`
--

CREATE TABLE `product_delivery_info` (
  `id` int(11) NOT NULL,
  `product_id` varchar(50) DEFAULT NULL,
  `free_shipping` tinyint(1) DEFAULT NULL,
  `estimated_delivery` varchar(100) DEFAULT NULL,
  `return_policy` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_delivery_info`
--

INSERT INTO `product_delivery_info` (`id`, `product_id`, `free_shipping`, `estimated_delivery`, `return_policy`) VALUES
(1, 'sw-001', 1, '3-5 business days', '30-day return window'),
(2, 'sw-002', 1, '3-5 business days', '30-day return policy'),
(3, 'sw-003', 1, '2-4 business days', '20-day return policy'),
(4, 'sw-004', 1, '3-6 business days', '30-day return policy'),
(5, 'sw-005', 0, '5-8 business days', '10-day return policy'),
(6, 'sw-006', 1, '4-6 business days', '20-day return policy'),
(7, 'sw-007', 1, '4-6 business days', '20-day return policy'),
(8, 'sw-008', 1, '3-5 business days', '30-day return policy'),
(9, 'sw-009', 1, '3-5 business days', '30-day return policy'),
(10, 'sw-010', 1, '2-4 business days', '30-day return policy'),
(11, 'sw-011', 1, '3-6 business days', '30-day return policy'),
(12, 'sw-012', 1, '4-7 business days', '30-day return policy'),
(13, 'sw-013', 1, '3-5 business days', '30-day return policy'),
(14, 'sw-014', 1, '2-5 business days', '30-day return policy'),
(15, 'sw-015', 0, '4-6 business days', '15-day return policy'),
(16, 'sw-016', 1, '3-6 business days', '30-day return policy'),
(17, 'sw-017', 1, '3-5 business days', '30-day return window'),
(18, 'sw-018', 0, '5-7 business days', '15-day return policy'),
(19, 'sw-019', 1, '2-4 business days', '20-day return policy'),
(20, 'sw-020', 1, '3-6 business days', '30-day return policy'),
(21, 'sw-021', 0, '5-8 business days', '10-day return policy'),
(22, 'sw-022', 1, '4-6 business days', '20-day return policy'),
(23, 'sw-023', 1, '4-6 business days', '20-day return policy'),
(24, 'sw-024', 1, '3-5 business days', '30-day return policy');

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `id` int(11) NOT NULL,
  `product_id` varchar(50) DEFAULT NULL,
  `image_url` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_images`
--

INSERT INTO `product_images` (`id`, `product_id`, `image_url`) VALUES
(1, 'sw-001', 'https://example.com/images/shoes1-1.jpg'),
(2, 'sw-001', 'https://example.com/images/shoes1-2.jpg'),
(3, 'sw-002', 'https://example.com/images/running-jacket1.jpg'),
(4, 'sw-002', 'https://example.com/images/running-jacket2.jpg'),
(5, 'sw-003', 'https://example.com/images/tshirt1.jpg'),
(6, 'sw-003', 'https://example.com/images/tshirt2.jpg'),
(7, 'sw-004', 'https://example.com/images/hoodie1.jpg'),
(8, 'sw-004', 'https://example.com/images/hoodie2.jpg'),
(9, 'sw-005', 'https://example.com/images/armsleeve1.jpg'),
(10, 'sw-005', 'https://example.com/images/armsleeve2.jpg'),
(11, 'sw-006', 'https://example.com/images/basketball-shorts1.jpg'),
(12, 'sw-006', 'https://example.com/images/basketball-shorts2.jpg'),
(13, 'sw-007', 'https://example.com/images/basketball-shorts1.jpg'),
(14, 'sw-007', 'https://example.com/images/basketball-shorts2.jpg'),
(15, 'sw-008', 'https://example.com/images/rain-jacket1.jpg'),
(16, 'sw-008', 'https://example.com/images/rain-jacket2.jpg'),
(17, 'sw-009', 'https://example.com/images/ultraboost21-1.jpg'),
(18, 'sw-009', 'https://example.com/images/ultraboost21-2.jpg'),
(19, 'sw-010', 'https://example.com/images/samba-1.jpg'),
(20, 'sw-010', 'https://example.com/images/samba-2.jpg'),
(21, 'sw-011', 'https://example.com/images/ultraboost-running1.jpg'),
(22, 'sw-011', 'https://example.com/images/ultraboost-running2.jpg'),
(23, 'sw-012', 'https://example.com/images/urban-gray-backpack1.jpg'),
(24, 'sw-012', 'https://example.com/images/urban-gray-backpack2.jpg'),
(25, 'sw-013', 'https://example.com/images/blue-rucksack-backpack1.jpg'),
(26, 'sw-013', 'https://example.com/images/blue-rucksack-backpack2.jpg'),
(27, 'sw-014', 'https://example.com/images/black-belt-bag1.jpg'),
(28, 'sw-014', 'https://example.com/images/black-belt-bag2.jpg'),
(29, 'sw-015', 'https://example.com/images/red-sport-shirt1.jpg'),
(30, 'sw-015', 'https://example.com/images/red-sport-shirt2.jpg'),
(31, 'sw-016', 'https://example.com/images/full-zip-hoodie1.jpg'),
(32, 'sw-016', 'https://example.com/images/full-zip-hoodie2.jpg'),
(33, 'sw-017', 'https://example.com/images/shoes1-1.jpg'),
(34, 'sw-017', 'https://example.com/images/shoes1-2.jpg'),
(35, 'sw-018', 'https://example.com/images/yoga-pants1.jpg'),
(36, 'sw-018', 'https://example.com/images/yoga-pants2.jpg'),
(37, 'sw-019', 'https://example.com/images/tshirt1.jpg'),
(38, 'sw-019', 'https://example.com/images/tshirt2.jpg'),
(39, 'sw-020', 'https://example.com/images/hoodie1.jpg'),
(40, 'sw-020', 'https://example.com/images/hoodie2.jpg'),
(41, 'sw-021', 'https://example.com/images/armsleeve1.jpg'),
(42, 'sw-021', 'https://example.com/images/armsleeve2.jpg'),
(43, 'sw-022', 'https://example.com/images/basketball-shorts1.jpg'),
(44, 'sw-022', 'https://example.com/images/basketball-shorts2.jpg'),
(45, 'sw-023', 'https://example.com/images/basketball-shorts1.jpg'),
(46, 'sw-023', 'https://example.com/images/basketball-shorts2.jpg'),
(47, 'sw-024', 'https://example.com/images/rain-jacket1.jpg'),
(48, 'sw-024', 'https://example.com/images/rain-jacket2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `product_reviews`
--

CREATE TABLE `product_reviews` (
  `id` int(11) NOT NULL,
  `product_id` varchar(50) DEFAULT NULL,
  `user` varchar(100) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `comment` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_reviews`
--

INSERT INTO `product_reviews` (`id`, `product_id`, `user`, `rating`, `comment`) VALUES
(1, 'sw-001', 'JohnDoe21', 5, 'Extremely comfortable!'),
(2, 'sw-001', 'RunnerGirl', 4, 'Runs a bit tight.'),
(3, 'sw-002', 'RunnerPro', 5, 'Perfect for early morning jogs!'),
(4, 'sw-003', 'GymGuy', 4, 'Very comfortable and breathable.'),
(5, 'sw-004', 'ChillMode', 5, 'Warm and stylish!'),
(6, 'sw-005', 'SportyAlex', 4, 'Good compression, helps with soreness.'),
(7, 'sw-006', 'BallinBenny', 5, 'Best shorts for pickup games!'),
(8, 'sw-007', 'BallinBenny', 5, 'Best shorts for pickup games!'),
(9, 'sw-008', 'RainRunner', 5, 'Perfect for wet weather. Looks good and keeps me dry!'),
(10, 'sw-009', 'MarathonMike', 5, 'These are the most responsive shoes I\'ve owned!'),
(11, 'sw-010', 'StyleSeeker', 5, 'Timeless design and fits perfectly!'),
(12, 'sw-011', 'TrackMaster', 5, 'Supportive and light — perfect for long runs!'),
(13, 'sw-012', 'PackPro', 4, 'Perfect for gym and daily commutes, very comfortable.'),
(14, 'sw-013', 'TravelGuru', 5, 'Great for outdoor sports and travel, very durable.'),
(15, 'sw-014', 'ActiveRunner', 5, 'Very convenient and stylish. Fits all my essentials!'),
(16, 'sw-015', 'GymFreak', 5, 'Comfortable and looks great!'),
(17, 'sw-016', 'ChillStyle', 5, 'Super comfortable and warm!'),
(18, 'sw-017', 'JohnDoe21', 5, 'Extremely comfortable!'),
(19, 'sw-017', 'RunnerGirl', 4, 'Runs a bit tight.'),
(20, 'sw-018', 'FitQueen', 5, 'Great fit and flexibility!'),
(21, 'sw-019', 'GymGuy', 4, 'Very comfortable and breathable.'),
(22, 'sw-020', 'ChillMode', 5, 'Warm and stylish!'),
(23, 'sw-021', 'SportyAlex', 4, 'Good compression, helps with soreness.'),
(24, 'sw-022', 'BallinBenny', 5, 'Best shorts for pickup games!'),
(25, 'sw-023', 'BallinBenny', 5, 'Best shorts for pickup games!'),
(26, 'sw-024', 'RainRunner', 5, 'Perfect for wet weather. Looks good and keeps me dry!');

-- --------------------------------------------------------

--
-- Table structure for table `product_sizes`
--

CREATE TABLE `product_sizes` (
  `id` int(11) NOT NULL,
  `product_id` varchar(50) DEFAULT NULL,
  `size` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_sizes`
--

INSERT INTO `product_sizes` (`id`, `product_id`, `size`) VALUES
(1, 'sw-001', '7'),
(2, 'sw-001', '8'),
(3, 'sw-001', '9'),
(4, 'sw-001', '10'),
(5, 'sw-001', '11'),
(6, 'sw-002', 'M'),
(7, 'sw-002', 'L'),
(8, 'sw-002', 'XL'),
(9, 'sw-002', 'XXL'),
(10, 'sw-003', 'S'),
(11, 'sw-003', 'M'),
(12, 'sw-003', 'L'),
(13, 'sw-003', 'XL'),
(14, 'sw-003', 'XXL'),
(15, 'sw-004', 'M'),
(16, 'sw-004', 'L'),
(17, 'sw-004', 'XL'),
(18, 'sw-005', 'M'),
(19, 'sw-005', 'L'),
(20, 'sw-006', 'M'),
(21, 'sw-006', 'L'),
(22, 'sw-006', 'XL'),
(23, 'sw-007', 'M'),
(24, 'sw-007', 'L'),
(25, 'sw-007', 'XL'),
(26, 'sw-008', 'S'),
(27, 'sw-008', 'M'),
(28, 'sw-008', 'L'),
(29, 'sw-008', 'XL'),
(30, 'sw-009', '7'),
(31, 'sw-009', '8'),
(32, 'sw-009', '9'),
(33, 'sw-009', '10'),
(34, 'sw-009', '11'),
(35, 'sw-009', '12'),
(36, 'sw-010', '6'),
(37, 'sw-010', '7'),
(38, 'sw-010', '8'),
(39, 'sw-010', '9'),
(40, 'sw-010', '10'),
(41, 'sw-010', '11'),
(42, 'sw-011', '7'),
(43, 'sw-011', '8'),
(44, 'sw-011', '9'),
(45, 'sw-011', '10'),
(46, 'sw-011', '11'),
(47, 'sw-011', '12'),
(48, 'sw-015', 'S'),
(49, 'sw-015', 'M'),
(50, 'sw-015', 'L'),
(51, 'sw-015', 'XL'),
(52, 'sw-016', 'S'),
(53, 'sw-016', 'M'),
(54, 'sw-016', 'L'),
(55, 'sw-016', 'XL'),
(56, 'sw-017', '7'),
(57, 'sw-017', '8'),
(58, 'sw-017', '9'),
(59, 'sw-017', '10'),
(60, 'sw-017', '11'),
(61, 'sw-018', 'S'),
(62, 'sw-018', 'M'),
(63, 'sw-018', 'L'),
(64, 'sw-018', 'XL'),
(65, 'sw-019', 'S'),
(66, 'sw-019', 'M'),
(67, 'sw-019', 'L'),
(68, 'sw-019', 'XL'),
(69, 'sw-019', 'XXL'),
(70, 'sw-020', 'M'),
(71, 'sw-020', 'L'),
(72, 'sw-020', 'XL'),
(73, 'sw-021', 'M'),
(74, 'sw-021', 'L'),
(75, 'sw-022', 'M'),
(76, 'sw-022', 'L'),
(77, 'sw-022', 'XL'),
(78, 'sw-023', 'M'),
(79, 'sw-023', 'L'),
(80, 'sw-023', 'XL'),
(81, 'sw-024', 'S'),
(82, 'sw-024', 'M'),
(83, 'sw-024', 'L'),
(84, 'sw-024', 'XL');

-- --------------------------------------------------------

--
-- Table structure for table `product_tags`
--

CREATE TABLE `product_tags` (
  `id` int(11) NOT NULL,
  `product_id` varchar(50) DEFAULT NULL,
  `tag` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_tags`
--

INSERT INTO `product_tags` (`id`, `product_id`, `tag`) VALUES
(1, 'sw-001', 'running'),
(2, 'sw-001', 'men'),
(3, 'sw-001', 'shoes'),
(4, 'sw-001', 'lightweight'),
(5, 'sw-002', 'running'),
(6, 'sw-002', 'jacket'),
(7, 'sw-002', 'men'),
(8, 'sw-002', 'black'),
(9, 'sw-003', 'tshirt'),
(10, 'sw-003', 'training'),
(11, 'sw-003', 'unisex'),
(12, 'sw-003', 'dryfit'),
(13, 'sw-004', 'hoodie'),
(14, 'sw-004', 'sportswear'),
(15, 'sw-004', 'thermal'),
(16, 'sw-004', 'winter'),
(17, 'sw-005', 'compression'),
(18, 'sw-005', 'accessories'),
(19, 'sw-005', 'arm'),
(20, 'sw-005', 'sleeves'),
(21, 'sw-006', 'shorts'),
(22, 'sw-006', 'basketball'),
(23, 'sw-006', 'men'),
(24, 'sw-006', 'mesh'),
(25, 'sw-007', 'shorts'),
(26, 'sw-007', 'basketball'),
(27, 'sw-007', 'men'),
(28, 'sw-007', 'mesh'),
(29, 'sw-008', 'jacket'),
(30, 'sw-008', 'rainwear'),
(31, 'sw-008', 'women'),
(32, 'sw-008', 'outerwear'),
(33, 'sw-008', 'waterproof'),
(34, 'sw-009', 'running'),
(35, 'sw-009', 'shoes'),
(36, 'sw-009', 'adidas'),
(37, 'sw-009', 'ultraboost'),
(38, 'sw-010', 'casual'),
(39, 'sw-010', 'shoes'),
(40, 'sw-010', 'leather'),
(41, 'sw-010', 'samba'),
(42, 'sw-010', 'adidas'),
(43, 'sw-011', 'running'),
(44, 'sw-011', 'adidas'),
(45, 'sw-011', 'ultraboost'),
(46, 'sw-011', 'performance'),
(47, 'sw-011', 'shoes'),
(48, 'sw-012', 'backpack'),
(49, 'sw-012', 'gray'),
(50, 'sw-012', 'nike'),
(51, 'sw-012', 'sports'),
(52, 'sw-012', 'gear'),
(53, 'sw-013', 'rucksack'),
(54, 'sw-013', 'backpack'),
(55, 'sw-013', 'blue'),
(56, 'sw-013', 'under armour'),
(57, 'sw-013', 'gear'),
(58, 'sw-014', 'belt bag'),
(59, 'sw-014', 'shoulder bag'),
(60, 'sw-014', 'black'),
(61, 'sw-014', 'puma'),
(62, 'sw-014', 'gear'),
(63, 'sw-015', 'sport'),
(64, 'sw-015', 'shirt'),
(65, 'sw-015', 'men'),
(66, 'sw-015', 'red'),
(67, 'sw-016', 'hoodie'),
(68, 'sw-016', 'women'),
(69, 'sw-016', 'full zip'),
(70, 'sw-016', 'casual'),
(71, 'sw-016', 'warm'),
(72, 'sw-017', 'running'),
(73, 'sw-017', 'men'),
(74, 'sw-017', 'shoes'),
(75, 'sw-017', 'lightweight'),
(76, 'sw-018', 'yoga'),
(77, 'sw-018', 'women'),
(78, 'sw-018', 'pants'),
(79, 'sw-018', 'fitness'),
(80, 'sw-019', 'tshirt'),
(81, 'sw-019', 'training'),
(82, 'sw-019', 'unisex'),
(83, 'sw-019', 'dryfit'),
(84, 'sw-020', 'hoodie'),
(85, 'sw-020', 'sportswear'),
(86, 'sw-020', 'thermal'),
(87, 'sw-020', 'winter'),
(88, 'sw-021', 'compression'),
(89, 'sw-021', 'accessories'),
(90, 'sw-021', 'arm'),
(91, 'sw-021', 'sleeves'),
(92, 'sw-022', 'shorts'),
(93, 'sw-022', 'basketball'),
(94, 'sw-022', 'men'),
(95, 'sw-022', 'mesh'),
(96, 'sw-023', 'shorts'),
(97, 'sw-023', 'basketball'),
(98, 'sw-023', 'men'),
(99, 'sw-023', 'mesh'),
(100, 'sw-024', 'jacket'),
(101, 'sw-024', 'rainwear'),
(102, 'sw-024', 'women'),
(103, 'sw-024', 'outerwear'),
(104, 'sw-024', 'waterproof');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` varchar(50) NOT NULL,
  `rating` int(11) DEFAULT NULL CHECK (`rating` between 1 and 5),
  `comment` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `user_id`, `product_id`, `rating`, `comment`, `created_at`) VALUES
(2, 1, 'sw-001', 5, 'Great product, highly recommend!', '2025-08-01 10:57:19'),
(3, 1, 'sw-002', 4, 'Good Product.', '2025-08-14 17:36:21');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(30) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'customer'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`) VALUES
(1, 'tamjid', 'tamjidahmed388@gmail.com', 'admin'),
(2, 'tamjid', 'asd@gmail.com', 'customer'),
(3, 'john doe', 'jphn@gmail.com', 'customer');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `product_id` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_colors`
--
ALTER TABLE `product_colors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product_delivery_info`
--
ALTER TABLE `product_delivery_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product_reviews`
--
ALTER TABLE `product_reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product_sizes`
--
ALTER TABLE `product_sizes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product_tags`
--
ALTER TABLE `product_tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_wishlist` (`user_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_colors`
--
ALTER TABLE `product_colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `product_delivery_info`
--
ALTER TABLE `product_delivery_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `product_reviews`
--
ALTER TABLE `product_reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `product_sizes`
--
ALTER TABLE `product_sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `product_tags`
--
ALTER TABLE `product_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product_colors`
--
ALTER TABLE `product_colors`
  ADD CONSTRAINT `product_colors_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_delivery_info`
--
ALTER TABLE `product_delivery_info`
  ADD CONSTRAINT `product_delivery_info_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_images`
--
ALTER TABLE `product_images`
  ADD CONSTRAINT `product_images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_reviews`
--
ALTER TABLE `product_reviews`
  ADD CONSTRAINT `product_reviews_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_sizes`
--
ALTER TABLE `product_sizes`
  ADD CONSTRAINT `product_sizes_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_tags`
--
ALTER TABLE `product_tags`
  ADD CONSTRAINT `product_tags_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD CONSTRAINT `wishlist_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `wishlist_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
