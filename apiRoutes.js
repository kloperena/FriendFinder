var path = require('path');
var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

var user = req.body;
     
for(var i = 0; i < user.scores.length; i++) {
    user.scores[i] = parseInt(user.scores[i]);
        }

var idealMatch = 0;
//there ten questions times the max number diff =40 
var totalOpposite = 40;



