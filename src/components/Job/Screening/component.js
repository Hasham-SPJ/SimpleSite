import React, { Component } from "react";
import "./style.css";
import Button from '@material-ui/core/Button';
import TestTemplate from "../QuestionBox/container";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import DesktopMacicon from "@material-ui/icons/DesktopMac";
import TestScore from "../TestScore/container";

class CandidateScreening extends Component {
    render() {
        const {
            screeningTest,
            screeningTestStatusHandler,
            screeningTestStatusCompletedHandler,
            updateScreeningCurrentQuestionCounter
        } = this.props;

        const screeningTestQuestions = screeningTest.test.questions;
        const currentQuestion = screeningTest.test.currentQuestion;

        return (
            <div className="screeningwrapper">

                {screeningTest.test.status === "pending" ? 
                <>
                    <h3>Screening</h3>
                    <div className="titlewithicon">
                        <QueryBuilderIcon />
                        <span>Time Duration: 10:00</span>
                    </div>
                    
                    <Button variant="contained" color="primary" className="starttestbtn" onClick={screeningTestStatusHandler}>
                        Start Test
                    </Button>
                    <p>

                    <div className="titlewithicon">
                        <DesktopMacicon />
                        <span>Scope</span>
                    </div> <br></br>
                    The tracking scope of the application also keeps track of the stage in which each application resides. Usually qualification and hiring has multiple stages, so the system would keep track of each job seeker’s status. Seeker is not allowed to apply on any job until being qualified

                    The tracking system should be able to provide means of automatically moving a job seeker from one stage to the next based on certain conditions/exams met. That might achieved via API integrations or some rules engine on the tracking system itself.
                    </p>
                </>
                : null }
                {
                    screeningTest.test.status === "inprogress" ? <TestTemplate testDetail={screeningTest} updateScreeningCurrentQuestionCounter={updateScreeningCurrentQuestionCounter} submitHadnler={screeningTestStatusCompletedHandler} /> : null
                }

                {
                    screeningTest.test.status === "completed" ? 
                    <>
                        <TestScore score={screeningTest.test.score}/>
                    </>
                    : null
                }
            </div>
        )
    }
}

export default CandidateScreening;