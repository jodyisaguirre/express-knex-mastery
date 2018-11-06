Heroku link

https://express-knex-mastery.herokuapp.com/

# Express/Knex/Postgres: Servers & CRUD Pairing

Today you will be working together with someone else in your cohort to produce an Express server with full CRUD functionality for 2 collections of resources that uses a PostgreSQL database. You can use the resource collections provided in this repo (beers and students) or create your own data sets. Your goal is to complete this by the end of the day, but if you do not finish that is ok (you can work it out with your partner to finish over the weekend or next week).

## Requirements

* **Working Express Server**
  - PostgreSQL database
  - Knex migrations
  - Knex seeds
  - Knex CRUD queries

* **GET all routes for both resources that returns json with a root key that identifies the resource**

* **GET one routes that use the request ID parameter to return one resource with a root key that identifies the resource**

* **POST routes for both resources that use the request body to add a new resource to the collection, and return the newly POSTED resource.**

* **PUT routes for both resources that use the request ID parameter and the request body to find one resource in the collection, update it, and return the UPDATED resource.**

* **DELETE routes for both resources that use the request ID to find one resource in the collection, delete it, and return the DELETED resource.**

* **All of your routes should be modular**
  - Use a routes folder
  - Separate route files for each collection of resources
  - Use express.Router() & module.exports

* **Your server should have proper error handling**
  - 404 'not found' error handler
  - General purpose error handler

* **Your server should be deployed**
  - Test and develop your server locally
  - Deploy once you have some features working
  - Further instructions on how to deploy to heroku with a real database will be provided

* **Your server should include CORS middleware to allow cross origin requests**

* **Use proper github workflow**
  - Commit early
  - Commit often
  - Each person in your pair should have commits on the repo

## Notes

* **Remember your pair programming principles**
  - Be repectful
  - Be patient
  - Be kind
  - Switch driver/navigator roles regularly (every 20 mins or so)

* **If you run into issues, help each other gain understanding**
  - And take note of what 'tripped you up'

* **I encourage you to make a cheat sheet/cheat sheets as you go along so you have a reference document for the future**

## HAVE FUN!!!

## Stretch Goals

* Make your route handler functions named functions (rather than inline anonymous) and call them by name as the second argument to your routes, ex.

```js
router.get('/', getAllBeers)

function getAllBeers(req, res) {
  res.json({ beers: beers })
}
```

* Extract your route handler functions into their own file, export them, and import/require them in your router file so they can be used, ex.

beerQueries.js
```js
function getAllBeers(req, res) {
  res.json({ beers: beers })
}

module.exports = {
  getAllBeers
}
```
beerRoutes.js
```js
const beerQueries = require('../queries/beerQueries')

router.get('/', beerQueries.getAllBeers)
```

* Write a React front-end that hits your API and:
  - Renders data from your collections in some way
  - Allows users to POST new data to the API
  - Allows users to UPDATE or DELETE data
