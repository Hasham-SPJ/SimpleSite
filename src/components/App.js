import React, { Component } from 'react';
import {BrowserRouter as Router, Switch,Route, Redirect} from "react-router-dom";
import Dashboard from "./Dashboard/component";
import JobAI from "./Job/component";
import AGORA from "./Agora/component";
import TestPage from "./Test/component";
import EITTestPage from "./Test/EIT/component";
import ResultPage from  "./Test/Result/component";
import DashboardOptions from "./Dashboard/OptionButtons/component";
import AgoraDashboardOptionButtons from "./Agora/Dashboard/component";

import "./style.css";
class App extends Component {
  render() {
    return (
      <>
        <Dashboard />
        <div className="App">
          <Router>
                <Switch>
                    <Route exact path={`/`} component={DashboardOptions}/>
                    <Route exact path={`/jobai`} component={JobAI}/>
                    <Route exact path={`/agora`} component={AgoraDashboardOptionButtons}/>
                    <Route exact path={`/agora/flow`} component={AGORA}/>
                    <Route exact path={`/test`} component={TestPage}/>
                    <Route exact path={`/test/eit`} component={EITTestPage}/>
                    <Route exact path={`/result`} component={ResultPage}/>
                </Switch>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
