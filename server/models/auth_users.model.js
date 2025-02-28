const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	username: {
		type: String,

		required: true
	},
	password: {
		type: String,
		required: true
	},
	surname: {
		type: String,

		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
})

const User = mongoose.model('auth_users', userSchema)

module.exports = User