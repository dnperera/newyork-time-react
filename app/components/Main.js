var React = require("react");

var Form = require("./children/Form");
var Results = require("./children/Results");
var SavedArticles = require("./children/Saved");

var helpers = require("./utils/helpers");

var Main = React.createClass({

    getInitialState: function() {
        return { title: "", startYear:"", endYear: "",newsHeadlines:[],savedArticles:[]};
      },

 
  	saveArticle(title,snippet,link,pubDate){

  		helpers.saveArticle(title,snippet,link,pubDate)
  		.then(function(data){
  			console.log(data);
  		}).then( function(){
        helpers.getsavedArticles()
        .then(function(response){
           console.log('Saved Articles -->',response.data);
           this.setState({savedArticles:response.data})
        }.bind(this));
      }.bind(this));
    },

    deleteArticle(id){
      helpers.deleteSelectedArticle(id).then(function(res){
        console.log('deleted response',res);
      }).then( function(){
        helpers.getsavedArticles()
        .then(function(response){
           console.log('Saved Articles -->',response.data);
           this.setState({savedArticles:response.data})
        }.bind(this));
      }.bind(this));;
    },

  	componentDidUpdate: function(prevProps, prevState) {
  		if(prevState.title != this.state.title){
        helpers.runQuery(this.state.title,
    			this.state.startYear,
    			this.state.endYear).then(function(data) {
    			console.log(data);
    			this.setState({ newsHeadlines:data });
    		}.bind(this));
      }
  	},

  	  // This function allows childrens to update the parent.
  	setTerm: function(title,startYear,endYear) {
    this.setState({ title: title,startYear:startYear,endYear:endYear});
  	},

    componentDidMount: function() {
       helpers.getsavedArticles()
       .then(function(response){
          console.log('Saved Articles -->',response.data);
          this.setState({savedArticles:response.data})
       }.bind(this));
     },

	  render: function() {
	    return (
	      <div className="container">
	        <div className="row">
	          {/*<div className="jumbotron">
	            <h2 className="text-center">New York Times Articles!</h2>
	          </div>*/}

	          <div className="col-md-6">
              <div className="row">
                <Form setTerm={this.setTerm} />
                </div>
                <div className="row">
                <SavedArticles savedArticles={this.state.savedArticles} deleteArticle={this.deleteArticle}/>
              </div>
	          </div>


	          <div className="col-md-6">

              <Results newsArticles={this.state.newsHeadlines} saveArticle={this.saveArticle}/>

	          </div>

	        </div>

	      </div>
	    );
	  }

});


module.exports = Main;