var DeleteButton = React.createClass({
  render: function(){
    return(
      <button onClick={this.props.onDelete}>x</button>
    );
  }
});

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

var SimpleForm = React.createClass({
  handleSubmit: function(event){
    event.preventDefault();
    var label = this.refs.text.getDOMNode().value.trim();
    this.props.onSimpleSubmit({ label: label });
  },
  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder={this.props.placeholder} ref="text" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});

var App = React.createClass({
  handleTaskSubmit: function(new_task){
    var tasks = this.state.tasks;
    tasks.push({
      id: tasks.length,
      label: new_task.label
    });
    this.state.tasks = tasks;
    this.setState(this.state);
  },

  handleTaskDelete: function(dead_task){
    this.state.tasks = this.state.tasks.filter(function(task){
      return task.id !== dead_task.id;
    });
    this.setState(this.state);
  },

  handleIndividualSubmit: function(new_individual){
    var individuals = this.state.individuals;
    individuals.push({
      id: individuals.length,
      label: new_individual.label
    });
    this.state.individuals = individuals;
    this.setState(this.state);
  },

  getInitialState: function() {
    return {tasks:[], individuals: []};
  },

  render: function(){
    var tasks = this.state.tasks;
    var individuals = this.state.individuals.map(function(individual){
      return <Individual id={individual.id} name={individual.label} tasks={tasks} onTaskDelete={this.handleTaskDelete} />
    }, this);
    return(
      <div>
        <SimpleForm onSimpleSubmit={this.handleTaskSubmit} placeholder="Enter Task"/>
        <SimpleForm onSimpleSubmit={this.handleIndividualSubmit} placeholder="Enter Name"/>
        {individuals}
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('canvas')
);
