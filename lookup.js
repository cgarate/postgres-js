
const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client ({
  user: settings.user,
  password: settings.password,
  database: settings.database,
  host: settings.hostname,
  port: settings.port,
  ssl: settings.ssl
});

client.on('drain', client.end.bind(client)); //disconnect client when all queries are finished
client.connect();


qryArgument = process.argv[2];

var query = client.query({
  text: 'SELECT * FROM famous_people WHERE first_name = $1',
  values: [qryArgument]
}, function(err, result) {
  console.log(result.rows[0])
});

