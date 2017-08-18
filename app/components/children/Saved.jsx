import React from 'react';
class Saved extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      saved: []
    }
  }
  componentDidMount (){
    helpers.getSaved().then(function(data) {
      if (data !== null) {
        this.setState({
            savedResults: data
        });
      }
      else {
        this.setState({
            savedResults: []
        });
      }
    })
  }

    // DELETE saved article
    handleDelete(event) {
        event.preventDefault();
        //
        helpers.deleteArticle(this.state.savedResults[event.target.id]);
        // remove results from state
        this.state.savedResults.splice(event.target.id, 1);
        // have to manually reset state, b/c above line returns the deleted array element
        this.setState({
            savedResults: this.state.savedResults
        })
    }

    handleSubmit() {
        console.log("Article deleted!");
    }
  

  render(){
    return (
      <div>Saved test</div>
    );

  }
}
export default Saved;
