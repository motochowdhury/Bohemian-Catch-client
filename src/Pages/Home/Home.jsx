import React from "react";
import Gallery from "./Gallery";
import Hero from "./Hero";
import HomeService from "./HomeServices";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeService />
      <Gallery />
    </>
  );
};

export default Home;
