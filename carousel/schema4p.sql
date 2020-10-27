DROP DATABASE IF EXISTS ratemyrestaurant;

CREATE DATABASE ratemyrestaurant;

\c ratemyrestaurant;

DROP TABLE IF EXISTS restaurants_info;
DROP TABLE IF EXISTS tables;
DROP TABLE IF EXISTS availability;

 CREATE TABLE restaurants_info(
   restaurantId int SERIAL NOT NULL PRIMARY KEY,
   restaurantName VARCHAR(255)
 );

 CREATE TABLE users_info(
   userId int SERIAL NOT NULL PRIMARY KEY,
   userName VARCHAR(50),
   userReviews VARCHAR(255),
   userType VARCHAR(50),
   userIconImage VARCHAR(255)
 );

 CREATE TABLE images_info(
   imageId int SERIAL NOT NULL PRIMARY KEY,
   imageTitle VARCHAR(50),
   itemImageUrl VARCHAR(255),
   imageCategory VARCHAR(100),
   imageDescription VARCHAR(255),
   imageUploadDate DATE,
   userId int,
   restaurantId int,
   FOREIGN KEY (userId) REFERENCES users_info(userId),
   FOREIGN KEY (restaurantId) REFERENCES restaurants_info(restaurantId)
 );