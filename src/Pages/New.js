import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { Navigate, useNavigate } from "react-router-dom"

function New(){
    const [input, setInput] = useState({})
    const Navigate = useNavigate()
    function handleOnclick(){
        const token = localStorage.getItem("token")
        axios.post("http://localhost:8000/post/create",input ,{headers:{authorization:token}})
        .then(()=>{
           toast.success("Blog Created!")
           Navigate("/dashboard")
        })
        .catch((e)=>{
            toast.error(e.response.data.message)
            Navigate("/profile")
        })
    }
    return(
        <div className="m-auto w-1/2 mt-5 p-5 bg-white rounded-md">
            <h2 className="mb-8 text-center font-bold text-2xl">Blog post</h2>
            <input type="file"/>
            <div className="my-2">
                <input className="text-4xl font-bold w-full" type="text" placeholder="New post title here..."
                onChange={(e)=> setInput({...input,Title:e.target.value})} />
            </div>
            <div className="border border-gray-100 my-3"></div>
           
            <textarea className="border w-full rounded-md p-2 my-2" rows="10" placeholder="Blog content" 
            onChange={(e)=> setInput({...input,Content:e.target.value})}></textarea>
            <div className="flex justify-end ">
                 <button className="px-6 py-2 bg-blue-500 text-white rounded-md" onClick={handleOnclick}>Post</button>
            </div>
        </div>
    )
}

export default New