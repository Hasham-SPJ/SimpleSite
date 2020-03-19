import React, {Component} from 'react';
import "./style.css";
import { Button, Typography, Grid }  from '@material-ui/core';
import JobAiBg from "../../../banner-three-shape@2x.png";
import ScrollBarTestOpt from "./Optionsbar";

class JobAIStartTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startTest : true,
        }
    }
    scrollToTest = () => {
        window.scrollTo(null, 700);
    }
    startTesthandler = () => {
        this.setState({
            startTest : false,
        });
    }
    render() {

        return (
            <>
            {
                this.state.startTest ? 
            
            <div className="jobaistarttestpage">
                <div className="jobaistarttestbg">
                    <img src={JobAiBg} ></img>
                </div>
                <Grid container>
                    <Grid item xs={12} sm={12} md={5}>
                    <div className="jobaistarttestwrapper">
                        <h1>How It Works?</h1>
                        <Button onClick={this.startTesthandler} variant="outlined" color="primary">
                            Start Testing
                        </Button>
                    </div>
                    </Grid>
                </Grid>
            </div> : 

            <div className="jobaistarttestopt" ref="test">
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <ScrollBarTestOpt />
                    </Grid>
                </Grid>
            </div> }
            </>
        )
    }
}

export default JobAIStartTest;