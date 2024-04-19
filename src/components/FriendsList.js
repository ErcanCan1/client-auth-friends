import axios  from "axios";
import { useState, useEffect } from "react";

export default function FriendsList() {

    const loggedInToken = localStorage.getItem("token");
    const isLoggedIn = (loggedInToken) ? true : false
    const [friends, setFriends] = useState([]);

    axios.create({
        headers:{
            Authorization:loggedInToken,
        },
    });

    useEffect(()=>{
        axios
            .get()
    })


    return(
       
        <div>
        {!isLoggedIn && <div>Login Olmadık</div>}
        {isLoggedIn &&
        <div><h1>Friends List</h1></div> }
            
        </div>
    )
}