import Head from 'next/head';
import Header from "../componenets/header";

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
 
    </>
  )
}