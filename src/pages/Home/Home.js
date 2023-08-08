import React from 'react';
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Intro from '../../components/Intro/Intro';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
  <>
  <Navbar />
  <div className='Wrapper'>
    <Intro />
    <section id="about"><About /></section>
    <section id="projects"><Projects /></section>
    <section id="contact"><Contact /></section>
    <Footer />
  </div>
  </>
  );
}

export default Home;
