import React, {Component} from 'react';
import "./style.css";
import { Button, Typography, Grid }  from '@material-ui/core';
import WhYUS1 from "../../../../whyus1.png";
import WhYUS2 from "../../../../whyus2.png";
import WhYUS3 from "../../../../whyus3.png";

class JobAILandingPageWhyUs extends Component {
    render() {

        return (
            <div className="jobailandinwhyusgsection">
                {/* <div className="jobailandingpagebg">
                    <img src={JobAiBg} ></img>
                </div> */}
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                    <div className="jobailandinwhyusgwrapper">
                        <h1 align="center" >Why <span>US</span></h1>
                        <p>We are a Team of Quick Individuals; With <span>Out-of-the-Box</span> thinking. We Innovate, Integrate and Implement With Tools that define <span>WHO WE ARE</span> and make Our Product <span>STAND-OUT</span></p>

                        <Grid container justify="center">
                            <Grid item sm={12} md={3} >
                                <div className="whyuscards">
                                    <img src={WhYUS1}></img>
                                    <h3>Pre Evaluated Candidates</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend non nunc laoreet viverra. Donec tempus turpis vel turpis pharetra fermentum.</p>
                                </div>
                            </Grid>
                            <Grid item sm={12} md={3} >
                                <div className="whyuscards">
                                    <img src={WhYUS2}></img>
                                    <h3>Pre Evaluated Candidates</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend non nunc laoreet viverra. Donec tempus turpis vel turpis pharetra fermentum.</p>
                                </div>
                            </Grid>
                            <Grid item sm={12} md={3} >
                                <div className="whyuscards">
                                    <img src={WhYUS3}></img>
                                    <h3>Pre Evaluated Candidates</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend non nunc laoreet viverra. Donec tempus turpis vel turpis pharetra fermentum.</p>
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

export default JobAILandingPageWhyUs;