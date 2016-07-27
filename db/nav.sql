/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 100109
Source Host           : localhost:3306
Source Database       : nav

Target Server Type    : MYSQL
Target Server Version : 100109
File Encoding         : 65001

Date: 2016-07-27 15:32:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for clicklog
-- ----------------------------
DROP TABLE IF EXISTS `clicklog`;
CREATE TABLE `clicklog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `linkid` varchar(36) NOT NULL,
  `time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `linkid` (`linkid`),
  CONSTRAINT `clicklog_ibfk_1` FOREIGN KEY (`linkid`) REFERENCES `links` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of clicklog
-- ----------------------------

-- ----------------------------
-- Table structure for cookies
-- ----------------------------
DROP TABLE IF EXISTS `cookies`;
CREATE TABLE `cookies` (
  `id` varchar(36) NOT NULL,
  `userid` varchar(36) NOT NULL,
  `login` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `logout` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `isLogout` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  CONSTRAINT `cookies_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cookies
-- ----------------------------
INSERT INTO `cookies` VALUES ('09694d77-be95-466c-97a8-676e89a40e98', 'f65b5135-2336-11e6-8f9b-00ff9099da81', '2016-07-25 21:40:13', null, '0');
INSERT INTO `cookies` VALUES ('188cc022-ae54-44dc-b19e-0268ce494f93', 'f65b5135-2336-11e6-8f9b-00ff9099da81', '2016-07-25 21:38:07', null, '0');
INSERT INTO `cookies` VALUES ('3150fbb9-7aab-41b4-a45a-88cefc584442', 'f65b5135-2336-11e6-8f9b-00ff9099da81', '2016-07-27 14:19:18', null, '0');
INSERT INTO `cookies` VALUES ('36d44ea6-03eb-4ac7-ad62-c36c622621cb', 'f65b5135-2336-11e6-8f9b-00ff9099da81', '2016-07-25 22:21:50', null, '0');
INSERT INTO `cookies` VALUES ('493bf41f-f3c0-496d-a594-5726a81a3b75', 'f65b5135-2336-11e6-8f9b-00ff9099da81', '2016-07-27 13:00:52', null, '0');
INSERT INTO `cookies` VALUES ('80467e2f-8800-4b78-b407-da800bdd564a', 'f65b5135-2336-11e6-8f9b-00ff9099da81', '2016-07-27 14:20:42', null, '0');
INSERT INTO `cookies` VALUES ('89fb5bb8-d153-4cdf-9486-f49263fa8e05', 'f65b5135-2336-11e6-8f9b-00ff9099da81', '2016-07-25 22:21:50', null, '0');
INSERT INTO `cookies` VALUES ('8db46395-24e4-4bd2-b09d-8cf84ee664ac', 'f65b5135-2336-11e6-8f9b-00ff9099da81', '2016-07-25 22:31:23', null, '0');
INSERT INTO `cookies` VALUES ('d391540a-93ef-4ff3-8602-613e169bb7f2', 'f65b5135-2336-11e6-8f9b-00ff9099da81', '2016-07-25 22:19:34', null, '0');

-- ----------------------------
-- Table structure for links
-- ----------------------------
DROP TABLE IF EXISTS `links`;
CREATE TABLE `links` (
  `id` varchar(36) NOT NULL,
  `userid` varchar(36) NOT NULL,
  `name` varchar(10) NOT NULL,
  `url` varchar(255) NOT NULL,
  `count` int(11) NOT NULL DEFAULT '0',
  `isDel` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  CONSTRAINT `links_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of links
-- ----------------------------
INSERT INTO `links` VALUES ('5185e9ee-5256-11e6-967b-00ff9268257c', 'f65b5135-2336-11e6-8f9b-00ff9099da81', '网易', 'www.163.com', '0', '0');
INSERT INTO `links` VALUES ('5185f58a-5256-11e6-967b-00ff9268257c', 'f65b5135-2336-11e6-8f9b-00ff9099da81', 'hao123', 'www.hao123.com', '0', '0');
INSERT INTO `links` VALUES ('d5405595-2337-11e6-8f9b-00ff9099da81', 'f65b5135-2336-11e6-8f9b-00ff9099da81', '知乎', 'www.zhihu.com', '0', '0');
INSERT INTO `links` VALUES ('d5406177-2337-11e6-8f9b-00ff9099da81', 'f65b5135-2336-11e6-8f9b-00ff9099da81', 'Horace', 'horacework.com', '0', '0');
INSERT INTO `links` VALUES ('d5406178-2337-11e6-8f9b-00ff9099da81', 'f65b5135-2336-11e6-8f9b-00ff9099da81', '腾讯网', 'www.qq.com', '0', '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` varchar(36) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `level` int(1) NOT NULL DEFAULT '1',
  `isDel` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('11774d73-afec-4c74-b82e-40ea9252e73d', 'uuosuod', '545992308@qq.com', '1', '0');
INSERT INTO `user` VALUES ('8487738d-b1f2-4bfb-b5db-4e5418b6cc14', 'kkkkk', '545992308@qq.com', '1', '0');
INSERT INTO `user` VALUES ('b5a5147f-adef-415e-a221-54c7d2f727c9', 'kk', '545992308@qq.com', '1', '0');
INSERT INTO `user` VALUES ('f65b5135-2336-11e6-8f9b-00ff9099da81', 'chen', null, '1', '0');
INSERT INTO `user` VALUES ('f65b5b37-2336-11e6-8f9b-00ff9099da81', 'ren', null, '1', '0');
