import React, { Component } from 'react';
import {BrowserRouter as Router, Switch,Route, Redirect} from "react-router-dom";
import Dashboard from "./Dashboard/component";
import JobAI from "./Job/container";
import AGORA from "./Agora/component";
import TestPage from "./Test/component";
import EITTestPage from "./Test/EIT/component";
import ResultPage from  "./Test/Result/component";
import DashboardOptions from "./Dashboard/OptionButtons/component";
import AgoraDashboardOptionButtons from "./Agora/Dashboard/component";
import CompanyData from "./Table/materialtable";
import InsertData from "./Table/InsertData";
// import StatsData from "./Table/stats";
import AgoraLandingPage from "./Table/agoralandingpage";

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
                    <Route exact path={`/agora`} component={AgoraLandingPage}/>
                     <Route path={`/agora/companydata`} component={CompanyData}/>
                    <Route path={`/agora/insertdata`} component={InsertData}/>
                    {/* <Route exact path={`/agora/statsdata`} component={StatsData}/> */}
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
