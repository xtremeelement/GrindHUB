drop database if exists GrindhubDB;

create database GrindhubDB;

use database GrindhubDB;

create table employee(
id INT AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,


);