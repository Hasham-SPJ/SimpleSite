import { connect } from "react-redux";
import JobAIPerformanceDashboard from "./component";
import {
    getApplicantStats
} from "./action";

const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch, props) => ({
    fetchDataIfNeeded: () => {
        getApplicantStats();
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
)(JobAIPerformanceDashboard);