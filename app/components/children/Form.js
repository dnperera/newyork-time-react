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
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">


              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <h4>Topic</h4>
              <input
                // fix below code
                value={this.state.title}
                type="text"
                className="form-control text-left"
                id="title"
                onChange={this.handleTitleChange}
                required
              />
              <h4>Start Year</h4>
              <input
                // fix below code
                value={this.state.start}
                type="text"
                className="form-control text-left"
                id="start"
                onChange={this.handleStartChange}
                
              />
              <h4>End Year</h4>
              <input
                // fix below code
                value={this.state.end}
                type="text"
                className="form-control text-left"
                id="end"
                onChange={this.handleEndChange}
                
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
