import Image from "next/image";
import React from "react";

import HeroImage from "../../public/assets/hero_image.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pt-[6rem] flex px-12 justify-around flex-wrap h-screen">
      <div className="pt-[10rem]">
        <h1 className="text-6xl leading-[68px] mb-4 tracking-wider capitalize">
          Welcome to sunyani
          <br /> pentecostal church.
        </h1>
        <p className="tracking-wide text-xl mb-8 capitalize">
          This church is located in sunyani but have other branches
          <br /> in berekum, drobo and accra.
        </p>
        <Link
          href={"/"}
          className="bg-blue-600 px-4 py-[0.7rem] text-white text-[1.05rem] rounded-md hover:bg-gradient-to-tr from-orange-600 to-blue-600 transition duration-300 ease-in-out capitalize"
        >
          learn more
        </Link>
      </div>
      <div className="right_container">
        <div className="bg-blue-600 w-[30rem] h-[30rem] rounded-full absolute bottom-0 z-[-1]" />
        <Image src={HeroImage} alt="Home image" className="object-cover" />
      </div>
    </div>
  );
};

export default Hero;
