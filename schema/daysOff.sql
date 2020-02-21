drop database if exists GrindhubDB;

create database GrindhubDB;

use database GrindhubDB;

create table days_off(
 req_id INT AUTO_INCREMENT PRIMARY KEY,
 user_id INT NOT NULL,
 day_req DATE NOT NULL,
 approved BOOLEAN, 
 emp_reason TEXT,
 manager_res TEXT

)