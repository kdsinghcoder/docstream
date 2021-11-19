import Head from "next/head";
import Nav from "../components/LandingPage/Nav";
import Hero from "../components/LandingPage/Hero";
import About from "../components/LandingPage/About";
import Fetures from "../components/LandingPage/Fetures";
import Video from "../components/LandingPage/Video";
import Faq from "../components/LandingPage/Faq";
import Footer from "../components/LandingPage/Footer";
import Contact from "../components/LandingPage/Contact";
import {React, useEffect, useState} from 'react';
export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Docstream</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Hero />
      <About />
      <Fetures />
      <Video />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
