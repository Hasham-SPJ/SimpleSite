import React, {Component} from 'react';
import { Typography, Grid } from "@material-ui/core";
import { Link } from "@material-ui/core";
import "./style.css";
import CompanyData from "../../Table/materialtable";
import InsertData from "../../Table/InsertData";

import Stats from "../../Table/stats";

class AgoraDashboardOptionButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedComponent: 1,
        }
    }

    companySelected = () => {
        this.setState({
            selectedComponent: 2,
        });
    }

    viewDataSelected = () => {
        this.setState({
            selectedComponent : 1,
        });
    }

    statisticsSelected = () => {
        this.setState({
            selectedComponent : 3,
        });
    }
    render() {
        return (
            <>
                {/* <Typography variant="h3" component="h1">
                    AGORA
                </Typography> */}

                <Grid container spacing={3} className="optionswrapper">
                    <Grid item xs={2}>
                        <button className="sidebarBtn" onClick={this.viewDataSelected} >Inser new Data</button>
                        <button className="sidebarBtn" onClick={this.companySelected} >View Data</button>
                        <button className="sidebarBtn" onClick={this.statisticsSelected} >Statistics</button>
                    </Grid>

                    <Grid item xs={10} className="agoracontentwrapper">
                        { this.state.selectedComponent === 1 ? <InsertData /> : null }
                        { this.state.selectedComponent === 2 ? <CompanyData /> : null }
                        { this.state.selectedComponent === 3 ? <Stats /> : null }
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default AgoraDashboardOptionButtons;