import React, {Component} from 'react';
import "./style.css";

class TestOptionButtons extends Component {
    render() {
        return (
            <>
                <ul className="linkslist">
                    <li><a href="/test/eit">Emotional Intelligence Test</a></li>
                    <li><a href="/test/at">Attitude Test</a></li>
                </ul>
            </>
        )
    }
}

export default TestOptionButtons;