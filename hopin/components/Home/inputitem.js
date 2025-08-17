import React from 'react'
import Image from 'next/image';
function inputitem({type}) {
  return (
    <div  className='bg-slate-200 rounded-lg mt-3  outline-none border-b-[1px] w-full p-3 flex items-center gap-3'>
        <Image src= {type == 'current'?'/map-pin.png' : '/target.png'} width={20} height={20} alt='location icon'/>
        <input type='text' placeholder={type =='current'?'Current location':'Destination'} className='outline-none bg-transparent w-full'/>
    </div>
  )
}

export default inputitem