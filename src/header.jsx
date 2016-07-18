var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return { text: ''}
  },
  handleClick: function() {
    //Send value of text input to Firebase
    this.props.itemsStore.push({
      //adding data to the database
      text: this.state.text,
      done: false
    });

    this.setState({text: ''});
  },
  handleInputChange: function(event) {
    this.setState({text: event.target.value});
  },
  render: function() {
    return (
      <div className="input-group">
        <input
          value={this.state.text}
          onChange={this.handleInputChange}
          type="text"
          className="form-control"
          placeholder="Enter Task"
        />
        <span className="input-group-btn">
          <button
            onClick={this.handleClick}
            className="btn btn-primary"
            type="button"
          >
            Add
          </button>
        </span>
      </div>
    )
  }
});
