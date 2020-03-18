import React, {Component} from 'react';
import "./style.css";
import { Button, Typography, Grid }  from '@material-ui/core';
import JobAiBg from "../../../banner-three-shape@2x.png";

class JobAIStartTest extends Component {
    render() {

        return (
            <div className="jobaistarttestpage">
                <div className="jobaistarttestbg">
                    <img src={JobAiBg} ></img>
                </div>
                <Grid container>
                    <Grid item xs={12} sm={12} md={5}>
                    <div className="jobaistarttestwrapper">
                        <h1>How It Works?</h1>
                        <Button href="/jobai/candidate-test" variant="outlined" color="primary">
                            Start Testing
                        </Button>
                    </div>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}

export default JobAIStartTest;