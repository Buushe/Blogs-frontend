import { useState } from "react"
import axios from "axios"
import {toast} from "react-toastify"
function Signup(){

    const[input,setInput] = useState({ })
    function handlesubmit(){
        
        axios.post("http://localhost:8000/auth/signup",input)
        .then((res)=> toast.success("You have created account!"))
        .catch((e)=> toast.error(e.response.data.message))
    }
    return (
        <div className="bg-white m-auto mt-10 rounded-md p-10 w-[650px] ">
            <div className="text-center">
                <h3 className="font-bold text-2xl">Welcome to DEV Community 👩‍💻👨‍💻</h3>
                <p>DEV Community 👩‍💻👨‍💻 is a community of 989,800 amazing developers </p>
            </div>
            <div className="py-3 space-y">
                <div className="flex flex-col">
                    <span className="py-2">First Name</span>
                    <input className="border border-gray-300 p-2 rounded-md" type="text" 
                    onChange={(e)=> setInput({...input,firstName:e.target.value})}/>
                </div>
                <div className="flex flex-col">
                    <span className="py-2">Second Name</span>
                    <input className="border border-gray-300 p-2 rounded-md" type="text" 
                    onChange={(e)=> setInput({...input,lastName:e.target.value})}/>
                </div>
                <div className="flex flex-col">
                    <span className="py-2">Email</span>
                    <input className="border border-gray-300 p-2 rounded-md" type="text" 
                    onChange={(e)=> setInput({...input,email:e.target.value})}/>
                </div>
                <div className="flex flex-col">
                    <span className="py-2">Password</span>
                    <input className="border border-gray-300 p-2 rounded-md" type="password" 
                    onChange={(e)=> setInput({...input,password:e.target.value})}/>
                </div>
               
            </div>
            <div className="mt-2">
                 <button className="bg-blue-600 text-white p-3 rounded-md w-full" onClick={handlesubmit}>Create Account</button>
             </div>
        </div>
    )
}

export default Signup