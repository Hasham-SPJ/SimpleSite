import React, { Component } from "react";
import "./style.css";
import Button from '@material-ui/core/Button';
import Dialog from "../../common/Dialog/component";

class CandidateEITTest extends Component {
    render() {
        const {
            closeeittestdialogHandler,
            closeeittest,
            openeittestdialogHandler
        } = this.props;
        return (
            <div className="eittestwrapper">

                <Dialog 
                    open={closeeittest}
                    closeDialog={closeeittestdialogHandler}
                    message="Please pass previous test first"
                    title="Test"
                    />

                <h3>Emotional Intelligence Test</h3>
                <h4>Duration: 10 Mins</h4>
                <Button variant="contained" color="primary" className="starttestbtn" onClick={openeittestdialogHandler}>
                    Start Test
                </Button>
                <p>
                    <b>Scope: </b> <br></br>
                    The resolve to develop this application module is to build a test system where the candidate can take a soft skill test, soft skill test is vital to know the candidate is able to collaborate, contribute, meet deadlines, and understands the end user's perspective. The assessment will be a series of questions of different types which are pulled randomly from a test bank.
                </p>

                <p>
                    <b>Terms: </b>
                </p>
                <ul>
                    <li>As an applicant, I want to be notified about the test.</li>
                    <li>As an applicant, I want to be able to take the aptitude, emotional intelligence test.</li>
                    <li>As an applicant, I want to be able to track the time.</li>
                    <li>As an applicant, I want to know the test result</li>
                </ul>
            </div>
        )
    }
}

export default CandidateEITTest;