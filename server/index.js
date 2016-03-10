const server = require('express')();
const sequelize = require('sequelize');
const config = require('./config/config.json').development;

// const db = new sequelize(config.database, config.username, config.password, {
// 	dialect: config.dialect,
// 	port: config.port
// });
const port = 3000;

// const User = db.define('User', {
// 	username: {
// 		type: sequelize.STRING,
// 		allowNull: false
// 	},
// 	password: {
// 		type: sequelize.STRING,
// 		allowNull: false
// 	}
// });

// db.authenticate().then(() => {
// 	console.log('connected..');
// }).catch(err => {
// 	console.log('Error:', err);
// });



server.get('/', (req, res) => {
	console.log('got request');
	res.status(200).json({ message: 'DEPLOYED' });
});

// db.sync({ force: true }).then(() => {
// 	console.log('SYNC complete');
// 	User.create({username: 'abc', password: '123'}).then(() => {
// 		console.log('user created');
// 	}).catch((err) => {
// 		console.log('err', err)
// 	});
// });
console.log('Server started');

server.listen(port);