import { connect } from "react-redux";
import CandidateHardSkillsTest from "./component";
import {
    closehardskillsdialogHandler
} from "../actions";

const mapStateToProps = state => ({
    closehardskills: state.CANDIDATE.data.tests.hardskilss.test.closehardskills,
})

const mapDispatchToProps = (dispatch, props) => ({
    closehardskillsdialogHandler: () => {
        dispatch(closehardskillsdialogHandler(false));
    },
    openhardskillsdialogHandler: () => {
        dispatch(closehardskillsdialogHandler(true));
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
)(CandidateHardSkillsTest);