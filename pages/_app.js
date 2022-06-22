import '../styles/globals.css'
import {useState}from "react"
import { Router } from 'next/router'
import Loader from "../componenets/Loader"

function MyApp({ Component, pageProps }) {

  const [loading,setloading]=useState(false)
  Router.events.on('routeChangeStart', (url) =>{
  setloading(true)
  })
  Router.events.on("routeChangeComplete", (url) =>{
    setloading(false)
  })
  Router.events.on(" window.location.reload", (url) =>{
    setloading(true)
  })
  return( 
    <>
  { loading && <Loader/> }
  <Component {...pageProps} />
    </>
  )
}

export default MyApp
