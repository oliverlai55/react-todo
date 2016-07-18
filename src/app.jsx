var React = require('react');
var ReactFire = require('reactfire');
//feeds data from Firebase to component
// connect React and the data from Firebase
var Firebase = require('firebase');
//get data in Firebase;
var rootUrl = "https://react-todo3.firebaseio.com/";
var Header = require('./header');
var List = require('./list');

var App = React.createClass({
  mixins: [ ReactFire ],
  //a group of methods that sit on one object that gets copied to
  //another object. so from ReactFire to this component
  getInitialState: function() {
    return {
      items: {},
      loaded: false
    }
  },
  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'items/');
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
    //creates new instance of Firebase, tell it where to look for data
    this.fb.on('value', this.handleDataLoaded);
    //as soon as it gets data from server, will trigger function
  },
  deleteButton: function() {
    if(!this.state.loaded) {
      return
    } else {
      return (
        <div className="text-center clear-complete">
          <hr />
          <button
            type="button"
            onClick={this.onDeleteDoneClick}
            className="btn btn-warning">
            Clear Complete
          </button>
        </div>
      )
    }
  },
  onDeleteDoneClick: function() {
    for(var key in this.state.items) {
      if(this.state.items[key].done === true) {
        this.fb.child(key).remove();
      }
    }
    this.setState({loaded: true})
  },
  handleDataLoaded: function() {
    this.setState({loaded: true});
  },
  render: function() {
    return (
      <div className="row panel panel-default">
        <div className="col-md-8 col-md-offset-2">
          <h2 className="text-center m-t-2">
            React To-Do List
            <Header itemsStore={this.firebaseRefs.items} />
            <hr />
            <div className={"content " + (this.state.loaded ? 'loaded' : '')}>
              <List items={this.state.items} />
              {this.deleteButton()}
            </div>
          </h2>
        </div>

      </div>
    )
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
