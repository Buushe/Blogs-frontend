import axios from "axios"


let URL = "http://localhost:8000"
const token = localStorage.getItem("token")

export const getAllBlogs = ()=>{
    return axios.get(`${URL}/post/allBlog`)
}

export const getOneBlog = (id)=>{
    return axios.get(`${URL}/post/oneBlog/${id}`)
}

export const getUserBlog = ()=>{
    return axios.get(`${URL}/post/my`,{headers:{authorization:token}})
}

export const login = (input)=>{
    return axios.post(`${URL}/auth/login/`,input)
}
