import React, {Component} from 'react';
import WidgetItem from "../Widgets/ListItem/component"
import "./style.css";

class AGORA extends Component {
    render() {
        const itemsList = [
            {
                title: "Operator",
                topText: "corporate name",
                bottomText: "1st GOOGLE FORM",
            },
            {
                title: "Operator",
                topText: "details 1",
                bottomText: "2nd Google FORM",
            },
            {
                title: "Operator",
                topText: "details 2",
                bottomText: "EMOTIONAL intelligence Test",
            },
            {
                title: "Candidate",
                topText: "...",
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
                <h1 className="title"><a href="/agora">{"<"}</a>AGORA<a href="/test" className="testlinktitle"> Start Test </a></h1>
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

export default AGORA;