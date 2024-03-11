import React from "react";

const About = () => {
  return (
    <div className="text-bold text-3xl p-20">
      <h1>Who am i? </h1>
      <span className="text-2xl">
        Hello, I'm Praval Gautam, a passionate iOS developer with a keen eye for
        detail and a commitment to creating engaging and innovative mobile
        applications. I thrive on turning ideas into reality, combining my
        technical skills with a creative mindset. Explore my portfolio to get a
        glimpse of the projects I've brought to life.
      </span>
      <span>
        <ul className="list-disc text-2xl p-8">
          <h2>Technical Skills</h2>
          <li>Languages: Swift, Objective-C</li>
          <li>Frameworks: SwifUI,UIKit, Core Data, Core Animation</li>
          <li>Tools: Xcode, Interface Builder, Git</li>
          <li>Design Patterns: MVC, MVVM</li>
          <li>API Integration: RESTful,Alomfire</li>
          <li>Testing: XCTest, UI Testing</li>
        </ul>
      </span>
      <div className="flex space-x-8 items-center">
        <div className="h-8 w-8 rounded-full bg-green-600 animate-ping flex justify-center items-center">
          <div className="h-4 w-4 rounded-full  bg-green-400"></div>
        </div>
        <h1 className="text-green-400">Available for Work </h1>
      </div>
    </div>
  );
};

export default About;
