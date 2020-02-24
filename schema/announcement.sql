drop database if exists GrindhubDB;

create database GrindhubDB;

use GrindhubDB;

create table Announcements(
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
description TEXT,
news_id INT AUTO_INCREMENT PRIMARY KEY,

);