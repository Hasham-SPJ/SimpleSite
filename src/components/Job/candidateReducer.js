import {
    SET_STEP_VALUE,
    SET_SCREENING_STATUS_INPROGRESS_HANDLER,
    SET_DIALOG_HARDSKILSS_DIALOG_HANDLER,
    SET_DIALOG_EITTEST_DIALOG_HANDLER,
    UPDATE_SCREENING_CURRENT_QUESTION_HANDLER,
    UPDATE_SCREENING_SCORE_HANDLER
} from "./actions";

export const candidateReducer = (state = [], action) => {
    switch (action.type) {
        case SET_STEP_VALUE:{
            return {
                ...state,
                data:{
                    ...state.data,
                    stepVal: action.payload
                }
            }
        }
        case SET_SCREENING_STATUS_INPROGRESS_HANDLER:{
            return {
                ...state,
                data:{
                    ...state.data,
                    tests: {
                        ...state.data.tests,
                        screening: {
                            ...state.data.tests.screening,
                            test: {
                                ...state.data.tests.screening.test,
                                status: action.payload
                            }
                        }
                    }
                }
            }
        }

        //hardskills dialog handler
        case SET_DIALOG_HARDSKILSS_DIALOG_HANDLER:{
            return {
                ...state,
                data:{
                    ...state.data,
                    tests: {
                        ...state.data.tests,
                        hardskilss: {
                            ...state.data.tests.hardskilss,
                            test: {
                                ...state.data.tests.hardskilss.test,
                                closehardskills: action.payload
                            }
                        }
                    }
                }
            }
        }

        case SET_DIALOG_EITTEST_DIALOG_HANDLER:{
            return {
                ...state,
                data:{
                    ...state.data,
                    tests: {
                        ...state.data.tests,
                        eittest: {
                            ...state.data.tests.eittest,
                            test: {
                                ...state.data.tests.eittest.test,
                                closeeittest: action.payload
                            }
                        }
                    }
                }
            }
        }

        //screening
        case UPDATE_SCREENING_CURRENT_QUESTION_HANDLER : {
            return {
                ...state,
                data:{
                    ...state.data,
                    tests: {
                        ...state.data.tests,
                        screening: {
                            ...state.data.tests.screening,
                            test: {
                                ...state.data.tests.screening.test,
                                currentQuestion: action.payload
                            }
                        }
                    }
                }
            }
        }
        case UPDATE_SCREENING_SCORE_HANDLER: {
            return {
                ...state,
                data:{
                    ...state.data,
                    tests: {
                        ...state.data.tests,
                        screening: {
                            ...state.data.tests.screening,
                            test: {
                                ...state.data.tests.screening.test,
                                score: action.payload
                            }
                        }
                    }
                }
            }
        }
        default: {
            return {
                ...state
            };
        }
    }
}