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

  handleSort: function(sort_label){
    var tasks = this.state.tasks
    switch(sort_label){

      case 'a-z':
        this.state.tasks = tasks.sort(function(a,b){
          if(a.label < b.label) return -1;
          if(a.label > b.label) return 1;
          return 0;
        });
        break;

      case 'z-a':
        this.state.tasks = tasks.sort(function(a,b){
          if(a.label > b.label) return -1;
          if(a.label < b.label) return 1;
          return 0;
        });
        break;

      case 'length':
        this.state.tasks = tasks.sort(function(a,b){
          if(a.label.length > b.label.length) return -1;
          if(a.label.length < b.label.length) return 1;
          return 0;
        });
        break;

    }
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
        <div className="controls">
          <SimpleForm onSimpleSubmit={this.handleTaskSubmit} placeholder="Enter Task"/>
          <SimpleForm onSimpleSubmit={this.handleIndividualSubmit} placeholder="Enter Name"/>
          <Sort onSort={this.handleSort}/>
        </div>
          <div className="individuals">
          {individuals}
        </div>
      </div>
    );
  }
});
