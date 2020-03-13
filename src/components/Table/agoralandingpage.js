import React, { Component } from "react";
import { Typography, Card, CardActionArea, CardContent, Button, Grid, Paper } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import PageviewOutlinedIcon from '@material-ui/icons/PageviewOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';

import './AgoraLandingPage.css';


export default class AgoraHome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  ViewData = () => {
    return <Redirect to="/src/components/Agoraapp/materialtable.js" />
  };

  render() {

    return (
   
      // Header Tab

      <div >
        
        <div className="Headercontainer">
          <div className="ImageCover"></div>
          <div className="HeaderText">
            <Typography align="center" variant="h1" >
              AGORA
         </Typography>
            <Typography align="center" variant="h4" gutterBottom>
              You can access all things relavant to marketing using this interface.
      </Typography>
          </div>


          {/* Dashboard Tab */}

        </div>
        <div className="NavDiv">
          <Typography align="center" variant="h3" >
            AGORA Dashboard
         </Typography>
          <Grid container   >
            <Grid item xs className="navtab1">
              <Card className="NavButtons" onClick={this.handleClickOpen}>
                <CardActionArea className="tab1" >
                  <CardContent >
                    <Typography gutterBottom variant="h5" component="h2" className="Htext">
                      Insert New Data
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Insert New data obtained from the market
          </Typography>
                    <AddIcon color="secondary" style={{ fontSize: 80 }} animation="wave" />
                  </CardContent>
                </CardActionArea>

              </Card>
            </Grid>
            <Grid item xs className="navtab1">
              <a href="/agora/companydata">
              <Card className="NavButtons" >
                <CardActionArea className="tab2">
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className="Htext">
                      View Data
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      View the previously avalible data using this tab
          </Typography>
                    <PageviewOutlinedIcon color="secondary" style={{ fontSize: 80 }} />
                  </CardContent>
                </CardActionArea>
              </Card>
              </a>
            </Grid>
            <Grid item xs className="navtab1">
              <a href="/agora/stats">
              <Card className="NavButtons">
                <CardActionArea className="tab3">
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className="Htext">
                      View Statistics
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      View statistics of data using this tab
          </Typography>
                    <EqualizerOutlinedIcon color="secondary" style={{ fontSize: 80 }} />
                  </CardContent>
                </CardActionArea>
              </Card>
              </a>
            </Grid>
          </Grid>
        </div>

        {/* user manual tab */}

        <div className="ManualDiv">
          <Typography align="center" variant="h3" >
            AGORA User Manual
         </Typography>
        </div>
        <div className="UMtab">
          <Typography variant="h3" className="ManualDiv">
            Manual Content
         </Typography>
          <ul className="ManualList">
            <li>What kind of Data required</li>
            <li>How to fill each coulum</li>
            <li>Necessary Information</li>
            <li>Technincal Terms</li>
            <li>Terminlogies used</li>
          </ul>

          <Button variant="contained" color="primary" target="_blank" href="https://docs.google.com/document/d/1BrnxI11ovQI0eMouOAMhn7Yn4cn8Mt3t/edit#" className="DownloadButton" >
            Download
          </Button>
        </div>

        <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Enter New Data</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter New data into the relevant fields
          </DialogContentText>
            <TextField className="name" id="standard-secondary" label="Name" color="secondary" />
            <br></br>
            <TextField id="standard-secondary" label="Rate" color="secondary" />
            <TextField id="standard-secondary" label="Employee" color="secondary" />
            <TextField id="standard-secondary" label="Founded" color="secondary" />
            <br></br>
            <TextField
              className="website"
              id="standard-secondary"
              label="Website"
              color="secondary" />
            <br></br>
            <TextField id="standard-secondary" label="Location" color="secondary" multiline />
            <TextField id="standard-secondary" label="City" color="secondary" />
            <br></br>
            <TextField id="standard-secondary" label="Focus" color="secondary" multiline
              rowsMax="4" />
            <br></br>
            <br></br>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Submit
          </Button>
            <Button onClick={this.handleClose} color="primary">
              Cancel
          </Button>
          </DialogActions>
        </Dialog>

      </div>

    );
  };
}