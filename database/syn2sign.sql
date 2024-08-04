-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 04, 2024 at 10:35 PM
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
  `sqr_img` varchar(50) NOT NULL,
  `img_thumb` varchar(50) NOT NULL,
  `icon_card` varchar(50) NOT NULL,
  `icon_std` varchar(50) NOT NULL,
  `shreel_link` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `snp66`
--

INSERT INTO `snp66` (`id`, `project_id`, `name_en`, `name_th`, `fullname_en`, `fullname_th`, `type`, `icon`, `sqr_img`, `img_thumb`, `icon_card`, `icon_std`, `shreel_link`) VALUES
(1, 'cpl01', 'EVAL BALANCE', 'อีวาล บาลานซ์', 'Design and Development of Physical Fitness Evaluation Application to Reduce the Risk of Falling and Exercise to Strengthen Muscles in The Elderly on iOS Platform.', 'การออกแบบและพัฒนาแอปพลิเคชันประเมินสมรรถภาพทางกาย เพื่อลดความเสี่ยงในการหกล้ม และออกกำลังกายเพื่อเสริมสร้างความแข็งแรงของกล้ามเนื้อในผู้สูงอายุ บนระบบปฏิบัติการไอโอเอส', 'Mobile Application', 'cpl01.svg', 'cpl01-sqr.webp', 'cpl01-thumb.webp', 'cpl01-icard.webp', 'cpl01-p.svg', '_41WQgd5qKw'),
(2, 'cpl02', 'WAIWAN', 'ไหว้วาน', 'Design and Development Web Application With Line Chatbot System to Provide Services for the Business of Organizing a Sacrificial Offering.', 'การออกแบบและพัฒนาแอปพลิเคชันควบคู่กับระบบไลน์แชตบอต เพื่อให้บริการสำหรับธุรกิจร้านจัดของไหว้เจ้า', 'Line OA Web application', 'cpl02.svg', 'cpl02-sqr.webp', 'cpl02-thumb.webp', 'cpl02-icard.webp', 'cpl02-p.svg', 'OwyQ7eIHmoc'),
(3, 'cpl03', 'ARTIST MATCH', 'อาร์ทิสแมทช์', 'Design and Development Web Application to Search for Artists and Post Job Advertisements for Organizer.', 'การออกแบบและพัฒนาเว็บแอปพลิเคชันเพื่อค้นหาศิลปินและลงประกาศรับสมัครสำหรับผู้จัดงาน', 'Web application', 'cpl03.svg', 'cpl03-sqr.webp', 'cpl03-thumb.webp', 'cpl03-icard.webp', 'cpl03-p.svg', 'dp_AlUgThnQ'),
(4, 'cpl04', 'MORYTECH', 'โมรี่เทค', 'Design and Development of Application  to Increase Memory Skills for Adults on iOS Platform.', 'การออกแบบและพัฒนาแอปพลิเคชัน เพื่อเพิ่มทักษะความจำสำหรับคนวัยทำงานบนระบบปฎิบัติการไอโอเอส', 'Mobile Application', 'cpl04.svg', 'cpl04-sqr.webp', 'cpl04-thumb.webp', 'cpl04-icard.webp', 'cpl04-p.svg', 'zPt2Uu3vZ4I'),
(5, 'cpl05', 'FULLFILL', 'ฟูลฟิล', 'Web Application Design and Development in Conjunction System to Promote Refill Shops Management in Bangkok.', 'การออกแบบและพัฒนาเว็บแอปพลิเคชัน เพื่อส่งเสริมการบริหาร ร้านรีฟิล ในกรุงเทพมหานคร', 'Web application', 'cpl05.svg', 'cpl05-sqr.webp', 'cpl05-thumb.webp', 'cpl05-icard.webp', 'cpl05-p.svg', 'wMnxzOlEVPA'),
(6, 'cpl06', 'YOUNG & CHIC', 'ยังแอนด์ชิก', 'Web Application Design and Development to Promote the Young Thai Designers to Increase the Job Opportunities.', 'การออกแบบและพัฒนาเว็บแอปพลิเคชัน เพื่อส่งเสริมแฟชั่นดีไซน์เนอร์ไทยรุ่นใหม่ในการเพิ่มโอกาสการหางาน', 'Web application', 'cpl06.svg', 'cpl06-sqr.webp', 'cpl06-thumb.webp', 'cpl06-icard.webp', 'cpl06-p.svg', 'asaKqFdHkRE'),
(7, 'cpl07', 'Tent Care', 'เท็นท์แคร์', 'Designing and Developing a Tool System for the Franchise Operators of the Tent Cleaning Business', 'การออกแบบและพัฒนาระบบเครื่องมือสำหรับผู้ประกอบการแฟรนไชส์ธุรกิจทำความสะอาดเต็นท์', 'Line OA Web application', 'cpl07.svg', 'cpl07-sqr.webp', 'cpl07-thumb.webp', 'cpl07-icard.webp', 'cpl07-p.svg', 'KhAfnkMRctc'),
(8, 'cpl08', 'TINY THAI', 'ไทนี่ไทย', 'Learning Media Game DesignCase Study of Second Grade Children Spelling and Meaning of Thai Words', 'การออกแบบเกมสื่อการเรียนรู้ สำหรับเด็กชั้นประถมศึกษาปีที่ 2 กรณีศึกษา ปัญหาด้านการสะกดคำและบอกความหมายของคำกลุ่มสาระภาษาไทย', 'Game Application', 'cpl08.svg', 'cpl08-sqr.webp', 'cpl08-thumb.webp', 'cpl08-icard.webp', 'cpl08-p.svg', '2fkCoiR49wo');

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
(1, '073', 'ชนมน แก้วสมนึก', 'Chanamon kewsomnuk', 'มุก', 'Mook', '073-profile.webp', '073-thumb.webp', 'ให้โอกาสตัวเองได้ลองเรียนรู้อะไรใหม่ๆ บ้าง ถ้าสิ่งที่ลองทำมันเกิดข้อผิดพลาด ก็แค่เรียนรู้จากข้อผิดพลาด และทำมันใหม่อีกครั้ง', 'chanamonn.kaew@gmail.com', 'https://www.linkedin.com/in/chanamon-kaewsomnuk-33466728a', '-', 'cpl01'),
(2, '074', 'ชลิดา อิงคพัฒนากุล', 'Chalida Ingkapattanakul', 'หม่อน', 'Mhon', '074-profile.webp', '074-thumb.webp', ' การพักผ่อนเป็นสิ่งจำเป็น เพื่อแลกกับงานที่มีคุณภาพค่ะ', 'chalida.ingka@gmail.com', 'https://th.linkedin.com/in/chalida-ingkapattanakul-46ab80292', '-', 'cpl03'),
(3, '075', 'ปนิตา ไหลนานานุกูล', 'Panita Lainananukul', 'ฟ้า', 'Fah', '075-profile.webp', '075-thumb.webp', 'ทำให้สมบูรณ์ที่สุด ภายใต้ข้อจำกัดที่มี', 'fahpanita86@gmail.com', 'https://www.linkedin.com/in/panita-lainananukul-654697292', '-', 'cpl02'),
(4, '076', 'ปิยาพัชร หอมกระจาย', 'Piyapat Homkrajay', 'มายด์', 'Mild', '076-profile.webp', '076-thumb.webp', ' อย่าคิดว่าตัวเองทำไม่ได้ หรือ ไม่มีไฟในการทำงาน จงตั้งใจพยายามค่อยๆคิดค่อยๆเริ่มลงมือทำ', 'piyapat.phk@gmail.com', 'https://www.linkedin.com/in/piyapat-phk-9b35a3314', '-', 'cpl05'),
(5, '078', 'ศศิกานต์ เตียนจันทึก', 'Sasikan Tianchanthuek', 'หญิง', 'Ying', '078-profile.webp', '078-thumb.webp', 'เมื่อเราเจอกับความผิดพลาด เราต้องยอมรับความจริงที่เกิดขึ้น และมองว่าความผิดพลาดนั้น เป็นโอกาสที่จะได้เรียนรู้และแก้ไข', 'Yayingssk@gmail.com', 'https://www.linkedin.com/in/sasikan-tianchanthuek-4285b1314/', '-', 'cpl01'),
(6, '081', 'สุรวุธ บินมามุด', 'Surawut Binmamud', 'น้อท', 'Not', '081-profile.webp', '081-thumb.webp', 'ค่อยๆทำความเข้าใจปัญหาไปทีละส่วนเพื่อหาวิธีแก้ไขมัน', 'surawut.bmn@gmail.com', 'https://www.linkedin.com/in/surawut-binmamud', '-', 'cpl05'),
(7, '152', 'ณัฐนันท์ เหว่าขจร', 'Natthanan Vaowkhajon', 'พิม', 'Pim', '152-profile.webp', '152-thumb.webp', 'ถ้าเลือกที่จะทำอะไรแล้วให้ลงแรงลงใจทำไปให้สุด ถ้าไม่สำเร็จก็แค่เสียใจแต่เราจะไม่เสียดาย', 'natthanan.vao@gmail.com', 'https://www.linkedin.com/in/natthanan-vaowkhajon-676483260', '-', 'cpl02'),
(8, '270', 'ชวกรณ์ จิตรประทักษ์', 'Chawakorn Jitpathak', 'ฟีฟ่า', 'Fifa', '270-profile.webp', '270-thumb.webp', 'อย่ากลัวที่จะขอความช่วยเหลือแล้วโดนดุ เพราะจุดมุ่งหมายคืองานที่เสร็จและสมบูรณ์', 'jitpathak.c@gmail.com ', 'https://th.linkedin.com/in/chawakorn-jitpathak-400089293', '-', 'cpl04'),
(9, '271', 'ณัฐนันท์ สุริยะศศิธรรม', 'Nattharnunt Zooriyarzazithum', 'เนิร์ส', 'Nurse', '271-profile.webp', '271-thumb.webp', 'ทุกๆสิ่งที่เคยเป็นเรื่องยาก จะกลายเป็นเรื่องง่ายเมื่อเราก้าวข้ามผ่านมาได้', 'nnurse2307@gmail.com', 'https://www.linkedin.com/in/nattharnunt-zooriyarzazithum-b52a95292/', '-', 'cpl07'),
(10, '273', 'ปัญญดา สุขรักษา', 'Panyada Suxruxsa', 'ปาย', 'Pai', '273-profile.webp', '273-thumb.webp', 'ทำทุกวัน เหนื่อยทุกวันค่ะ', 'ppanyadapai@gmail.com', 'https://www.linkedin.com/in/panyada-suxruxsa-2bb031264/', '-', 'cpl03'),
(11, '274', 'พัทธวรรณ ศรัทธาธรรม', 'Pattawan Srattatam', 'พิมพัท', 'Pimpatt', '274-profile.webp', '274-thumb.webp', 'สิ่งที่ทำให้งานสำเร็จไปได้ คือการไม่ยอมแพ้กับกับปัญาหาที่เกิดในระหว่างการทำงานและความพยายามในการทำสิ่งที่เราไม่ถนัดแต่เราก็สามารถทำได้ทำให้เราภูมิใจในตนเอง', 'srattatampattawan@gmail.com', 'https://www.linkedin.com/in/pattawan-srattatam-92686b292', '-', 'cpl08'),
(12, '427', 'ภัทรวรรณ ศรัทธาธรรม', 'Pattarawan Srattatam', 'แพร', 'Pear', '427-profile.webp', '427-thumb.webp', 'อย่างแรกคงจะเป็นเรื่องสุขภาพร่างกายและจิตใจค่ะหากสุขภาพของเราดีการทำงานก็จะเดินหน้าต่อไปได้และเราจะต้องให้กำลังใจตนเองบ่อยอยู่ๆ', 'srattatampattarawan@gmail.com', 'https://www.linkedin.com/in/pattarawan-srattatam-8279a0314/', '-', 'cpl08'),
(13, '428', 'เมธาสิทธิ์ สิทธะเมธา', 'Methasit Sitthametha', 'เอ็กซ์', 'Ex', '428-profile.webp', '428-thumb.webp', 'การทำงานเป็นสิ่งที่ดี แต่อย่าลืมหลับพักผ่อนและออกกำลังกาย เพื่อการทำงานที่มีประสิทธิภาพมากขึ้น', 'sitthametha.m@gmail.com', 'https://www.linkedin.com/in/methasit-sitthametha-b83b76292', '-', 'cpl04'),
(14, '431', 'ศุภกร อัชชะ', 'Supakorn Achcha', 'ทาย', 'Tide', '431-profile.webp', '431-thumb.webp', 'ไม่ผิดที่หวั่นไหว ไม่ผิดที่เสียใจ และไม่ผิดที่หมดหวัง', 'achasupakorn.t@gmail.com', 'https://www.linkedin.com/in/supakorn-achcha/', '-', 'cpl07'),
(15, '432', 'อรรัญภา เหมาะสมาน', 'Onranpha Morsamarn', 'แบม', 'Bam', '432-profile.webp', '432-thumb.webp', 'การมุ่งมั่นตั้งใจทำสิ่งที่อยู่ตรงหน้าให้ดี เพื่อให้สำเร็จและบรรลุเป้าหมายที่ตั้งไว้', 'bamonran@gmail.com', 'https://www.linkedin.com/in/onranpha-morsamarn-110a97292/', '-', 'cpl06'),
(16, '520', 'ณัฏฐธิดา ศรีตุลานนท์', 'Natthatida Sritulanontha', 'จูน', 'June', '520-profile.webp', '520-thumb.webp', 'ไม่ว่าผลลัพธ์จะออกมาเป็นยังไง เราก็สามารถก้าวข้ามผ่านมันไปได้ด้วยความขยัน มุ่งมั่น ตั้งใจ', 'natjune2002@gmail.com', 'https://www.linkedin.com/in/natthatida-sritulanontha-a85604275/', '-', 'cpl06');

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
