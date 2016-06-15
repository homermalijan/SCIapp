exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('invoices', function(table) {
    table.increments('id').primary();
	table.string('callback', 256);
	table.float('amount').notNullable();
	table.timestamp('created_at');
	table.timestamp('updated_at');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('invoices')
};
