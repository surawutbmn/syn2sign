-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 27, 2024 at 12:12 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `syn2sign`
--

-- --------------------------------------------------------

--
-- Table structure for table `snp66`
--

CREATE TABLE `snp66` (
  `id` int(11) NOT NULL,
  `project_id` varchar(20) NOT NULL,
  `name_en` varchar(50) NOT NULL,
  `name_th` varchar(50) NOT NULL,
  `fullname_en` varchar(255) NOT NULL,
  `fullname_th` varchar(255) NOT NULL,
  `type` varchar(50) NOT NULL,
  `icon` varchar(50) NOT NULL,
  `img_thumb` varchar(50) NOT NULL,
  `icon_card` varchar(50) NOT NULL,
  `icon_std` varchar(50) NOT NULL,
  `shreel_link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `snp66`
--

INSERT INTO `snp66` (`id`, `project_id`, `name_en`, `name_th`, `fullname_en`, `fullname_th`, `type`, `icon`, `img_thumb`, `icon_card`, `icon_std`, `shreel_link`) VALUES
(1, 'cpl01', 'EVAL BALANCE', 'อีวาล บาลานซ์', 'Design and Development of Physical Fitness Evaluation Application to Reduce the Risk of Falling and Exercise to Strengthen Muscles in The Elderly on iOS Platform.', 'การออกแบบและพัฒนาแอปพลิเคชันประเมินสมรรถภาพทางกาย เพื่อลดความเสี่ยงในการหกล้ม และออกกำลังกายเพื่อเสริมสร้างความแข็งแรงของกล้ามเนื้อในผู้สูงอายุ บนระบบปฏิบัติการไอโอเอส', 'Mobile Application', 'cpl01.svg', 'cpl01-thumb.svg', 'cpl01-icard.svg', 'cpl01-p.svg', '_41WQgd5qKw'),
(2, 'cpl02', 'WAIWAN', 'ไหว้วาน', 'Design and Development Web Application With Line Chatbot System to Provide Services for the Business of Organizing a Sacrificial Offering.', 'การออกแบบและพัฒนาแอปพลิเคชันควบคู่กับระบบไลน์แชตบอต เพื่อให้บริการสำหรับธุรกิจร้านจัดของไหว้เจ้า', 'Line OA application', 'cpl02.svg', 'cpl02-thumb.svg', 'cpl01-icard.svg', 'cpl02-p.svg', 'OwyQ7eIHmoc'),
(3, 'cpl03', 'ARTIST MATCH', 'อาร์ทิสแมทช์', 'Design and Development Web Application to Search for Artists and Post Job Advertisements for Organizer.', 'การออกแบบและพัฒนาเว็บแอปพลิเคชันเพื่อค้นหาศิลปินและลงประกาศรับสมัครสำหรับผู้จัดงาน', 'Web application', 'cpl03.svg', 'cpl03-thumb.svg', 'cpl01-icard.svg', 'cpl03-p.svg', 'dp_AlUgThnQ'),
(4, 'cpl04', 'MORYTECH', 'โมรี่เทค', 'Design and Development of Application  to Increase Memory Skills for Adults on iOS Platform.', 'การออกแบบและพัฒนาแอปพลิเคชัน เพื่อเพิ่มทักษะความจำสำหรับคนวัยทำงานบนระบบปฎิบัติการไอโอเอส', 'Mobile Application', 'cpl04.svg', 'cpl04-thumb.svg', 'cpl01-icard.svg', 'cpl04-p.svg', 'zPt2Uu3vZ4I'),
(5, 'cpl05', 'FULLFILL', 'ฟูลฟิล', 'Web Application Design and Development in Conjunction System to Promote Refill Shops Management in Bangkok.', 'การออกแบบและพัฒนาเว็บแอปพลิเคชัน เพื่อส่งเสริมการบริหาร ร้านรีฟิล ในกรุงเทพมหานคร', 'Web application', 'cpl05.svg', 'cpl05-thumb.svg', 'cpl01-icard.svg', 'cpl05-p.svg', 'wMnxzOlEVPA'),
(6, 'cpl06', 'YOUNG & CHIC', 'ยังแอนด์ชิก', 'Web Application Design and Development to Promote the Young Thai Designers to Increase the Job Opportunities.', 'การออกแบบและพัฒนาเว็บแอปพลิเคชัน เพื่อส่งเสริมแฟชั่นดีไซน์เนอร์ไทยรุ่นใหม่ในการเพิ่มโอกาสการหางาน', 'Web application', 'cpl06.svg', 'cpl06-thumb.svg', 'cpl01-icard.svg', 'cpl06-p.svg', 'asaKqFdHkRE'),
(7, 'cpl07', 'Tent Care', 'เท็นท์แคร์', 'Designing and Developing a Tool System for the Franchise Operators of the Tent Cleaning Business', 'การออกแบบและพัฒนาระบบเครื่องมือสำหรับผู้ประกอบการแฟรนไชส์ธุรกิจทำความสะอาดเต็นท์', 'Line OA application', 'cpl07.svg', 'cpl07-thumb.svg', 'cpl01-icard.svg', 'cpl07-p.svg', 'KhAfnkMRctc'),
(8, 'cpl08', 'TINY THAI', 'ไทนี่ไทย', 'Learning Media Game DesignCase Study of Second Grade Children Spelling and Meaning of Thai Words', 'การออกแบบเกมสื่อการเรียนรู้ สำหรับเด็กชั้นประถมศึกษาปีที่ 2 กรณีศึกษา ปัญหาด้านการสะกดคำและบอกความหมายของคำกลุ่มสาระภาษาไทย', 'Game Application', 'cpl08.svg', 'cpl08-thumb.svg', 'cpl01-icard.svg', 'cpl08-p.svg', '2fkCoiR49wo');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `std_id` varchar(20) NOT NULL,
  `name_th` varchar(50) NOT NULL,
  `name_en` varchar(50) NOT NULL,
  `nickname_th` varchar(50) NOT NULL,
  `nickname_en` varchar(50) NOT NULL,
  `profile_img` varchar(50) NOT NULL,
  `thumb_img` varchar(100) NOT NULL,
  `qoutes` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `linkin` varchar(100) NOT NULL,
  `resume_filename` varchar(50) NOT NULL,
  `project_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `std_id`, `name_th`, `name_en`, `nickname_th`, `nickname_en`, `profile_img`, `thumb_img`, `qoutes`, `email`, `linkin`, `resume_filename`, `project_id`) VALUES
