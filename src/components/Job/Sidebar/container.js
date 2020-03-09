import { connect } from "react-redux";
import JobAISidebar from "./component";
import {setStepVal} from "../actions";

const mapStateToProps = state => ({
    flowStepValue : state.CANDIDATE.data.stepVal,
})

const mapDispatchToProps = (dispatch, props) => ({
    setStepVal : (value) => {
        dispatch(setStepVal(value));
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
)(JobAISidebar);