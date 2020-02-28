import React, { Component } from 'react';
import {BrowserRouter as Router, Switch,Route, Redirect} from "react-router-dom";
import Dashboard from "./Dashboard/component";
import JobAI from "./Job/component";
import AGORA from "./Agora/component";
import TestPage from "./Test/component";
import EITTestPage from "./Test/EIT/component";
import ResultPage from  "./Test/Result/component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
              <Switch>
                  <Route exact path={`/`} component={Dashboard}/>
                  <Route exact path={`/jobai`} component={JobAI}/>
                  <Route exact path={`/agora`} component={AGORA}/>
                  <Route exact path={`/test`} component={TestPage}/>
                  <Route exact path={`/test/eit`} component={EITTestPage}/>
                  <Route exact path={`/result`} component={ResultPage}/>
              </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
