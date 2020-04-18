import React from 'react';
import { TextField, makeStyles, Typography, Paper, Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    contact: {
      height: `100%`,
      background: theme.palette.grey[400],
      paddingTop: `5rem`,
      paddingBottom: `5rem`,
      alignItems: `center`,
      justifyContent: `space-between`,
    },
    root: {
        margin: `0 auto`,
        flexFlow: `column`,
        height: `50%`,
        width: `40rem`,
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.primary.contrastText
    },
    textLine: {
        width: `25rem`,
    },
    formLine: {
        padding: `1rem`,
        color: theme.palette.primary.contrastText,
        margin: `0 auto`,
        width: `80%`
    },
    buttonStyle: {
        width: `12rem`,
        padding: `1rem`,
        color: theme.palette.primary.contrastText
    },
    buttonContainer: {
        display: `flex`,
        width: `95%`,
        justifyContent: `flex-end`,
        paddingTop: `2rem`,
        paddingBottom: `2rem`
    },
    title: { textAlign: "center", paddingTop: "5rem", paddingBottom: `2.5rem`, color: theme.palette.primary.contrastText }
}))
function Contact() {
    const classes = useStyles()
  return (
  <div className={classes.contact}>
    <Paper className={classes.root} elevation={3}>
        <form noValidate autoComplete="off">
            <Typography variant="h1" className={classes.title}>Leave Martin a note...</Typography>
            <div className={classes.formLine}><TextField id="email" className={classes.textLine} label="Name" /></div>
            <div className={classes.formLine}><TextField id="name" className={classes.textLine} label="Email" /></div>
            <div style={{ margin: `0 auto`, width: `80%`, paddingTop: `3rem`}}> <TextField
          id="filled-multiline-static"
          label="Message"
          multiline
          rows="6"
          placeholder="Leave a note.."
          variant="filled"
          style={{width: `100%`}}
        /></div>
            <div className={classes.buttonContainer}><Button variant="contained" color="primary" disableElevation className={classes.buttonStyle}>Submit</Button></div>
        </form>
    </Paper>
    </div>
  );
}

export default Contact