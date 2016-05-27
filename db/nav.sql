/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 100109
Source Host           : localhost:3306
Source Database       : nav

Target Server Type    : MYSQL
Target Server Version : 100109
File Encoding         : 65001

Date: 2016-05-28 03:00:29
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
  PRIMARY KEY (`id`),
  KEY `userid` (`userid`),
  CONSTRAINT `cookies_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cookies
-- ----------------------------

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
INSERT INTO `links` VALUES ('d5405595-2337-11e6-8f9b-00ff9099da81', 'f65b5b37-2336-11e6-8f9b-00ff9099da81', '知乎', 'www.zhihu.com', '0', '0');
INSERT INTO `links` VALUES ('d5406177-2337-11e6-8f9b-00ff9099da81', 'f65b5b37-2336-11e6-8f9b-00ff9099da81', 'Horacework', 'horacework.com', '0', '0');

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
