import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import MusicWheel from "./MusicWheel";
import VideoPlayer from "./VideoPlayer";
import { makeStyles } from "@material-ui/core";
import { Audio } from "react-loader-spinner";
import Cookies from "js-cookie";
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
      border: "2px solid green",
    },
    "@media (min-width: 1280px) and (max-width:1680px)": {
      // marginLeft: "1%",
      width: "90%",
      border: "2px solid yellow",
    },
    "@media (min-width: 600px) and (max-width:768px)": {
      height: "125vh",
      border: "2px solid blue",
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
  const [data, setData] = useState();
  const [index, setIndex] = useState();
  const [songTitle, setSongTitle] = useState("Title");
  const [songName, setSongName] = useState(
    "Racer X Real time Simulation Tech Demo"
  );
  const [composer, setComposer] = useState("composer");
  const [songNote, setSongNote] = useState("Note");
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [allImageCount, setAllImageCount] = useState(0);
  const [currentSongTime, setCurrentSongTime] = useState(0);
  const [imageCount, setImageCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const [durationLast, setDurationLast] = useState(0);

  const [imageCountLast, setImageCountLast] = useState(0);
  const [playSongposition, setPlaySongposition] = useState(0);
  const [allsongTime, setAllsongTime] = useState(0);
  const [allSongsDuration, setAllSongsDuration] = useState(0);
  const [time, setTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState();
  const [totalCount, setTotalCount] = useState(0);
  const nordArray = {
    A: 0,
    Ab: 0,
    B: 0,
    Bb: 0,
    C: 0,
    D: 0,
    Db: 0,
    E: 0,
    Eb: 0,
    F: 0,
    G: 0,
    Gb: 0,
    Am: 0,
    Abm: 0,
    Bm: 0,
    Bbm: 0,
    Cm: 0,
    Dm: 0,
    Dbm: 0,
    Em: 0,
    Ebm: 0,
    Fm: 0,
    Gm: 0,
    Gbm: 0,
    AM: 0,
    AbM: 0,
    BM: 0,
    BbM: 0,
    CM: 0,
    DM: 0,
    DbM: 0,
    EM: 0,
    EbM: 0,
    FM: 0,
    GM: 0,
    GbM: 0,
  };
  if (!Cookies.get("nordArray")) {
    Cookies.set("nordArray", nordArray);
  }
// let dataArr = Cookies.get("apiData");
// console.log(dataArr,'dataArr....');
  //when new value received

  function handleSong(songsData, ind) {

    setData(songsData);
    console.log(songsData,'data....')
    setIndex(ind);
    setSongTitle(songsData[ind].song_title);
    setComposer(songsData[ind].composer);
    setSongNote(songsData[ind].note_or_cord);
    setSongName(songsData[ind].song_name);
    setImageCount(songsData[ind].no_of_images);
    setPlaySongposition(++ind);
    // setDuration(secondsToHms(songsData[ind].tempo));
    setDuration(songsData[ind].tempo);
    for (let x in songsData) {
      setAllSongsDuration(
        (allSongsDuration) => allSongsDuration + parseInt(songsData[x].duration)
      );
    }
    const getNextSong = document.getElementById("childid").children[ind];
    getNextSong.scrollIntoView();

  }

  function TotleTimeAndImage(data, index) {
    setDurationLast(
      (durationLast) => durationLast + parseInt(data[index].duration)
    );
    setImageCountLast(data[index].no_of_images);
    setTotalCount(
      (totalCount) => totalCount + parseInt(data[index].no_of_images)
    );
    setAllImageCount(totalCount);
    allImageCount > 10000 ? setTotalCount(0) : "";
    // remainingTimes(time,durationLast)
  }
  // Cookies.set('name', songNote);
  Cookies.set("nordArray", JSON.stringify(nordArray));

  useEffect(() => {
    setCurrentSongTime(durationLast);
  }, [durationLast]);

  // UseEffect for total image count

  useEffect(() => {
    setAllImageCount(totalCount);
  }, [totalCount]);

  // UseEffect for total song duration
  useEffect(() => {
   
    for (let x in data) {
      setAllSongsDuration(
        (allSongsDuration) => allSongsDuration + parseInt(data[x].duration)
      );
    }
    
  },[]);

  //set updated total time
  useEffect(() => {
    setTime(allSongsDuration/2);
  }, [allSongsDuration]);
  let x = secondsToHms(time/2);
  useEffect(() => {
    // console.log(time, "time...");
    
    // setAllsongTime(x);
    setRemainingTime(x);
  }, [time]);

  useEffect(() => {
    let r = remainingTimes(time/2, durationLast);
    setRemainingTime(r);
  }, [durationLast]);

  function secondsToHms(Seconds) {
    let d = Number(Seconds);
    const result = new Date(d * 1000).toISOString().slice(11, 19);
    console.log(result, "result..."); // 👉️ "00:10:00" (hh:mm:ss)
    return result;
  }

  function remainingTimes(x, y) {
    let d = Number(x) - Number(y);
    const result = new Date(d * 1000).toISOString().slice(11, 19);
    console.log(result,'result...'); // 👉️ "00:10:00" (hh:mm:ss)
    return result;

    // var h = Math.floor(d / 3600);
    // var m = Math.floor((d % 3600) / 60);
    // var s = Math.floor((d % 3600) % 60);

    // var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    // var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    // var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    // return hDisplay + mDisplay + sDisplay;
  }

  const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.containerBox}>
      <Grid item xs={12} md={6} sm={12} sx={12} className={classes.leftSection}>
        <MusicWheel
          handleSong={handleSong}
          musicData={data}
          musicIndex={index}
          id="childid"
          songTitle={songTitle}
          songName={songName}
          composer={composer}
          songNote={songNote}
          allImageCount={allImageCount}
          duration={duration}
          durationLast={currentSongTime}
          imageCount={imageCount}
          playSongposition={playSongposition}
          setAllImageCount={setAllImageCount}
          setTotalSeconds={setTotalSeconds}
          remainingTime={remainingTime}
          tduration={time}
          setPlaySongposition={setPlaySongposition}
          allsongTime={allsongTime}
          timeData={setAllSongsDuration}
        />
      </Grid>
      <Grid item xs={12} md={6} sm={12} className={classes.rightSection}>
        <VideoPlayer
          handleSong={handleSong}
          musicData={data}
          musicIndex={index}
          TotleTimeAndImage={TotleTimeAndImage}
          timeData={setAllSongsDuration}
        />
      </Grid>
    </Grid>
  );
}

export default LandingPage;
