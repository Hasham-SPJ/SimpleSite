export const CANDIDATE = {
    data: {
        candidateFlowData: [
            {
                title: "Candidate",
                topText: "Screening A",
                bottomText: "VIDEO",
            },
            {
                title: "VISITORS",
                topText: "Hard Skills Test",
                bottomText: "Hackeron",
            },
            {
                title: "Candidate",
                topText: "Soft Skilss Test",
                bottomText: "EMOTIONAL intelligencs Test",
            },
            {
                title: "Candidate",
                topText: "Dashboard",
                bottomText: "ATTITUDE TEST",
            },
            {
                title: "Candidate",
                topText: "Dashboard",
                bottomText: "CHARTS with Applicant so far",
            }
        ],
        stepVal: 1,
        tests: {
            screening: {
                test: {
                    questions:[
                        {
                            question: "Question 1",
                            answers: [
                                {
                                    answer: "question 1 - answer 1"
                                },
                                {
                                    answer: "question 1 - answer 2"
                                },
                                {
                                    answer: "question 1 - answer 3"
                                },
                                {
                                    answer: "question 1 - answer 4"
                                }
                            ],
                            rightAnswer: "question 1 - answer 2",
                        },
                        {
                            question: "Question 2",
                            answers: [
                                {
                                    answer: "question 2 - answer 1"
                                },
                                {
                                    answer: "question 2 - answer 2"
                                },
                                {
                                    answer: "question 2 - answer 3"
                                },
                                {
                                    answer: "question 2 - answer 4"
                                }
                            ],
                            rightAnswer: "question 2 - answer 3",
                        },
                        {
                            question: "Question 3",
                            answers: [
                                {
                                    answer: "question 3 - answer 1"
                                },
                                {
                                    answer: "question 3 - answer 2"
                                },
                                {
                                    answer: "question 3 - answer 3"
                                },
                                {
                                    answer: "question 3 - answer 4"
                                }
                            ],
                            rightAnswer: "question 3 - answer 3"
                        }
                    ],
                    currentQuestion: 0,
                    score: 0,
                    status: "pending",
                }
            },
            hardskilss: {
                test: {
                    questions:[
                        {
                            question: "Question 1",
                            answers: [
                                {
                                    answer: "question 1 - answer 1"
                                },
                                {
                                    answer: "question 1 - answer 2"
                                },
                                {
                                    answer: "question 1 - answer 3"
                                },
                                {
                                    answer: "question 1 - answer 4"
                                }
                            ],
                            rightAnswer: "question 1 - answer 2",
                        },
                        {
                            question: "Question 2",
                            answers: [
                                {
                                    answer: "question 2 - answer 1"
                                },
                                {
                                    answer: "question 2 - answer 2"
                                },
                                {
                                    answer: "question 2 - answer 3"
                                },
                                {
                                    answer: "question 2 - answer 4"
                                }
                            ],
                            rightAnswer: "question 2 - answer 3",
                        },
                        {
                            question: "Question 3",
                            answers: [
                                {
                                    answer: "question 3 - answer 1"
                                },
                                {
                                    answer: "question 3 - answer 2"
                                },
                                {
                                    answer: "question 3 - answer 3"
                                },
                                {
                                    answer: "question 3 - answer 4"
                                }
                            ],
                            rightAnswer: "question 3 - answer 3"
                        }
                    ],
                    currentQuestion: 0,
                    score: 0,
                    status: "pending",
                    closehardskills: false,
                }
            },
            eittest: {
                test: {
                    questions:[
                        {
                            question: "Question 1",
                            answers: [
                                {
                                    answer: "question 1 - answer 1"
                                },
                                {
                                    answer: "question 1 - answer 2"
                                },
                                {
                                    answer: "question 1 - answer 3"
                                },
                                {
                                    answer: "question 1 - answer 4"
                                }
                            ],
                            rightAnswer: "question 1 - answer 2",
                        },
                        {
                            question: "Question 2",
                            answers: [
                                {
                                    answer: "question 2 - answer 1"
                                },
                                {
                                    answer: "question 2 - answer 2"
                                },
                                {
                                    answer: "question 2 - answer 3"
                                },
                                {
                                    answer: "question 2 - answer 4"
                                }
                            ],
                            rightAnswer: "question 2 - answer 3",
                        },
                        {
                            question: "Question 3",
                            answers: [
                                {
                                    answer: "question 3 - answer 1"
                                },
                                {
                                    answer: "question 3 - answer 2"
                                },
                                {
                                    answer: "question 3 - answer 3"
                                },
                                {
                                    answer: "question 3 - answer 4"
                                }
                            ],
                            rightAnswer: "question 3 - answer 3"
                        }
                    ],
                    currentQuestion: 0,
                    score: 0,
                    status: "pending",
                    closeeittest: false,
                }
            },
            attitudetest: {
                test: {
                    questions:[],
                    currentQuestion: 0,
                    score: 0,
                    status: "pending",
                    closeattitudetest: false,
                }
            },
        }
    }
}
export default CANDIDATE;