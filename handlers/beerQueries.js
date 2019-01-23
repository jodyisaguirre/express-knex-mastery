const knex = require('../db/connection.js')


getAllBeers =()=>{
return knex('beer')
.orderBy('id', 'asc')

}

getOneBeer =(id)=>{
  return knex('beer')
  .where('id', id)
}

postOneBeer =(body)=>{
  return knex('beer')
    .insert(body)
    .returning('*')
}

editOneBeer =(id,body)=>{
  return knex('beer')
    .where ('id',id)
    .update(body)
    .returning('*')
}

deleteOneBeer=(id)=>{
  return knex('beer')
    .where ('id',id)
    .delete()
    .returning('*')

}


















module.exports = {
  getAllBeers,
  getOneBeer,
  postOneBeer,
  editOneBeer,
  deleteOneBeer
}
