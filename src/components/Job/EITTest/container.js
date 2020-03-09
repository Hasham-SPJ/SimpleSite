import { connect } from "react-redux";
import CandidateEITTest from "./component";
import {
    closeeittestdialogHandler
} from "../actions";

const mapStateToProps = state => ({
    closeeittest: state.CANDIDATE.data.tests.eittest.test.closeeittest,

})

const mapDispatchToProps = (dispatch, props) => ({
    closeeittestdialogHandler: () => {
        dispatch(closeeittestdialogHandler(false));
    },
    openeittestdialogHandler: () => {
        dispatch(closeeittestdialogHandler(true));
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
)(CandidateEITTest);