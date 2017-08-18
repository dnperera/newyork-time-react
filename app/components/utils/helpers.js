// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

//NYT API Key & search query
var nytKey = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';

var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  nytKey + "&q=";

// Helper functions for making API Calls
var helper = {

	// This function serves our purpose of running the query to geolocate.
	runQuery: function(title,stYear,endYear) {

		var queryURL = queryURLBase + title;

		// If the user provides a startYear -- the startYear will be included in the queryURL
		if (parseInt(stYear)) {
		  queryURL = queryURL + "&begin_date=" +stYear+ "0101";
		  //queryURL = queryURL + "&begin_date=20160101";
		}
		// If the user provides a endYear -- the endYear will be included in the queryURL
		if (parseInt(endYear)) {
		  queryURL = queryURL + "&end_date="+endYear+ "0101";
		}
		
		return axios.get(queryURL).then(function(nytData) {
			var news = nytData['data']['response']['docs'];

			if(news.length >0){
			  return news;
			}
			else{
				// If we don't get any results, return an empty string
				return "";
			}

		});
	},

	saveArticle:function(title,snippet,link,pubDate){
		var saveArticle = {title:title,link:link,published:pubDate};
		return axios.post("/api/saved",saveArticle)
		.then(function(res){
			console.log('axios result',res.data._id);
			return res.data._id;
		});
	}

};

// We export the API helper
module.exports = helper;