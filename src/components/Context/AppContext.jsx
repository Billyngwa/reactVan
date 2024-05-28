import React, { useEffect } from 'react'
import { useGlobalContext } from './GlobalContext'
const {globalState} = useGlobalContext()
const AppContext = () => {
  useEffect(()=> {
    console.log(globalState);
  },[])
  return (
   <div>
    he
   </div>
  )
}

export default AppContext