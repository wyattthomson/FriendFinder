// Require friends data
var friends = require("../data/friends");

module.exports = function(app) {

	//Show all friends
	app.get("/friends" , function(request,result){
		result.json(friends);
	})

	// Shows best match friend to user
	app.post("/friends", function(request, result) {

		// to store best match from friends.js
		var bestMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		//retrieve user input
		var userData = req.body;
		var userScores = userData.scores; 

		// stores sum of differences in survey scores
		var totalDiff = 0;

		//Loop through all friends.js and compare scores

		for(var i = 0; i < friends.length; i++) {
			// resets to 0 with every friend comparison 
			totalDiff = 0; 
			for(var j = 0; j < friends[i].scores[j]; j++) {
				//calculate the totalDiff per friend
				totalDiff += Math.abs( parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

				// Sets new best match 
				if (totalDiff <= bestMatch.friendDifference) {
					bestMatch.name = friends[i].name;
					bestMatch.photo = friends[i].photo;
					bestMatch.friendDifference = totalDiff;
				}

			}
		}
		friends.push(userData);
		res.json(bestMatch);
	})	

}