export const SET_STEP_VALUE = "SET_STEP_VALUE";
export const SET_SCREENING_STATUS_INPROGRESS_HANDLER = "SET_SCREENING_STATUS_INPROGRESS_HANDLER";
export const SET_DIALOG_HARDSKILSS_DIALOG_HANDLER = "SET_DIALOG_HARDSKILSS_DIALOG_HANDLER";
export const SET_DIALOG_EITTEST_DIALOG_HANDLER = "SET_DIALOG_EITTEST_DIALOG_HANDLER";
export const UPDATE_SCREENING_CURRENT_QUESTION_HANDLER = "UPDATE_SCREENING_CURRENT_QUESTION_HANDLER";
export const UPDATE_SCREENING_SCORE_HANDLER = "UPDATE_SCREENING_SCORE_HANDLER";

export const SET_HARDSKILSS_STATUS_INPROGRESS_HANDLER = "SET_HARDSKILSS_STATUS_INPROGRESS_HANDLER";
export const UPDATE_HARDSKILLS_CURRENT_QUESTION_HANDLER = "UPDATE_HARDSKILLS_CURRENT_QUESTION_HANDLER";

export const SET_EITTEST_STATUS_INPROGRESS_HANDLER = "SET_EITTEST_STATUS_INPROGRESS_HANDLER";
export const UPDATE_EITTEST_CURRENT_QUESTION_HANDLER = "UPDATE_EITTEST_CURRENT_QUESTION_HANDLER";

export const setStepVal = (value) => {
    return {
      type: SET_STEP_VALUE,
      payload: value
    };
  };

  export const screeningTestStatusHandler = (value) => {
    return {
      type: SET_SCREENING_STATUS_INPROGRESS_HANDLER,
      payload: value,
    };
  };

  export const closehardskillsdialogHandler = (value) => {
    return {
      type: SET_DIALOG_HARDSKILSS_DIALOG_HANDLER,
      payload: value,
    }
  }

  export const closeeittestdialogHandler = (value) => {
    return {
      type : SET_DIALOG_EITTEST_DIALOG_HANDLER,
      payload: value,
    }
  }

  //screening
  export const updateScreeningCurrentQuestionCounter = (value) => {
    return {
      type: UPDATE_SCREENING_CURRENT_QUESTION_HANDLER,
      payload: value,
    }
  }

  export const saveRightAnswer = (score) => {
    return {
      type: UPDATE_SCREENING_SCORE_HANDLER,
      payload: score,
    }
  }

  //harskilss
  export const hardskilssTestStatusHandler = (value) => {
    return {
      type: SET_HARDSKILSS_STATUS_INPROGRESS_HANDLER,
      payload: value,
    };
  }

  export const updateHardskillsCurrentQuestionCounter = (value) => {
    return {
      type: UPDATE_HARDSKILLS_CURRENT_QUESTION_HANDLER,
      payload: value,
    }
  }

  //eittest
  export const eitTestStatusHandler = (value) => {
    return {
      type: SET_EITTEST_STATUS_INPROGRESS_HANDLER,
      payload: value,
    };
  }
  export const updateeittestCurrentQuestionCounter = (value) => {
    return {
      type: UPDATE_EITTEST_CURRENT_QUESTION_HANDLER,
      payload: value,
    }
  }