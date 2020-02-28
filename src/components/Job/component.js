import React, {Component} from 'react';
import WidgetItem from "../Widgets/ListItem/component";
import "./style.css";

class JobAI extends Component {
    render() {
        const itemsList = [
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
        ];
        return (
            <>
                <h1 className="title"><a href="/">{"<"}</a>Job AI Widget <a href="/test" className="testlinktitle"> Start Test </a></h1>
                <div class="jobwidgetwrapper">
                    {
                        itemsList.map(item => (
                            <WidgetItem title={item.title} topText={item.topText} bottomText={item.bottomText}/>
                        ))
                    }
                </div>
            </>
        )
    }
}

export default JobAI;