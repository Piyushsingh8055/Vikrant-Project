import React from 'react'
import { Link } from 'react-router-dom'
import err from '../assets/404.jpg'

const PageNotFound = () => {
  return (
    <div className=' flex flex-col justify-center items-center h-screen w-full'>
      <img src={err} className=' h-[500px] w-[500px]'/>
      <Link to='/' className=' py-2 px-5 bg-blue-600 rounded-full text-white' >Go Back</Link>
    </div>
  )
}

export default PageNotFound