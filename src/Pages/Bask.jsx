import { useContext } from "react";
import { BasketContext } from "../Context/basket";

const BasketPage = () => {
    const { basketData } = useContext(BasketContext)
    return (
        <div>
            <h1>basket: {basketData?.length}</h1>
                {basketData.map((item) => (
                    <div className="flex gap-2 mb-5 shadow-2xl mt-5" key={item.id}>
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <button className="bg-red-900 text-white h-fit">delete</button>
                        </div>
                    </div>
                ))}
        </div>
    )
}
export default BasketPage;