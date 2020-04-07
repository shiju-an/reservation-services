DROP DATABASE IF EXISTS relaxlyBypj3;

CREATE DATABASE relaxlyBypj3;

USE relaxlyBypj3;

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR (60),
  email VARCHAR (300)
)

CREATE TABLE locations (
   location_id serial PRIMARY KEY,
   location_address VARCHAR (300),
   rate int NOT NULL,
   review_avg NUMERIC(3,2) NOT NULL,
   total_review int,
   service_fee int,
   occupancy_tax int
);

CREATE TABLE reservations (
   reservation_id serial PRIMARY KEY,
   checkin_date DATE NOT NULL,
   checkout_date DATE NOT NULL,
   adults int,
   children int,
   infants int,
   price int,
   location_id int,
   user_id int,
   PRIMARY KEY (reservation_id, location_id)
   CONSTRAINT reservations_location_id_fkey FOREIGN KEY (location_id)
      REFERENCES locations (location_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
   CONSTRAINT reservations_user_id_fkey FOREIGN KEY (user_id)
      REFERENCES users (user_id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
);
