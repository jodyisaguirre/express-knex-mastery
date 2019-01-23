const express = require('express')
const router = express.Router()
const knex =require('../db/connection')

const {
  getAllBeers,
  getOneBeer,
  postOneBeer,
  editOneBeer,
  deleteOneBeer

}= require ('../handlers/beerQueries')

router.get('/',  (req,res) =>{
  getAllBeers()
    .then(beers => {
       res.json({ beers: beers })
    })
  })

router.get('/:id', (req, res, next) => {
  const id = req.params.id
    getOneBeer(id)
  .then(beer => {
  res.json({ beer: beer[0] })
  })
})

router.post('/', (req, res, next) => {
  // Pull the data that is to be posted from the request body
  const body = req.body
  postOneBeer(body)
    .then(beer => {
      res.json({ beers: beer[0] })
    })
})


router.put('/:id', (req, res) => {
  const id = req.params.id
  const body = req.body
    editOneBeer(id,body)
    .then(updatedBeer =>{
      res.json({beer:updatedBeer[0]})
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
    deleteOneBeer(id)
    .then(deletedBeer =>{
      res.json({beer:deletedBeer[0]})
    })
})



module.exports = router
