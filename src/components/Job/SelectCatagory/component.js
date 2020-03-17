import React, {Component} from 'react';
import "./style.css";
import { Button, Typography, Grid }  from '@material-ui/core';
import JobAiBg from "../../../template.png";
import CandidateIcon from "../../../iconCandidate.png"
import Corporateicon from "../../../iconCorporate.png";

class JobAISelectCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCat: null,
            selectedRoute : "/",
        }
    }

    selectCatetgoryHandler = (value, route) => {
        this.setState({
            selectedCat: value,
            selectedRoute: route,
        })
    }
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
                        <Button href={this.state.selectedRoute} disabled={this.state.selectedCat ? false : true} variant="outlined" color="primary">
                            Let's Begin
                        </Button>
                    </div>
                    </Grid>
                </Grid>

                <Grid container className="jobaicategoryselectwrapper">
                    <Grid item xs={2} align="center">
                        <div className={this.state.selectedCat === 1 ? "jobaiselectedcategory" : null} onClick={(e) => this.selectCatetgoryHandler(1, "/jobai/candidate/")}>
                            <img src={CandidateIcon}></img>
                            <h1>Candidate</h1>
                        </div>
                    </Grid>
                    <Grid item xs={2} align="center">
                        <div className={this.state.selectedCat === 2 ? "jobaiselectedcategory" : null} onClick={(e) => this.selectCatetgoryHandler(2, "/jobai/corporate/")}>
                            <img src={Corporateicon}></img>
                            <h1>Corporate</h1>
                        </div>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}

export default JobAISelectCategory;