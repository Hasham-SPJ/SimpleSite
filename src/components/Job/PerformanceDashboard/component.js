import React, { Component } from "react";
import "./style.css";
import { Button, Grid } from '@material-ui/core';
import { Chart } from 'react-charts'
import TestTemplate from "../QuestionBox/container";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import DesktopMacicon from "@material-ui/icons/DesktopMac";
import TestScore from "../TestScore/container";
import JobAIPerformanceDashboardHeader from "./Header/container";

class JobAIPerformanceDashboard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDataIfNeeded();
    }
    render() {
        const data =  [
              {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
              },
              {
                label: 'Series 2',
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
              }
            ]
        
          const axes = [
              { primary: true, type: 'linear', position: 'bottom' },
              { type: 'linear', position: 'left' }
            ]
        return (
            <div>
                <JobAIPerformanceDashboardHeader />
                <Grid container>
                    <Grid item sm={12}>
                    <div
                        style={{
                            width: '95%',
                            height: '500px',
                            margin: 'auto',
                        }}
                        >
                        <h2 style={{
                            fontSize: '23px',
                            color: '#4E4E4E',
                        }}>Last 100 Days > English test Summary</h2>
                        <Chart data={data} axes={axes} />
                    </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default JobAIPerformanceDashboard;