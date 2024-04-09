import React from 'react'
import DailyInsight from './DailyInsight'
import Peace from './Peace'
import UrbanStride from './UrbanStride'
import BookMyTicketDapp from './BookMyTicketDapp'
import Swifting from './Swifting'
import Codable from './Codable'

const Projects = () => {
  return (
    <div className='overflow-hidden '>
      <Codable></Codable>
      <UrbanStride></UrbanStride>
      <DailyInsight></DailyInsight>
      <Peace></Peace>
      <BookMyTicketDapp></BookMyTicketDapp>
      <Swifting></Swifting>
      
    </div>
  )
}

export default Projects