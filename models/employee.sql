drop database if exists GrindhubDB;

create database GrindhubDB;

use database GrindhubDB;

create table employee(
userID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
password VARCHAR(30) NOT NULL,
isAdmin VARCHAR(30) BOOLEAN,
create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,



);