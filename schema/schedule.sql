drop database if exists GrindhubDB;

create database GrindhubDB;

use database GrindhubDB;

create table Schedule(
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    userID INT NOT NULL,
    schedule_id INT AUTO_INCREMENT PRIMARY KEY,
    day_work DATE NOT NULL,
    present BOOLEAN,
    tardy INT,
    start TIME,
    end TIME

)