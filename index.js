const mysql = require('mysql');
const connection = mysql.createConnection({
  host: "server282.web-hosting.com",
  user: "rbxctdmc_beta1",
  password: "brolytauzz13"
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
