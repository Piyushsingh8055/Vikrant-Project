import React from 'react'
import { CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <div className=' h-screen w-full flex justify-center items-center bg-gray-900'>
        <div className=' text-xl md:text-2xl flex flex-col gap-5 justify-center items-center text-white'>
            <CircularProgress/>
            <span>wait a sec</span>
        </div>  
    </div>
  )
}

export default Loader