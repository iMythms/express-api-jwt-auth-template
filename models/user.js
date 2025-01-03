const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

userSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		delete returnedObject.password
	},
})

const User = mongoose.model('User', userSchema)

module.exports = User
