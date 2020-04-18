import React from 'react';
import { Grid, CardMedia, Link, Toolbar, makeStyles, Typography } from '@material-ui/core';
import {
    Link as RouterLink
  } from "react-router-dom";
import facebook from "../assets/facebook_logo.svg"
import linkedin from "../assets/linkedin.svg"
const useStyles = makeStyles(theme => ({
    grid:{
      color: theme.palette.primary.contrastText
    },
    gridLeft:{
      backgroundColor: theme.palette.secondary.main
    },
    gridRight:{
      backgroundColor: "black", 
      flexDirection: `row`,
      color: "#eee"
    },
    card: {
        width: 300,
        padding: ".5rem",
      },
      media: {
        height: 130,
      },
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    logoGrid: {
        background: `black`
    },
    logoContainer: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `flex-end`,
        alignSelf: `flex-bottom`,
        height: `100%`
    },
    logo: { height: `15%`, width: `15%`},
    toolbarSecondary: {
    justifyContent: `space-around`
    },
    siteMap: {
        textAlign: "center", 
        paddingBottom: `1rem`,
        paddingTop: `.5rem`
    },
    links: {
        fontSize: "1.25rem",
        width: "6rem",
        padding: ".5rem",
        textAlign: "center",
        fontWeight: 500,
        border: `#eee`,
        color: "#eee"
    }
  }));

function Footer() {
    const classes = useStyles();
  return (
        <Grid container spacing={0} className={classes.grid}>
            <Grid item xs={3} className={classes.gridLeft}>
                    <div className={classes.card}>
                        <CardMedia className={classes.media} image="https://www.sideshow.com/wp/wp-content/uploads/2019/08/The-Mandalorian-Title-Card.jpg"/>
                    </div>
            </Grid>
            <Grid item xs={3} className={classes.logoGrid}>
                <div className={classes.logoContainer}>
                    <img src={linkedin}  alt="linkedin" className={classes.logo}/>
                    <img src={facebook}  alt="linkedin" className={classes.logo}/>      
                <Typography variant="body" style={{color: `#eee`}}>Made with ♥ by Ivan Trujillo</Typography>
                </div>
            </Grid>
        <Grid item xs={6} className={classes.gridRight}>
            <Typography variant="h3" className={classes.siteMap}>Site Map</Typography>
                <Toolbar component="nav" className={classes.toolbarSecondary}>
                    {[{ title: "Home", to:"/"}, { title: "About", to: "/about"}, { title: "FHS", to:"/about-fhs"},{title: "Workshops", to:"/workshops"}, {title:"Contact", to:"/contact-fhs"}].map(section => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        to={section.to}
                        component={RouterLink}
                        style={{ textDecoration: 'none' }}
                    >   <div className={classes.links}>
                        {section.title}
                        </div>
                    </Link>
                    ))}
                </Toolbar>
            </Grid>
        </Grid>    
  );
}

export default Footer