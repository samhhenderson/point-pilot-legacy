const { Pool } = require('pg');

const PG_URI = 'postgres://okrvwcob:RGzigozq1iO662z0qsBkHc_JB7jxo8O2@mahmud.db.elephantsql.com/okrvwcob';

const pool = new Pool({
  connectionString: PG_URI
})

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};