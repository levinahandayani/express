const mysql = require('mysql');

const connection = mysql.createConnection({
	user: 'root',
	host: 'localhost',
	password: '',
	database: 'db_latihan_13'
})

//export

module.exports = connection;