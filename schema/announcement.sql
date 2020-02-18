drop database if exists GrindhubDB;

create database GrindhubDB;

use database GrindhubDB;

create table announcement(
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
description TEXT,
news_id INT AUTO_INCREMENT PRIMARY KEY,

);