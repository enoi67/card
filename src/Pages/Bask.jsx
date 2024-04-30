import { useContext, useState, useEffect } from "react";
import { BasketContext } from "../Context/basket";

const BasketPage = () => {
    const { basketData } = useContext(BasketContext)
    const [count, setCount] = useState(() => Number(localStorage.getItem('count')) || 0);

    useEffect(() => {
        localStorage.setItem('count', count);
      }, [count]);
    
      const increment = () => {
        if (count < 10) {
          setCount(count + 1);
        }
      };
    
      const decrement = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      };

    return (
        <div>
            <h1>basket: {basketData?.length}</h1>
                {basketData.map((item) => (
                    <div className="flex gap-2 mb-5 shadow-2xl mt-5 h-[75px] relative px-5" key={item.id}>
                        <div className="flex justify-between items-center gap-2">
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <div className="absolute right-5">
                                <div className="flex flex-row justify-between items-center gap-1">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={decrement}>-</button>
                                    <div className="mx-4 text-2xl">{count}</div>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={increment}>+</button>
                                    <button className="bg-red-900 text-white h-fit">delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}
export default BasketPage;