import React from "react"
import { useState, createContext, useEffect } from "react"
import axios from "axios";

export const UserContext = createContext();

const UserProvider = ({children}) => {
    const [data, setData] = useState([]);

    const deleteItem = (id) => {
        axios.delete(`https://66288b8554afcabd07361951.mockapi.io/products/prod/${id}`)
        }

    useEffect(() => {
        axios.get("https://66288b8554afcabd07361951.mockapi.io/products/prod/")
        .then(result => setData(result.data))
    }, [])
    
    return (
        <UserContext.Provider value={{data, deleteItem, setData}}>
            {children}
        </UserContext.Provider>
    )
    
}

export default UserProvider;


