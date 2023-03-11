import {MdSearch} from "react-icons/md"
import {Link} from "react-router-dom"
import { UserContext } from "../Utils/UserContex"
import { useContext, useState } from "react"
 
import jwt_decode from "jwt-decode"; 
import axios from "axios";
 

function Header(){
    const {user} = useContext(UserContext)
    const token = localStorage.getItem("token")
 
    const [image,setImage] = useState({});
    
//    console.log(image);
      if(user){
        const findUser = jwt_decode(token)
        
        axios.get(`http://localhost:8000/auth/user/${findUser.id}`)
        .then((res)=>{
    
          setImage(res.data.findUser.image.url);
    
            }).catch((e)=>{ 
                 console.log(e.response.data);
            })
      }

    return (
        <div className="flex justify-between bg-white py-4 px-20  border-b-2">
            <div className="flex items-center">
                <Link to="/">

             
                <img className="h-9"   src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
         />
               
                </Link>
                <div className="ml-3 flex items-center border-2 px-2 rounded-md">
                    <input className="p-1.5 w-72" type="text" placeholder="Search"/>
                    <MdSearch size={25}/>
                </div>
            </div>
           
           {user ? 

          (  <div className="flex items-center">
                <Link to="/new">
                <button className="border border-blue-700 py-1.5 px-2.5 rounded-md text-blue-700">Post Blog</button>
                </Link>
                <Link to="/dashboard">
                <div className="h-10 w-10 ml-4">               
                {image ===undefined ? (
                    <img
                    alt="profile_image"
                        className="rounded-full"
                        src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" 
                        />
                    ):(
                    <img
                    alt="profile_image"
                        className="rounded-full"
                        src= {image}
                        
                        />   )}        
                          </div>
                </Link>
            </div>
            ) 
            :
            (<div>
                <Link to="/login">
                <button className="mr-3">Log in</button>
                </Link>
                <Link to="/signup">
                <button className="border border-blue-700 py-1.5 px-2.5 rounded-md text-blue-700">Create Account</button>
                </Link>
            </div>
            )
    }
            
            
            
        </div>
    )
}

export default Header