
exports.up = function(knex, Promise) {
	return knex.schema.createTableIfNotExists('invoices', function(table) {
			table.increments('id').primary();
			table.string('callback', 256);
			table.float('amount').notNullable();
			table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
			table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('invoices')
};

creat table invoices(
	id integer INCREMENTS PRIMARY KEY,
	callback varchar(5);
	amount float NOT NULL,
	created_at timestamp NOT NULL DEFAULT now(),
	updated_at timestamp NOT NULL DEFAULT noW()
)
