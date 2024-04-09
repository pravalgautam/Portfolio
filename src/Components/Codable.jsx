import React from 'react';

const Codable = () => {
  const images = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <>
      <h1 className='text-2xl'>Codable: An Edtech App</h1>
      <div className='p-10 flex space-x-20 animate-slideRight'>
        {images.map(index => (
          <img
            key={index}
            className='h-80 w-40'
            src={`c${index}.png`}
            alt={`Image ${index}`}
          />
        ))}
      </div>
      <ul className="list-disc p-8">
        <li>SwiftUI</li>
        <li>Firebase</li>
      </ul>
    </>
  );
};

export default Codable;
