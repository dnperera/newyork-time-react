// Include React
var React = require("react");
import $ from 'jquery';

// Creating the Results component
var Results = React.createClass({
    // Here we set a generic state associated with the text being searched for
    getInitialState: function() {
      return { url: "" };
    },
   
    handleClickSave:function(i) {
      $("#"+i).attr("disabled",true);
      var articleObj =this.props.newsArticles[i];
      this.props.saveArticle(articleObj.headline.main,articleObj.snippet,articleObj.web_url,articleObj.pub_date);


    },

    viewArticle:function(url) {
      window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=50,width=800,height=600");
    },

  // Here we render the function
  render: function() {
      // we establish "that = this" because at this point "this" is still referring to "newsArticles"
      var that = this; 
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>

        <div className="panel-body">
          {that.props.newsArticles.map(function(article, i) {
            return (
              <div key={i}>
              <div className="panel panel-info">
                <div className="panel-heading">{article.headline.main}</div>
                <div className="panel-body">
                  <p>{article.snippet}</p>
                  <p>Published Date :{article.pub_date}</p>
                {/* we .bind(that, i) to each handleClickSave function so we know which button we are targeting
                rty*/}
                  <button id={i} className="btn btn-success"
                  onClick={that.handleClickSave.bind(that, i)}>Save</button>
                  
                  <button className="btn btn-warning viewArticles"
                  onClick={that.viewArticle.bind(that, article.web_url)}>View Article</button> 
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
module.exports = Results;