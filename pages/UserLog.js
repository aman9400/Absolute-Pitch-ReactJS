import React from "react";
import { makeStyles } from "@material-ui/core";
import Cookies from 'js-cookie'
const useStyles = makeStyles({
  root: {
    position: "relative",
    maxWidth: "100%",
  },
  sectonArea: {
    width: "49.8%",
    float: "left",
    height: "49.5vh",
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
    width: "85px",
    height: "60px",
  },
  th2: {
    top: 0,
    marginTop: "-10px",
    position: "sticky",
    //  borderRight:'2px solid black',
    background: "#82E3F4",
    color: "white !important",
    width: "85px",
    height: "60px",
  },
});
const  UserLog = () => {
  const lang = Cookies.get('name');
  const arrOne = [0,0,0,0,0,0,0,0,0,0,0,0];
  const arrTwo = [0,0,0,0,0,0,0,0,0,0,0,0];
  const arrThree = [0,0,0,0,0,0,0,0,0,0,0,0];
 
  const rowOne = {"A":0, "Ab":0, "B":0, "Bb":0, "C":0, "D":0, "Db":0, "E":0, "Eb":0, "F":0, "G":0, "Gb":0};
  
  const rowTwo = {"Am":0, "Abm":0, "Bm":0, "Bbm":0, "Cm":0, "Dm":0, "Dbm":0, "Em":0, "Ebm":0, "Fm":0, "Gm":0, "Gbm":0};
  const rowThree = {"AM":0, "AbM":0, "BM":0, "BbM":0, "CM":0, "DM":0, "DbM":0, "EM":0, "EbM":0, "FM":0, "GM":0, "GbM":0};
  const data = {
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
  const matchOne = data["c1"].indexOf(lang)
  const matchTwo = data["c2"].indexOf(lang)
  const matchThree = data["c3"].indexOf(lang)
  console.log(Cookies.get('name'),'lang')
  const newArrOne = arrOne.map((num , ind) => 
  {
    
    if(ind === matchOne)
    {
      return (num + 1);
    }
    else{
      return num;
    }
  });
  const newArrTwo = arrTwo.map((num , ind) =>  {
    
    if(ind === matchTwo)
    {
      return (num + 1);
    }
    else{
      return num;
    }
  });
  const newArrThree = arrThree.map((num , ind) =>  {
    
    if(ind === matchThree)
    {
      return (num + 1);
    }
    else{
      return num;
    }
  });

console.log(newArrOne,'newArrOne'); 
console.log(newArrTwo,'newArrTwo');
console.log(newArrThree,'bnewArrThreek');
  
 
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div
        className={classes.sectonArea}
        style={{ background: "#fff", alignItems: "center" }}
      >
        <div className={classes.para}>User Log</div>
        <table>
          <tr>
            {data["c1"].map((val, ind) => (
              <th key={ind} className={classes.th}>
                {val}
              </th>
            ))}
          </tr>

          <tr>
            {newArrOne.map((val, ind) => (
              <th key={ind} className={classes.th2}>
                {val}
              </th>
            ))}
          </tr>
          <tr>
            {data["c2"].map((val, ind) => (
              <th key={ind} className={classes.th}>
                {val}
              </th>
            ))}
          </tr>

          <tr>
            {newArrTwo.map((val, ind) => (
              <th key={ind} className={classes.th2}>
                {val}
              </th>
            ))}
          </tr>
          <tr>
            {data["c3"].map((val, ind) => (
              <th key={ind} className={classes.th}>
                {val}
              </th>
            ))}
          </tr>
          <tr>
            {newArrThree.map((val, ind) => (
              <th key={ind} className={classes.th2}>
                {val}
              </th>
            ))}
          </tr>
        </table>
      </div>
      <div className={classes.sectonArea} style={{ background: "#fff" }}>
        <p className={classes.para}>User Form</p>
      </div>
      <div className={classes.sectonArea} style={{ background: "#fff" }}>
        <p className={classes.para}>User Library</p>
      </div>
      <div className={classes.sectonArea} style={{ background: "#fff" }}>
        <p className={classes.para}>Pitch Test</p>
      </div>
    </div>
  );
};

export default UserLog;
