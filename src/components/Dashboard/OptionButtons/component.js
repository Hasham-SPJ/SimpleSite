import React, {Component} from 'react';
import { Typography, Grid } from "@material-ui/core";
import { Link } from "@material-ui/core";
import "./style.css";
import TalentImage from "../../../talent.jpg";

class DashboardOptionButtons extends Component {
    render() {
        return (
            <>
                <div className="dashboardwrapper">
                <Typography variant="h3" component="h1">
                    Premium Jobs For Skilled
                </Typography>
                <p>
                    We Train to equip with the right tools
                </p>
                </div>
                {/* <Grid container spacing={3} className="optionswrapper">
                    <Grid item xs={2}>
                        <Link href="http://www.specialisedjobs.com/" target="_blank">Visit Website</Link>
                    </Grid>
                </Grid>
                <Grid container spacing={3} className="optionswrapper">
                    <Grid item xs={2}>
                        <Link href="/jobai">Job Ai</Link>
                    </Grid>
                </Grid>
                <Grid container spacing={3} className="optionswrapper">
                    <Grid item xs={2}>
                        <Link href="/agora">Agora</Link>
                    </Grid>
                </Grid> */}
            </>
        )
    }
}

export default DashboardOptionButtons;