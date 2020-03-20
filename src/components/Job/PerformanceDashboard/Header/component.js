import React, { Component } from "react";
import "./style.css";
import { Button, Grid } from '@material-ui/core';
import ShowCartIcon from "@material-ui/icons/ShowChart";
import BarCharticon from "@material-ui/icons/BarChart";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';


class JobAIPerformanceDashboardHeader extends Component {
    render() {

        return (
            <div className="jobaiperformancedashboard">
                <Grid container>
                    <Grid item sm={12} md={6}>
                        <div className="headertitle">
                            <ul>
                                <li><h1>JobAi</h1></li>
                                <li><span>Candidate Performance Record</span></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <div className="headertitleright">
                            <ul>
                                <li>
                                    <FormControl>
                                        <NativeSelect
                                            // value={age}
                                            // onChange={handleChange}
                                            className="jobaiperformanceheaderselect"
                                        >
                                            <option aria-label="None" value="">Select Time Spam</option>
                                            <option value={10}>Last 3 Days</option>
                                            <option value={20}>Last Month</option>
                                            <option value={30}>Last 100 Days</option>
                                            <option value={40}>Last 1 Year</option>
                                        </NativeSelect>
                                    </FormControl>
                                </li>
                                <li>
                                    <FormControl>
                                        <NativeSelect
                                            // value={age}
                                            // onChange={handleChange}
                                            className="jobaiperformanceheaderselect"
                                        >
                                            <option aria-label="None" value="">Select Desired Test</option>
                                            <option value={10}>English Test</option>
                                            <option value={20}>Technical Skill Test</option>
                                            <option value={30}>Emotional Intelligence Test</option>
                                            <option value={40}>Attitude Test</option>
                                        </NativeSelect>
                                    </FormControl>
                                </li>
                                <li>
                                    <span className="s" >Switch View</span>
                                </li>
                                <li className="jobaishiftbtn">
                                <Button variant="outlined" color="primary">
                                    <ShowCartIcon />
                                </Button>
                                    <Button variant="contained" disabled color="primary">
                                        <BarCharticon />
                                    </Button>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default JobAIPerformanceDashboardHeader;