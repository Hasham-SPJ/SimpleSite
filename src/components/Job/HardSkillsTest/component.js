import React, { Component } from "react";
import "./style.css";
import Button from '@material-ui/core/Button';
import Dialog from "../../common/Dialog/component";

class CandidateHardSkillsTest extends Component {
    render() {
        const {
            closehardskillsdialogHandler,
            closehardskills,
            openhardskillsdialogHandler
        } = this.props;
        return (
            <div className="hardskillswrapper">

                <Dialog 
                    open={closehardskills}
                    closeDialog={closehardskillsdialogHandler}
                    message="Please pass previous test first"
                    title="Test"
                    />
                <h3>HardSkills Test</h3>
                <h4>Duration: 10 Mins</h4>
                <Button variant="contained" color="primary" className="starttestbtn" onClick={openhardskillsdialogHandler}>
                    Start Test
                </Button>
                <p>
                    <b>Scope: </b> <br></br>
                    The scope of Subject Matter Knowledge Assessment is to ensure applicants meet a minimum required level of technical knowledge in a certain subject matter that relates to the job. The assessment will be a series of questions of different types which are pull randomly from a test bank and the same test is repeated based on application funnel configuration.
                </p>

                <p>
                    <b>Terms: </b>
                </p>
                <ul>
                    <li>As an Applicant, I want to be notified about a test being assigned.</li>
                    <li>As an Applicant, I want to be able to take the test, to progress in my application</li>
                    <li>As an applicant, I want to be able to track the time</li>
                    <li>As an applicant, I want to see the test score.</li>
                </ul>
            </div>
        )
    }
}

export default CandidateHardSkillsTest;