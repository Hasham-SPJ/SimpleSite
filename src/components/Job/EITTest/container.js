import { connect } from "react-redux";
import CandidateEITTest from "./component";
import {
    closeeittestdialogHandler,
    eitTestStatusHandler,
    updateeittestCurrentQuestionCounter,
} from "../actions";

const mapStateToProps = state => ({
    closeeittest: state.CANDIDATE.data.tests.eittest.test.closeeittest,
    eittest: state.CANDIDATE.data.tests.eittest,
    hardskilssTestStatus: state.CANDIDATE.data.tests.hardskilss.test.status,
})

const mapDispatchToProps = (dispatch, props) => ({
    closeeittestdialogHandler: () => {
        dispatch(closeeittestdialogHandler(false));
    },
    openeittestdialogHandler: () => {
        dispatch(closeeittestdialogHandler(true));
    },
    eitTestStatusHandler: () => {
        dispatch(eitTestStatusHandler("inprogress"));
    },
    eitTestStatusCompletedHandler: () => {
        dispatch(eitTestStatusHandler("completed"));
    },
    updateeittestCurrentQuestionCounter: (value) => {
        dispatch(updateeittestCurrentQuestionCounter(value + 1));
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    updateeittestCurrentQuestionCounter: () => {
        dispatchProps.updateeittestCurrentQuestionCounter(stateProps.eittest.test.currentQuestion);
    },
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(CandidateEITTest);