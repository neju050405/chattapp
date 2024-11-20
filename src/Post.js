import React from "react";
import userIcon from "./img/userIcon.png";


const Post = ({ username, heading, text }) => {
    return (
        <div className="w-full bg-gray-700 rounded-lg flex flex-col gap-5 overflow-y-auto overflow-x-hidden mt-10 py-4">
            <h1 className="w-full text-center font-bold lg:text-2xl text-base px-5">{heading}</h1>
            <p className="w-full text-left lg:text-lg text-sm px-7">{text}</p>
            <div className="inline-block px-5">
                <img src={userIcon} className="lg:w-7 w-5 ml-2" /> <h2 className="w-full font-bold lg:text-base text-xs mt-auto mb-2 ml-2">{username}</h2>
            </div>
            <div className="bg-gray-700 w-full h-100 rounded-lg flex flex-col justify-center">
                <form><input type="text" placeholder="comment" className="bg-gray-800 rounded-md lg:w-11/12 lg:mx-7 lg:p-5 w-5/6 mx-7 px-2 py-3 font-white-500 focus:border-teal focus:outline-none focus:ring-1 text-gray-200 text-xs md:text-sm"/></form>
            </div>
        </div>
    )
}




export default Post;