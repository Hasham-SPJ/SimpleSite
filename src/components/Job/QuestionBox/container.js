import { connect } from "react-redux";
import QuestionBox from "./component";
import {
    saveRightAnswer
} from "../actions";
const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch, props) => ({
    saveRightAnswer: (rightAnswer, answer, score) => {
        if(rightAnswer === answer) {
            dispatch(saveRightAnswer(score + 1));
        }
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
)(QuestionBox);