var path = require("path");

module.exports = function(app) {
	// Routes to survey page
	app.get("/survey", function(request, result) {
		result.sendFile(path.join(__dirname, "/../public/survey.html"))
	})

		// Default path to home page
	app.use(function(request, result) {
		result.sendFile(path.join(__dirname, "/../public/home.html"))
	})
}