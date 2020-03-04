import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./style.css"
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="MuiAppBar">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Specialised Jobs
          </Typography>
          <Button href="/" color="inherit">Home</Button>
          <Button href="https://www.specialisedjobs.com/" color="inherit">Existing Website</Button>
          <Button href="/" color="inherit">Why Us</Button>
          <Button href="/jobai" color="inherit">Job AI</Button>
          <Button href="/agora" color="inherit">Agora</Button>
          <Button href="http://candidateportal.us-east-2.elasticbeanstalk.com/" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}