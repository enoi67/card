import { useContext } from "react";
import "./sorry.css";
import { UserContext } from "./Context/UserContext";
import { Link } from "react-router-dom";
import { BasketContext } from "./Context/basket";

const NewTask = () => {
  const { data, deleteItem, setData } = useContext(UserContext);
  const { addBasket } = useContext(BasketContext);

  const onDelete = (id) => {
    deleteItem(id);
    const newDta = data.filter((item) => item.id !== id);
    setData(newDta);
  };

  const onAdd = (product) => {
    addBasket(product);
  };

  return (
    <div>
      <div className="flex justify-between px-5">
        <div className="flex justify-center gap-1">
          {data.length ? (
            <h1 className="font-bold text-4xl">{data.length}</h1>
          ) : (
            <h1>loading...</h1>
          )}
        </div>
        <div className="flex gap-3">
          <Link to={"/AddData"}>AddData</Link>
          <Link to={"/basket"}>Basket Page</Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 max-w-[1400px] mx-auto mt-[65px]">
        {data.reverse().map((product) => (
          <div key={product.id}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <h1>{product.title}</h1>
                  <p>[{product.desc}]</p>
                </div>
                <div className="flip-card-back">
                  <h1>{product.subtitle}</h1>
                  <button
                    onClick={() => onDelete(product.id)}
                    className="z-[999] py-1 px-3 bg-red-500 rounded-[50%] text-white absolute top-0 right-0"
                  >
                    X
                  </button>
                  <button
                    onClick={() => onAdd(product)}
                    className="z-[999] py-1 px-2 text-white bg-green-500 left-0"
                  >
                    Add to basket
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NewTask;
