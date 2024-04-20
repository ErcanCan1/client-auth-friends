import axios  from "axios";
import { useState, useEffect } from "react";

export default function FriendsList() {

    const loggedInToken = localStorage.getItem("token");
    const isLoggedIn = (loggedInToken) ? true : false
    const [friends, setFriends] = useState([]);
/*
    axios.create({
        headers:{
            Authorization:loggedInToken,
        },
    });
*/
    useEffect(()=>{
        axios
            .get("http://localhıst:3000/api/friends",{
                headers:{
                    Authorization: loggedInToken,
                },
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }, [])


    return(
       
        <div>
        {!isLoggedIn && <div>Login Olmadık</div>}
        {isLoggedIn &&
        <div><h1>Friends List</h1></div> }
            
        </div>
    )
}