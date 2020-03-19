import React, {Component} from 'react';
import "./style.css"
import { Button, Grid } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Timer from "react-compound-timer";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

class QuestionBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            submitHadnler,
            updateScreeningCurrentQuestionCounter,
            testDetail,
            saveRightAnswer,
        } = this.props;

        const currentQuestion = testDetail.test.questions[testDetail.test.currentQuestion];
        const currentQuestionAnswer = testDetail.test.questions[testDetail.test.currentQuestion].answers;
        return (
            <>
            

                <div className="questionbox">
                    <div className="questioboxwrapper">
                    <Timer
                        initialTime={600000}
                        direction="backward"
                    >
                        {() => (
                            <React.Fragment>
                                <h2 class="timer">
                                    {/* <QueryBuilderIcon /> */}
                                    Time Left: 
                                    <Timer.Minutes /> <span>minutes </span>
                                    <Timer.Seconds /> <span>seconds</span>
                                </h2>
                            </React.Fragment>
                        )}
                    </Timer>
                    <h3>{currentQuestion.question}</h3>

                    <Grid container>
                        <Grid item xs={12} sm={12} md={12}>
                        <FormControl component="fieldset">
                        <RadioGroup aria-label="gender" name="gender1" className="testradiogroup">
                            {
                                currentQuestionAnswer.map(test => (
                                    <>
                                        <FormControlLabel value={test.answer} control={<Radio />} label={test.answer} onClick={(e) => saveRightAnswer(currentQuestion.rightAnswer, test.answer, testDetail.test.score)}/>
                                    </>
                                ))
                            }
                        
                        {/* <FormControlLabel value="option 2" control={<Radio />} label="option 2" />
                        <FormControlLabel value="option 3" control={<Radio />} label="option 3" />
                        <FormControlLabel value="option 4" control={<Radio />} label="option 4" /> */}
                        </RadioGroup>
                        </FormControl>
                        {/* <Button variant="contained" color="primary" className="submitbtn">
                            Save Ans
                        </Button> */}
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                        {/* <Button variant="contained" color="primary">
                            <KeyboardArrowLeftIcon />
                        </Button> */}
                        <Button variant="contained" color="primary" disabled={(testDetail.test.questions.length - 1) === testDetail.test.currentQuestion ? true : false} onClick={updateScreeningCurrentQuestionCounter}>
                            <NavigateNextIcon /> Next
                        </Button>
                        </Grid>
                    </Grid>
                    

                    
                    </div>
                    <Button onClick={submitHadnler} variant="contained" disabled={(testDetail.test.questions.length - 1) === testDetail.test.currentQuestion ? false : true} color="primary" className="submitquizbtn" >
                        Submit Quiz
                    </Button>
                </div>
            </>
        )
    }
}

export default QuestionBox;





