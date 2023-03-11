import Comment from "./Comment"
import { UserContext } from "../Utils/UserContex"
import { useContext } from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import jwt_decode from "jwt-decode"; 


function BlogComments(){
    const {id} = useParams()
   const {user} = useContext(UserContext)
   const [comment,setComment] = useState("")
   const [comments,setComments] =useState([])
   const [loading,setLoading] = useState(true)
   const token = localStorage.getItem("token")

   const [image,setImage] = useState({});


   if(user){
     const token = localStorage.getItem("token")
     const id = jwt_decode(token)
     axios.get(`http://localhost:8000/auth/user/${id.id}`)
     .then((res)=>{
      
      
       setImage(res.data.user.image.url);
     
         }).catch((e)=>{ 
              console.log(e);
         })
   }

   useEffect(()=>{
    axios.get(`http://localhost:8000/comment/getcomment/${id}`)
    .then((res)=>{
        setComments(res.data.comments);
        // console.log(res.data);
        setLoading(false)
    }).catch((e)=>{
        console.log("error");
    })
   },[])
   if(loading) return
   function handleOnSubmit(){

        axios.post("http://localhost:8000/comment/create/",{
            Comment:comment,
            blog:id
        },{
            headers:{
                authorization:token
            }
        }).then((res)=>{
            console.log(res);
            console.log(id);
        }).catch((e)=>{
            console.log(e);
        })
   }
    return (
        <div className="border-t py-5 px-16">
            <h1 className="font-bold text-2xl">Top comment(s)</h1>
            {user && 
            <div className="py-5">
                <div className="flex space-x-2">
                <div className="h-12 w-12">               
                     <img className="rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"/>
                </div>
                    <textarea className="border w-full rounded-md p-2" placeholder="Add to the discussion" onChange={(e)=> setComment(e.target.value)}></textarea>
                </div>
                <div className="flex justify-end">
                    <button className="bg-blue-600 p-2" onClick={handleOnSubmit}>Submit</button>
                </div>
            </div>
            }
            {comments.map((comment)=> <Comment data={comment}/> )}
             
            
        </div>
    )
}

export default BlogComments