import "../style/globals.css";
import Header from "./headerandfooter/header";
import Footer from "./headerandfooter/footer";
import React from "react";
import MycontextProvider from "./context-API"; 


export default function App({ Component, pageProps }) {
  return (
    <>  

    <MycontextProvider>

    <Header/>
    
    <Component {...pageProps} />
    <Footer/>
    
    </MycontextProvider>
 </>
   
  );
}