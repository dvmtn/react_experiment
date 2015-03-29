var Individual = React.createClass({
  render: function(){
    var name = this.props.name;
    var tasks = this.props.tasks;
    return(
      <div className="individual">
        <h1>Hello, {name}!</h1>
        <TaskList tasks={tasks} onDelete={this.props.onTaskDelete}/>
      </div>
    );
  }
});

