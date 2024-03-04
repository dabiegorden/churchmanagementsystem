import React from "react";
import { Hero } from "./components";
import Navbar from "./container/Navbar";
import Footer from "./container/Footer";

const Home = () => {
  return (
    <main className="home">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
};

export default Home;
