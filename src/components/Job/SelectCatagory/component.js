import React, {Component} from 'react';
import "./style.css";
import { Button, Typography, Grid }  from '@material-ui/core';
import JobAiBg from "../../../template.png";
import CandidateIcon from "../../../iconCandidate.png"
import Corporateicon from "../../../iconCorporate.png";

class JobAISelectCategory extends Component {
    render() {

        return (
            <div className="jobaiselectcategory">
                {/* <div className="jobailandingpagebg">
                    <img src={JobAiBg} ></img>
                </div> */}
                <Grid container>
                    <Grid item xs={12} sm={12} md={5}>
                    <div className="jobaicategorywrapper">
                        <h1>Join Our <span>Team</span></h1>
                        <p>Select Your Category</p>
                        <Button href="jobai/selectcategory" variant="outlined" color="primary">
                            Let's Begin
                        </Button>
                    </div>
                    </Grid>
                </Grid>

                <Grid container className="jobaicategoryselectwrapper">
                    <Grid item xs={2} align="center">
                        <img src={CandidateIcon} ></img>
                        <h1>Candidate</h1>
                    </Grid>
                    <Grid item xs={2} align="center">
                        <img src={Corporateicon} ></img>
                        <h1>Corporate</h1>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}

export default JobAISelectCategory;