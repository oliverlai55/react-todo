var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
  renderList: function() {
    if(!this.props.items) {
      //Object.keys pass in object, returns an array
      //the first entry of object, the id
      return (
        <h6>Add a to-do to get started</h6>
      )
    }else {
      var children = [];

      for(var key in this.props.items){
        var item = this.props.items[key];
        item.key = key;
        children.push(
          <ListItem
            item={item}
            key={key}
            >
          </ListItem>
        )
      }
      return children;
    }
  },
  render: function() {
    console.log(this.props);
    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
});
