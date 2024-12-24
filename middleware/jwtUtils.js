const jwt = require('jsonwebtoken')

const signToken = (user) => {
	const token = jwt.sign({
		_id: user._id,
	})
	return token
}

const verifyToken = (req, res, next) => {
	try {
		const token = req.headers.authorization.split('Bearer ')[1]
		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		req.user = decoded._id
		next()
	} catch (error) {
		res.status(401).json('Invalid Token')
	}
}

module.exports = {
	signToken,
	verifyToken,
}
