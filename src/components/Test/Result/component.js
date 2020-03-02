import React, {Component} from 'react';
import "./style.css"

class ResultPage extends Component {
    render() {
        return (
            <>
                <h1 className="dashboardtitle" >Result</h1>
                
                <div className="resultlist">
                    <ul>
                        <li>Total Attemps<span>:1000</span></li>
                        <li>Attemps Remaining<span>:1000</span></li>
                        <li>Duration<span>:1000</span></li>
                        <li>Total Questions<span>:1000</span></li>
                        <li>Total Marks<span>:1000</span></li>
                        <li>Auto Evaluation<span>:100</span></li>
                    </ul>
                </div>
            </>
        )
    }
}

export default ResultPage;