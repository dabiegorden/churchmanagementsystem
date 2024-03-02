import React from "react";
import { AboutUs, Donate, Events, Hero } from "./components";
import Sermons from "./Sermons/page";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Donate />
      <Events />
      <Sermons />
    </main>
  );
};

export default Home;
