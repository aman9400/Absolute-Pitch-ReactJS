import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import LandingPage from "../src/LandingPage";
export default function Home() {
  return (
    <Layout>
      <div>
       <LandingPage/>
      </div>
    </Layout>
  );
}
