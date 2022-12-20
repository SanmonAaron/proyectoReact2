import React, {useState} from 'react'

const Context = React.createContext({})
export function GifsContextProvider ({children}){
    const [value, updateValue] = useState([])
    return <Context.Provider value={{value, updateValue}}>
        {children}
    </Context.Provider>
}
export default Context