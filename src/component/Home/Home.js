import React from "react";
import Navbars from "../Navbars/Navbars";
import Headers from "../Header/Headers";
import Sliders from "../Slider/Sliders";
import Cards from "../Cards";
import Counters from "../Counter/Counters";
import Features from "../Features/Features";
import Send_me from "../Send_me/Send_me";
import Reviews from "../Reviews/Reviews";

import Footer from "../Footer/Footer";
import Info from "../Info/Info";
import BackToTop from "../BackToTop/BackToTop";

export default function Home() {
  return (
    <>
      <Navbars />
      <Headers />
      <Counters />
      <Features />
      <Sliders />
      <Send_me />
      <Reviews />
      <Info />
      <Footer />

      <BackToTop />

      
</>
  );
}
