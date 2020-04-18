import React from 'react';
import { Grid, Typography, makeStyles, CardMedia, div } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
    grid: {
        height: `100%`,
        background: theme.palette.grey[400],
        paddingTop: `5rem`,
        paddingBottom: `5rem`,
        alignItems: `center`,
        justifyContent: `space-between`,
    },
    fullWidthRow: {
        textAlign: `center`,
        height: `20%`
    },
    contentContainer:{
        paddingTop: `5rem`,
        height: `100%`,
        display: `flex`, 
        flexDirection: `row`,
        justifyContent: `space-around`
    },
    container: {
        display: `flex`,
        flexDirection: `column`,
        width: `23%`,
    },
    mediaImage:{
        height: `30rem`,
        width: `100%`
    },
    descriptionContainer: {
        width: `100%`,
        height: `100%`,
        textAlign: `center`,
        paddingTop: `2rem`,
        color: theme.palette.primary.contrastText,
        fontWeight: 500

    },
    title: {
        color: theme.palette.primary.dark
    }}))
function Workshops() {
    const classes = useStyles()
  return (
    <Grid container spacing={0} className={classes.grid}>
        <Grid item xs={12} className={classes.fullWidthRow}>
            <Typography variant="h1">Take on your money shadow today.</Typography>
        </Grid>
        <div className={classes.contentContainer}>
            <div className={classes.container} elevation={3}>
                <CardMedia className={classes.mediaImage}image="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/1787262/794151_557539.jpeg"/>
            <div className={classes.descriptionContainer}>
                <Typography variant="h3" className={classes.title}>The Heart Centered Business Leader</Typography>
                <br />
                <Typography variant="body1">
                    Are you feeling stuck? Do you feel frustrated that no matter how much hard work and effort you put into growing your business and take it to the next level, there just isn’t “enough?" Like so many of us, maybe you too are living in the shadows of a “scarcity mindset."</Typography>
                    <Typography variant="body1">This workshop is designed specifically for the business owner and entrepreneur to get their power back from a fear-driven “scarcity mindset.”</Typography>
                    <Typography variant="body1"> During this heart-centered experiential journey, we will look back at our money story to find the origins of our scarcity mindset, expose it to the light of truth and stop its power over us. With the truth revealed, you will experience the value of building your business from the creative and love-driven power of your heart.
                    </Typography>
            </div>
            </div>
            <div className={classes.container} elevation={3}>
                <CardMedia className={classes.mediaImage}image="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/1787262/790357_320712.jpeg"/>
            <div className={classes.descriptionContainer}>
                <Typography variant="h3" className={classes.title}>The Heart Centered Business Leader</Typography>
                <br />
                <Typography variant="body1">
                Who or what has the power in your money relationship? In our culture, we all give away our power to money. When we give away our power, we feel fear - often the fear of lack, or not enough.                    </Typography>
                    <Typography variant="body1">T
                    This four-hour workshop is a heart-centered experiential “hero’s journey” to transform our fear of money to money as an expression of love. The goal of this workshop is to transform our fears and worry about money and finances into authentic power and freedom.                    </Typography>
                    <Typography variant="body1"> 
                    Come prepared for an exciting adventure, where you will be challenged mentally, emotionally and spiritually as we encounter the Scarcity Dragon, to liberate ourselves from our fears and doubts about money.                    </Typography>
            </div>
            </div>
            <div className={classes.container} elevation={3}>
                <CardMedia className={classes.mediaImage}image="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/1787262/612570_287825.jpeg"/>
            <div className={classes.descriptionContainer}>
                <Typography variant="h3" className={classes.title}>The Heart Centered Business Leader</Typography>
                <br />
                <Typography variant="body1">
                A heart-centered workplace is focused on shared internal values and purpose to achieve higher levels of performance and profitability. When focused on a cause or mission bigger than themselves, people can take down their armor and connect with an open heart to better serve the work and each other.                    </Typography>
                    <Typography variant="body1">
                    Heart-centered work environments shift the way team members respond to fearful situations as they occur. With courage and vulnerability to be compassionately honest, people can connect and support each other to resolve conflict and increase performance and profitability.

</Typography>
                    <Typography variant="body1"> 
                    One of the most significant benefits of creating a heart-centered workspace is our ability to individually and collectively tap into a higher more creative operating system. Plugged into a higher power, people create, perform and produce at levels otherwise unobtainable. It feels better working with people who know you and value your true self.
                   </Typography>
            </div>
            </div>
            </div>
    </Grid>
  );
}

export default Workshops