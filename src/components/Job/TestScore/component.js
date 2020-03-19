import React, {Component} from 'react';
import "./style.css";
import { Button, Typography, Grid }  from '@material-ui/core';

class TestScore extends Component {

    render() {
        const {
            score
        }  = this.props;
        return (
            <>
            <div className="jobaitestscorewrapper">
                    <h1>Test Submitted Successfully</h1>
                    <h3>Score <span>{score}</span></h3>
                    <Button variant="contained" color="primary" >
                    Next
                </Button>
            </div>
            </>
        )
    }
}

export default TestScore;