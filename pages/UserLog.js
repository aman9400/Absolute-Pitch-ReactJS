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
    maxWidth: "100%",
  },
  sectonArea: {
    width: "99%",
    // float: "left",
    height: "98vh",
    border: "2px solid black",
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
  const lang = Cookies.get("name");
  
  const classes = useStyles();

  const arrOne = [0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0];
  const arrTwo = [0, 0, 0, 0, 0, 0, 0, 0,0, 0,0,0];
  const arrThree = [0, 0, 0, 0, 0, 0, 0, 0,0,0, 0,0];
  const [nordData, setNordData] = useState([]);
  const dataArr = {
    c1: ["A", "Ab", "B", "Bb", "C", "D", "Db", "E", "Eb", "F", "G", "Gb"],
    c2: [
      "Am",
      "Abm",
      "Bm",
      "Bbm",
      "Cm",
      "Dm",
      "Dbm",
      "Em",
      "Ebm",
      "Fm",
      "Gm",
      "Gbm",
    ],
    c3: [
      "AM",
      "AbM",
      "BM",
      "BbM",
      "CM",
      "DM",
      "DbM",
      "EM",
      "EbM",
      "FM",
      "GM",
      "GbM",
    ],
  };
 
  const matchOne = dataArr["c1"].indexOf(`${lang}`);
  const matchTwo = dataArr["c2"].indexOf(`${lang}`);
  const matchThree = dataArr["c3"].indexOf(`${lang}`);
  // console.log(lang,'lang')

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "PHPSESSID=974ee91d0edad978dc03bfadaa3ff9a6");

    var urlencoded = new URLSearchParams();
    urlencoded.append("log-report", "1");
    urlencoded.append("user_id", "10");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(
      "https://mylatinhome.com/absolute/appdata/webservice.php",
      requestOptions
    )
      .then((response) =>response.json())
      .then((responseJson) => {
        if (responseJson.success === '0') {
          alert("Not Login");
        } else {
          setNordData(responseJson.data)
          console.log(responseJson.data,'response..........');
        }
      });
  }, [nordData]);



  let j = 0;
let lc1 = dataArr["c1"].length;
let lc2 = dataArr["c2"].length;
let lc3 = dataArr["c3"].length;

for(j;j<lc1;j++)
{
 
  nordData.map((val,ind)=>{
   if( val.nodes==dataArr["c1"][j]){
    arrOne[j] = val.numberCount
   }
   if(val.nodes==dataArr["c2"][j])
   {
    arrTwo[j] = val.numberCount
   }
   if(val.nodes==dataArr["c3"][j]){
    arrThree[j] = val.numberCount
   }
  })
}
for(let j2 = 0 ;j2<lc2;j2++)
{
 
  nordData.map((val,ind)=>{
   if( val.nodes==dataArr["c1"][j2]){
    arrOne[j2] = val.numberCount
   }
   if(val.nodes==dataArr["c2"][j2])
   {
    arrTwo[j2] = val.numberCount
   }
   if(val.nodes==dataArr["c3"][j2]){
    arrThree[j2] = val.numberCount
   }
  })
}
for(let j3=0;j3<lc3;j3++)
{
 
  nordData.map((val,ind)=>{
   if( val.nodes==dataArr["c1"][j3]){
    arrOne[j3] = val.numberCount
   }
   if(val.nodes==dataArr["c2"][j3])
   {
    arrTwo[j3] = val.numberCount
   }
   if(val.nodes == dataArr["c3"][j3]){
    arrThree[j3] = val.numberCount
   }
  })
}
console.log(lc1,'le.....');

  return (
    <div className={classes.root}>
      <div
        className={classes.sectonArea}
        style={{ background: "#fff", alignItems: "center" }}
      >
        <div className={classes.para}>
          <h3>User Log</h3>
        </div>
        {/* <Link href="/">
                <a onClick={(e) => router.push("/Library")}>Library</a>
              </Link> */}
        <table className={classes.tableDesign}>
          <tr>
            {dataArr["c1"].map((val, ind) => (
              <th key={ind} className={classes.th}>
                {val}
              </th>
            ))}
          </tr>

          <tr>

            {arrOne.map((val, ind) => (
              <th key={ind} className={classes.th2}>
              {val} 
              </th>
            ))}
            
          </tr>
          <tr>
            {dataArr["c2"].map((val, ind) => (
              <th key={ind} className={classes.th}>
                {val}
              </th>
            ))}
          </tr>

          <tr>
            {arrTwo.map((val, ind) => (
              <th key={ind} className={classes.th2}>
                {ind > 12 && ind < 24 ? val.numberCount: '0' } 
              </th>
            ))}
          </tr>
          <tr>
            {dataArr["c3"].map((val, ind) => (
              <th key={ind} className={classes.th}>
                {val}
              </th>
            ))}
          </tr>
          <tr>
            {arrThree.map((val, ind) => (
              <th key={ind} className={classes.th2}>
                  {ind > 24 ? val.numberCount: '0' } 
              </th>
            ))}
          </tr>
        </table>
      </div>
      {/* <div className={classes.sectonArea} style={{ background: "#fff" }}>
        <p className={classes.para}>User Form</p>
      </div>
      <div className={classes.sectonArea} style={{ background: "#fff" }}>
        <p className={classes.para}>User Library</p>
      </div>
      <div className={classes.sectonArea} style={{ background: "#fff" }}>
        <p className={classes.para}>Pitch Test</p>
      </div> */}
    </div>
  );
};

export default UserLog;
