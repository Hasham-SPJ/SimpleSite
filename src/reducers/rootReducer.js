import {candidateReducer} from "../components/Job/candidateReducer";
import {combineReducers} from "redux";
import reduceReducers from "reduce-reducers";

const rootReducer = reduceReducers(
    combineReducers({
        CANDIDATE: candidateReducer,
    }),
);

export default rootReducer;
