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
                    questions:[],
                    score: 0,
                    status: "pending",
                }
            },
            hardskilss: {
                test: {
                    questions:[],
                    score: 0,
                    status: "pending",
                    closehardskills: false,
                }
            },
            eittest: {
                test: {
                    questions:[],
                    score: 0,
                    status: "pending",
                    closeeittest: false,
                }
            },
            attitudetest: {
                test: {
                    questions:[],
                    score: 0,
                    status: "pending",
                    closeattitudetest: false,
                }
            },
        }
    }
}
export default CANDIDATE;