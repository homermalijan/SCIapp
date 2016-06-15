	
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('invoices').del(),

    // Inserts seed entries
    knex('invoices').insert({amount: 150, callback: 'haha'}),
    knex('invoices').insert({amount: 150, callback: 'haha'}),
    knex('invoices').insert({amount: 150, callback: 'haha'})
  );
};
