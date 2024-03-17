import React from 'react'
import DailyInsight from './DailyInsight'
import Peace from './Peace'
import UrbanStride from './UrbanStride'
import BookMyTicketDapp from './BookMyTicketDapp'

const Projects = () => {
  return (
    <div className='overflow-scroll'>
      <UrbanStride></UrbanStride>
      <DailyInsight></DailyInsight>
      <Peace></Peace>
      <BookMyTicketDapp></BookMyTicketDapp>
      
    </div>
  )
}

export default Projects