import React,{useState} from "react";
import { Grid, makeStyles, Button, Container } from "@material-ui/core";
import Image from "next/image";
import TipsImg from "../public/assets/images/tips.jpg";
import CallerImg from "../public/assets/images/caller.jpg";
import Gmail from "../public/assets/images/mail.png";
import Twitter from "../public/assets/images/twitter.png";
import InstaGram from "../public/assets/images/insta.png";
import FaceBook from "../public/assets/images/facebook.png";
import Calender from "../public/assets/images/cal.png";
import Background from '../public/assets/images/bgtexture.jpg';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import UserLog from "./UserLog";
import Feedback from "./Feedback";
import CalenderPage from "./Calender";
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
    width: "100%",
    height: "24vh",
    // background:'grey',
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
    height: "150px",
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
      <Grid
        item
        xs={12}
        md={2}
        sm={12}
        sx={12}
        className={classes.leftSection}
        //   style={{border:'2px solid red'}}
      >
        <div className={classes.systemBox}>
          <div
            style={{
              marginTop: "2px",
              height: "99%",
              width: "99%",
              background: "#fff",
              justifyContent:'center',
              display:'flex',
              textAlign:'center',
alignItems:'center',
            }}
          >
            <Image
              src={TipsImg}
              alt="Picture of the author"
              width="520"
              height={420}
             
            />
          </div>
        </div>
        <div className={classes.systemBox}>
          <h1 className={classes.typo_design}>My Account</h1>
          <Button
            style={{
              marginLeft: "50px",
              background: "#fff",
              borderRadius: "10px",
              width: "65%",
              padding: "10px",
            }}
          >
            Click Here
          </Button>
        </div>
        <div className={classes.systemBox}>
          <Image
            src={CallerImg}
            alt="Picture of the author"
            width="500"
            height={490}
          />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        md={7}
        sm={12}
        sx={12}
        className={classes.leftSection}
        // style={{ border: "2px solid red" }}
      >
        <div
          className={classes.systemBox1}
          style={{
            // border: "2px solid red",
            justifyContent: "center",
            alignItems: "center",
            background:'grey',
            borderRadius:'10px',
          }}
        >
         <h2 className={classes.typo_design}>User Log</h2>
          <Modal
            open={open}
            onClose={handleClose}
            
          >
            <Box sx={style}>
            <div style={{display:'flex',height:'80px'}}> <span style={{float:'right',borderRadius:'50%',fontSize:'40px',width:'4%',justifyContent:'center',alignItems:'center',textAlign:'center',cursor:'pointer'}} onClick={handleClose}>X</span></div>
          
              <UserLog/>
            </Box>
          </Modal>
          <Button
          onClick={handleOpen}
            style={{
              marginLeft: "32%",
              background: "#fff",
              borderRadius: "10px",
              width: "20%",
              padding: "10px",
            }}
          >
            Click Here
          </Button>
        </div>
        <div style={{width:'99%',height:'320px',border:'4px solid white',justifyContent:'center',alignItems:'center',textAlign:'center',borderRadius:"10px",marginTop:'8px'}}>
        {/* <Image
              src={Calender}
              alt="Picture of the author"
              width="1210"
              height={320}
             
            /> */}
       <CalenderPage/>
        </div>
        <div style={{width:'99%',height:'320px',border:'4px solid white',justifyContent:'center',alignItems:'center',textAlign:'center',borderRadius:"10px",marginTop:'20px'}}>
        <NewChart/>
       {/* <LineChart/> */}
        </div>
      </Grid>
      <Grid item xs={12} md={3} sm={12} sx={12}>
        <Grid
          container
          spacing={0}
          className={classes.SocialLinkBox}
          // style={{ border: "2px solid red" }}
        >
          <Grid
            item
            xs={12}
            md={3}
            sm={12}
            sx={12}
            className={classes.SocialLinkBox}
            style={{ height: "70px", padding: "3px" }}
          >
            <a
              href="https://www.instagram.com/"
              target="new"
              title="Soundcloud"
            >
              <Image
                src={InstaGram}
                alt="Picture of the author"
                width="500"
                height={290}
              />
            </a>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sm={12}
            sx={12}
            className={classes.SocialLinkBox}
            style={{ height: "70px", padding: "3px" }}
          >
            <a href="https://www.facebook.com/" target="new" title="Soundcloud">
              <Image
                src={FaceBook}
                alt="Picture of the author"
                width="500"
                height={290}
              />
            </a>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sm={12}
            sx={12}
            className={classes.SocialLinkBox}
            style={{ height: "70px", padding: "3px" }}
          >
            <a href="https://mail.google.com/" target="new" title="Soundcloud">
              <Image
                src={Gmail}
                alt="Picture of the author"
                width="500"
                height={290}
              />
            </a>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sm={12}
            sx={12}
            className={classes.SocialLinkBox}
            style={{ height: "70px", padding: "3px" }}
          >
            <a
              href="https://twitter.com/i/flow/login"
              target="new"
              title="Soundcloud"
            >
              <Image
                src={Twitter}
                alt="Picture of the author"
                width="500"
                height={290}
              />
            </a>
          </Grid>
        </Grid>
        <div
          className={classes.LocationBox}
          style={{ border:'4px solid white',borderRadius:"20px", }}
        >
          <iframe
                                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4011591332214!2d77.38284451495223!3d28.617736682423658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff3427f6a17%3A0xb06a2d3f7237b807!2sPlot%20No%20C%2C%2076%2C%20Sector%2063%20Rd%2C%20C%20Block%2C%20Sector%2064%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1650868898630!5m2!1sen!2sin"
                                      title="title"
                                      // frameborder="0"
                                      id="lat"
                                      name="lat"
                                      onChange={(e) => setLat(e.target.value)}
                                      style={{ border: 0 }}
                                      value={lat}
                                      allowfullscreen=""
                                      aria-hidden="false"
                                      // tabindex="0"
                                     className={classes.iframeDesign}
                                    />
                                    {/* MAP HERE */}
        </div>
        <div style={{width:'100%',height:'280px',border:'4px solid white',borderRadius:"20px",marginTop:'5px',textAlign:'center',}}>
          <h4 style={{width:'90%',padding:'10px',fontSize:'35',fontFamily:'sans-serif',fontStyle:'bold',lineHeight:'20px'}}>
            We are on Journey together to raise humanity.What is or is not working for you ? $25 subcription created for any suggestion used !
          </h4>
        </div>
        <div style={{width:'100%',height:'335px',border:'4px solid white',justifyContent:'center',alignItems:'center',textAlign:'center',borderRadius:"20px",marginTop:'20px'}}>
         <h3>User Feedback Form</h3> 
        <Modal
            open={feedback}
            onClose={handleClose}
            
          >
            <Box sx={style}>
            <div> <span style={{float:'right',borderRadius:'50%',fontSize:'40px',width:'4%',justifyContent:'center',alignItems:'center',textAlign:'center',cursor:'pointer'}} onClick={feedBackClose}>X</span></div>
          
              <Feedback/>
            </Box>
          </Modal>
          <Button
          onClick={feedBackOpen}
            style={{
              marginLeft: "5%",
              background: "#fff",
              borderRadius: "10px",
              width: "40%",
              padding: "10px",
              marginTop:'20px'
            }}
          >
            Click Here To Open
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default AdminPanel;
