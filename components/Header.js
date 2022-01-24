import Image from "next/image"
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
}from "@heroicons/react/solid"
import{
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
}from "@heroicons/react/outline"
import HeaderIcon from "./HeaderIcon"
import { signOut, SessionProviderOptions } from "next-auth/client"

function Header(props) {
    const users = props.session.user
    console.log(SessionProviderOptions);

    return (
        <div className="sticky flex items-center p-2 lg:px-5 shadow-md bg-white top-0 z-50">
            {/* left */}
            <div className="flex ml-2 items-center">
                <Image
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layout="fixed" 
                />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600"/>    
                    <input type="text" className=" hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" placeholder="Search Facebook"/>
                </div>
            </div>
            {/* center */}
            <div className="flex justify-center flex-grow">
                <div className="flex spac md:space-x-2">
                    <HeaderIcon Icon={HomeIcon}/>
                    <HeaderIcon Icon={FlagIcon}/>
                    <HeaderIcon Icon={PlayIcon}/>
                    <HeaderIcon Icon={ShoppingCartIcon}/>
                    <HeaderIcon Icon={UserGroupIcon}/>
                </div>
            </div>
            {/* right */}
            <div className="flex item-center sm:space-x-2 justify-end">
                    
                <p className="flex justify-center place-items-center flex-grow whitespace-nowrap font-semibold pr-3">
                    {users.name}
                </p>
                <Image
                    src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=3271384396263690&height=50&width=50&ext=1637318200&hash=AeQYb2JD4DkNnwIxYP0"
                    width={40}
                    height={40}
                    layout="fixed" 
                />
                 
                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <ChevronDownIcon className="icon"/>
                <button className="p-2 bg-blue-500 rounded-full text-white text-center cursor-pointer" onClick={() => signOut()}>Sign out</button>
            </div>
        </div>
    )
}

export default Header
