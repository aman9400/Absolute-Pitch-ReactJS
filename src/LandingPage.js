import React, { useState ,useEffect} from "react";
import { Grid } from "@material-ui/core";
import MusicWheel from "./MusicWheel3";
import VideoPlayer from "./VideoPlayer";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  containerBox: {
    // marginTop: '1px',
    padding:'10px',
    height: 'auto',
    background: '#808d8dcf !important',
    '@media (min-width: 770px) and (max-width:1024px)': {
      height: '90vh',
    },
    '@media (min-width: 600px) and (max-width:768px)': {
      height: '125vh',
    },
    '@media (min-width: 380px) and (max-width:425px)': {

      height: '125vh',
    },
    '@media (max-width:375px)': {

      height: '125vh',
    }
  },
  leftSection: {
    // background: 'rgb(63, 70, 82)',
    justifyContent: 'center !important',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  rightSection: {
    // background: 'rgb(63, 70, 82)',
    justifyContent: 'center',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '0px 10px',
    '@media (min-width: 770px) and (max-width:1024px)': {
      padding: '0px',
    },
    '@media (min-width: 600px) and (max-width:768px)': {
      padding: '0px',
    },
    '@media (min-width: 380px) and (max-width:425px)': {

      padding: '0px',
    },
    '@media (max-width:375px)': {
      padding: '0px',
    }

  },
});
function LandingPage() {
  const [data, setData] = useState()
  const [index, setIndex] = useState()


  function handleSong(songsData, ind){
    setData(songsData)
    setIndex(ind)
  }
  
  const classes = useStyles();
  return (
    <Grid container spacing={4}  className={classes.containerBox}>
      <Grid item xs={12} md={6}><MusicWheel handleSong={handleSong}  musicData={data} musicIndex={index} /></Grid>
      <Grid item xs={12} md={6}><VideoPlayer handleSong={handleSong} musicData={data} musicIndex={index}/></Grid>
    </Grid>
  );
}

export default LandingPage;
