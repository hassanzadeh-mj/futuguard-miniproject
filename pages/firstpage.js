import Head from 'next/head';
import Link from 'next/link';
import Svgicon from '../src/Logo';
import styles from '../styles/Home.module.css';
import Header from "../componenets/header";
import Footer from "../componenets/footer";



export default function Home() {
  return (
    <>
      <Head>
        <title>futuguard first page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className={styles.body_container}>
        <div className={styles.body_cardContainer}>
          <div className={styles.card}>
            <div className={styles.card_header}>
              <img src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg"
                alt="ballons" />
            </div>
            <div className={styles.card_body}>
              <h4>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
              </h4>
              <div className={styles.card_footer}>

              <div className={styles.body_user}>
                <img src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo"
                  alt="user" />
                <div className={styles.body_userInfo}>
                  <h5>امین اصغری</h5>
                  <small>فروشنده</small>
                </div>
              </div>
              <Link href="/" >
              <span className={styles.body_tag} >ورود به صفحه</span>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </>
  )
}
