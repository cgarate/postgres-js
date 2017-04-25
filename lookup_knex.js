
const settings = require("./settings"); // settings.json

const client = {
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
};

var pg = require('knex')({
  client: 'pg',
  connection: client,
  searchPath: 'knex,public'
});



qryArgument = process.argv[2];

pg.select('*')
.from('famous_people')
.where('last_name', '=', qryArgument)
.then(function(rows) {
  console.log(rows);
})
.catch(function(error) {
  console.error(error)
});
