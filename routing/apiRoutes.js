const friendMatch = require("../app/data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendMatch);
    });

    app.post("/api/friends", function (req, res) {
        let totalDifference = 0;

        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        let userData = req.body;
        let userName = userData.name;
        let userScores = userData.scores;

        let myScores = userScores.map(function (item) {
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: myScores
        };

        console.log("Name: " + userName);
        console.log("User Score " + userScores);

        let sum = myScores.reduce((a, b) => a + b, 0);

        console.log("Sum of user's score " + sum);
        console.log("Best match friend difference " + bestMatch.friendDifference);
        console.log("---------------------------------");

        for (let i = 0; i < friendMatch.length; i++) {
            console.log(friendMatch[i].name);
            totalDifference = 0;
            console.log("Total Diff " + totalDifference);
            console.log("Best match friend difference " + bestMatch.friendDifference);

            let friendMatchScore = friendMatch[i].scores.reduce((a, b) => a + b, 0);
            console.log("Total friend score " + friendMatchScore);
            totalDifference += Math.abs(sum - friendMatchScore);
            console.log("----------------------------" + totalDifference);

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = friendMatch[i].name;
                bestMatch.photo = friendMatch[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
            console.log(totalDifference + " Total Difference");
        }
        console.log(bestMatch);

        friendMatch.push(userData);
        console.log("New user added");
        console.log(userData);
        res.json(bestMatch);
    });
}