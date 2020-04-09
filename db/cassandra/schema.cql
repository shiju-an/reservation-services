DROP KEYSPACE IF EXISTS bookings;

CREATE KEYSPACE IF NOT EXISTS bookings WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};

USE bookings;

CREATE TABLE reservations (
  location_id int,
  location_address text,
  rate int,
  review_avg decimal,
  total_review int,
  service_fee int,
  occupancy_tax int,
  reservation_id int,
  checkin_date date,
  checkout_date date,
  adults int,
  children int,
  infants int,
  price int,
  user_id int,
  username text,
  email text,
  PRIMARY KEY (location_id, reservation_id)
);

COPY reservations(location_id, location_address, rate, review_avg, total_review, service_fee, occupancy_tax, reservation_id, checkin_date, checkout_date, adults, children, infants, price, user_id, username, email) FROM '/Users/ohjeezz/Documents/HackReactor/pj3/reservation-services/db/cassandra/data/cassreservations.csv' WITH HEADER=TRUE AND DELIMITER=',';

