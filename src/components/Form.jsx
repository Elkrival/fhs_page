import React from 'react';
import { TextField, makeStyles, Typography, Paper, Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: `0 auto`,
        flexFlow: `column`,
        height: `37rem`,
        width: `40rem`,
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.primary.contrastText
    },
    textLine: {
        width: `25rem`,
    },
    formLine: {
        padding: `1rem`,
        color: theme.palette.primary.contrastText
    },
    buttonStyle: {
        width: `12rem`,
        padding: `1rem`,
        color: theme.palette.primary.contrastText
    },
    buttonContainer: {
        paddingTop: `2.5rem`,
        display: `flex`,
        width: `95%`,
        justifyContent: `flex-end`
    },
    title: { textAlign: "center", paddingTop: "5rem", paddingBottom: `2.5rem`, color: theme.palette.primary.contrastText }
}))
function Form() {
    const classes = useStyles()
  return (
    <Paper className={classes.root} elevation={3}>
        <form noValidate autoComplete="off">
            <Typography variant="h1" className={classes.title}>Book Your free one hour planning session with me</Typography>
            <div className={classes.formLine}><TextField id="email" className={classes.textLine} label="Name" /></div>
            <div className={classes.formLine}><TextField id="name" className={classes.textLine} label="Email" /></div>        
            <div className={classes.formLine}><TextField id="phone" className={classes.textLine} label="Phone" /></div>
            <div className={classes.buttonContainer}><Button variant="contained" color="primary" disableElevation className={classes.buttonStyle}>Submit</Button></div>
        </form>
    </Paper>
  );
}

export default Form