const db = require('../database/db.js');

//authentification
const authLogin = (body, callback) => {
	//request body
	const {username, password} = body;
	db.connect();

	db.query("SELECT * from users where username = ? and password = ?" ,
		[username, password],
		function(err, result){
			if (err){
				callback(true, err);
			} else{
				callback(false, result)
			}
		})
}

module.exports = {
	authLogin
}