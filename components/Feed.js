import React, { useEffect,useState } from 'react'

 function Feed() {
     const data = {
        user1:{
            lastname:"salhi",
            firstname:"youssef",
            email:"youssef@gmail.com"
        },
        user2:{
            lastname:"salhi",
            firstname:"youssef",
            email:"youssef@gmail.com"
        }
    }
    const [counter, setCounter] = useState(0)
    console.log(data);
    function Plus(){
        setCounter(counter+1)
    }
    function Moin(){
        setCounter(counter-1)
    }
    return (
        <div>
            {
            data.leght?data.map((user,id)=>
                <p key={id}>{user.firstname}</p>
            )
            } 
            Feed
            <button className="p-2 bg-blue-500 rounded-full text-white text-center cursor-pointer" onClick={Plus}>+</button>
            <button className="p-2 bg-blue-500 rounded-full text-white text-center cursor-pointer" onClick={Moin}>-</button>
            {counter}
        </div>
    )
}
export default Feed