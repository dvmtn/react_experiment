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

