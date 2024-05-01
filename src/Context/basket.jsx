import { createContext, useState, useEffect } from "react";

export const BasketContext = createContext({})

const BasketProvider = ({children}) => {
    const storage = JSON.parse(localStorage.getItem("product"))
    const [basketData, setBasketData] = useState(storage || [])
    
    const addBasket = (data) => {
        const isExist = basketData.find((item) => item.id === data.id)

        if (!isExist) {
            setBasketData([...basketData, data])
        }
    }

    const deleteItemFromBask = (id) =>{
        const newData = basketData.filter((item)=> item.id !== id)
        setBasketData(newData);
    }

    useEffect(() => {
        localStorage.setItem("product", JSON.stringify(basketData || []))
    }, [])

    return (
        <BasketContext.Provider value={{ basketData, addBasket, deleteItemFromBask }}>{children}</BasketContext.Provider>
    )
}

export default BasketProvider