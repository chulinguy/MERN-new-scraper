import React from "react";
import { Switch, Route } from "react-router-dom";

import Search from "./children/Search.jsx";
import Saved from "./children/Saved.jsx";

class Main extends React.Component {

  constructor(props){
    super(props);
    // this.state = {savedResults: []};
    // this.setMainResults = this.setMainResults.bind(this);
  }

  // setMainResults (results){
  //   this.setState({savedResults: results});
  // }

  render () {
    var that = this;  
    return (
      <main>
        <Switch>
          <Route path="/saved" render={(props) => (
            <Saved />
          )}/>
          <Route exact path="/" component={Search}/>
        </Switch>
      </main>
    )
  }
}

export default Main;