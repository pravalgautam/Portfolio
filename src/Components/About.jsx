import React from "react";

const About = () => {
  return (
    <div className="text-bold text-3xl overflow-hidden ">
      <h1 className="text-2xl p-8 pl-40 pr-40">Who am I?</h1>
      <p className="text-base sm:text-lg p-8 pl-40 pr-40">
        Hello, I'm Praval Gautam, a passionate iOS developer with a keen eye for
        detail and a commitment to creating engaging and innovative mobile
        applications. I thrive on turning ideas into reality, combining my
        technical skills with a creative mindset. Explore my portfolio to get a
        glimpse of the projects I've brought to life.
      </p>

      <div className="flex flex-col w-full p-8 pl-40 pr-40 ">
        <h2 className="p-4">Technical Skills</h2>
        <div className="flex flex-wrap space-x-3 space-y-2 p-8">
          <div className="px-6 py-2 bg-red-100 rounded-full flex justify-center items-center animate-bounce">
            <h2 className="text-lg">Swift</h2>
          </div>
          <div className="px-6 py-2 bg-yellow-100 rounded-full flex justify-center items-center rotate-12">
            <h2 className="text-lg">Solidity</h2>
          </div>
          <div className="px-6 py-2 bg-pink-100 rounded-full flex justify-center items-center">
            <h2 className="text-lg">SwiftUI</h2>
          </div>
          <div className="px-6 py-2 bg-blue-100 rounded-full flex justify-center items-center">
            <h2 className="text-lg">UIKit</h2>
          </div>
          <div className="px-6 py-2 bg-red-100 rounded-full flex justify-center items-center">
            <h2 className="text-lg">Core Data</h2>
          </div>
          <div className="px-6 py-2 bg-green-100 rounded-full flex justify-center items-center">
            <h2 className="text-lg">Core Animation</h2>
          </div>
          <div className="px-6 py-2 bg-pink-100 rounded-full flex justify-center items-center">
            <h2 className="text-lg">Figma</h2>
          </div>
          <div className="px-6 py-2 bg-blue-100 rounded-full flex justify-center items-center">
            <h2 className="text-lg">ReactJs</h2>
          </div>
          <div className="px-6 py-2 bg-red-100 rounded-full flex justify-center items-center">
            <h2 className="text-lg">Tailwind Css</h2>
          </div>
          <div className="px-6 py-2 bg-green-100 rounded-full flex justify-center items-center">
            <h2 className="text-lg">C++</h2>
          </div>
          <div className="px-6 py-2 bg-purple-100 rounded-full flex justify-center items-center">
            <h2 className="text-lg">Git</h2>
          </div>
          <div className="px-6 py-2 bg-orange-100 rounded-full flex justify-center items-center">
            <h2 className="text-lg">Github</h2>
          </div>
          <div className="px-6 py-2 bg-orange-100 rounded-full flex justify-center items-center">
            <h2 className="text-lg">Gitlab</h2>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
