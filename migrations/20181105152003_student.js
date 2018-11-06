exports.up = function(knex, Promise) {
  // Code to run to set up our tables
    // Create schema

  // Setup for a table schema
  return knex.schema.createTable('student', function (table) {
    table.increments()
    table.string('name')
    table.string('cohort')



  })

};

exports.down = function(knex, Promise) {
  // Code to run to remove tables & restart
  return knex.schema.dropTableIfExists('student')
};
