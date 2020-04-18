import React from 'react';
import { Grid, CardMedia, Link, Toolbar, makeStyles } from '@material-ui/core';
import {
    Link as RouterLink
  } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    grid:{
      color: theme.palette.primary.contrastText
    },
    gridLeft:{
      backgroundColor: theme.palette.secondary.main
    },
    gridRight:{
      backgroundColor: theme.palette.primary.main
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
    toolbarSecondary: {
      justifyContent: 'space-between',
      alignItems: "flex-end",
      height: 145,
    },
    links: {
        fontSize: "1.25rem",
        width: "6rem",
        padding: ".5rem",
        textAlign: "center",
        fontWeight: 500,
        color: theme.palette.primary.contrastText
    }
  }));

function Navbar() {
    const classes = useStyles();
  return (
        <Grid container spacing={0} className={classes.grid}>
            <Grid item xs={3} className={classes.gridLeft}>
                    <div className={classes.card}>
                        <CardMedia className={classes.media} image="https://www.sideshow.com/wp/wp-content/uploads/2019/08/The-Mandalorian-Title-Card.jpg"/>
                    </div>
            </Grid>
        <Grid item xs={9} className={classes.gridRight}>
                <Toolbar component="nav" className={classes.toolbarSecondary}>
                    {[{ title: "Home", to:"/"}, { title: "About", to: "/about"}, { title: "FHS", to:"/about-fhs"} , {title: "Workshops", to:"/workshops"}, {title:"Contact", to:"/contact-fhs"}].map(section => (
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

export default Navbar