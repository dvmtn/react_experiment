var DeleteButton = React.createClass({
  render: function(){
    return(
      <button className="delete" onClick={this.props.onDelete}>x</button>
    );
  }
});

