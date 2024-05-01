import { useContext  } from "react";
import { BasketContext } from "../Context/basket";
import BaskCard from "./BaskCard";

const BasketPage = () => {
    const { basketData } = useContext(BasketContext)

    return (
        <div>
            <h1>basket: {basketData?.length}</h1>
                {basketData.map((item) => (
                  <BaskCard item={item}></BaskCard>
                ))}
        </div>
    )
}
export default BasketPage;