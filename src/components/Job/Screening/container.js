import { connect } from "react-redux";
import CandidateScreening from "./component";
import {
    screeningTestStatusHandler
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
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(CandidateScreening);