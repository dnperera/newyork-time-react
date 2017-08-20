 // Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { 
      title: "",
      start: "",
      end: ""
    };
  },

  // This function will respond to the user input
  handleTitleChange: function(event) {
    // work on this part
    this.setState({ title: event.target.value } 
     );

  },
  handleStartChange: function(event) {
    // work on this part
    this.setState({ start: event.target.value } 
     );

  },
  handleEndChange: function(event) {
    // work on this part
    this.setState({ end: event.target.value } 
    );

  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.title,this.state.start,this.state.end); //where is setTerm
    //this.setState({ term: "" });
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search</h3>
        </div>
        <div className="panel-body text-left">
          <form onSubmit={this.handleSubmit} className="form-horizontal">
            <div className="form-group">
              <label className="control-label col-sm-4" for="email">Search Topic:</label>
              <div className="col-sm-8">
              <input
                value={this.state.title}
                type="text"
                className="form-control text-left"
                id="title"
                onChange={this.handleTitleChange}
                required
              />
              </div>
            </div>
            <div className="form-group">
              <label className="control-label col-sm-4" for="stYear">Start Year:</label>
              <div className="col-sm-8"> 
              <input
                value={this.state.start}
                type="text"
                className="form-control text-left"
                id="start"
                onChange={this.handleStartChange}
                required
              />
              </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-4" for="endYear">End Year:</label>
                <div className="col-sm-8"> 
                <input
                  value={this.state.end}
                  type="text"
                  className="form-control text-left"
                  id="end"
                  onChange={this.handleEndChange}
                />
                </div>
              </div>
            <div className="form-group"> 
              <div className="col-sm-offset-2 col-sm-10 text-center" >
                <button type="submit" className="btn btn-success">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
