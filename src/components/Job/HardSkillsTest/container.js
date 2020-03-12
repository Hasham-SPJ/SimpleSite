import { connect } from "react-redux";
import CandidateHardSkillsTest from "./component";
import {
    closehardskillsdialogHandler,
    hardskilssTestStatusHandler,
    updateHardskillsCurrentQuestionCounter,
} from "../actions";

const mapStateToProps = state => ({
    hardskilssTest: state.CANDIDATE.data.tests.hardskilss,
    closehardskills: state.CANDIDATE.data.tests.hardskilss.test.closehardskills,
    screeningTestStatus: state.CANDIDATE.data.tests.screening.test.status,
})

const mapDispatchToProps = (dispatch, props) => ({
    closehardskillsdialogHandler: () => {
        dispatch(closehardskillsdialogHandler(false));
    },
    openhardskillsdialogHandler: () => {
        dispatch(closehardskillsdialogHandler(true));
    },
    hardskilssTestStatusHandler: () => {
        dispatch(hardskilssTestStatusHandler("inprogress"));
    },
    hardskillsTestStatusCompletedHandler: () => {
        dispatch(hardskilssTestStatusHandler("completed"));
    },
    updateHardskillsCurrentQuestionCounter: (value) => {
        dispatch(updateHardskillsCurrentQuestionCounter(value + 1));
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    updateHardskillsCurrentQuestionCounter: () => {
        dispatchProps.updateHardskillsCurrentQuestionCounter(stateProps.hardskilssTest.test.currentQuestion);
    },
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(CandidateHardSkillsTest);