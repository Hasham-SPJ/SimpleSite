import React, {Component} from 'react';
import "./style.css";
import { Button, Typography, Grid }  from '@material-ui/core';
import JobAiBg from "../../../template.png";
import JobAILandingPageWhyUs from "./WhyUs/container";
import JobAILandingPageOurMission from "./OurMission/container";
import SelectCategory from "../SelectCatagory/container";
import JobAILandingPageWorks from "./Works/container";
import JobAILandingPageTestimonials from "./Testimonials/container";

class JobAILandingPage extends Component {
    render() {

        return (
            <>
            <div className="jobailandingpage">
                {/* <div className="jobailandingpagebg">
                    <img src={JobAiBg} ></img>
                </div> */}
                <Grid container>
                    <Grid item xs={12} sm={12} md={5}>
                    <div className="jobailandingwrapper">
                        <h1>Welcome to <span>Job Ai</span></h1>
                        <p>We enable High-tech companies to meet staffing needs around the globe</p>
                        <Button href="jobai/selectcategory" variant="outlined" color="primary">
                            Get Started
                        </Button>
                        <Button href="jobai/dashboard" variant="outlined" color="primary">
                            Visit Dashboard
                        </Button>
                    </div>
                    </Grid>
                </Grid>

                
                
            </div>
            <JobAILandingPageWhyUs />
            <JobAILandingPageOurMission />
            <SelectCategory />
            <JobAILandingPageWorks />
            <JobAILandingPageTestimonials />
        </>
        )
    }
}

export default JobAILandingPage;