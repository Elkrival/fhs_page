import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import YouTube from 'react-youtube';
import Form from './Form'

const opts = {
    height: '480',
    width: '800',
    playerVars: {
      autoplay: 1
    }
  };
const useStyles = makeStyles((theme) => {
    console.log(theme.palette)
    return {
    grid: {
        padding: `2.5rem`,
        justifyContent: `space-between`,
        backgroundColor: theme.palette.grey[400]
        // height: `40rem`
    },
    pairGrid: {
        height: `30rem`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        textAlign: `center`,
    },
    video: {
        height: `20rem`,
        width: `15rem`
    },
    formGrid: {
        textAlign: "center"
    },
    formTitle: { textAlign: "center", paddingTop: "5rem", paddingBottom: `5rem`, color: theme.palette.grey['A700']},
    title: { color: theme.palette.grey['A700'] }

}});
function _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.playVideo();
    // event.target.playVideo();
    event.target.pauseVideo();

  }
function Home() {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.grid}>
        <Grid item xs={5} className={classes.pairGrid}>
                <Typography variant="h2" className={classes.title}>Prosperity Coaching and Financial Planning.</Typography>
        </Grid>
        <Grid item xs={7} className={classes.pairGrid}>
            <YouTube
            videoId="HWi9skDg104"
            opts={opts}
            onReady={_onReady}
        />
        </Grid>
        &nbsp;
        <Grid item xs={12}>
            <Typography variant="h2" className={classes.formTitle}>Innovative Financial Strategies to elimitate the cause of worry at it's core.</Typography>
        </Grid>
            &nbsp;
        <Grid item xs={12} className={classes.formGrid}>
            <Form />
        </Grid>
    </Grid> 
  );
}

export default Home