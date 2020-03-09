import React, {Component} from 'react';
import WidgetItem from "../Widgets/ListItem/component";
import "./style.css";
import { Button, Typography, Grid }  from '@material-ui/core';
import EIT from "../Test/EIT/component";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Sideabar from "./Sidebar/container";
import CandidateScreening from "./Screening/container";
import CandidateHardSkillsTest from "./HardSkillsTest/container";
import CandidateEITTest from "./EITTest/container";
import CandidateAttitudeTest from "./AttitudeTest/container";

class JobAI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stepVal : 0,
        }
    }

    nextStepHandler = () => {
        this.setState({
            stepVal : this.state.stepVal + 1,
        });
    }
    previousStepHandler = () => {
        this.setState({
            stepVal: this.state.stepVal - 1,
        });
    }
    render() {
        const {
            itemsList,
            flowStepValue
            } = this.props;
        return (
            <div className="jobaiwrapper">

                <h1 className="title"><a href="/"><KeyboardBackspaceIcon /></a>Job AI Widget - Candidate Flow
                 {/* <a href="/test" className="testlinktitle"> Start Test </a> */}
                 </h1>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} md={2}>
                        <Sideabar />
                    </Grid>

                    <Grid item xs={12} sm={8} md={10}>
                        {
                            flowStepValue === 1 ? 
                            <CandidateScreening /> : null
                        }

                        {
                            flowStepValue === 2 ? 
                            <CandidateHardSkillsTest /> : null
                        }

                        {
                            flowStepValue === 3 ? 
                            <CandidateEITTest /> : null
                        }

                        {
                            flowStepValue === 4 ? 
                            <CandidateAttitudeTest /> : null
                        }
                    </Grid>
                </Grid>

                
                 {/* <div class="jobwidgetwrapper">
                    
                    {
                        itemsList.map((item, index) => (
                            
                            index <= this.state.stepVal ? 
                            <>
                                
                                <WidgetItem title={item.title} topText={item.topText} bottomText={item.bottomText}/>
                            </> : 
                            null
                        ))
                    }

                    <Typography className="widgetitemtitle" variant="h3">{itemsList[this.state.stepVal].bottomText}</Typography>
                    {
                                    this.state.stepVal === 2 ? <a className="attitudetest" href="http://matchingskilllevel-dev.us-west-2.elasticbeanstalk.com/Quizs">Start Test</a> : null
                    }
                    {
                                    this.state.stepVal === 3 ? <a className="attitudetest" href="http://attitudetest-dev.us-east-2.elasticbeanstalk.com/">Start Test</a> : null
                    }
                </div>

                {
                    this.state.stepVal === 4 ? 
                    <a className="attitudetest" href="/">Finish</a> : 
                    <>
                        <Button className="movebtn" variant="contained" color="primary" onClick={this.state.stepVal > 0 ? this.previousStepHandler : null} m={3}>
                            Back
                        </Button>
                        <Button className="movebtn" variant="contained" color="primary" onClick={this.state.stepVal < 4 ? this.nextStepHandler: null}>
                            Next
                        </Button>
                    </>
                } */}
            </div>
        )
    }
}

export default JobAI;