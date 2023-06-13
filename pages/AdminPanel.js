import React,{useState} from "react";
import { Grid, makeStyles, Button, Container } from "@material-ui/core";
import Image from "next/image";
import TipsImg from "../public/assets/images/tips.jpg";
import CallerImg from "../public/assets/images/caller.jpg";
import Gmail from "../public/assets/images/mail.png";
import Twitter from "../public/assets/images/twitter.png";
import InstaGram from "../public/assets/images/insta.png";
import FaceBook from "../public/assets/images/facebook.png";
import bgImage from "../public/assets/images/bgtexture.jpg";
import Background from '../public/assets/images/bgtexture.jpg';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import UserLog from "./UserLog";
import Feedback from "./Feedback";
import LineChart from "./LineChart";
import NewChart from "./NewChart";
const style = {
  position: 'absolute',
  // top: '5%',
  // left: '45%',
  overflow: 'auto',
  // transform: 'translate(-50%, -50%)',
  width: '100%',
  height:'100%',
 background:'skyblue',
  boxShadow: 24,
  "@media  (min-width: 300px) and (max-width: 450px)": {
    borderRadius: "5px",
    width: '100%',
  height:'100%',
  },
  "@media  (min-width: 451px) and (max-width: 599px)": {
    width: '80%',
  height:'90%',
  },
  "@media  (min-width: 600px) and (max-width: 1024px)": {
    width: '90%',
    height:'90%',
  },
   p: 1,
};
const useStyles = makeStyles({
  root: {
    position: "relative",
    maxWidth: "100%",
    background: "#fff",
  },
  containerBox: {
    // height: "auto",
    // width: "99.5%",
    padding: "10px",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: "100vh",
    backgroundRepeat: 'no-repeat',
    // width: '100%',
    // height: '100%',
    backgroundImage: `url(${Background.src})`,
    
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
  leftSection: {
    padding: "30px 5px 2px 3px",
  },
  rightSection: {
    padding: "30px 0px 2px 10px",
  },
  systemBox: {
    width: "100%",
    height: "28vh",
    background:'grey',
  },
  systemBox1: {
    width: "99.5%",
    height: "24vh",
    background:'grey',
    borderRadius:'10px',
    marginTop:'-15px',
  },
  typo_design: {
    fontFamily: "Nunito Sans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "36px",
    lineHeight: "50px",
    textAlign: "center",
    alignItems: "center",
    marginTop: "10px",
    color: "#000000",
    // background: "Navy",
    color: "#fff",
    borderRadius: "20px",
    padding: "22px",
    width: "80%",
    "@media (max-width: 958px)": {
      fontSize: "16px",
      lineHeight: "22px",
    },
  },
  SocialLinkBox: {
    height: "70px",
    display: "flex",
    alignItems: "center",
    JustifyContent: "center",
    cursor: "pointer",
    borderRadius: "5px",
  },
  LocationBox: {
    height: "200px",
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    JustifyContent: "center",
    cursor: "pointer",
    borderRadius: "5px",
  },
  iframeDesign:{
    width:'100%',
    height:'100%',
    borderRadius:'20px',
  },
});
const AdminPanel = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [lat, setLat] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const feedBackOpen = () => setFeedback(true);
  const feedBackClose = () => setFeedback(false);

  return (
    <Grid container spacing={0} className={classes.containerBox}>
     <h1>Sorry Men</h1>
    </Grid>
  );
};

export default AdminPanel;