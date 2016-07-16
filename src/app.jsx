var React = require('react');
var ReactFire = require('reactfire');
//feeds data from Firebase to component
var Firebase = require('firebase');
//get data in Firebase;
var rootUrl = "https://react-todo-f3296.firebaseio.com/";

var App = React.createClass({
  mixins: [ ReactFire ],
  //a group of methods that sit on one object that gets copied to
  //another object. so from ReactFire to this component
  componentWillMount: function() {
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
    //creates new instance of Firebase, tell it where to look for data
  },
  render: function() {
    return (
      <div className="row panel panel-default">
        <div className="col-md-8 col-md-offset-2">
          <h2 className="text-center">
            To-Do List
          </h2>
        </div>

      </div>
  )
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
