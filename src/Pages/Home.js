import {FcHome} from "react-icons/fc"
import {FcReading} from "react-icons/fc"
import {FcList} from "react-icons/fc"
import {MdPodcasts} from "react-icons/md"
import {FcVideoCall} from "react-icons/fc"
import {FaQq} from "react-icons/fa"
import {BsTagFill} from "react-icons/bs"
import {FcLike} from "react-icons/fc"
import {FaRegComment} from "react-icons/fa"
import {BiSave} from "react-icons/bi"
function Home(){
    return(
        <div className="flex flex-row ">
        <div className="flex flex-col justify-center items-start  mt-5 float-left">
            <div className="ml-16"> 
            <div className="w-60 px-6 py-10 shodow-lg bg-white rounded-md border-2 border-gray"> 
            <h3 className="text-2xl font-semibold"> DEV Community 👩‍💻👨‍💻 is a community of 994,134 amazing developers</h3>
            <p className="font-bold text-xs text-gray-500 mt-4"> We're a place where coders share, stay up-to-date and grow their careers. </p>
            <div className="flex flex-col">
                 <button className="border border-blue-700 p-1 rounded-md text-blue-700  hover:bg-blue-600 text-semibold mt-3">Create account</button>
                <button className="mt-4 hover:bg-sky-600">Log in</button>
            </div>
            
            </div>
            <div className="ml-3 mt-2">
                <ul className="">
                   
                   <li className="pb-4 font-base flex flex-row items-center gap-2"> <FcHome /> Home </li>
                   <li className="pb-4 font-base flex flex-row items-center gap-2"><FcReading />Reading List </li>
                    <li className="pb-4 font-base flex flex-row items-center gap-2"><FcList />Listings </li>
                    <li className="pb-4 font-base flex flex-row items-center gap-2"> <MdPodcasts />Podcast </li>
                    <li className="pb-4 font-base flex flex-row items-center gap-2"><FcVideoCall />Videos </li>
                    <li className="pb-4 font-base flex flex-row items-center gap-2"><BsTagFill />Tags </li>
                    <li className="pb-4 font-base flex flex-row items-center gap-2"><FaQq />FAQ</li>
                </ul>
            </div>
            
            </div>
            
        </div>
        <div className="ml-4 mt-6">
            <div>
                <ul className="flex flex-row">
                <li className=" pl-5 font-lg font-bold gap-2 text-slate-800 hover:bg-sky-600">  Relevent </li>
                <li className=" pl-8 font-lg font-bold gap-2 text-gray-400 hover:bg-sky-600">  Latest </li>
                <li className=" pl-8 font-lg font-bold gap-2 text-gray-400 hover:bg-sky-600">  Top </li>
                </ul>
                </div>
            <div className="w-70 mt-3 shodow-lg bg-white rounded-md border-2 border-gray">
                <img className="w-55 rounded-md" src="https://res.cloudinary.com/practicaldev/image/fetch/s--1OKztvVL--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://i.ibb.co/F4THZ2T/cli-tools-banner.png"/>
                <div className="flex mt-4 ml-5 mb-4"> 
                <div class="relative w-12 h-12">
    <img class="rounded-full border border-gray-100 shadow-sm" src="https://res.cloudinary.com/practicaldev/image/fetch/s--VpR-xpfa--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/44940/c48f6904-fc82-46a3-8ed7-b2baac65cf9c.jpg" alt="user image" />
    
  </div>
                    <h4 className=" flex flex-col ml-3 mt-3 text-base font-semibold">Alicia Sykes
                    <span className="mt-1 font-normal">19 Jan </span></h4>

                    <div className="mt-16 ">
                        <h3 className=" flex flex-col text-3xl font-bold">CLI tools you won't be able to live <br/>without 🔧
                            <span className="font-normal text-base mt-2 gap-2 text-gray-600">#bash  #rust  #tooling  #productivity</span>
                            </h3>

                    </div>
                    
                </div>
                <div className=" ml-40 mt-2">
                    <ul className="flex items-center gap-6">
                        <li className="pb-4 font-base flex flex-row items-center gap-2"><FcLike/>128 reactions</li>
                        <li className="pb-4 font-base flex flex-row items-center gap-2"><FaRegComment/>48 comments</li>
                        <li className="pb-4 ml-40 font-base flex flex-row items-center gap-2">4 minutes read<BiSave/></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="w-80 px-6 py-10 shodow-lg bg-white rounded-md border-2 border-gray mt-4 ml-3 mr-10"> 
            <div className="flex mb-3">  
            <h3 className="text-sm font-bold mr-8"> Listings</h3>
            <h3 className="text-sm font-bold ml-24 text-blue-700"> See all</h3>
            </div>
            <hr className="h-1"/>
            <p className=" flex flex-col text-sm font-medium mt-8 rounded-md mb-3">Open source APM:OpenTelemetry traces, metrics, and logs 
            <span className="mt-2 font-normal">collabs</span></p>
            <hr className="h-1"/>
            <p className=" flex flex-col text-sm font-medium mt-8 rounded-md mb-3">A Next.js RESTful API Starter for building your next SaaS app 
            <span className="mt-2 font-normal">products</span></p>
            <hr className="h-1"/>
            <p className=" flex flex-col text-sm font-medium mt-8 rounded-md mb-3">Free ReactJS Coding Challenges: Build Functionality for Responsive UI 
            <span className="mt-2 font-normal">education</span></p>
            <hr className="h-1"/>
            <p className=" flex flex-col text-sm font-medium mt-8 rounded-md mb-3">100 Days Data Science Bootcamp Free 
            <span className="mt-2 font-normal">education</span></p>
            <hr className="h-1"/>
            <p className=" flex flex-col text-sm font-medium mt-8 rounded-md mb-3">Junior MERN stack developer looking for job
            <span className="mt-2 font-normal">forhire</span></p>
            <hr className="h-1"/>
            <button className="mt-5 ml-14 flex text-base font-semibold">Create a Listings</button>
            </div>
        </div>
    )
}

export default Home