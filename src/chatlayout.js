import React, { useCallback, useState } from "react";
import appLogo from './img/appLogo.png';
import appLogoMark from './img/appLogoMark.png';
import Post from './Post.js';
import ChatContent from "./chatcontent.js";



const ChatLayout = ({ children }) => {
    const [retr, setRetr] = useState(false);
    if (!retr) {
        const heading="lorem ipsum";
        const text ="lorem ipsum dolor sit amet, consectetur adipiscing elit. phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. maecenas nisl est, ultrices nec congue eget, auctor vitae massa. fusce luctus vestibulum augue ut aliquet. mauris ante ligula, facilisis sed ornare eu, lobortis in odio. praesent convallis urna a lacus interdum ut hendrerit risus congue. nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac...";
        const username = "username";
        return (
            <div className="bg-gray-900 w-full h-screen overflow-hidden grid grid-cols-12 gap-0 grid-rows-1 grid-flow-col">
                <div id="sideBar" className="bg-gray-800 lg:col-span-3 md:col-span-4 col-span-12 z-30 h-screen flex flex-col justify-center items-center lg:px-7 px-4 transition-transform duration-500">
                    <div className="w-full h-1/7 lg:pb-6 text-4xl">
                        <div className="absolute right-10 md:left-72 top-2 text-3xl">
                            <button onClick={e => setRetr(true)} id="closebar">≡</button>
                        </div>
                    </div>
                    <div className="w-full lg:pb-10 lg:mb-5 text-xl">
                        <a href=""><img className="md:mt-3" src={appLogo} /></a>
                    </div>
                    <div className="flex flex-col gap-7 w-full h-4/6 lg:px-1 md:px-1 content-center justify-end">
                        <ul className="w-full text-center overflow-y-auto scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300">{children}</ul>
                        <div className="w-full h-3 mx-1/5"></div>
                    </div>
                </div>
                <div className="bg-gray-900 lg:col-span-9 md:col-span-8 lg:w-full w-0 h-screen overflow-y-auto z-10 flex flex-col justify-center">
                    <div className="bg-gray-900 w-full lg:px-32 h-screen">
                        <ChatContent></ChatContent>
                    </div>
                </div>
            </div>
        )
    }
    else if (retr) {
        return (
            <div className="bg-gray-900 w-full h-screen overflow-hidden grid grid-cols-12 gap-0 grid-rows-1 grid-flow-col">
                <div className="bg-gray-800 lg:w-full w-0 lg:col-span-1 h-screen overflow-hidden z-20 transition-transform duration-500">
                    <div className="absolute lg:left-8 lg:px-9 py-0 px-4 text-3xl text-center">
                        <button id="openbar" onClick={e => setRetr(false)}>≡</button>
                    </div>
                    <div className="w-full lg:ml-5 lg:pb-10 lg:mb-5 text-xl">
                    <a href=""><img className="w-3/5 my-11" src={appLogoMark} /></a>
                </div>
                <div className="flex flex-col gap-7 w-full h-4/6 lg:px-1 md:px-1 content-center justify-end">
                    <ul className="w-full text-center overflow-y-auto scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300"></ul>
                    <div className="w-full h-3 mx-1/5"></div>
                </div>
                </div>
                <div className="bg-gray-900 lg:col-span-11 col-span-12 w-full h-screen overflow-y-auto z-10 flex flex-col justify-center">
                    <div className="bg-gray-900 w-full lg:px-36 px-5 h-screen overflow-y-auto">
                        <ChatContent></ChatContent>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatLayout;
