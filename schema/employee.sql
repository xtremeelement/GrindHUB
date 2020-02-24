drop database if exists GrindhubDB;

create database GrindhubDB;

use GrindhubDB;

create table Employee(
userID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
password VARCHAR(30) NOT NULL,
isAdmin VARCHAR(30) BOOLEAN,
pay_rate int NOT NULL,
phone_number VARCHAR(15),
email VARCHAR(255),
create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,



);