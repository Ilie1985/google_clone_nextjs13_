import React, { Fragment } from "react";
import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import HomeSearch from "@/components/HomeSearch";

const Home = () => {
  return (
    <Fragment>
      {/* HEADER */}
      <HomeHeader />

    
      <div className="flex flex-col items-center mt-24">
        <Image
          alt="google logo"
          width="300"
          height="100"
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
        />

        <HomeSearch />
      </div>
    </Fragment>
  );
};

export default Home;
