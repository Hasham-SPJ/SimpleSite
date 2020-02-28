import React, {Component} from 'react';
import "./style.css";

class DashboardOptionButtons extends Component {
    render() {
        return (
            <>
                <ul className="linkslistbtn">
                    <li><a href="http://www.specialisedjobs.com/" target="_blank">Visit Website</a></li>
                    <li><a href="/jobai">Job Ai</a></li>
                    <li><a href="/agora">Agora</a></li>
                </ul>
            </>
        )
    }
}

export default DashboardOptionButtons;