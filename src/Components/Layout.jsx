import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Fade } from "react-awesome-reveal";

const Layout = ({children}) => {
    return (
      <div className="MainContainer w-screen h-screen sm:p-28 ">
       
        <div className="infoContainer bg-white sm:p-8 p-2 shadow-2xl  overflow-scroll" >
        <Fade cascade damping={0.2}>

          <Navbar />
          </Fade> 
          <Fade cascade damping={1}>
   < Outlet/>
   </Fade> 
 
        </div>
       
        <Footer/>
      
       
      </div>
    );
  };
  
  export default Layout;
  