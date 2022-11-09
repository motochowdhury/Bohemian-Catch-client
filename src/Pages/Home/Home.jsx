import React from "react";
import { dynamicTitle } from "../../Utils/TitleChanger";
import Client from "./Client";
import Gallery from "./Gallery";
import Hero from "./Hero";
import HomeService from "./HomeServices";

const Home = () => {
  dynamicTitle("Bohemian-Cath");
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
