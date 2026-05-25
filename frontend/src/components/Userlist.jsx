import axios from "axios";
import { useState,useEffect } from "react";
export default function Userlist()
{
    const [userdata,setUserData] = useState([]);
    const [msg,setMsg] = useState('');
    useEffect(()=>{
        axios.get("http://localhost:8081/getalluserlist").then( response =>{
            if(response.data.msg.length==0){ 
                //console.log(response.data.userResult);
                setUserData(response.data.userResult);
               //console.log(userdata);
            }
            else
                setMsg(response.data.msg); 
        }).catch(error=>{});
    },[]);
    return (
            <>
                <h1>User list as below</h1>
               <h1> {msg.length>0 && msg} </h1>
                <table align="center" >
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of birth</th>
                        <th>Gender</th>
                    </tr>
                    {userdata.length>0 && userdata.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.dob}</td>
                                <td>{user.gender}</td>
                            </tr>
                    ))}
                </table>
            </>
    );
}