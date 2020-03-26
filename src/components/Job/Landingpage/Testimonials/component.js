import React, {Component} from 'react';
import "./style.css";
import { Button, TextField , Grid }  from '@material-ui/core';
import Testimonials from "../../../../testimonials.png";

class JobAILandingPageTestimonials extends Component {
    render() {

        return (
            <div className="jobailandintestimonialgsection">
                {/* <div className="jobailandingpagebg">
                    <img src={JobAiBg} ></img>
                </div> */}
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                    <div className="jobailandintestimonialgwrapper">
                        <h1 align="center" >Testimonials</h1>
                        <h1 align="center" >OVER <span>7,000 </span>HAPPY CUSTOMERS</h1>
                        <p>We have many happy <span>Admirers</span> with Us .Some impressions from our Customers! Please read some of the lovely things our Customers say about us.</p>

                        <Grid container justify="center">
                            <Grid item sm={12} md={10} >
                                <div className="testimonialscards">
                                    <img src={Testimonials}></img>
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container justify="center">
                            <Grid item sm={12} md={6} >
                                <div className="jobaicontactform">
                                    <form>
                                        <TextField className="jobaiformtext" id="standard-basic" label="Email *" />
                                        <TextField className="jobaiformtext" id="standard-basic" label="Website link *" />
                                        <TextField className="jobaiformtextarea" id="standard-basic" label="Message *" />
                                        <Button variant="outlined" color="primary">
                                            Send Request
                                        </Button>
                                    </form>
                                </div>
                            </Grid>
                            <Grid item sm={12} md={3} >
                                <div className="jobaicontactform">
                                <span>Contact us</span>
                                <h3>Don’t Hesitate to Contact us for any Information.</h3>
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

export default JobAILandingPageTestimonials;