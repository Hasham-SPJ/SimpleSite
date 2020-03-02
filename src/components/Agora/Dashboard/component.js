import React, {Component} from 'react';
import { Typography, Grid } from "@material-ui/core";
import { Link } from "@material-ui/core";

import "./style.css";

class AgoraDashboardOptionButtons extends Component {
    render() {
        return (
            <>
                <Typography variant="h3" component="h1" align="center">
                    AGORA
                </Typography>

                <Grid container spacing={3} className="optionswrapper">
                    <Grid item xs={2}>
                        <Link href="/agora/flow">Inser new Data</Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link href="#">View Data</Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link href="#">Statistics</Link>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default AgoraDashboardOptionButtons;