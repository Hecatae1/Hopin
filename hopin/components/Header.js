import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

function Header() {
    const headermenu = [
        {
            id:1,
            name:"Ride",
            icon:'/taxi.png'
        },
        {
            id:2,
            name:"Package",
            icon:'/box.png' // just a placeholder icon for a package icon
        }
    ]
  return (
    <div className="p-5 pb-3 pl-9 pr-7 pt-3 border-b-[4px] border-gray-100
    flex justify-between items-center  bg-white shadow-md" >   
        <div className="flex gap-24 items-center">
            <Image src='/hopin.png' 
            width={60} height = {60} alt='logo'/> 
            <div className="flex gap-6 items-center">
                {headermenu.map((item)=>(
                    <div key={item.id} className="flex gap-2 items-center cursor-pointer">
                        <Image src={item.icon} 
                        width={18} height={18} alt = 'icons'/>
                        <h2 className='text-[14px] font-semibold'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
        <UserButton/>
    </div>
  )
}
export default Header
