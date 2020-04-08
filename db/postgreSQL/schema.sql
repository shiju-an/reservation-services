DROP DATABASE IF EXISTS relaxly_pj3;

CREATE DATABASE relaxly_pj3;

\c relaxly_pj3;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR (60),
  email VARCHAR (300)
);

CREATE TABLE locations (
  location_id SERIAL PRIMARY KEY,
  location_address VARCHAR (300),
  rate INT NOT NULL,
  review_avg NUMERIC(3,2) NOT NULL,
  total_review INT,
  service_fee INT,
  occupancy_tax INT
);

CREATE TABLE reservations (
  reservation_id SERIAL PRIMARY KEY,
  checkin_date DATE NOT NULL,
  checkout_date DATE NOT NULL,
  adults INT,
  children INT,
  infants INT,
  price INT,
  location_id INT,
  user_id INT,
  FOREIGN KEY (location_id) REFERENCES locations (location_id) ON UPDATE NO ACTION ON DELETE NO ACTION,
  FOREIGN KEY (user_id) REFERENCES users (user_id) ON UPDATE NO ACTION ON DELETE NO ACTION
);
