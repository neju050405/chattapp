import React from "react"

const SideBarItem = ({children, icon}) => {
    return (
        <li className="w-full lg:h-10 md:h-5 h-12 lg:mb-2 lg:pt-1 md:pt-1 pt-2 rounded-lg hover:bg-gray-700 text-center text-gray-400 lg:text-base text-xs font-bold">{children}</li>
    )
}

export default SideBarItem;