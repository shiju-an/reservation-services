COPY locations(location_id, location_address, rate, review_avg, total_review, service_fee, occupancy_tax) FROM '/Users/ohjeezz/Documents/HackReactor/pj3/reservation-services/db/postgreSQL/data/locations.csv' DELIMITER ',' CSV HEADER;

COPY reservations(reservation_id, checkin_date, checkout_date, adults, children, infants, price, location_id) FROM '/Users/ohjeezz/Documents/HackReactor/pj3/reservation-services/db/postgreSQL/data/reservations.csv' DELIMITER ',' CSV HEADER;

COPY users(username, email) FROM '/Users/ohjeezz/Documents/HackReactor/pj3/reservation-services/db/postgreSQL/data/users.csv' DELIMITER ',' CSV HEADER;
