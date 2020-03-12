DROP DATABASE relaxly;

CREATE DATABASE relaxly;

USE relaxly;

CREATE TABLE locations (
  id INT NOT NULL AUTO_INCREMENT,
  rate INT,
  review_avg INT,
  total_review INT,
  service_fee INT,
  occupancy_tax INT,
  PRIMARY KEY(ID)
);

CREATE TABLE reservations (
  id INT NOT NULL AUTO_INCREMENT,
  checkin_date DATE NOT NULL,
  checkout_date DATE NOT NULL,
  adults INT,
  children INT,
  infants INT,
  price INT,
  locationId INT,
  PRIMARY KEY (id),
  FOREIGN KEY (locationId) REFERENCES locations(id)
);