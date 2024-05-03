import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DynamicPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [data, setData] = useState({})

    const url = 'https://66288b8554afcabd07361951.mockapi.io/products/prod/'

    useEffect(() => {
        axios.get(`https://66288b8554afcabd07361951.mockapi.io/products/prod/${params.id}`)
        .then((res) => setData(res.data))
    }, [params])
    return (
        <div className="flex flex-col items-center justify-center">
            <button onClick={() => navigate(-1)}>return back</button>
            <p>Products</p>
            <div className="flex flex-col">
                <img src={data.img} className="h-full object-cover" alt={data.title} />
                <h1 className="font-bold">{data.title}</h1>
                <p>{data.desc}</p>
                <span>{data.price}</span>
            </div>
        </div>
    )
}
export default DynamicPage;