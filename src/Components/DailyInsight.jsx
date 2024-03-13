import React from "react";

const DailyInsight = () => {
  return (
   <>
    <h1 className='text-2xl'>Daily Insight</h1>
          <div className='p-10 flex space-x-20 '>

    <img className='h-80 w-40 ' src="mockup1.png" alt="" />
    <img className='h-80 w-40 ' src="mockup2.png" alt="" />

    
        </div>
        <span>
            <ul className="list-disc  p-8">
              <li>SwiftUI</li>
              <li>Async Await</li>
              <li>Hacker News Api</li>
            </ul>
          </span>
    </>
  );
};

export default DailyInsight;