(1, '631310073', 'ชนมน แก้วสมนึก', 'Chanamon kewsomnuk', 'มุก', 'Mook', '073-profile.svg', '073-thumb.svg', '', 'chanamonn.kaew@gmail.com', 'http://linkedin.com/in/chanamon-kaewsomnuk-33466728a', '-', 'cpl01'),
(2, '631310074', 'ชลิดา อิงคพัฒนากุล', 'Chalida Ingkapattanakul', 'หม่อน', 'Mhon', '074-profile.svg', '074-thumb.svg', '', 'chalida.ingka@gmail.com', 'https://th.linkedin.com/in/chalida-ingkapattanakul-46ab80292', '-', 'cpl03'),
(3, '631310075', 'ปนิตา ไหลนานานุกูล', 'Panita Lainananukul', 'ฟ้า', 'Fah', '075-profile.svg', '075-thumb.svg', '', 'fahpanita86@gmail.com', 'www.linkedin.com/in/panita-lainananukul-654697292', '-', 'cpl02'),
(4, '631310076', 'ปิยาพัชร หอมกระจาย', 'Piyapat Homkrajay', 'มายด์', 'Mild', '076-profile.svg', '076-thumb.svg', '', 'piyapat.phk@gmail.com', 'http://linkedin.com/in/piyapat-phk-9b35a3314', '-', 'cpl05'),
(5, '631310078', 'ศศิกานต์ เตียนจันทึก', 'Sasikan Tianchanthuek', 'หญิง', 'Ying', '078-profile.svg', '078-thumb.svg', '', 'Yayingssk@gmail.com', 'https://www.linkedin.com/in/sasikan-tianchanthuek-4285b1314/', '-', 'cpl01'),
(6, '631310081', 'สุรวุธ บินมามุด', 'Surawut Binmamud', 'น้อท', 'Not', '081-profile.svg', '081-thumb.svg', 'ได้ลองทำอะไรใหม่ๆ  ร่วมกับเพื่อนๆ เป็นประสบการณ์ที่ดีมากครับ', 'surawut.bmn@gmail.com', 'http://linkedin.com/in/surawut-binmamud', '-', 'cpl05'),
(7, '631310152', 'ณัฐนันท์ เหว่าขจร', 'Natthanan Vaowkhajon', 'พิม', 'Pim', '152-profile.svg', '152-thumb.svg', '', 'natthanan.vao@gmail.com', 'linkedin.com/in/natthanan-vaowkhajon-676483260', '-', 'cpl02'),
(8, '631310270', 'ชวกรณ์ จิตรประทักษ์', 'Chawakorn Jitpathak', 'ฟีฟ่า', 'Fifa', '270-profile.svg', '270-thumb.svg', '', 'jitpathak.c@gmail.com ', 'https://th.linkedin.com/in/chawakorn-jitpathak-400089293', '-', 'cpl04'),
(9, '631310271', 'ณัฐนันท์ สุริยะศศิธรรม', 'Nattharnunt Zooriyarzazithum', 'เนิร์ส', 'Nurse', '271-profile.svg', '271-thumb.svg', '', 'nnurse2307@gmail.com', 'https://www.linkedin.com/in/nattharnunt-zooriyarzazithum-b52a95292/', '-', 'cpl07'),
(10, '631310273', 'ปัญญดา สุขรักษา', 'Panyada Suxruxsa', 'ปาย', 'Pai', '273-profile.svg', '273-thumb.svg', '', 'ppanyadapai@gmail.com', 'https://www.linkedin.com/in/panyada-suxruxsa-2bb031264/', '-', 'cpl03'),
(11, '631310274', 'พัทธวรรณ ศรัทธาธรรม', 'Pattawan Srattatam', 'พิม', 'Pim', '274-profile.svg', '274-thumb.svg', '', 'srattatampattawan@gmail.com', 'www.linkedin.com/in/pattawan-srattatam-92686b292', '-', 'cpl08'),
(12, '631310427', 'ภัทรวรรณ ศรัทธาธรรม', 'Pattarawan Srattatam', 'แพร', 'Pear', '427-profile.svg', '427-thumb.svg', '', 'srattatampattarawan@gmail.com', 'https://www.linkedin.com/in/pattarawan-srattatam-8279a0314/', '-', 'cpl08'),
(13, '631310428', 'เมธาสิทธิ์ สิทธะเมธา', 'Methasit Sitthametha', 'เอ็กซ์', 'Ex', '428-profile.svg', '428-thumb.svg', '', 'sitthametha.m@gmail.com', 'linkedin.com/in/methasit-sitthametha-b83b76292', '-', 'cpl04'),
(14, '631310431', 'ศุภกร อัชชะ', 'Supakorn Achcha', 'ทาย', 'Tide', '431-profile.svg', '431-thumb.svg', '', 'achasupakorn.t@gmail.com', 'https://www.linkedin.com/in/supakorn-achcha/', '-', 'cpl07'),
(15, '631310432', 'อรรัญภา เหมาะสมาน', 'Onranpha Morsamarn', 'แบม', 'Bam', '432-profile.svg', '432-thumb.svg', '', 'bamonran@gmail.com', 'https://www.linkedin.com/in/onranpha-morsamarn-110a97292/', '-', 'cpl06'),
(16, '631310520', 'ณัฏฐธิดา ศรีตุลานนท์', 'Natthatida Sritulanontha', 'จูน', 'June', '520-profile.svg', '520-thumb.svg', '', 'natjune2002@gmail.com', 'https://www.linkedin.com/in/natthatida-sritulanontha-a85604275/', '-', 'cpl06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `snp66`
--
ALTER TABLE `snp66`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `fk_project` (`project_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `std_project` (`project_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `snp66`
--
ALTER TABLE `snp66`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `std_project` FOREIGN KEY (`project_id`) REFERENCES `snp66` (`project_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
