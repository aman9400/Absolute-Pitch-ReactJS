import React, { useState, useEffect } from "react";
import { Grid ,makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "relative",
    maxWidth: "100%",
  },
  containerBox: {
    // height: "auto",
    width: "99.5%",
    padding: "10px",
    background: "#808d8dcf !important",
    height: "96%",
    "@media (min-width: 770px) and (max-width:1024px)": {
      height: "95%",
      // border: "2px solid green",
    },
    "@media (min-width: 1280px) and (max-width:1680px)": {
      // marginLeft: "1%",
      width: "90%",
      // border: "2px solid yellow",
    },
    "@media (min-width: 600px) and (max-width:768px)": {
      height: "125vh",
      // border: "2px solid blue",
    },
    "@media  (min-width: 1681px)and (max-width: 1920px)": {
      width: "100%",
      // marginLeft:'1% !important',
      height: "99.6vh",
      padding: "5px",
    },
    "@media  (min-width: 1921px)and (max-width: 1220px)": {
      width: "90%",
      // marginLeft:'1% !important',
      height: "95%",
      padding: "5px",
    },
  },
  leftSection: {
    padding: "0px 5px 2px 0px",
  },
  rightSection: {
    padding: "0px 0px 2px 10px",
  },
});
function LandingPage() {
  
  const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.containerBox}>
      <h1>Sorry men</h1>
    </Grid>
  );
}

export default LandingPage;