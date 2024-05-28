import React, { createContext, useContext } from 'react'
import NavLinks from './NavLinks'
import AppContext from './Context/AppContext'

export const NavBarContext = createContext()
const NavBar = () => {
    const [user,setUser] = React.useState({
        name:"Billy"
    })
    const logOut = () => {
        console.log("dsadas");
        setUser(null)
    }
  return (
    <NavBarContext.Provider value={{user,logOut}}>

    <div>
        <NavLinks></NavLinks>
        <AppContext></AppContext>
    </div>
    </NavBarContext.Provider>
  )
}

export default NavBar