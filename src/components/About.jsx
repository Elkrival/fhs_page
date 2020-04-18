import React from 'react';
import { Grid, Typography, makeStyles, CardMedia, Paper } from '@material-ui/core';
import Carousel from './Carousel'

const useStyles = makeStyles((theme) => {
    return {
    grid: {
        paddingTop: `5rem`,
        paddingRight: `2.5rem`,
        paddingLeft: `2.5rem`,
        paddingBottom: `5rem`,
        justifyContent: `space-around`,
        backgroundColor: theme.palette.grey[400],
        height: `100%`
    },
    carouselGrid: {
        justifyContent: `space-around`,
        alignItems: `center`,
        backgroundColor: theme.palette.primary.light,
        height: `45rem`,
        width: `100vw`,
        paddingTop: `2.5rem`
    },
    pairGrid: {
        display: `flex`,
        justifyContent: `center`,
        flexDirection: `column`,
        alignItems: `center`,
        paddingBottom: `5rem`,
        paddingTop: `2.5rem`
    },
    leftGrid: {
        textAlign: `center`,
        paddingBottom: `5rem`,
        paddingTop: `2.5rem`
    },
    carouselMediaGrid: {
        height: `80%`,
    },
    media: {
        height: `70%`,
        width: `100%`,
    },
    formGrid: {
        textAlign: "center"
    },
    formTitle: { textAlign: "center", paddingTop: "5rem", paddingBottom: `5rem`, color: theme.palette.primary.contrastText},
    title: { 
        color: theme.palette.primary.contrastText,
        paddingBottom: `1rem` 
    },
    carouselMedia: {
        height: `100%`,
        width: `100%`
    },
    paperMedia: {
        height: `35rem`,
        width: `35rem`
    },
    body: {
        color: theme.palette.primary.contrastText,
        fontWeight: 400,
        lineHeight: `200%`
    },
    name: {
        color: theme.palette.secondary.dark,
        fontWeight: 700
    }

}});

const items = [
    {
        name: "Mark Reichard",
        description: "I had the pleasure of participating in Martin Cowart’s “Love, Joy, Abundance and Money” workshop in the fall of 2018. Through a combination of discussion, reflection, art, and play, Martin helped demystify our relationship with money, and actually illuminated its spiritual aspects— how it can be used to make the world and our lives better, kinder, more compassionate and more loving. I recommend Martin’s workshops to anyone who wishes to gain a better understanding of the role that money plays in our lives and to attain a proper balance between the material and the spiritual.",
        image:"https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/1787262/himjlktqhf2gmhkxcqjn.png"
    },
    {
        name: "Jacques Burgering",
        description: "I felt so much gratitude after my coaching session with Martin Cowart. He helped me unravel the emotions and stories around a financial issue in a safe and professional way. With his warm and calm southern voice, he lovingly and persistently asked the much-needed questions, so l could find my way back to my heart and soul! Thank you so much for this heartfelt and enlightening journey!",
        image:"https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/1787262/jszgiqlmkxqxge7lyoyn.png"
    },
    {
        name: "Chris Guidone",
        description: "I have had the privilege to meet and work with Martin Cowart over the last year. He has been instrumental in helping me approach my relationship to money in a way that was totally unexpected and yet authentic and personal to my individual needs. Martin knows how to break down the obstacles that keep us from taking control and managing a healthy relationship with our financial fears. I am grateful for his heartfelt approach and unwavering personal support.",
        image:"https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/1188041/572429_925614.png"
    },
    {
        name: "Kate Kozlova",
        description: "I had no idea what to expect when my partner asked if I wanted to attend Martin’s workshop but taming my scarcity dragon sounded epic so I went for it. I am forever grateful for making that decision because what I experienced that afternoon transformed my relationship with my finances and redefined scarcity for me. Martin creates an environment where participants are given the opportunity, to be honest with themselves and face their greatest fears about money and use them as stepping stones to inner growth. The workshop takes a creative and spiritual approach to financial literacy, which tackles financial insecurities from their psychological roots, offering long-term healing and liberation. Since embarking on this journey of self-exploration, my partner and I could reconcile our discomfort with being open and honest about our finances, I opened and cultivated my first savings account, and I no longer panic when I open up my bank app. Thank you, Martin!",
        image:"https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/1787262/i5haq64favzkiarggjyg.png"
    },
    {
        name: "Scott Mason",
        description: "As a speaker and workshop facilitator, Martin Cowart has the substantive knowledge, the unique point of view and the public presentation mojo to provide an experience that will be both informative and memorable. \n Bringing experiences gleaned from his many years as a successful small business owner, financial advisor, and consultant/coach, Martin has the knowledge and gravitas to credibly convey a message that is critical for his proposed audience -- but he also has the authenticity, ability to connect with others, and sense of humor necessary to ensure that his message is actually absorbed. \n The genuine concern he has for those he is there to teach, his mastery of public speaking, and his singular ability to create bonds with all sorts of people are sure to make his workshop a standout for everyone who attends.",
        image:"https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/1787262/zuhal4affgnnz5doqlxb.png"
    }
]
function About() {
    const classes = useStyles()
  return (
    <Grid container spacing={0} className={classes.grid}>
        <Grid item xs={5} className={classes.leftGrid}>
                <Typography variant="h2" className={classes.title}>Martin Cowart</Typography>
                <Typography variant="body1" className={classes.body}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dignissimos, quidem ipsa dolore totam culpa mollitia quos beatae amet voluptatibus alias illo iure tempora, dolores ducimus omnis ab ut ipsam.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente assumenda consectetur nisi aliquid neque, magnam laboriosam? Adipisci ex reprehenderit dolorum laudantium libero dicta voluptate, odit expedita voluptatibus explicabo sapiente assumenda.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus obcaecati blanditiis commodi nulla ex aspernatur reprehenderit error veritatis beatae, eius natus perferendis est. Vero id maxime adipisci quidem nam ea?
                </Typography>
        </Grid>
        <Grid item xs={6} className={classes.pairGrid}>
            <CardMedia className={classes.media} image="https://www.sideshow.com/wp/wp-content/uploads/2019/08/The-Mandalorian-Title-Card.jpg"/>
        </Grid>
        <Carousel 
            interval={5000}
            animation={"slide"}
        >
                    {
                        items.map( (item, index) => {
                            return (
                                <Grid container spacing={2} className={classes.carouselGrid} style={{ paddingTop: "2rem" }} key={item.name}>
                                    <Grid item xs={5}>
                        <div>
                            <Typography variant="h2" className={classes.name}>{item.name}</Typography>
                            <br/>
                            <Typography variant="body1" className={classes.body}>{item.description}</Typography>
                            </div>
                            </Grid>
                            <Grid item xs={5} className={classes.carouselMediaGrid}>
                                <Paper className={classes.paperMedia}>
                                    <CardMedia className={classes.carouselMedia} image={item.image}/>
                                </Paper>
                            </Grid>
                            </Grid>
                                )})
                    }
                </Carousel>
                </Grid>
  );
}

export default About