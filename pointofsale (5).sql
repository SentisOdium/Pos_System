-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 30, 2025 at 10:43 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pointofsale`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contactNo` varchar(15) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `role` enum('user','admin') DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `name`, `email`, `contactNo`, `password`, `description`, `role`) VALUES
(33, 'fsdfsdfsdfdsf', 'dsddsf@gmail.com', NULL, '$2b$10$/zamA6VL9XwGDwPtnCmxoOUuDOQ2wTZOtt1W0CmV3OmIE1s37tMrG', NULL, 'user'),
(34, 'ttttt', 'trtrtertrf@gmail.com', '09458978322', '$2b$10$M1OchaByj6holmAVSLSE9OFPvsm/O41Ng8VmZ32QtYJ24frlQkV32', '11111', 'admin'),
(36, 'Jomar Ace A. Carmona', 'jomaracecarmona@gmail.com', NULL, '$2b$10$AZISthng1pinDA.M5.Tmb.j7wn7KLPJV1bPCNz0bVvnen8G4O69jS', NULL, 'user'),
(45, 'Ethan Hunt', 'ethan.h@example.com', '09451234567', '$2b$10$dummyhash5', NULL, 'admin'),
(46, 'Fiona Glenanne', 'fiona.g@example.com', '09234567890', '$2b$10$dummyhash6', 'User test', 'user'),
(47, 'George Martin', 'george.m@example.com', NULL, '$2b$10$dummyhash7', NULL, 'user'),
(48, 'Hannah Lee', 'hannah.l@example.com', '09345678901', '$2b$10$dummyhash8', 'Admin test', 'admin'),
(49, 'Ian Curtis', 'ian.c@example.com', NULL, '$2b$10$dummyhash9', NULL, 'user'),
(50, 'Julia Roberts', 'julia.r@example.com', '09567890123', '$2b$10$dummyhash10', 'Demo account', 'user'),
(51, 'user456', '456@gmail.com', NULL, '$2b$10$6lTMUA5305/YCAWQ97ae4.JFsG2x3r9OgUq5jyw1d5tlIaLk9PvHi', NULL, 'user'),
(56, 'Ethan Hunt', 'ethan.hunt@gmail.com', '09567890123', '$2b$10$dummyhash5', 'Admin', 'user'),
(57, 'Fiona Glenanne', 'fiona.glenanne@gmail.com', '09612345678', '$2b$10$dummyhash6', 'User', 'user'),
(58, 'George Martin', 'george.martin@gmail.com', '09723456789', '$2b$10$dummyhash7', 'User', 'user'),
(59, 'Hannah Lee', 'hannah.lee@gmail.com', '09834567890', '$2b$10$dummyhash8', 'Moderator', 'user'),
(60, 'Ian Curtis', 'ian.curtis@gmail.com', '09945678901', '$2b$10$dummyhash9', 'User', 'user'),
(61, 'Julia Roberts', 'julia.roberts@gmail.com', '09123456789', '$2b$10$dummyhash10', 'Admin', 'user'),
(62, 'Kevin Bacon', 'kevin.bacon@gmail.com', '09234567891', '$2b$10$dummyhash11', 'User', 'user'),
(63, 'Laura Palmer', 'laura.palmer@gmail.com', '09345678912', '$2b$10$dummyhash12', 'Usergdfg', 'admin'),
(64, 'Michael Scotts', 'michael.scott@gmail.com', '09456789012', '$2b$10$dummyhash13', 'Manager', 'user'),
(65, 'Nancy Drew', 'nancy.drew@gmail.com', '09567890134', '$2b$10$dummyhash14', 'User', 'user'),
(66, 'Oscar Wilde', 'oscar.wilde@gmail.com', '09678901234', '$2b$10$dummyhash15', 'Admin', 'user'),
(67, 'Pam Beesly', 'pam.beesly@gmail.com', '09789012345', '$2b$10$dummyhash16', 'User', 'user'),
(68, 'Quentin Tarantino', 'quentin.t@gmail.com', '09890123456', '$2b$10$dummyhash17', 'Moderator', 'user'),
(69, 'Rachel Green', 'rachel.green@gmail.com', '09901234567', '$2b$10$dummyhash18', 'User', 'user'),
(70, 'Steve Rogers', 'steve.rogers@gmail.com', '09112345678', '$2b$10$dummyhash19', 'Admin', 'user'),
(71, 'Tony Stark', 'tony.stark@gmail.com', '09223456789', '$2b$10$dummyhash20', 'Userf', 'admin'),
(72, 'Uma Thurman', 'uma.thurman@gmail.com', '09334567890', '$2b$10$dummyhash21', 'Moderator', 'user'),
(73, 'Vin Diesel', 'vin.diesel@gmail.com', '09445678901', '$2b$10$dummyhash22', 'User', 'user'),
(74, 'Wanda Maximoff', 'wanda.max@gmail.com', '09556789012', '$2b$10$dummyhash23', 'User', 'user'),
(75, 'Xander Cage', 'xander.cage@gmail.com', '09667890123', '$2b$10$dummyhash24', 'Admin', 'user'),
(77, 'Zoe Saldana', 'zoe.saldana@gmail.com', '09889012345', '$2b$10$dummyhash26', 'Moderator', 'user'),
(81, 'Donna Paulsen', 'donna.paulsen@gmail.com', '09323456789', '$2b$10$dummyhash30', 'User', 'user'),
(82, 'Elliot Alderson', 'elliot.alderson@gmail.com', '09434567890', '$2b$10$dummyhash31', 'User', 'user'),
(83, 'Felicia Hardy', 'felicia.hardy@gmail.com', '09545678901', '$2b$10$dummyhash32', 'Moderator', 'user'),
(84, 'Gregory House', 'greg.house@gmail.com', '09656789012', '$2b$10$dummyhash33', 'User', 'user'),
(85, 'Harley Quinn', 'harley.quinn@gmail.com', '09767890123', '$2b$10$dummyhash34', 'User', 'user'),
(86, 'Igor Karkaroff', 'igor.karkaroff@gmail.com', '09878901234', '$2b$10$dummyhash35', 'Admin', 'user'),
(87, 'Jack Sparrow', 'jack.sparrow@gmail.com', '09989012345', '$2b$10$dummyhash36', 'User', 'user'),
(88, 'Karen Page', 'karen.page@gmail.com', '09190123456', '$2b$10$dummyhash37', 'User', 'user'),
(89, 'Leonardo DiCaprio', 'leo.dicaprio@gmail.com', '09201234567', '$2b$10$dummyhash38', 'Moderator', 'user'),
(90, 'Monica Geller', 'monica.geller@gmail.com', '09312345678', '$2b$10$dummyhash39', 'User', 'user'),
(91, 'Nathan Drake', 'nathan.drake@gmail.com', '09423456789', '$2b$10$dummyhash40', 'User', 'user'),
(92, 'Olivia Benson', 'olivia.benson@gmail.com', '09534567890', '$2b$10$dummyhash41', 'Admin', 'user'),
(93, 'Patrick Bateman', 'patrick.bateman@gmail.com', '09645678901', '$2b$10$dummyhash42', 'User', 'user'),
(94, 'Quincy Adams', 'quincy.adams@gmail.com', '09756789012', '$2b$10$dummyhash43', 'User', 'user'),
(95, 'Rachel Zane', 'rachel.zane@gmail.com', '09867890123', '$2b$10$dummyhash44', 'Moderator', 'user'),
(96, 'Samuel L. Jackson', 'samuel.jackson@gmail.com', '09978901234', '$2b$10$dummyhash45', 'User', 'user'),
(97, 'Tina Fey', 'tina.fey@gmail.com', '09189012345', '$2b$10$dummyhash46', 'User', 'user'),
(98, 'Ulysses Grant', 'ulysses.grant@gmail.com', '09290123456', '$2b$10$dummyhash47', 'Admin', 'user'),
(99, 'Victoria Beckham', 'victoria.beckham@gmail.com', '09301234567', '$2b$10$dummyhash48', 'User', 'user'),
(100, 'Walter White', 'walter.white@gmail.com', '09412345678', '$2b$10$dummyhash49', 'Moderator', 'user'),
(102, 'Dawg!?', 'dawg@gmail.com', '09458978322', '$2b$10$qpKwqkxSxNiwj1q.W3LrwOAblhE/0qazVSExykMym7yJrG8f47X0.', '', 'admin'),
(103, 'oh Dawg!?', 'dawg1@gmail.com', '09458978322', '$2b$10$1AdZVTgzmafl.kCL4s58kuRSYXAuYqSqVjDf/2LJzaTqofxbVRVWK', 'this is a test change of Description ', 'admin'),
(105, 'dsflflgsdff', 'dsflflgsdff@gmail.com', NULL, '$2b$10$5Cc88oLI8IFvrykA1g88W.VDHsyeh7gx7J82Bi/xNNuJsRdZSJHJC', NULL, 'admin'),
(115, 'wasd', 'wasd@gmail.com', '09458978322', '$2b$10$HnvU/pgyAm4Vfs3nNDg8tuiHtT4XgeSJ8k3CR8U4/TJ00KB9mZv/a', 'test ', 'admin'),
(117, 'oh DawgtestChange', 'dawg2@gmail.com', NULL, '$2b$10$nnIDRouy3mS1hwJ8GFHODumat5.3IfxmfZFQdR/B/keYt0qy4S5.q', 'test12222ffssyhhfffouioiouioui', 'admin'),
(121, 'deb', 'deb@gmail.com', '', '$2b$10$6c/s3SsgEfH9N5xQlY98PuV5ikRUZzBEXQgeM5CYfvxWZNGI7bfCi', 'test ', 'admin'),
(122, 'testtttttt', 'testtttttt@gmail.com', NULL, '$2b$10$h6H1Hh6Z7VctjhzqlpQPmeur..yF0K9fKml/j5Sm.3XOsRMcTiQQm', NULL, 'admin'),
(123, 'aadmin2', 'aadmin2@gmail.com', '09458978322', '$2b$10$oT1yl0FkS6vdcVoJa22wKOFNC63VZz6M7vOzPioGbQeeklyZ68IZ.', 'this is the main admin account ', 'admin'),
(128, 'JG', 'jovaniegador69@gmail.com', NULL, '$2b$10$W71nqpWk/JuMFzGNWQ9vnOrzCxsvxtTPLt4zMjCS8CGvw/HfhQB.m', NULL, 'user'),
(129, 'jomar ace ', 'vstddf@gmail.com', NULL, '$2b$10$Fbaa20ejehk6YUJ6EOQTTOBhR6NNxfXnpJsCOBN8VruXMlx8MZ0mq', NULL, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `sku` int(11) DEFAULT NULL,
  `item` varchar(50) NOT NULL,
  `category` varchar(50) DEFAULT NULL,
  `quantity` int(11) DEFAULT 0,
  `price` decimal(10,2) DEFAULT 0.00,
  `description` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `sku`, `item`, `category`, `quantity`, `price`, `description`, `url`) VALUES
