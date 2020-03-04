import React, {Component} from 'react';
import WidgetItem from "../Widgets/ListItem/component"
import "./style.css";
import { Button, Typography }  from '@material-ui/core';
import EIT from "../Test/EIT/component";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import AgoraOptionsButton from "./Dashboard/component";

class AGORA extends Component {
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
        const itemsList = [
            {
                title: "Operator",
                topText: "corporate name",
                bottomText: "1st GOOGLE FORM",
            },
            {
                title: "Operator",
                topText: "details 1",
                bottomText: "2nd Google FORM",
            },
            {
                title: "Operator",
                topText: "details 2",
                bottomText: "EMOTIONAL intelligence Test",
            },
            {
                title: "Candidate",
                topText: "...",
                bottomText: "ATTITUDE TEST",
            },
            {
                title: "Candidate",
                topText: "Dashboard",
                bottomText: "CHARTS with Applicant so far",
            }
        ];
        return (
            <div className="agorawrapper">
                <h1 className="title"><a href="/agora"><KeyboardBackspaceIcon /></a>AGORA
                    {/* <a href="/test" className="testlinktitle"> Start Test </a> */}
                </h1>
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

                <AgoraOptionsButton />
                
            </div>
        )
    }
}

export default AGORA;