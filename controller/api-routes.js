var express = require("express");
// Requiring our  Article model
var Article = require("../models/Article.js");
var router = express.Router();

//get all saved articles
router.get("/api/saved", function(req, res) {
	// Finish the route so it grabs all of the articles
	Article.find({})
	.sort([
	    ["published", "descending"]
	  ])
	.exec(function(err, doc) {
	    if (err) {
	      console.log(err);
	    }
	    else {
	      res.send(doc);
	    }
	  });
	
});

// Save selected article
router.post("/api/saved", function(req, res) {
	
	console.log(req.body.title);
	console.log(req.body.link);
	console.log(req.body.published);

	var newArticle = new Article(req.body);
	newArticle.save(function(error, doc) {
	    console.log('Doc id  --',doc);
	  if(error){
	    res.send(error);
	  }
	  else{
	  	res.send(doc);
	  }
	});
});

//Delete selected Article
router.delete("/api/:id", function(req, res) {

	Article.remove({"_id":req.params.id}, function(err,removed) {
		if(err){
			res.send(err);
		}
		else{
			console.log("Note Deleted...");
			res.send(removed);
		}
	});
});

// Export routes for server.js to use.
module.exports = router;
