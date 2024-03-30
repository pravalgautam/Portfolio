import React from "react";

const About = () => {
  return (
    <div className="text-bold text-3xl p-2">
      <h1>Who am i? </h1>
      <span className="text-lg sm:text-2xl ">
        Hello, I'm Praval Gautam, a passionate iOS developer with a keen eye for
        detail and a commitment to creating engaging and innovative mobile
        applications. I thrive on turning ideas into reality, combining my
        technical skills with a creative mindset. Explore my portfolio to get a
        glimpse of the projects I've brought to life.
      </span>

      <div className="flex flex-col p-8">
        <h1 className="p-4">Technical Skills</h1>
        <div className="flex space-x-3">
          <div className="px-6 p-2 bg-red-100 rounded-full flex justify-center items-center animate-bounce">
            <h1 className="text-lg">Swift</h1>
          </div>
          <div className="px-6 bg-yellow-100 rounded-full flex justify-center items-center rotate-12 ">
            <h1 className="text-lg">Solidity</h1>
          </div>
          <div className="px-6 bg-pink-100 rounded-full flex justify-center items-center">
            <h1 className="text-lg">SwifUI</h1>
          </div>
          <div className="px-6 bg-blue-100 rounded-full flex justify-center items-center">
            <h1 className="text-lg">UIKit</h1>
          </div>
          <div className="px-6 bg-red-100 rounded-full flex justify-center items-center">
            <h1 className="text-lg">Core Data</h1>
          </div>
          <div className="px-6 bg-green-100 rounded-full flex justify-center items-center">
            <h1 className="text-lg"> Core Animation</h1>
          </div>
        </div>
        <div className="flex py-2 space-x-3">
          <div className="px-6 p-2 bg-pink-100 rounded-full flex justify-center items-center">
            <h1 className="text-lg">Figma</h1>
          </div>
          <div className="px-6 bg-blue-100 rounded-full flex justify-center items-center">
            <h1 className="text-lg">ReactJs</h1>
          </div>
          <div className="px-6 bg-red-100 rounded-full flex justify-center items-center">
            <h1 className="text-lg">Tailwind Css</h1>
          </div>
          <div className="px-6 bg-green-100 rounded-full flex justify-center items-center">
            <h1 className="text-lg"> C++</h1>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="px-6 p-2 bg-purple-100 rounded-full flex justify-center items-center">
            <h1 className="text-lg">Git</h1>
          </div>
          <div className="px-6 bg-orange-100 rounded-full flex justify-center items-center">
            <h1 className="text-lg">Github</h1>
          </div>
        </div>
      </div>
      <div className="flex space-x-8 items-center">
        <div className="h-8 w-8 rounded-full bg-green-600 animate-ping flex justify-center items-center">
          <div className="h-4 w-4 rounded-full  bg-green-400"></div>
        </div>
        <h1 className="text-green-400 text-lg sm:text-2xl ">
          Available for Work{" "}
        </h1>
      </div>
    </div>
  );
};

export default About;
