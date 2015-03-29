var TaskList = React.createClass({
  render: function(){
    var tasks = this.props.tasks.map(function(task){
      return(
        <Task element={task} onDelete={this.props.onDelete}/>
      );
    }, this);
    return(
      <ul className="tasks">
        {tasks}
      </ul>
    );
  }
});

