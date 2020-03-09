import React, { Component } from "react";
import "./style.css";
import Button from '@material-ui/core/Button';
import TestTemplate from "../QuestionBox/component";
import Dialog from "../../common/Dialog/component";

class CandidateScreening extends Component {
    render() {
        const {
            screeningTest,
            screeningTestStatusHandler,
            screeningTestStatusCompletedHandler,
        } = this.props;

        return (
            <div className="screeningwrapper">

                

                {screeningTest.test.status === "pending" ? 
                <>
                    <h3>Screening</h3>
                    <h4>Duration: 10 Mins</h4>
                    <Button variant="contained" color="primary" className="starttestbtn" onClick={screeningTestStatusHandler}>
                        Start Test
                    </Button>
                    <p>
                        <b>Scope: </b> <br></br>
                    The tracking scope of the application also keeps track of the stage in which each application resides. Usually qualification and hiring has multiple stages, so the system would keep track of each job seeker’s status. Seeker is not allowed to apply on any job until being qualified

                    The tracking system should be able to provide means of automatically moving a job seeker from one stage to the next based on certain conditions/exams met. That might achieved via API integrations or some rules engine on the tracking system itself.
                    </p>

                    <p>
                        <b>Terms: </b>
                    </p>
                    <ul>
                        <li>As a job seeker, I want to be able to input my personal info.</li>
                        <li>As a job seeker, I want to be able to input my education history.</li>
                        <li>As a job seeker, I want to be able to input my work history.</li>
                        <li>As a job seeker, I want to be able to link a LinkedIn Profile and fill basic info, work history and education history from existing profile, to be able to setup my profile</li>
                        <li>As a job seeker, I want to be able to upload a CV and fill basic info, work history and education history from uploaded CV, to be able to setup my profile</li>
                        <li>As a job seeker, I want to be able to search for available jobs on the platform, to be able to find a good job and apply</li>
                        <li>As a job seeker, I want to be able to view job details, to be able to decide whether I should apply</li>
                        <li>As a job seeker, I want to be able to apply for a job, to potentially be hired</li>
                        <li>As a job seeker, I want to be able to review application status for a job I already applied to, to be able to monitor status</li>
                        <li>As a job seeker, I want to be able to see a list of job applications I’ve submitted, to be able to monitor application status of each</li>
                        <li>As a job seeker, I would be able to receive badges and verified credentials based on courses I’ve taken on partner platforms, to increase the credibility of my profile</li>
                        <li>As a job seeker, I want to be able to create a CV based off of the data in my profile, to be able to share/print it.</li>
                        <li>As a job seeker, I want to be able to input my contact information.</li>
                        <li>As a job seeker, I want to be able to input my volunteer Experience.</li>
                    </ul>
                </>
                : null }
                {
                    screeningTest.test.status === "inprogress" ? <TestTemplate submitHadnler={screeningTestStatusCompletedHandler} /> : null
                }

                {
                    screeningTest.test.status === "completed" ? 
                    <>
                        <h3>Score :</h3>
                        {
                            screeningTest.test.score 
                        }
                    </>
                    : null
                }
            </div>
        )
    }
}

export default CandidateScreening;