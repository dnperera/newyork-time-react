	getInitialState: function() {
    	return { title: "", startYear:"", endYear: "",newsHeadlines:[],savedArticles:[]};
  	},

  	componentDidMount: function() {

  	   helpers.getsavedArticles()
       .then(function(response){
          console.log('Saved Articles -->',response.data);
          this.setState({savedArticles:response.data})
       }.bind(this));
  	 },