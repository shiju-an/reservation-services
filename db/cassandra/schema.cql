DROP KEYSPACE IF EXISTS bookings;

CREATE KEYSPACE IF NOT EXISTS bookings WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};

USE bookings;

CREATE TABLE reservations (
  location_id uuid,
  location_address text,
  rate int,
  review_avg int,
  total_review int,
  service_fee int,
  occupancy_tax int,
  reservation_id uuid,
  checkin_date int,
  checkout_date int,
  adults int,
  children int,
  infants int,
  price int,
  user_id uuid,
  username text,
  email text,
  PRIMARY KEY (location_id, reservation_id, user_id)
);

