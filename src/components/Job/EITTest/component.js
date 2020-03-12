import React, { Component } from "react";
import "./style.css";
import Button from '@material-ui/core/Button';
import Dialog from "../../common/Dialog/component";
import TestTemplate from "../QuestionBox/container";

class CandidateEITTest extends Component {
    render() {
        const {
            closeeittestdialogHandler,
            closeeittest,
            openeittestdialogHandler,
            eittest,
            hardskilssTestStatus,
            eitTestStatusHandler,
            eitTestStatusCompletedHandler,
            updateeittestCurrentQuestionCounter
        } = this.props;
        return (
            <div className="eittestwrapper">

                {eittest.test.status === "pending" ? 
                <>
                <Dialog 
                    open={closeeittest}
                    closeDialog={closeeittestdialogHandler}
                    message="Please pass previous test first"
                    title="Test"
                    />

                <h3>Emotional Intelligence Test</h3>
                <h4>Duration: 10 Mins</h4>
                <Button variant="contained" color="primary" className="starttestbtn" onClick={(hardskilssTestStatus === "pending") ? openeittestdialogHandler : eitTestStatusHandler}>
                    Start Test
                </Button>
                <p>
                    <b>Scope: </b> <br></br>
                    The resolve to develop this application module is to build a test system where the candidate can take a soft skill test, soft skill test is vital to know the candidate is able to collaborate, contribute, meet deadlines, and understands the end user's perspective. The assessment will be a series of questions of different types which are pulled randomly from a test bank.
                </p>
                </> : null }

                {
                    eittest.test.status === "inprogress" ? <TestTemplate testDetail={eittest} updateScreeningCurrentQuestionCounter={updateeittestCurrentQuestionCounter} submitHadnler={eitTestStatusCompletedHandler} /> : null
                }

                {
                    eittest.test.status === "completed" ? 
                    <>
                        <h3>Score :</h3>
                        {
                            eittest.test.score 
                        }
                    </>
                    : null
                }

            </div>
        )
    }
}

export default CandidateEITTest;