import { connect } from "react-redux";
import JobAIs from "./component";
import {setStepVal} from "./actions";

const mapStateToProps = state => ({
    itemsList: state.CANDIDATE.data.candidateFlowData,
    flowStepValue : state.CANDIDATE.data.stepVal,
})

const mapDispatchToProps = (dispatch, props) => ({
    setStepVal : () => {
        dispatch(setStepVal());
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
)(JobAIs);