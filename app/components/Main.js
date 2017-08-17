var React = require("react");

var Form = require("./children/Form");
var Results = require("./children/Results");


var helpers = require("./utils/helpers");

var Main = React.createClass({

	getInitialState: function() {
    	return { title: "", startYear:"", endYear: "",newsHeadlines:[]};
  	},

  	// componentDidMount: function() {

  	// 	helpers.getArticles
  	// }

  	componentDidUpdate: function() {
  		helpers.runQuery(this.state.title,
  			this.state.startYear,
  			this.state.endYear).then(function(data) {
  			console.log(data);
  			this.setState({ newsHeadlines:data });
  		}.bind(this));
  	},
  	  // This function allows childrens to update the parent.
  	setTerm: function(title,startYear,endYear) {
    this.setState({ title: title,startYear:startYear,endYear:endYear});
  	},
	  render: function() {
	    return (
	      <div className="container">
	        <div className="row">
	          <div className="jumbotron">
	            <h2 className="text-center">New York Times Articles!</h2>
	          </div>

	          <div className="col-md-6">

	            <Form setTerm={this.setTerm} />

	          </div>


	          <div className="col-md-6">
	            <Results newsArticles={this.state.newsHeadlines} />

	          </div>

	        </div>

	      </div>
	    );
	  }

});


module.exports = Main;