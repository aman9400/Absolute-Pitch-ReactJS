import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";
const useStyles = makeStyles({
  root: {
    position: "relative",
    maxWidth: "100%",
  },
  containerBox: {
    // height: "auto",
    width: "99.5%",
    padding: "10px",
    background: "#fff !important",
    height: "100vh",
    "@media (min-width: 770px) and (max-width:1024px)": {
      height: "95%",
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
});
const AdminPanel = () => {
  const classes = useStyles();
  const router = useRouter();
  const handleClick = (e, path) => {
    router.push(path);
  };
  return (
    <Grid container spacing={0} className={classes.containerBox}>
      <Grid item xs={12} md={3} sm={12} sx={12}>
        <div
          style={{
            background: "blue",
            height: "200px",
            width: "90%",
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
            width: "90%",
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
            width: "90%",
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
            width: "90%",
            cursor: "pointer",
            padding:'20px',
            borderRadius:'20px',
          }}
        >
          <h1>Next..</h1>
        </div>
      </Grid>
    </Grid>
  );
};

export default AdminPanel;
