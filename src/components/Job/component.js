import React, {Component} from 'react';
import WidgetItem from "../Widgets/ListItem/component";
import "./style.css";
import { Button, Typography }  from '@material-ui/core';
import EIT from "../Test/EIT/component";

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
        const itemsList = [
            {
                title: "Candidate",
                topText: "Screening A",
                bottomText: "VIDEO",
            },
            {
                title: "VISITORS",
                topText: "Hard Skills Test",
                bottomText: "Hackeron",
            },
            {
                title: "Candidate",
                topText: "Soft Skilss Test",
                bottomText: "EMOTIONAL intelligencs Test",
            },
            {
                title: "Candidate",
                topText: "Dashboard",
                bottomText: "ATTITUDE TEST",
            },
            {
                title: "Candidate",
                topText: "Dashboard",
                bottomText: "CHARTS with Applicant so far",
            }
        ];
        return (
            <>
                <h1 className="title"><a href="/">{"<"}</a>Job AI Widget
                 {/* <a href="/test" className="testlinktitle"> Start Test </a> */}
                 </h1>
                 <div class="jobwidgetwrapper">
                    <Typography className="widgetitemtitle" variant="h3">{itemsList[this.state.stepVal].bottomText}</Typography>
                    {
                                    this.state.stepVal === 2 ? <EIT /> : null
                    }
                    {
                                    this.state.stepVal === 3 ? <a className="attitudetest" href="http://attitudetest-dev.us-east-2.elasticbeanstalk.com/">Start Test</a> : null
                    }
                    {
                        itemsList.map((item, index) => (
                            
                            index <= this.state.stepVal ? 
                            <>
                                
                                <WidgetItem title={item.title} topText={item.topText} bottomText={item.bottomText}/>
                            </> : 
                            null
                        ))
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
                }
            </>
        )
    }
}

export default JobAI;