

const settings = require("./settings"); // settings.json

const client = {
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
};

name = process.argv[2];
last_name = process.argv[3];
birthdate = process.argv[4];

var pg = require('knex')({
  client: 'pg',
  connection: client,
  searchPath: 'knex,public'
});

pg('famous_people').returning('*').insert({last_name: last_name, first_name: name, birthdate: birthdate}).then(function(res) {
  console.log(res);
});
