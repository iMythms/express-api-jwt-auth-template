const express = require('express')
const router = express.Router()

router.post('/signup', async (req, res) => {
	const { username, password, phoneNumber } = req.body
	if (!username || !password || !phoneNumber) {
		return res.status(400).json({ error: 'Missing required fields.' })
	}
	const userExist = await User.find({ username })
	if (userExist) {
		return res.status(409).json({ error: 'Username already taken.' })
	}
})
router.post('/signin', async (req, res) => {})

module.exports = router
