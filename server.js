const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')

dotenv.config()
const app = express()
const PORT = process.env.PORT
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
	console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

app.use(express.json())

// Routes go here

app.listen(PORT, () => {
	console.log(`Running on http://localhost:${PORT}`)
})
