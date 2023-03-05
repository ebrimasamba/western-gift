import React from "react";
import Container from "../global/Container";

const HeroSection = () => {
  return (
    <div
      className="h-[600px]  bg-cover bg-center text-white"
      style={{ backgroundImage: `url(/hero/hero-7.png)` }}
    >
      <Container className={"h-full flex flex-col justify-center"}>
        <div className="max-w-2xl ">
          <h1 className="text-5xl font-bold leading-[1.3]">
            Welcome To The Best Coding Bootcamp
          </h1>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
