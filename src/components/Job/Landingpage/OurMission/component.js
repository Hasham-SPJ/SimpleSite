import React, {Component} from 'react';
import "./style.css";
import { Button, Typography, Grid }  from '@material-ui/core';
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

class JobAILandingPageOurMission extends Component {
    render() {

        return (
            <div className="jobailandinourmissiongsection">
                {/* <div className="jobailandingpagebg">
                    <img src={JobAiBg} ></img>
                </div> */}
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                    <div className="jobailandinourmissiongwrapper">
                        <Grid container justify="center">
                            <Grid item sm={11}>
                                <div className="ourmissioncards">
                                    <h1 align="left" ><FormatQuoteIcon className="missionquotes" />Our <span>Mission</span></h1>
                                    <p align="left" className="paddingleft">Offer high quality jobs to skilled people by breaking geographic boundaries.</p>
                                </div>
                            </Grid>
                            <Grid item sm={11}>
                                <div className="ourmissioncards">
                                    <h1 align="right" >Our <span>Vision</span><FormatQuoteIcon className="visionquotes" /></h1>
                                    <p align="right" className="paddingright">Offer e-Training Bootcamps and a Smart Job portal that connects technology companies with the most qualified people all over the world through a fully automated process</p>
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

export default JobAILandingPageOurMission;