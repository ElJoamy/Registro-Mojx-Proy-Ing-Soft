import React, { useEffect, useState } from "react";
import {Route, Routes} from 'react-router-dom';
import {getPlacesData} from "../api";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Recommend from "../components/Recommend";
import ScrollToTop from "../components/ScrollToTop";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import scrollreveal from "scrollreveal";
 function Home() {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        getPlacesData().then((data) => {console.log(data); setPlaces(data)})
    }, [])
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </div>
  );
}
export default Home;
