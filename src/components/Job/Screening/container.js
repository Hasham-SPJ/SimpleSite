import { connect } from "react-redux";
import CandidateScreening from "./component";
import {
    screeningTestStatusHandler,
    updateScreeningCurrentQuestionCounter
} from "../actions";

const mapStateToProps = state => ({
    screeningTest: state.CANDIDATE.data.tests.screening,

})

const mapDispatchToProps = (dispatch, props) => ({
    screeningTestStatusHandler: () => {
        dispatch(screeningTestStatusHandler("inprogress"));
    },
    screeningTestStatusCompletedHandler: () => {
        dispatch(screeningTestStatusHandler("completed"));
    },
    updateScreeningCurrentQuestionCounter: (value) => {
        dispatch(updateScreeningCurrentQuestionCounter(value + 1));
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    updateScreeningCurrentQuestionCounter: () => {
        dispatchProps.updateScreeningCurrentQuestionCounter(stateProps.screeningTest.test.currentQuestion);
    },
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(CandidateScreening);