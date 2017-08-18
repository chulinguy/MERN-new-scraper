import React from 'react';

class Query extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      startYear: '',
      endYear: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    this.props.updateSearch(this.state.searchTerm, this.state.startYear, this.state.endYear);
  }

  handleTermChange(e){
    this.setState({searchTerm: e.target.value}) 
  }

  handleSYChange(e){
    this.setState({startYear: e.target.value}) 
  }

  handleEYChange(e){
    this.setState({endYear: e.target.value})  
  }

  render(){
    
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search New York Times</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="searchTerm">Search</label>
              <input
                type="text"
                className="form-control"
                id="searchTerm"
                onChange={this.handleTermChange}
                required
              />
              <label htmlFor="startYear">Start Year (YYYY)</label>
              <input
                type="number"
                className="form-control"
                id="startYear"
                onChange={this.handleSYChange}
              />
              <label htmlFor="endYear">End Year (YYYY)</label>
              <input
                type="number"
                className="form-control"
                id="endYear"
                onChange={this.handleEYChange}
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
} 
export default Query;