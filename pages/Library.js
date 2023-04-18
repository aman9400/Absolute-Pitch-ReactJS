import React, { useState, useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Image from "next/image";
import Iframe from "react-iframe";
import Logo from "../public/logo.png";
import Article from "../public/arcticle.jpg";
const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};
const useStyles = makeStyles({
  root: {
    position: "relative",
    maxWidth: "100%",
  },  
  LibraryBoxs: {
    // border: "2px solid green",
    height: "100vh",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "98%",
    margin: "0 auto",
    // background: #A0C5E8,
    padding: "10px 0",
    marginTop: "5%",
  },

  spanBox: {
    width: "100px",
    height: "100px",
    background: "black",
  },
  spanBox1: {
    width: "100px",
    height: "100px",
    background: "lightblue",
    // padding: "5px",
    cursor: "pointer",
  },
  headingStyle:{
    fontSize:'30px',
    marginLeft:'40%',

  },
  headingStyle2:{
    fontSize:'25px',
    marginLeft:'20%',

  }
});
const Library = () => {
  let path = "https://mylatinhome.com/absolute/note-sound/Am.wav";
  const [audio] = useState(typeof Audio !== "undefined" && new Audio(path));

  const classes = useStyles();

  return (
    <Grid container spacing={0}>
      <Grid
        item
        xs={12}
        md={4}
        sm={12}
        sx={12}
        className={classes.LibraryBoxs}
        style={{ background: "#fff" }}
      >
        <p className={classes.headingStyle}>Media</p>
        <p className={classes.headingStyle2}>YoutUbe/Rumble Links Thumbnail</p>
        <div className={classes.content}>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
          <span className={classes.spanBox}>
            <Iframe
              url="https://www.sdrive.app/embed/1ptBQD"
              width="100px"
              height="100px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </span>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sm={12}
        sx={12}
        className={classes.LibraryBoxs}
        style={{ background: "#fff" }}
      >
        <p className={classes.headingStyle} style={{color:'#fff'}}>Media</p>
        <p className={classes.headingStyle2}>MP3/MP4 I Produce Thumbnail</p>
        <div className={classes.content}>
          <span className={classes.spanBox1} onClick={() => audio.play()}>
            <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            />
          </span>
          <span
            className={classes.spanBox1}
            onClick={() => audio.play()}
          >

             <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox1}>
             <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox1}>
             <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox1}>
             <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox1}>
             <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox1}>
             <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox1}>
             <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox1}>
             <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox1}>
             <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox1}>
             <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox1}>
             <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox1}>
             <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox1}>
             <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox1}>
             <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox1}> <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            /></span>
          <span className={classes.spanBox1}> <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            /></span>
          <span className={classes.spanBox1}> <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            /></span>
          <span className={classes.spanBox1}> <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            /></span>
          <span className={classes.spanBox1}> <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            /></span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox1}> <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            /></span>
          <span className={classes.spanBox1}> <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            /></span>
          <span className={classes.spanBox1}> <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            /></span>
          <span className={classes.spanBox1}> <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            /></span>
          <span className={classes.spanBox1}> <Image
              loader={myLoader}
              src={Logo}
              alt="Picture of the author"
              width={500}
              height={400}
              style={{marginTop:'10px'}}
            /></span>
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sm={12}
        sx={12}
        className={classes.LibraryBoxs}
        style={{ background: "#fff" }}
      >
         <p className={classes.headingStyle}>Articles</p>
        <p className={classes.headingStyle2}>MP3/MP4 I Produce Thumbnail</p>
        <div className={classes.content}>
          <span className={classes.spanBox}>
             <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
             <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
             <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
             <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
             <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox}>
             <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
             <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
             <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
             <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
             <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
        </div>
        <div className={classes.content}>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
          <span className={classes.spanBox}>
            <Image
              loader={myLoader}
              src={Article}
              alt="Picture of the author"
              width={500}
              height={500}
              style={{marginTop:'10px'}}
            />
          </span>
        </div>
      </Grid>
    </Grid>
  );
};

export default Library;