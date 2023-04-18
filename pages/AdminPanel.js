import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import SideMenu from '../src/SideBar/Navbar/Navbar';
import TopBar from '../src/SideBar/Topbar/Topbar';
const useStyles = makeStyles({
  root: {
    position: "relative",
    maxWidth: "100%",
  },
  containerBox: {
    // height: "auto",
    width: "85% !important",
    padding: "10px",
    // background: "#808d8dcf !important",
    height: "93vh",
    marginLeft:'13%',
    marginTop:'3%',
    // border:'2px solid red',
    "@media (min-width: 770px) and (max-width:1024px)": {
      height: "95%",
      width: "50%",
    },
    "@media (min-width: 1280px) and (max-width:1680px)": {
      // marginLeft: "1%",
      width: "50%",
      border: "2px solid yellow",
    },
    "@media (min-width: 600px) and (max-width:768px)": {
      height: "125vh",
      border: "2px solid blue",
      width: "50%",
    },
    "@media  (min-width: 1681px)and (max-width: 1920px)": {
      width: "50%",
      // marginLeft:'1% !important',
      height: "99.6vh",
      padding: "5px",
    },
    "@media  (min-width: 1921px)and (max-width: 1220px)": {
      width: "50%",
      // marginLeft:'1% !important',
      height: "95%",
      padding: "5px",
    },
  },
});
const AdminPanel = () => {
  const classes = useStyles();
  const router = useRouter();
  const handleClick = (e, path) => {
    router.push(path);
  };
  return (
    
    <> <TopBar/>
    <SideMenu/>
    <Grid container spacing={0} className={classes.containerBox}>
      <Grid item xs={12} md={3} sm={12} sx={12}>
        <div
          style={{
            background: "blue",
            height: "200px",
            width: "80%",
            // marginLeft: "10px",
            cursor: "pointer",
            padding:'20px',
            borderRadius:'20px',
          }}
          onClick={(e) => handleClick(e, "/Library")}
        >
          <h1>Library</h1>
        </div>
      </Grid>
      <Grid item xs={12} md={3} sm={12} sx={12}>
        <div
          style={{
            background: "Yellow",
            height: "200px",
            width: "80%",
            cursor: "pointer",
            padding:'20px',
            borderRadius:'20px',
          }}
          onClick={(e) => handleClick(e, "/Feedback")}
        >
          <h1>Feedback</h1>
        </div>
      </Grid>
      <Grid item xs={12} md={3} sm={12} sx={12}>
        <div
          style={{
            background: "green",
            height: "200px",
            width: "80%",
            cursor: "pointer",
            padding:'20px',
            borderRadius:'20px',
          }}
          onClick={(e) => handleClick(e, "/UserLog")}
        >
          <h1>UserLog</h1>
        </div>
      </Grid>
      <Grid item xs={12} md={3} sm={12} sx={12}>
        <div
          style={{
            background: "orange",
            height: "200px",
            width: "80%",
            cursor: "pointer",
            padding:'20px',
            borderRadius:'20px',
          }}
        >
          <h1>Upcoming..</h1>
        </div>
      </Grid>
    </Grid>
    </>
   
  );
};

export default AdminPanel;
