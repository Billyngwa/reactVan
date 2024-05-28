import React, { useState } from 'react'
import UserContainer from './UserContainer'
import img1 from "../assets/todo.jpg"

const NavLinks = () => {
    const links = [
        "Home", "About", "Services", "Profile"
    ]
  return (
    <div className='flex justify-between py-3 px-4'>
        <div className='w-[40px] h-[40px] '>
            <img src={img1} alt="" className='w-[100%] h-[100%] rounded' />
        </div>
        <nav>
            <ul className="flex items-center gap-8">
                {
                    links.map((link,index) => {
                        return (
                            <li key={link}>{link}</li>
                        )
                    })
                }
            </ul>
        </nav>
        <UserContainer></UserContainer>
    </div>
  )
}

export default NavLinks