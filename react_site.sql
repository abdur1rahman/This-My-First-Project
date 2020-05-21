-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2020 at 03:09 PM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_site`
--

-- --------------------------------------------------------

--
-- Table structure for table `chart_data`
--

CREATE TABLE `chart_data` (
  `id` int(255) NOT NULL,
  `Technology` varchar(1000) NOT NULL,
  `Project` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chart_data`
--

INSERT INTO `chart_data` (`id`, `Technology`, `Project`) VALUES
(1, 'JAVA', '100'),
(2, 'kotline', '40'),
(3, 'sql', '90'),
(4, 'Bootstarp', '95'),
(5, 'jquery', '60'),
(6, 'react', '90'),
(7, 'php', '100'),
(8, 'Angular', '65');

-- --------------------------------------------------------

--
-- Table structure for table `client_review`
--

CREATE TABLE `client_review` (
  `id` int(255) NOT NULL,
  `clientimg` varchar(1000) NOT NULL,
  `clienttitle` varchar(1000) NOT NULL,
  `clientdescription` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `client_review`
--

INSERT INTO `client_review` (`id`, `clientimg`, `clienttitle`, `clientdescription`) VALUES
(1, 'http://localhost/images/DSC_9240.JPG', 'Web Developer', 'First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing'),
(2, 'http://localhost/images/DSC_9240.JPG', 'Software  Developer', 'First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing'),
(3, 'http://localhost/images/DSC_9240.JPG', 'Graphics Designer ', 'First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing');

-- --------------------------------------------------------

--
-- Table structure for table `conteact_table`
--

CREATE TABLE `conteact_table` (
  `id` int(255) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `messge` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `conteact_table`
--

INSERT INTO `conteact_table` (`id`, `name`, `email`, `messge`) VALUES
(2, 'ABDUR RAHMAN', 'abdur1rahman46@gmail.com', 'Text Message '),
(3, 'ABDUR RAHMAN', 'yy', 'k'),
(4, 'ABDUR RAHMANhghg', 'opoo2@gk.com', 'ygy7t9o78h8f9hb8yb'),
(5, '', '', ''),
(6, '', '', ''),
(7, 'ABDUR RAHMAN', 'abdur1rahman46@gmail.com', 'New Test'),
(8, '', '', ''),
(9, '', '', ''),
(10, '', '', ''),
(11, '', '', ''),
(12, '', '', ''),
(13, '', '', ''),
(14, '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `coursestable`
--

CREATE TABLE `coursestable` (
  `id` int(255) NOT NULL,
  `shorttitle` varchar(1000) NOT NULL,
  `shortdescription` text NOT NULL,
  `smallimages` varchar(1000) NOT NULL,
  `longtitle` text NOT NULL,
  `longdescription` text NOT NULL,
  `totallecture` varchar(1000) NOT NULL,
  `totalstduent` varchar(1000) NOT NULL,
  `allskills` varchar(1000) NOT NULL,
  `videourl` varchar(1000) NOT NULL,
  `courslink` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `coursestable`
--

INSERT INTO `coursestable` (`id`, `shorttitle`, `shortdescription`, `smallimages`, `longtitle`, `longdescription`, `totallecture`, `totalstduent`, `allskills`, `videourl`, `courslink`) VALUES
(1, '\r\nWeb Development', 'To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application', 'http://localhost/images/download.jfif', ' Full Dynamic Project With Admin Panel', 'To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.', 'Total Lecture = 30', 'Total Lecture = 30', '   <ul>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                \r\n                            </ul>', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', 'The world ranking top level service we are not bad report '),
(3, 'Software Development ', 'To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application', 'http://localhost/images/download.jfif', ' Full Dynamic Project With Admin Panel', 'To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.', 'BanglaDesh', 'BanglaDesh', '   <ul>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                \r\n                            </ul>', 'BanglaDesh', 'BanglaDesh'),
(4, 'Graphics Design ', 'To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application', 'http://localhost/images/download.jfif', ' Full Dynamic Project With Admin Panel', 'To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.', 'BanglaDesh', 'BanglaDesh', '   <ul>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <Button varint=\"primary\">Mor Info</Button>\r\n                            </ul>', 'BanglaDesh', 'BanglaDesh'),
(5, 'Web Desigen', 'To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application', 'http://localhost/images/download.jfif', ' Full Dynamic Project With Admin Panel', 'To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.', 'BanglaDesh', 'BanglaDesh', '   <ul>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                \r\n                            </ul>', 'BanglaDesh', 'BanglaDesh'),
(6, 'Graphics Design ', 'To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application', 'http://localhost/images/download.jfif', ' Full Dynamic Project With Admin Panel', 'To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.', 'BanglaDesh', 'BanglaDesh', '   <ul>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                \r\n                            </ul>', 'BanglaDesh', 'BanglaDesh'),
(7, 'Web Development', 'To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application', 'http://localhost/images/download.jfif', ' Full Dynamic Project With Admin Panel', 'To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.', 'BanglaDesh', 'BanglaDesh', '   <ul>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                \r\n                            </ul>', 'BanglaDesh', 'BanglaDesh'),
(8, 'Software Development ', 'To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application', 'http://localhost/images/download.jfif', ' Full Dynamic Project With Admin Panel', 'To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.', 'BanglaDesh', 'BanglaDesh', '   <ul>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                \r\n                            </ul>', '', 'BanglaDesh'),
(9, 'Graphics Design ', 'To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application', 'http://localhost/images/download.jfif', ' Full Dynamic Project With Admin Panel', 'To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.', 'BanglaDesh', 'BanglaDesh', '   <ul>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                <li className=\'li\'>United Dynamic Product Category </li>\r\n                                \r\n                            </ul>', 'BanglaDesh', 'BanglaDesh');

-- --------------------------------------------------------

--
-- Table structure for table `footer_table`
--

CREATE TABLE `footer_table` (
  `id` int(255) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `emaill` varchar(1000) NOT NULL,
  `phone` varchar(1000) NOT NULL,
  `facebook` varchar(1000) NOT NULL,
  `youtube` varchar(1000) NOT NULL,
  `footercredit` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `footer_table`
--

INSERT INTO `footer_table` (`id`, `address`, `emaill`, `phone`, `facebook`, `youtube`, `footercredit`) VALUES
(1, 'Dyara Adarsha sadar comilla ', 'abdur1rahman46@gamil.com', '01861413646', 'https://web.facebook.com/profile.php?id=100014059083445', 'www.youtube.com', 'Regular'),
(2, 'Dyara Adarsha sadar comilla ', 'abdur1rahman46@gamil.com', '01861413646', 'https://web.facebook.com/profile.php?id=100014059083445', 'Youtoube.com', 'Regular');

-- --------------------------------------------------------

--
-- Table structure for table `home_etc`
--

CREATE TABLE `home_etc` (
  `id` int(255) NOT NULL,
  `hometitle` varchar(1000) NOT NULL,
  `homesubtitle` varchar(1000) NOT NULL,
  `tecdescription` text NOT NULL,
  `totalproject` varchar(1000) NOT NULL,
  `totalclient` varchar(1000) NOT NULL,
  `videodescription` text NOT NULL,
  `videourl` varchar(1000) NOT NULL,
  `loago` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `home_etc`
--

INSERT INTO `home_etc` (`id`, `hometitle`, `homesubtitle`, `tecdescription`, `totalproject`, `totalclient`, `videodescription`, `videourl`, `loago`) VALUES
(1, 'SOFTWARE ENGINEER', 'Mobile&web Application', ' <p >To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.</p>\r\n\r\n                                <p> I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section.</p>\r\n\r\n                                    <p>Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.\r\n\r\n                                100</p>', '100', '100', 'First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', '');

-- --------------------------------------------------------

--
-- Table structure for table `informationetc`
--

CREATE TABLE `informationetc` (
  `id` int(255) NOT NULL,
  `about` text NOT NULL,
  `refinepolicy` text NOT NULL,
  `tramscondition` text NOT NULL,
  `privacy` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `informationetc`
--

INSERT INTO `informationetc` (`id`, `about`, `refinepolicy`, `tramscondition`, `privacy`) VALUES
(1, '<h1 className=\'serviceName\'>WHO I AM</h1>\r\n                            <hr/>\r\n                            <p className=\'serviceDescription\'>\r\n                                I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects\r\n                            </p>\r\n                            <h1 className=\'serviceName\'>My Mission</h1>\r\n                            <hr/>\r\n                            <p className=\'serviceDescription\'>\r\n                                My mission is to develop unique idea and quality software that will secure top ranking in marketplace, people\'s system and people\'s heart. Develop robust, secure, dynamic, responsive software for all platform (computer, tab, mobile phone). Provide top notch customer service, customization of our product according to customer demand and current technology. Planning advanced techniques for optimization, user experience and satisfaction of customer for our software. Planning flexible software that will not be bounded by any linguistic or regional restriction. I want to flourish software that can blow people\'s heart and soul\r\n                            </p>\r\n                            <h1 className=\'serviceName\'>My Vision</h1>\r\n                            <hr/>\r\n                            <p className=\'serviceDescription\'>\r\n                                My vision is to brand our firm as the best firm in the world. Secure the top place among software providers for both local and international market. Brand our country as the best software provider country. Create employment for youth on the field of both software and corporate level. Provide our country and world with superior software. Nurture youths to be highly skilled software engineers\r\n                            </p>', '             <ul>\r\n                                <li>First 30 Days Money Back!</li>\r\n                                <li>THIS IS NOT A BUY-AND-TRY PRODUCT</li>\r\n                                <li>Refund is applicable for software and plugins, if the products aren\'t functioning, producing errors or you haven\'t received access to them at any time during the first 30 days after purchase, please get in touch with our support team immediately. If we are unable to provide you a working solution within 3 business days, simply delete all digital files and license keys you obtained from us, and ask for a full refund. You will get your refund processed within 30 days or early. That\'s a firm promise and commitment.</li>\r\n                                <li>After 30 Days : There is no refund offered after the first 30 days.</li>\r\n                                <li>To serve you and others better in the future, we require that you tell us why you want a refund and provide us with an opportunity to help you fix the issue. We want satisfied customers.</li>\r\n                                <li>Please remember that asking for a refund but continuing to use products purchased from us is the same thing as stealing and also violate applicable intellectual property rights law.</li>\r\n                            </ul>', '<ul>\r\n                                <li>\r\n                                    BY ACCESSING OR USING THIS SITE YOU REPRESENT THAT YOU HAVE THE FULL AUTHORITY TO ACT TO BIND YOURSELF, ANY THIRD PARTY, COMPANY, OR LEGAL ENTITY, AND THAT YOUR USE AND/OR INTERACTION, AS WELL AS CONTINUING TO USE OR INTERACT, WITH THE SITE CONSTITUTES YOUR HAVING READ AND AGREED TO THESE TERMS OF USE AS WELL AS OTHER AGREEMENTS THAT WE MAY POST ON THE SITE.\r\n                                </li>\r\n                                <li>\r\n                                    BY VIEWING, VISITING, USING, OR INTERACTING WITH THIS SITE OR WITH ANY BANNER, POP-UP, OR ADVERTISING THAT APPEARS ON IT, YOU ARE AGREEING TO ALL THE PROVISIONS OF THIS TERMS OF USE POLICY AND THE PRIVACY POLICY OF this site.\r\n                                </li>\r\n                                <li>\r\n                                    THIS SITE SPECIFICALLY DENIES ACCESS TO ANY INDIVIDUAL THAT IS COVERED BY THE CHILDREN\'S ONLINE PRIVACY PROTECTION ACT (COPPA) OF 1998.\r\n                                </li>\r\n                                <li>\r\n                                    THIS SITE RESERVES THE RIGHT TO DENY ACCESS TO ANY PERSON OR VIEWER FOR ANY LAWFUL REASON. UNDER THE TERMS OF THE PRIVACY POLICY, WHICH YOU ACCEPT AS A CONDITION FOR VIEWING, THIS SITE IS ALLOWED TO COLLECT AND STORE DATA AND INFORMATION FOR THE PURPOSE OF EXCLUSION AND FOR MANY OTHER USES.\r\n                                </li>\r\n                                <li>\r\n                                    THIS TERMS OF USE AGREEMENT MAY CHANGE FROM TIME TO TIME. VISITORS HAVE AN AFFIRMATIVE DUTY, AS PART OF THE CONSIDERATION FOR PERMISSION TO ACCESS this site, TO KEEP THEMSELVES INFORMED OF SUCH CHANGES BY REVIEWING THIS TERMS OF USE PAGE EACH TIME THEY VISIT THIS SITE.\r\n                                </li>\r\n                                <h1 className=\'serviceName\'>PARTIES TO THE TERMS OF USE AGREEMENT</h1>\r\n                                <li>\r\n                                    Visitors, viewers, users, subscribers, members, affiliates, or customers, collectively referred to herein as “Visitors,” are parties to this agreement. The website and its owners and/or operators are parties to this agreement, herein referred to as “Website.”\r\n                                </li>\r\n                            </ul>', '     <ul>\r\n                                <li>First 30 Days Money Back!</li>\r\n                                <li>THIS IS NOT A BUY-AND-TRY PRODUCT</li>\r\n                                <li>Refund is applicable for software and plugins, if the products aren\'t functioning, producing errors or you haven\'t received access to them at any time during the first 30 days after purchase, please get in touch with our support team immediately. If we are unable to provide you a working solution within 3 business days, simply delete all digital files and license keys you obtained from us, and ask for a full refund. You will get your refund processed within 30 days or early. That\'s a firm promise and commitment.</li>\r\n                                <li>After 30 Days : There is no refund offered after the first 30 days.</li>\r\n                                <li>To serve you and others better in the future, we require that you tell us why you want a refund and provide us with an opportunity to help you fix the issue. We want satisfied customers.</li>\r\n                                <li>Please remember that asking for a refund but continuing to use products purchased from us is the same thing as stealing and also violate applicable intellectual property rights law.</li>\r\n                            </ul>');

-- --------------------------------------------------------

--
-- Table structure for table `project_name`
--

CREATE TABLE `project_name` (
  `id` int(255) NOT NULL,
  `projectimagesone` varchar(1000) NOT NULL,
  `projectimagetwo` varchar(1000) NOT NULL,
  `projectname` varchar(1000) NOT NULL,
  `projectshortdescription` varchar(1000) NOT NULL,
  `projectfetuer` text NOT NULL,
  `liveprevew` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `project_name`
--

INSERT INTO `project_name` (`id`, `projectimagesone`, `projectimagetwo`, `projectname`, `projectshortdescription`, `projectfetuer`, `liveprevew`) VALUES
(1, 'http://localhost/images/mobilepondit.png', 'http://localhost/images/mobilepondit.png', 'Recent project', 'I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.', ' <ul>\r\n                                <li className=\'serviceDescription\'>Unlimited Project Dinmic Catagory</li>\r\n                                <li className=\'serviceDescription\'>Unlimited Project Dinmic Catagory</li>\r\n                                <li className=\'serviceDescription\'>Unlimited Project Dinmic Catagory</li>\r\n                                <li className=\'serviceDescription\'>Unlimited Project Dinmic Catagory</li>\r\n                                <li className=\'serviceDescription\'>Unlimited Project Dinmic Catagory</li>\r\n                                <li className=\'serviceDescription\'>Unlimited Project Dinmic Catagory</li>\r\n                                <li className=\'serviceDescription\'>Unlimited Project Dinmic Catagory</li>\r\n                                <li className=\'serviceDescription\'>Unlimited Project Dinmic Catagory</li>\r\n                                <li className=\'serviceDescription\'>Unlimited Project Dinmic Catagory</li>\r\n                            </ul>', 'go to back'),
(2, 'http://localhost/images/mobilepondit.png', 'http://localhost/images/mobilepondit.png', 'Education Top page', 'Bangla desh education online system multimidea larn ', 'comilla to dhaka how are you every parsone', 'Break'),
(3, 'http://localhost/images/mobilepondit.png', 'http://localhost/images/mobilepondit.png', 'Recent Project', 'The complete project dynamic site unlimited Review unlimited sapped ', 'The complete project dynamic site unlimited Review unlimited sapped \r\nThe complete project dynamic site unlimited Review unlimited sapped ', ''),
(4, 'http://localhost/images/mobilepondit.png', 'http://localhost/images/mobilepondit.png', 'Recent Project', 'hgkdfjd kldj fdklfj dklfj dkf dkfj dkf fdlfjdsklfj dsklfj dsfj dskfdj kldfj dklfjdsklfj dsfkd jlkdsjdklfj dklfj dsklj dsklfjds ', ' jkfhdskjf dkfjdh fjkdsf hdjkfh dkjd hjdkh dsjk f', 'hjghjgh'),
(5, 'http://localhost/images/mobilepondit.png', 'http://localhost/images/mobilepondit.png', 'Recent Project', 'dfkjdf dslkfjdsklfj dsklfjdsklf dslfjds kls jflkdsfj dsklf dskf ds', ' jfdklf dklfjdsklf dsokfjdsklf dkd jfdsklfj dskfj dskldsj okds j', ' jkfhjkdef dfj jfdj'),
(6, 'http://localhost/images/mobilepondit.png', 'http://localhost/images/mobilepondit.png', 'Recent Project', ' jgjfkfd fdkfgjfdkg jfdjkfgjdsjkfjdsklf ', 'kfjdsklfj dsdsjkfjikodsjds kldsjhdslk dslkdsjkldsf ', 'dfjdskf dskfjdfkldf jdskfjdsk dsfdjsfkldsjd ');

-- --------------------------------------------------------

--
-- Table structure for table `service_table`
--

CREATE TABLE `service_table` (
  `id` int(255) NOT NULL,
  `servicename` text NOT NULL,
  `servicedesciption` text NOT NULL,
  `serviceimages` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `service_table`
--

INSERT INTO `service_table` (`id`, `servicename`, `servicedesciption`, `serviceimages`) VALUES
(1, 'Web Design & Development', 'I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.', 'http://localhost/images/web.svg'),
(2, 'Mobile Development', 'I build native and cross platfrom mobile app for your business and instiution as per as your requirements.', 'http://localhost/images/mobil.svg'),
(3, 'Graphics Design', 'I desing modern user interface and other graphical components for your business and instiution.', 'http://localhost/images/grapics.svg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chart_data`
--
ALTER TABLE `chart_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client_review`
--
ALTER TABLE `client_review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `conteact_table`
--
ALTER TABLE `conteact_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coursestable`
--
ALTER TABLE `coursestable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer_table`
--
ALTER TABLE `footer_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_etc`
--
ALTER TABLE `home_etc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `informationetc`
--
ALTER TABLE `informationetc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_name`
--
ALTER TABLE `project_name`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service_table`
--
ALTER TABLE `service_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chart_data`
--
ALTER TABLE `chart_data`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `client_review`
--
ALTER TABLE `client_review`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `conteact_table`
--
ALTER TABLE `conteact_table`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `coursestable`
--
ALTER TABLE `coursestable`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `footer_table`
--
ALTER TABLE `footer_table`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `home_etc`
--
ALTER TABLE `home_etc`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `informationetc`
--
ALTER TABLE `informationetc`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `project_name`
--
ALTER TABLE `project_name`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `service_table`
--
ALTER TABLE `service_table`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
