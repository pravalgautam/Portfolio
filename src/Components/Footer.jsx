import React from 'react'

const Footer = () => {
  return (
     <div
      className={`sliding-bar flex justify-center items-center  bg-[#DDFF9C] w-full h-16 overflow-hidden whitespace-nowrap`}
            >
              <h1 className="mx-4 animate-slideRight">
                <ol className="list-disc flex space-x-20 ">
                  <li>iOS Development</li>
                  <li>WebApp (Html, TailwindCss)</li>
                  <li>dApps</li>
                  <li>ReactJS</li>
                  <li>Swift</li>
                  <li>Solidity</li>
                  <li>C++</li>
                  <li>Figma</li>
                  <li>Git</li>
                  <li>Github</li>
                </ol>
              </h1>
            </div>
 
  )
}

export default Footer