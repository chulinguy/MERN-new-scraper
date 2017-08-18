import React from 'react';
import helpers from '../utils/helpers';

class Results extends React.Component {
  constructor(props){
    super(props);
  }

  handleSave(index) {
    var that = this; 
    helpers.addSavedArticle(that.props.results[index]);
  }

  render(){
    var that = this;  
    var content = []; 
    if (this.props.results) {
      content = this.props.results.map((el, i) => {
        return (
          <div>
            <Result key={i} url={el.web_url} title={el.headline.main} snippet={el.snippet} date={el.pub_date} />
            <button key={i} onclick={this.handleSave.bind(that, i)}>Save me!</button>
          </div>
        );
      })
    } else if (!this.props.q) content = (<strong>Enter search terms to begin ...</strong>)
    else content = (<strong>Nothing found.  Please enter new search terms</strong>)
    
    return(
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Results</h3>
        </div>
        <div className="panel-body">
          {content}
        </div>
      </div>
    );
  };
} 
export default Results;