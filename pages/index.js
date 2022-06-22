import Head from 'next/head';
import Posts from "../componenets/Posts";
import Header from "../componenets/header";
import Footer from "../componenets/footer";
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <>
      <Head>
        <title>futuguard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className={styles.body_container}>
        <div className={styles.body_cardContainer}>
       <Posts/>
        </div>
      </div>
   <Footer/>
    </>
  )
}
