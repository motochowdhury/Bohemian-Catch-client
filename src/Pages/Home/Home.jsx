import React from "react";
import Client from "./Client";
import Gallery from "./Gallery";
import Hero from "./Hero";
import HomeService from "./HomeServices";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeService />
      <Gallery />
      <Client />
    </>
  );
};

export default Home;
