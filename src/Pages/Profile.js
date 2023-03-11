import {  useState } from "react"
import { toast } from "react-toastify";
import axios from "axios";
 

import jwt_decode from "jwt-decode"; 
import { useNavigate } from "react-router-dom";
 

function Profile(){
    const [inputs,setInputs]= useState({})
 
    const Navigate= useNavigate();
    const [image,setImage]= useState()
    const token = localStorage.getItem("token");

    function handleOnImageSubmit(e) {
      const file = e.target.files[0];
          Transform(file);
        }
    
        const Transform = (file) => {
          const reader = new FileReader();
         
          if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
              setImage(reader.result);
            };
          } else {
            setImage("");
          }
        };
    
      
    function handleOnSubmit(){
        
        const findUser = jwt_decode(token)
        
        axios.put(`http://localhost:8000/auth/profile/${findUser.id}`, {image:image ,inputs}  ,{headers:{Authorization:token }})
        .then((res)=>{
        //   console.log(res.data);
        
     
            toast.success(res.data.message)
            Navigate("/dashboard")
            }).catch((e)=>{ 
                toast.error("oops we have error");
                // console.log(e.response.data);
            })
 

}
return (
    <div className="m-auto w-1/2 mt-5 p-5 bg-white rounded-md">
        <h2 className="mb-8 text-center font-bold text-2xl">Edit profile</h2>
        <p className="text-gray-500 pb-4">Make sure your new password is a strong password. Do mix letters and special characters</p>
        <div className="my-2 space-y-2">
            <span>First Name</span>
            <input className="w-full border p-2 rounded-md" type="text" 
            onChange={(e) =>  setInputs({...inputs ,firstName:e.target.value })}
            />
        </div>
        <div className="my-2 space-y-2">
            <span>Second Name</span>
            <input className="w-full border p-2 rounded-md" type="text" 
             onChange={(e) =>  setInputs({...inputs ,lastName:e.target.value })}
            />
        </div>
        <div className="my-2 space-y-2">
            <span>Location</span>
            <input className="w-full border p-2 rounded-md" type="text"  
           onChange={(e) =>  setInputs({...inputs ,location:e.target.value })}
            />
        </div>
        <div className="my-2 space-y-2">
            <span>Work</span>
            <input className="w-full border p-2 rounded-md" type="text" 
         onChange={(e) =>  setInputs({...inputs ,work:e.target.value })}
             />
        </div>
        <div className="my-2 space-y-2">
            <span>Bio</span>
            <textarea className="border w-full rounded-md p-2" placeholder="Bio."
             onChange={(e) =>  setInputs({...inputs ,bio:e.target.value })}
            ></textarea>
        </div>
     
        <div className="mt-4">
            <input type="file" 
            onChange={handleOnImageSubmit}
            />
        </div>
        <div className="flex justify-center mt-5">
             <button className="px-5 py-2.5 bg-blue-500 text-white rounded-md"
             onClick={handleOnSubmit}
              >Save</button>
        </div>
    </div>
    )
}


export default Profile