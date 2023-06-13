import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};
const useStyles = makeStyles({
  root: {
    position: "relative",
    maxWidth: "99.8%",
    border: "none",
    height: "99vh",
  },
  sectonArea: {
    width: "99%",
    // float: "left",
    height: "98vh",
    // border: "2px solid black",
  },
  para: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    padding: "10px",
    width: "100%",
  },
  th: {
    top: 0,
    marginTop: "-10px",
    position: "sticky",
    //  borderRight:'2px solid black',
    background: "#5D432C",
    color: "white !important",
    width: "8%",
    height: "30px",
    fontSize: "25px",
    "@media  (min-width: 300px) and (max-width: 450px)": {
      width: "8%",
      height: "40px",
      fontSize: "20px",
    },
    "@media  (min-width: 451px) and (max-width: 599px)": {
      width: "8%",
      height: "50px",
      fontSize: "25px",
    },
    "@media  (min-width: 600px) and (max-width: 1024px)": {
      width: "8%",
      height: "60px",
      fontSize: "30px",
    },
  },
  resetTh: {
    background: "red",
    color: "white !important",
    width: "8%",
    height: "30px",
    fontSize: "25px",
    cursor: "pointer",
  },

  th2: {
    top: 0,
    marginTop: "-10px",
    position: "sticky",
    //  borderRight:'2px solid black',
    background: "#82E3F4",
    color: "white !important",
    width: "8%",
    height: "30px",
    fontSize: "25px",
    "@media  (min-width: 300px) and (max-width: 450px)": {
      width: "8%",
      height: "40px",
      fontSize: "20px",
    },
    "@media  (min-width: 451px) and (max-width: 599px)": {
      width: "8%",
      height: "50px",
      fontSize: "25px",
    },
    "@media  (min-width: 600px) and (max-width: 1024px)": {
      width: "8%",
      height: "50px",
      fontSize: "25px",
    },
  },
  tableDesign: {
    width: "100%",
    height: "88vh",
    "@media  (min-width: 300px) and (max-width: 450px)": {
      width: "70%",
      height: "80%",
    },
    "@media  (min-width: 451px) and (max-width: 599px)": {
      width: "70%",
      height: "80%",
    },
    "@media  (min-width: 600px) and (max-width: 1024px)": {
      width: "60%",
      height: "98%",
    },
  },
});
const UserLog = () => {
  const router = useRouter();
  // Cookies.remove("userId");
  const lang = Cookies.get("name");
  const userId = Cookies.get("userId");
  const classes = useStyles();

  const arrOne = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const arrTwo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const arrThree = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [nordData, setNordData] = useState([]);
  const [reset, setReset] = useState('');
  const [miner, setMiner] = useState(false);
  const [major, setMajor] = useState(false);
  
  const matchOne = dataArr["c1"].indexOf(`${lang}`);
  const matchTwo = dataArr["c2"].indexOf(`${lang}`);
  const matchThree = dataArr["c3"].indexOf(`${lang}`);
  // console.log(lang,'lang')

  

  

 
  console.log(lc1, "le.....");

  return (
    <div className={classes.root}>
      <h1>Sorry Men</h1>
    </div>
  );
};

export default UserLog;
