import React from "react"
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;


function MyApp({ Component, pageProps }:any) {
  return (
        <Component {...pageProps} />
  )
}

export default MyApp
