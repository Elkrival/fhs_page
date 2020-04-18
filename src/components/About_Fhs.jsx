import React from 'react';
import { makeStyles, Grid, Typography, List, ListItem } from '@material-ui/core';
import { Loyalty } from '@material-ui/icons'
import Form from './Form'

const useStyles = makeStyles((theme) => ({
    grid:{
        height: `100vh`,
        width: `100vw`,
        background: theme.palette.grey[400],
        paddingTop: `5rem`,
        flexFlow: `column`
    },
    
    bulletContainer:{
        width: `100%`,
        alignSelf: `center`,
        textAlign: `center`,
        flexBasis: `28%`,
        color: theme.palette.primary.contrastText
    },
    body: {
        lineHeight: `200%`,
        color: theme.palette.primary.contrastText,
        fontWeight: 400
    },
    listContainer: {
        width: `100%`,
        alignSelf: `center`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        paddingTop: `3rem`
    },
    iconReverse: {
        "-webkit-transform": `rotate(90deg)`,
        "-moz-transform": `rotate(90deg)`,
        "-ms-transform": `rotate(90deg)`,
        "-o-transform": `rotate(90deg)`,
        transform: `rotate(90deg)`,
        color: theme.palette.success.main,
        height: `40%`
    },
    title: {
        textAlign: `center`
    },
    divider:{
        paddingBottom: `2rem`
    },
    formGrid: {
        textAlign: `center`,
        alignSelf: `center`,
        background: theme.palette.grey[400],
        paddingTop: `10rem`,
        paddingBottom: `2.5rem`
    }
}))
function AboutFHS() {
    const classes = useStyles()
  return (
      <>
    <Grid container spacing={0} className={classes.grid}>
        <Grid xs={6} item className={classes.bulletContainer}>
            <Typography variant="h1"> About Financial Heart Space </Typography>
            <Typography variant="body1" className={classes.body}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente assumenda consectetur nisi aliquid neque, magnam laboriosam? Adipisci ex reprehenderit dolorum laudantium libero dicta voluptate, odit expedita voluptatibus explicabo sapiente assumenda.
            </Typography>
        </Grid>
    <div className={classes.divider}></div>
        <Grid item className={classes.listContainer} xs={7}>
            <Typography variant="h1" className={classes.title}> Heart Centered Financial Planning and Coaching</Typography>
            <br/>
            <List className={classes.listStyle}>
                <ListItem style={{paddingTop: `1.5rem`}}>
                <Loyalty className={classes.iconReverse} color="success" /> <Typography variant="h3">Eliminate Shadow Beliefs at their core</Typography>
                </ListItem>
                <div className={classes.divider}/>
                <ListItem>
                <Loyalty className={classes.iconReverse} color="success" /> <Typography variant="h3">Eliminate Shadow Beliefs at their core</Typography>
                </ListItem>
                <div className={classes.divider}/>
                <ListItem>
                <Loyalty className={classes.iconReverse} color="success" /> <Typography variant="h3">Eliminate Shadow Beliefs at their core</Typography>
                </ListItem>
                <div className={classes.divider}/>
                <ListItem>
                <Loyalty className={classes.iconReverse} color="success" /> <Typography variant="h3">Eliminate Shadow Beliefs at their core</Typography>
                </ListItem>
                <div className={classes.divider}/>
                <ListItem>
                <Loyalty className={classes.iconReverse} color="success" /> <Typography variant="h3">Eliminate Shadow Beliefs at their core</Typography>
                </ListItem>
                <div className={classes.divider}/>
            </List>
        </Grid>
    </Grid>
        <Grid className={classes.formGrid}>
        <Form />
        </Grid>
    </>
  );
}

export default AboutFHS