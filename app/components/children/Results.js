// Include React
var React = require("react");

// Creating the Results component
var Results = React.createClass({
    // Here we set a generic state associated with the text being searched for
    getInitialState: function() {
      return { url: "" };
    },
   
    handleClick(evt) {
      console.log("gggggg",evt);
    },

  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>

        <div className="panel-body">
          {this.props.newsArticles.map(function(search, i) {
            return (
              <div className="panel panel-info">
                <div className="panel-heading">{search.headline.main}</div>
                <div className="panel-body">
                  <p>{search.snippet}</p>
                  <p>{search.web_url}</p>
                  <button onClick={() => this.handleClick(search)} className="btn btn-success
                  ">Save</button><button className="btn btn-warning viewArticles
                  ">View Article</button> 
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