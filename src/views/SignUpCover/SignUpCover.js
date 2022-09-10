import React, { useState, useEffect } from "react";
import styles from "./SignUpCover.module.css";
import Link from "next/link";
import Logo from "../../../public/assets/images/logo/logo.png";
// import Logo2 from "../../../public/assets/images/logo/logo2.png";
import Logo2 from "../../../public/assets/images/logo/logo2.png";
import Grid from '@mui/material/Grid';
import SignInBackground from "../../../public/bgImage.jpg"
import Image from "next/image";
import SignUPForm from "./components/SignUpForm/SignUpForm";
// import MetaTitle from "components/helper/MetaTitle";
// import Spinner from "components/organisms/Spinner";

function NewSignUpCover() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <Grid container spacing={0}>
      <Grid item xs={6}
        className={styles.fleft}
        style={{
          // background: `url(${SignInBackground})`,
          // backgroundRepeat: "no-repeat",
          background: '#50E0A9',
        }}
        >
        <div className={styles.header_text}>
          <div className="row">
            <div className="col-sm-12 col-12 col-md-12">
              <Image src={Logo2} alt="Beatnik" className={styles.headingTag} />
            </div>
          </div>
        </div>
        <div className={styles.content_box}>
          <div className="row">
          </div>
        </div>
      </Grid>
      <Grid item xs={6} style={{bordee:'2px solid red'}}>
        <div className={styles.frightInner} style={{bordr:'2px solid red'}}>
          <div className={styles.imageContainer}>
            <Image src={Logo2} alt="" />
          </div>
        </div>

        <div className={styles.right_content_container}>
       
            <SignUPForm />
            
        </div>
      </Grid>
    </Grid>
  );
}

export default NewSignUpCover;
