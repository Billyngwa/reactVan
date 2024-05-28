import React, { createContext, useContext, useState } from 'react'

 const globalContext = createContext();

 
 
 export const useGlobalContext =  () => useContext(globalContext);
 
 const GlobalContext = ({children}) => {
  const [globalState,setGlobalState] = useState("Bob")
  return (
    <globalContext.Provider value={{globalState,setGlobalState}}>
        {children}
    </globalContext.Provider>
  )
}

export default GlobalContext