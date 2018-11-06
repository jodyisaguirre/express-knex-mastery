const express = require('express')
const router = express.Router()
const knex =require('../db/connection')

router.get('/',  (req,res) =>{
  knex('student')
  .orderBy('id', 'asc')
    .then(students => {
       res.json({ students: students })
    })
  })


router.get('/:id', (req, res, next) => {
  // Grab the id of the character we want from the request URL parameters
  const id = req.params.id
  knex('student')
  .where('id', id)
  .then(student => {
  res.json({ student: student[0] })
})

})



router.post('/', (req, res, next) => {
  // Pull the data that is to be posted from the request body
  const body = req.body
  knex('student')
    .insert(body)
    .returning('*')
    .then(student => {
      res.json({ students: student[0] })

    })

  // Respond to the client with some data
})


router.put('/:id', (req, res) => {
  const id = req.params.id
  const body = req.body

  knex('student')
    .where ('id',id)
    .update(body)
    .returning('*')
    .then(updatedStudent =>{
      res.json({student:updatedStudent[0]})
    })

})

router.delete('/:id', (req, res) => {
  const id = req.params.id

  knex('student')
    .where ('id',id)
    .delete()
    .returning('*')
    .then(deletedStudent =>{
      res.json({student:deletedStudent[0]})
    })
})



module.exports = router
