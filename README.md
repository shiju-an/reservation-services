# Relaxly Reservation Module

> A reservation module that allows users to select dates to reserve for a stay at a location in the Relaxly app.

## Related Projects

  - https://github.com/Relax-ly/Header-images
  - https://github.com/Relax-ly/reviews-service
  - https://github.com/Relax-ly/related-homes

## Table of Contents

1. [Usage](#Usage)
1. [Endpoints](#Endpoints)

### Installing Dependencies

From within the root directory:

```sh
npm install
```
## Usage
### To Run App - Once Dependencies Installed

All occurs from within the root directory:

-go to reservation-services/db/index.js to change mysql password

Create mysql tables
```sh
mysql -u root -p < ./db/schema.sql
```
Seed your database with seeding script:

```sh
npm run seed
```
Build react app with script:

```sh
npm run react-dev
```
Run server:

```sh
npm run server-dev
```
Go to url http://localhost:3000/ to view app

## Endpoints

### CREATE

#### Post check in/check out dates, price, and guest info for specific home.
```sh
POST /reservations/:id
```

Parameters

### READ

#### Get rate, review average, total reviews, service fee, and occupancy tax for specific home.
```sh
GET /location/:id
```

##### Get check in/check out dates, price, and guest info for specific home.
```sh
GET /reservations/:id
```

### UPDATE

##### Update check in/check out dates, price, and guest info for specific home.
```sh
PUT /reservations/:id
```

### DELETE

#### Delete check in/check out dates, price, and guest info for specific home.
```sh
DELETE /reservations/:id
```
