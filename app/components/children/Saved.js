// Include React
var React = require("react");
import $ from 'jquery';

// Creating the Saved Articles component
var SavedArticles = React.createClass({
    // Here we set a generic state associated with the text being searched for
    getInitialState: function() {
      return { url: "" };
    },

    handleClickDelete: function(i){
       //var articleObj =this.props.savedArticles[i];
      this.props.deleteArticle(i);

    },

    viewArticle:function(url) {
      window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=50,width=600,height=700");
    },

  // Here we render the function
  render: function() {
      // we establish "that = this" because at this point "this" is still referring to "newsArticles"
      var that = this; 
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Saved Articles</h3>
        </div>

        <div className="panel-body">
          {that.props.savedArticles.map(function(article, i) {
            return (
              <div key={i}>
              <div className="panel panel-info">
                <div className="panel-heading">{article.title}</div>
                <div className="panel-body">
                <p>{article.snippet}</p>
                  <p>Published Date :{article.published}</p>
                {/* we .bind(that, i) to each handleClickSave function so we know which button we are targeting
                rty*/}
                  <button  id={that, article._id} className="btn btn-danger"
                  onClick={that.handleClickDelete.bind(that,article._id)}
                  >Delete</button>
                  
                  <button className="btn btn-warning viewArticles"
                  onClick={that.viewArticle.bind(that, article.link)}>View Article</button> 
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = SavedArticles;