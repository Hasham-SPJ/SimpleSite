import React, {Component} from 'react';
import "./style.css";
import { Button, Typography }  from '@material-ui/core';

class JobAISidebar extends Component {
    render() {
        const {
            setStepVal
            } = this.props;
        return (
            <div className="jobaisidebarwrapper">
                <Button className="movebtn" variant="contained" color="primary" onClick={e => setStepVal(1)}>
                    Screening
                </Button>
                <Button className="movebtn" variant="contained" color="primary" onClick={e => setStepVal(2)}>
                    HardSkills Test
                </Button>
                <Button className="movebtn" variant="contained" color="primary" onClick={e => setStepVal(3)}>
                    Emotional Intelligence Test
                </Button>
                <Button className="movebtn" variant="contained" color="primary" onClick={e => setStepVal(4)}>
                    Attitude Test
                </Button>
            </div>
        )
    }
}

export default JobAISidebar;