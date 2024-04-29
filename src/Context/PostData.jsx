import { useState } from "react";

const Post = () => {
    const [data, setData] = useState([]);
    const [titleInp, setTitleInp] = useState("")
    const [descInp, setDescInp] = useState("")
    const [subtitle, setSubTitle] = useState("")

    const url = 'https://66288b8554afcabd07361951.mockapi.io/products/prod/'

    const postData = () => {
        fetch(url,{
            method: "POST",

            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                title: titleInp,
                desc: descInp,
                subtitle: subtitle
            })
            
        })
        .then((response) => response.json())
        .then((result) => setData([result, ...data]))
    }

    const addData = () => {
        postData()
    }

    return (
        <div>
            <div className="flex justify-center gap-1">
                <input type="text"  onChange={(e) => setTitleInp(e.target.value)} placeholder="title" className="border p-3"/>
                <input type="text"  onChange={(e) => setDescInp(e.target.value)} placeholder="description" className="border p-3"/>
                <input type="text"  onChange={(e) => setSubTitle(e.target.value)} placeholder="translate" className="border p-3"/>
                <div>
                    <button className="py-4 px-6 bg-green-700 text-white" onClick={addData}>Add</button>
                </div>
            </div>
        </div>
    );
}

export default Post;