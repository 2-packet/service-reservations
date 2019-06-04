# freeSeats

> A user can search for a restaurant based on location, cuisine, or restaurant’s name and visit the restaurant’s page to get an overview of what the restaurant has to offer like photos of their dishes, their menu options, customers’ reviews, and be able to make a reservation.

## Related Projects

  - Reservation: https://github.com/freeseats/wfong-service-reservations
  - Top-Bar: https://github.com/freeseats/exzerone-search-bar
  - Menu, Related Restaurants, Side-Bar: https://github.com/freeseats/Menu-Related-SideBar
  - Restaurant Photos: https://github.com/freeseats/matthewjdiaz1-photo-service
  - Reviews: https://github.com/freeseats/slhodak-reviews-and-impressions

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)
1. [Usage](#Usage)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Seeding Database
- Before seeding, make sure to npm install
- Log into mySQL from terminal: mySQL -u root -p
- Enter password if set up with one
- If 'reservations' database exists in mySQL: drop database reservations;
- Create database in mySQL: create database reservations;
- Select database: use reservations;
- Go to db/db.js to change your user and password on line 4
- Run script:
npm run seed
- To check 'reservations' database: select * from restaurants;

## Usage

From within the root directory:
```sh
npm install
npm run build
npm start
```
- In a broswer, go to: localhost:3000

## RESTful API Routes
```GET: /api/:id/reservations```
Responds with entry in database corresponding to specified id. Responds with 200 status code if successful, 404 if not found.

```PUT: /api/:id/reservations```
Updates entry corresponding to specified id and responds with 200 status code if successful, 204 if entry is not found.

```POST: /api/reservations```
Creates a new entry in the database and responds with 201 status code if entry structure matches. Body structure must follow:

  { id: 1,
  name: 'Kinjo',
  booked: 12,
  '6:00 PM': 6,
  '6:15 PM': 7,
  '6:30 PM': 9,
  '6:45 PM': 2,
  '7:00 PM': 9,
  '7:15 PM': 5,
  '7:30 PM': 10,
  '7:45 PM': 7,
  '8:00 PM': 4,
  '8:15 PM': 10,
  '8:30 PM': 8 }

If entry structure differs, a 400 (Bad request) is returned.

```DELETE: /api/:id/reservations```
Deletes entry corresponding to specified id and responds with 204 status code upon successful scheduling. A 405 status code is sent if no such entry exists.