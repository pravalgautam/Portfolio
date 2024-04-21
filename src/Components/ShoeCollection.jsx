import React from 'react'

const ShoeCollection = () => {
  return (
    <>
    <h1 className="text-2xl">Mochi</h1>
    <div className="p-10 flex space-x-20 animate-slideLeft">
      <img className="h-80 w-40 " src="n1.png" alt="" />
      <img className="h-80 w-40 " src="n2.png" alt="" />
      <img className="h-80 w-40 " src="n3.png" alt="" />
      <img className="h-80 w-40 " src="n4.png" alt="" />
      <img className="h-80 w-40 " src="n5.png" alt="" />
      <img className="h-80 w-40 " src="n7.png" alt="" />
      <img className="h-80 w-40 " src="n6.png" alt="" />
    </div>
    <span>
      <ul className="list-disc  p-8">
        <li>SwiftUI</li>
        <li>Swift</li>
      </ul>
    </span>
  </>

  )
}

export default ShoeCollection