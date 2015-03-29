var Task = React.createClass({
  passTask: function(){
    this.props.onDelete(this.props.element);
  },
  render: function(){
    var element = this.props.element;
    return(
      <li key={element.id}>
        {element.label}
        <DeleteButton onDelete={this.passTask} />
      </li>
    );
  }
});

