import React, { Component } from "react";
import "./style.css";
import { Button, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import ProfileImg from "../../../profileimg.png";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import ColorCircularProgress from '@material-ui/core/LinearProgress';

class CandidateScreeningA extends Component {

    render() {
        return (
            <div className="screeningawrapper">
                <h2>Personal information</h2>

                <Grid container>
                    <Grid item xs={12} md={9}>
                        <Grid container className="screeningwrapperpadding">
                            <form className="screeningaform" noValidate autoComplete="off">
                                <Grid item xs={12} sm={6} lg={6}>
                                    <TextField className="screeningafieldfull" id="standard-basic" label="First Name" />
                                </Grid>
                                <Grid item xs={12} sm={6} lg={6}>
                                    <TextField className="screeningafieldfull" id="standard-basic" label="Last Name" />
                                </Grid>
                                <Grid item xs={12} sm={6} lg={6}>
                                    <TextField className="screeningafieldfull" id="standard-basic" label="Father name" />
                                </Grid>
                                <Grid item xs={12} sm={6} lg={6}>
                                    <TextField className="screeningafieldfull" id="standard-basic" label="CNIC" />
                                </Grid>
                                <Grid item xs={12} sm={6} lg={6}>
                                    <FormControl className="screeningafieldfull" >
                                        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                        // onChange={handleChange}
                                        >
                                            <MenuItem value={"male"}>Male</MenuItem>
                                            <MenuItem value={"female"}>Female</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6} lg={6}>
                                    <FormControl className="screeningafieldfull" >
                                        <InputLabel id="demo-simple-select-label">Marital Status</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                        // onChange={handleChange}
                                        >
                                            <MenuItem value={"single"}>Single</MenuItem>
                                            <MenuItem value={"married"}>Married</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={12} lg={12}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Date picker inline"
                                            // onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            className="screeningafieldfull"
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12} sm={12} lg={12}>
                                    <TextField className="screeningafieldfull" id="standard-basic" label="Email" />
                                </Grid>
                                <Grid item xs={12} sm={12} lg={12}>
                                    <TextField className="screeningafieldfull" id="standard-basic" label="Mobile" />
                                </Grid>
                                <Grid item xs={12} sm={12} lg={12}>
                                    <TextField className="screeningafieldfull" id="standard-basic" label="Address" />
                                </Grid>
                                <Grid item xs={12} sm={12} lg={12}>
                                    <TextField className="screeningafieldfull" id="standard-basic" label="Professional Summary" />
                                </Grid>

                                <Grid container justify="center">
                                    <Grid item md={4}>
                                        <Button className="screeningasavebtn" variant="contained" color="primary">
                                            Cancel
                                        </Button>
                                    </Grid>
                                    <Grid item md={4}>
                                        <Button className="screeningasavebtn" variant="contained" color="primary">
                                            Save
                                    </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <div className="screeningaright">
                            <img src={ProfileImg}></img>
                            <input
                                accept="image/*"
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button className="screeningimgupload" variant="contained" color="primary" component="span">
                                    Update Profile Image
                                </Button>
                            </label>

                            <div className="screeningaprogress">
                                <h2>Personal Information</h2>
                                <ColorCircularProgress
                                variant="determinate"
                                color="primary"
                                value={50}                        
                                 />
                                 <span>50% Complete</span>
                            </div>

                            <div className="screeningaprogress">
                                <h2>Academics</h2>
                                <ColorCircularProgress
                                variant="determinate"
                                color="primary"
                                value={50}                        
                                 />
                                 <span>50% Complete</span>
                            </div>

                            <div className="screeningaprogress">
                                <h2>Experience</h2>
                                <ColorCircularProgress
                                variant="determinate"
                                color="primary"
                                value={50}                        
                                 />
                                 <span>50% Complete</span>
                            </div>

                            <div className="screeningaprogress">
                                <h2>Award & Honors</h2>
                            </div>

                            <div className="screeningaprogress">
                                <h2>Languages</h2>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default CandidateScreeningA;