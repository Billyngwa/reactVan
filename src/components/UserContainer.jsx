import React, { useContext } from 'react'
import { NavBarContext } from './NavBar'

const UserContainer = () => {
    const {user,logOut} = useContext(NavBarContext)
  return (
    <div className='flex gap-6 items-center'>
        <h1>{user?.name ? user?.name : ""}</h1>
        {
            user?.name !=null ? <button type="button" className='bg-red-500 text-white p-2 rounded' onClick={logOut}>Logout</button> :
             <button type="button" className='bg-red-500 text-white p-2 rounded' >Login please</button>
        }
    </div>
  )
}

export default UserContainer