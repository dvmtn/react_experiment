var Sort = React.createClass({
  getSortLabel: function(e){
    this.props.onSort(e.target.selectedOptions[0].value);
  },
  render: function(){
    return(
      <span className="sort">
        <label>sort</label>
        <select onChange={this.getSortLabel} ref="sort">
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
          <option value="length">length</option>
        </select>
      </span>
    );
  }
});