(17, 10023, 'Bacon Burger', 'Burger', 40, 109.00, 'Beef patty topped with crispy bacon', '1xn8RoOxcxAaIqVWC9AItfKWYF865sFUn'),
(20, 1005, 'Double Cheeseburger', 'Burger', 25, 129.00, 'Two beef patties with double cheese', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(21, 1006, 'Mushroom Swiss Burger', 'Burger', 35, 139.00, 'Beef burger with mushrooms and Swiss cheese', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(22, 1007, 'Spicy Chicken Burger', 'Burger', 38, 105.00, 'Crispy chicken patty with spicy sauce', '1AG9BUHJMKTtunGHzRQYE9JdFQCPJ47DB'),
(23, 1008, 'Classic Hamburger', 'Burger', 60, 85.00, 'Plain beef patty with lettuce and tomato', '10hE1y6DJDz0UCgd4uKfTFK5G-CassMy0'),
(24, 1009, 'Triple Stack Burger', 'Burger', 20, 159.00, 'Three beef patties with cheese', '1Djm_sO0sDbg6f783LolpVsnn_KJpCFGS'),
(25, 1010, 'Fish Burger', 'Burger', 32, 99.00, 'Fried fish fillet sandwich', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(26, 1011, 'BBQ Burger', 'Burger', 28, 119.00, 'Beef patty with smoky BBQ sauce', '1LlJOQS3wORjxzsmapcKU-GSCVTtpZ5Ev'),
(27, 1012, 'Cheddar Melt Burger', 'Burger', 27, 125.00, 'Beef patty smothered in cheddar cheese', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(28, 1013, 'Jalapeno Burger', 'Burger', 26, 115.00, 'Beef burger with jalapenos and spicy mayo', '1MKNTW2Z-yKyXq9cV73qXEMG1_wkw6k3l'),
(29, 1014, 'Turkey Burger', 'Burger', 24, 108.00, 'Lean turkey patty with lettuce and onion', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(30, 1015, 'Sliders (3pcs)', 'Burger', 30, 145.00, 'Mini beef sliders with cheese', '1l_8QRcZSH8KOJuPkZgUmCQZg2iIEylmE'),
(31, 2001, 'Fries Small', 'Sides', 100, 45.00, 'Crispy golden fries, small size', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(32, 2002, 'Fries Medium', 'Sides', 90, 65.00, 'Medium serving of golden fries', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(33, 2003, 'Fries Large', 'Sides', 80, 85.00, 'Large crispy golden fries', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(34, 2004, 'Onion Rings', 'Sides', 60, 75.00, 'Crispy battered onion rings', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(35, 2005, 'Chicken Nuggets', 'Sides', 70, 99.00, 'Bite-sized breaded chicken pieces', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(36, 2006, 'Mozzarella Sticks', 'Sides', 50, 115.00, 'Deep-fried mozzarella cheese sticks', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(37, 2007, 'Mashed Potatoes', 'Sides', 55, 70.00, 'Creamy mashed potatoes with gravy', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(38, 2008, 'Coleslaw', 'Sides', 40, 55.00, 'Fresh shredded cabbage with dressing', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(39, 2009, 'Side Salad', 'Sides', 35, 65.00, 'Garden salad with dressing', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(40, 2010, 'Garlic Bread', 'Sides', 45, 60.00, 'Toasted bread with garlic butter', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(41, 2011, 'Cheese Fries', 'Sides', 50, 95.00, 'Fries topped with melted cheese', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(42, 2012, 'Sweet Potato Fries', 'Sides', 48, 85.00, 'Crispy sweet potato fries', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(43, 2013, 'Corn on the Cob', 'Sides', 30, 70.00, 'Grilled corn with butter', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(44, 2014, 'Potato Wedges', 'Sides', 42, 80.00, 'Seasoned thick-cut potato wedges', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(45, 2015, 'Spring Rolls', 'Sides', 38, 90.00, 'Crispy fried vegetable spring rolls', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(46, 3001, 'Coke Small', 'Beverages', 120, 35.00, 'Chilled Coca-Cola small size', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(47, 3002, 'Coke Medium', 'Beverages', 110, 45.00, 'Medium Coca-Cola refreshment', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(48, 3003, 'Coke Large', 'Beverages', 100, 55.00, 'Large Coca-Cola drink', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(49, 3004, 'Iced Tea Small', 'Beverages', 95, 40.00, 'Refreshing lemon iced tea small size', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(50, 3005, 'Iced Tea Large', 'Beverages', 85, 60.00, 'Refreshing lemon iced tea large size', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(51, 3006, 'Bottled Water', 'Beverages', 150, 25.00, '500ml bottled drinking water', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(52, 3007, 'Orange Juice', 'Beverages', 70, 65.00, 'Fresh orange juice', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(53, 3008, 'Apple Juice', 'Beverages', 68, 65.00, 'Fresh apple juice', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(54, 3009, 'Strawberry Shake', 'Beverages', 55, 95.00, 'Creamy strawberry milkshake', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(55, 3010, 'Chocolate Shake', 'Beverages', 60, 95.00, 'Rich chocolate milkshake', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(56, 3011, 'Vanilla Shake', 'Beverages', 62, 95.00, 'Classic vanilla milkshake', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(57, 3012, 'Coffee', 'Beverages', 90, 50.00, 'Hot brewed coffee', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(58, 3013, 'Latte', 'Beverages', 70, 85.00, 'Creamy espresso with milk', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(59, 3014, 'Cappuccino', 'Beverages', 65, 85.00, 'Espresso with steamed milk and foam', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(60, 3015, 'Hot Chocolate', 'Beverages', 75, 80.00, 'Warm chocolate drink topped with cream', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(61, 4001, 'Pancake Set', 'Breakfast', 40, 120.00, 'Fluffy pancakes served with syrup and butter', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(62, 4002, 'Bacon & Eggs', 'Breakfast', 35, 110.00, 'Crispy bacon served with two eggs', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(63, 4003, 'Omelette', 'Breakfast', 30, 95.00, 'Three-egg omelette with cheese', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(64, 4004, 'French Toast', 'Breakfast', 25, 105.00, 'Toasted bread dipped in egg and milk', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(65, 4005, 'Breakfast Sandwich', 'Breakfast', 50, 89.00, 'Egg and ham sandwich on toasted bread', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(66, 4006, 'Sausage & Eggs', 'Breakfast', 28, 115.00, 'Grilled sausage with two eggs', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(67, 4007, 'Waffles', 'Breakfast', 32, 120.00, 'Golden waffles with syrup', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(68, 4008, 'Hash Browns', 'Breakfast', 40, 55.00, 'Crispy fried potato hash browns', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(69, 4009, 'Bagel with Cream Cheese', 'Breakfast', 22, 85.00, 'Toasted bagel with cream cheese spread', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(70, 4010, 'Fruit Bowl', 'Breakfast', 26, 90.00, 'Fresh seasonal fruit mix', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(71, 4011, 'Breakfast Burrito', 'Breakfast', 30, 115.00, 'Tortilla filled with egg, bacon, and cheese', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(72, 4012, 'Avocado Toast', 'Breakfast', 27, 100.00, 'Toasted bread topped with avocado', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(73, 4013, 'Cereal with Milk', 'Breakfast', 20, 70.00, 'Bowl of cereal served with milk', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(74, 4014, 'Granola Parfait', 'Breakfast', 18, 95.00, 'Granola layered with yogurt and fruits', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(75, 4015, 'Eggs Benedict', 'Breakfast', 15, 140.00, 'Poached eggs with hollandaise sauce', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(76, 5001, 'Spaghetti Bolognese', 'Lunch', 60, 140.00, 'Classic pasta with meat sauce', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(77, 5002, 'Carbonara', 'Lunch', 55, 150.00, 'Creamy white sauce pasta with bacon', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(78, 5003, 'Lasagna', 'Lunch', 40, 160.00, 'Layered pasta with cheese and meat sauce', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(79, 5004, 'Grilled Chicken', 'Lunch', 45, 170.00, 'Marinated grilled chicken breast', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(80, 5005, 'Fish Fillet Meal', 'Lunch', 50, 155.00, 'Crispy fish fillet with tartar sauce', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(81, 5006, 'Beef Steak', 'Dinner', 35, 220.00, 'Grilled beef steak with sides', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(82, 5007, 'Roast Pork', 'Dinner', 38, 200.00, 'Slow-roasted pork with gravy', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(83, 5008, 'Roast Chicken', 'Dinner', 40, 180.00, 'Oven-roasted chicken with herbs', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(84, 5009, 'BBQ Ribs', 'Dinner', 32, 250.00, 'Tender pork ribs with BBQ sauce', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(85, 5010, 'Seafood Platter', 'Dinner', 28, 270.00, 'Mix of shrimp, squid, and fish', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(86, 5011, 'Chicken Alfredo', 'Lunch', 34, 160.00, 'Creamy pasta with grilled chicken', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(87, 5012, 'Shrimp Scampi', 'Dinner', 26, 210.00, 'Shrimp sautéed in garlic butter', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(88, 5013, 'Vegetable Stir Fry', 'Dinner', 29, 140.00, 'Mixed vegetables stir-fried in sauce', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(89, 5014, 'Fried Rice', 'Lunch', 33, 120.00, 'Rice stir-fried with egg and vegetables', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(90, 5015, 'Tacos (3pcs)', 'Lunch', 30, 135.00, 'Soft tacos with beef and salsa', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(91, 5016, 'Burrito', 'Lunch', 27, 145.00, 'Large tortilla filled with meat and beans', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(92, 5017, 'Quesadilla', 'Lunch', 28, 130.00, 'Grilled tortilla with cheese filling', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(93, 5018, 'Chicken Curry', 'Dinner', 24, 190.00, 'Spiced chicken curry with rice', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(94, 5019, 'Beef Caldereta', 'Dinner', 22, 210.00, 'Tomato-based beef stew', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(95, 5020, 'Sweet and Sour Pork', 'Dinner', 21, 175.00, 'Pork cooked in sweet and sour sauce', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(96, 5021, 'Sushi Set', 'Dinner', 20, 250.00, 'Assorted sushi platter', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(97, 5022, 'Tempura Meal', 'Dinner', 23, 200.00, 'Deep-fried shrimp and vegetables', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(98, 5023, 'Ramen Bowl', 'Lunch', 25, 180.00, 'Japanese noodle soup with pork', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(99, 5024, 'Pad Thai', 'Dinner', 19, 190.00, 'Thai stir-fried noodles', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(100, 5025, 'Curry Rice', 'Dinner', 18, 160.00, 'Rice with curry sauce', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(101, 6001, 'Ice Cream Cone', 'Dessert', 70, 45.00, 'Single scoop ice cream cone', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(102, 6002, 'Sundae', 'Dessert', 65, 70.00, 'Ice cream sundae with toppings', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(103, 6003, 'Banana Split', 'Dessert', 55, 120.00, 'Banana with three scoops of ice cream', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(104, 6004, 'Chocolate Cake', 'Dessert', 50, 95.00, 'Slice of rich chocolate cake', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(105, 6005, 'Cheesecake', 'Dessert', 48, 105.00, 'Slice of creamy cheesecake', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(106, 6006, 'Brownie', 'Dessert', 60, 85.00, 'Chocolate brownie square', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(107, 6007, 'Apple Pie', 'Dessert', 45, 90.00, 'Slice of apple pie with cinnamon', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(108, 6008, 'Mango Float', 'Dessert', 40, 100.00, 'Chilled mango and cream dessert', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(109, 6009, 'Leche Flan', 'Dessert', 42, 80.00, 'Creamy caramel custard', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(110, 6010, 'Halo-Halo', 'Dessert', 35, 120.00, 'Filipino shaved ice dessert', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(111, 6011, 'Panna Cotta', 'Dessert', 30, 110.00, 'Italian creamy dessert with berry sauce', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(112, 6012, 'Creme Brulee', 'Dessert', 28, 125.00, 'Custard topped with caramelized sugar', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(113, 6013, 'Cupcake', 'Dessert', 55, 60.00, 'Single frosted cupcake', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(114, 6014, 'Donut', 'Dessert', 60, 55.00, 'Glazed fried doughnut', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0'),
(115, 6015, 'Churros', 'Dessert', 50, 95.00, 'Fried dough pastry with chocolate dip', '18eyFX8q-c9yz7po8lvb0siCmAwGf-Dg0');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `OrderId` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `orders` varchar(255) DEFAULT NULL,
  `deliveryFee` int(11) DEFAULT NULL,
  `subTotal` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `createAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`OrderId`, `name`, `address`, `orders`, `deliveryFee`, `subTotal`, `total`, `createAt`) VALUES
(1, 'Alice Johnson', '123 Main St, Cityville', 'Burger x2, Fries x1', 50, 300, 350, '2025-09-30 07:52:51'),
(2, ' Johnson', '123 Main St, Cityville', 'Burger x2, Fries x1', 50, 600, 650, '2025-09-30 08:00:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sku` (`sku`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`OrderId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=130;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `OrderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
