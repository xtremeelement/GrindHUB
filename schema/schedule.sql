drop database if exists GrindhubDB;

create database GrindhubDB;

use database GrindhubDB;

create table schedule(
    scheduleID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    userID INT,
    FOREIGN KEY (userID) 
        REFERENCES employee (userID)
        ON UPDATE RESTRICT ON DELETE CASCADE

    



)