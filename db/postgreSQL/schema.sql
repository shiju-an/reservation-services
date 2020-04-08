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
  reservation_id INT PRIMARY KEY,
  checkin_date DATE NOT NULL,
  checkout_date DATE NOT NULL,
  adults INT,
  children INT,
  infants INT,
  price INT,
  location_id INT,
  user_id SERIAL
  -- FOREIGN KEY (location_id) REFERENCES locations (location_id) ON UPDATE NO ACTION ON DELETE NO ACTION,
  -- FOREIGN KEY (user_id) REFERENCES users (user_id) ON UPDATE NO ACTION ON DELETE NO ACTION
);

COPY locations(location_id, location_address, rate, review_avg, total_review, service_fee, occupancy_tax) FROM '/Users/ohjeezz/Documents/HackReactor/pj3/reservation-services/db/postgreSQL/data/locations.csv' DELIMITER ',' CSV HEADER;

COPY users(username, email) FROM '/Users/ohjeezz/Documents/HackReactor/pj3/reservation-services/db/postgreSQL/data/users.csv' DELIMITER ',' CSV HEADER;

COPY reservations(reservation_id, checkin_date, checkout_date, adults, children, infants, price, location_id, user_id) FROM '/Users/ohjeezz/Documents/HackReactor/pj3/reservation-services/db/postgreSQL/data/reservations.csv' DELIMITER ',' CSV HEADER;

ALTER TABLE reservations ADD CONSTRAINT fk_locations FOREIGN KEY (location_id) REFERENCES locations(listing_id);
ALTER TABLE reservations ADD CONSTRAINT fk_users FOREIGN KEY (user_id) REFERENCES users(user_id);





