import React, {Component} from 'react';
import "./style.css"
import QuestionBox from "../QuestionBox/component";

class EITTestPage extends Component {
    render() {
        return (
            <>
                {/* <h1 className="dashboardtitle" >Test Your Emotional Intelligence</h1> */}
                <div className="eitpagewrapper">
                    <QuestionBox />
                </div>
                
            </>
        )
    }
}

export default EITTestPage;