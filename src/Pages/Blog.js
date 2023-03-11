import BlogAuthor from "../Components/BlogAuthor"
import BlogContent from "../Components/BlogContent"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

import { getOneBlog } from "../Utils/APIendpoints"

function Blog(){
  const {id} = useParams()
  const [blog, setBlog] = useState({})
  const [loading,setLoading] = useState(true)
// console.log(id)
  useEffect(()=>{
    getOneBlog(id)
    .then((res)=>{
      setBlog(res.data.blogs)
      // console.log(res.data);
      setLoading(false)
    }).catch((e)=>{
      console.log(e.response.data.message);
    })
  },[])
  if(loading) return
    return (
        <div className="flex my-5 space-x-5">
          <BlogContent blog={blog}/>
          <BlogAuthor user={blog.user}/>
        </div>
    )
}

export default Blog