module.exports = (req, res) => {
	const {
		query: { status },
	} = req

	if (status === 'random') {
		const codes = [200, 400, 404, 500]
		const randomNum = Math.floor(Math.random() * Math.floor(codes.length))

		const code = codes[randomNum]

		return res
			.status(code)
			.json({ message: `Random status code retrieved was: ${code}` })
	}

	const statusCode = parseInt(status, 10)

	if (isNaN(statusCode)) {
		return res.status(500).json({ message: `Invalid status code received` })
	}

	res.status(statusCode).json({
		message: `Retrieved the following status code: ${statusCode}`,
	})
}
