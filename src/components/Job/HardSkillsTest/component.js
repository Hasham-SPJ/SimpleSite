import React, { Component } from "react";
import "./style.css";
import Button from '@material-ui/core/Button';
import Dialog from "../../common/Dialog/component";
import TestTemplate from "../QuestionBox/container";

class CandidateHardSkillsTest extends Component {
    render() {
        const {
            closehardskillsdialogHandler,
            closehardskills,
            openhardskillsdialogHandler,
            hardskilssTestStatusHandler,
            hardskilssTest,
            hardskillsTestStatusCompletedHandler,
            updateHardskillsCurrentQuestionCounter,
            screeningTestStatus
        } = this.props;
        return (
            <div className="hardskillswrapper">

            {hardskilssTest.test.status === "pending" ? 
                <>
                <Dialog 
                    open={closehardskills}
                    closeDialog={closehardskillsdialogHandler}
                    message="Please pass previous test first"
                    title="Test"
                    />
                <h3>HardSkills Test</h3>
                <h4>Duration: 10 Mins</h4>
                <Button variant="contained" color="primary" className="starttestbtn" onClick={(screeningTestStatus === "pending") ? openhardskillsdialogHandler : hardskilssTestStatusHandler}>
                    Start Test
                </Button>
                <p>
                    <b>Scope: </b> <br></br>
                    The scope of Subject Matter Knowledge Assessment is to ensure applicants meet a minimum required level of technical knowledge in a certain subject matter that relates to the job. The assessment will be a series of questions of different types which are pull randomly from a test bank and the same test is repeated based on application funnel configuration.
                </p>
                </> : null }

                {
                    hardskilssTest.test.status === "inprogress" ? <TestTemplate testDetail={hardskilssTest} updateScreeningCurrentQuestionCounter={updateHardskillsCurrentQuestionCounter} submitHadnler={hardskillsTestStatusCompletedHandler} /> : null
                }

                {
                    hardskilssTest.test.status === "completed" ? 
                    <>
                        <h3>Score :</h3>
                        {
                            hardskilssTest.test.score 
                        }
                    </>
                    : null
                }
            </div>
        )
    }
}

export default CandidateHardSkillsTest;