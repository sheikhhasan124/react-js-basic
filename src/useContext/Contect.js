import React, { useContext, useState } from "react"

const appContecxt = React.createContext()

const AppProvider =({children})=>{
    const [num, setNum]=useState(0)
    const [numPapa, setNumPapa]=useState(0)

    const addNum=()=>{
        setNum(num + 1)
    }
  return(
      <appContecxt.Provider value={{
          num,
          addNum,
           numPapa,
           setNumPapa
           }}>
          {children}
      </appContecxt.Provider>
  )
}

export const useGlobalContext=()=>{
    return useContext(appContecxt)
}
export {AppProvider, appContecxt}