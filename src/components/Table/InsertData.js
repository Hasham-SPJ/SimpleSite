import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import "./table.css"

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function FormPropsTextFields() {
    const classes = useStyles();
    return (

        <form className={classes.root} noValidate autoComplete="off" >
            <div className="forminput">
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
          rowsMax="4"/>
                <br></br>
                <br></br>
                <Button
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Save
                 </Button>
            </div>
        </form>
    );
}
