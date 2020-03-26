import React, {Component} from 'react';
import "./style.css";
import { Button, Typography, Grid }  from '@material-ui/core';
import JobAiWorks from "../../../../jobaiworks.png";

class JobAILandingPageWorks extends Component {
    render() {

        return (
            <div className="jobailandinworksgsection">
                {/* <div className="jobailandingpagebg">
                    <img src={JobAiBg} ></img>
                </div> */}
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                    <div className="jobailandinworksgwrapper">
                        <h1 align="center" >How <span>Job Ai </span>Works</h1>

                        <Grid container justify="center">
                            <Grid item sm={12} md={10} >
                                <div className="workscards">
                                    <img src={JobAiWorks}></img>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}

export default JobAILandingPageWorks;