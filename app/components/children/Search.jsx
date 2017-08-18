import React from 'react';
import helpers from '../utils/helpers';
import Query from './Query.jsx';
import Results from './Results.jsx'

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results :[],
      q: '',
      startYear:'',
      endYear: ''
    };
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch (query, SY, EY){
    this.setState({
      q: query,
      startYear:SY,
      endYear: EY
    })
  }

  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.q !== this.state.q) {
      helpers.runQuery(this.state.q, this.state.startYear, this.state.endYear).then(function(data) {
        if (data !== this.state.results) {
          this.setState({results: data});
        }
      })
    }
  }


  render(){
    return(
      <div>
        <Query updateSearch={this.updateSearch}/>
        <Results q={this.state.q} results={this.state.results}/>
      </div>
    );
  };
} 
export default Search;
