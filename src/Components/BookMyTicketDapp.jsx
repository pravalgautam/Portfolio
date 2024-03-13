import React from "react";

const BookMyTicketDapp = () => {
  return (
    <>
      <h1 className="text-2xl">Book My Ticket Dapp</h1>
      <div className="p-10 flex space-x-20 ">
        <img className="h-180 w-140 " src="dapp.png" alt="" />
      </div>
      <span>
        <ul className="list-disc  p-8">
          <li>React</li>
          <li>Tailwind Css</li>
          <li>Hardhat</li>
          <li>MetaMask</li>
        </ul>
      </span>
    </>
  );
};

export default BookMyTicketDapp;
