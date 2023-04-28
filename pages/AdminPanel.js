import React,{useState} from "react";
import { Grid, makeStyles, Button, Container } from "@material-ui/core";
import Image from "next/image";
import TipsImg from "../public/assets/images/tips.jpg";
import CallerImg from "../public/assets/images/caller.jpg";
import Gmail from "../public/assets/images/mail.png";
import Twitter from "../public/assets/images/twitter.png";
import InstaGram from "../public/assets/images/insta.png";
import FaceBook from "../public/assets/images/facebook.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import UserLog from "./UserLog";
const style = {
  position: 'absolute',
  top: '50%',
  left: '45%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height:'100%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const useStyles = makeStyles({
  root: {
    position: "relative",
    maxWidth: "100%",
    background: "#fff",
  },
  containerBox: {
    // height: "auto",
    width: "99.5%",
    padding: "10px",
    background: "#ebb44e !important",
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
  leftSection: {
    padding: "30px 5px 2px 3px",
  },
  rightSection: {
    padding: "30px 0px 2px 10px",
  },
  systemBox: {
    width: "100%",
    height: "28vh",
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
});
const AdminPanel = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
              height: "58%",
              width: "100%",
              background: "#fff",
            }}
          >
            <Image
              src={TipsImg}
              alt="Picture of the author"
              width="500"
              height={190}
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
        style={{ border: "2px solid red" }}
      >
        <div
          className={classes.systemBox}
          style={{
            border: "2px solid red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className={classes.typo_design}>My Library</h1>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
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
      </Grid>
      <Grid item xs={12} md={3} sm={12} sx={12}>
        <Grid
          container
          spacing={0}
          className={classes.SocialLinkBox}
          style={{ border: "2px solid red" }}
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
          style={{ border: "2px solid red" }}
        >
          hjhjjjjj
        </div>
      </Grid>
    </Grid>
  );
};

export default AdminPanel;
