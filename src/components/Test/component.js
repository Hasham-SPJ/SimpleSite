import React, {Component} from 'react';
import TestOptionButtons from  "./OptionButtons/component";
import "./style.css"
class TestPage extends Component {
    render() {
        return (
            <>
                <h1 className="dashboardtitle" >Select Your Test</h1>
                <TestOptionButtons />
            </>
        )
    }
}

export default TestPage;