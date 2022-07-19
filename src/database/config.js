const mysql = require('mysql')
require('dotenv').config()

const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB
})

db.getConnection((err) => {
  (!err) ? console.log('Connected to database') : console.log('Error connecting to database')
})

module.exports = db
