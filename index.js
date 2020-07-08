const mysql = require('mysql');
const con = mysql.createConnection({
  host: "server282.web-hosting.com",
  user: "rbxctdmc_beta1",
  password: "brolytauzz13"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
