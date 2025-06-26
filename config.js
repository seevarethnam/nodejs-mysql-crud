var config = {
	database: {
		host: process.env.DB_HOST, 	// database host
		user: process.env.DB_USER, 		// your database username
		password: process.env.DB_PASSWORD, 		// your database password
		port: 3306, 		// default MySQL port
		db: process.env.DB_NAME 		// your database name
	},
	server: {
		host: '127.0.0.1',
		port: '3000'
	}
}

module.exports = config
