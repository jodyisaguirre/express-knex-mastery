const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
let port = process.env.PORT || 3001


// Route imports
const beerRoutes = require('./routes/beerRoutes.js')
const studentRoutes = require('./routes/studentRoutes.js')



// General middleware
  // Applied to all requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


// Basic GET route that responds with emoji or something
  // Lets us know the server is working
app.get('/', (req, res) => {
  res.send('😈😈😈😈😈')
})

// Any requests that START with /characters, send to this router file
app.use('/beers', beerRoutes)
app.use('/students', studentRoutes)


// Error handlers as final use case if routes don't match or if errors are generated
  // 404
app.use(notFound)
  // General purpose 'catch' all errors
app.use(errorHandler)


function notFound(req, res, next) {
  res.status(404).send({ error: 'Not Today ISIS!', status: 404, url: req.originalUrl })
}

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}


app.listen(port, () => console.log(`Server running on port ${port}`))
