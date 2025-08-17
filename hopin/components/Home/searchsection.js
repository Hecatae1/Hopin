import React from 'react'
import Inputitem from './inputitem';

function searchsection() {
  return (
    <div className='p-2 md:pd-6 border-[2px] border-slate-200 rounded-xl  flex-wrap pt-5 pb-3 pl-7 pr-7 shadow-md bg-white'>
        <p className='text-[20px] font-bold'>
            Get a ride
        </p>
        <Inputitem type='current'/>
        <Inputitem type='destination'/>
        <button className='bg-black text-white w-full p-3 rounded-lg mt-4 cursor-pointer'>
            Search
        </button>
    </div>
  )
}

export default searchsection