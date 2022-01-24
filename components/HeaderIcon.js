import React from 'react'

function HeaderIcon({Icon, active}) {
    return (
        <div className="cursor-pointer md:px-9 sm:px-6 sm:h-12 md:hover:bg-gray-100 flex items-center rounded-xl active:border-b-2 active:border-blue-500 group">
            <Icon className={`h-5 text-center sm:h-7 mx-auto group-hover:text-blue-500 `}/>
        </div>
    )
}

export default HeaderIcon
