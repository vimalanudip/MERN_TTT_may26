import axios from "axios";
import { useState } from "react";
export default function Signup()
{
    const [userdata, setUserData] =useState({fname:'',lname:'',dob:'',gender:''});
    const saveUser=()=>{
          //  console.log(userdata);
          axios.post('http://localhost:8081/adduser',{userdata}).then((response)=>{
            console.log(response.data);
          }).catch((error)=>{
            console.log(error);
          });
    }
        return (
                <>
                <section>
                <table align="center">
            <tr>
                <td>First name</td>
                <td><input type="text" name="fname" onChange={(e)=>setUserData({...userdata,fname:e.target.value})} /></td>
            </tr>
<tr>
                <td>Last name</td>
                <td><input type="text" name="lname" onChange={(e)=>setUserData({...userdata,lname:e.target.value})}/></td>
            </tr>
            <tr>
                <td>Date of birth</td>
                <td><input type="date" name="dob" onChange={(e)=>setUserData({...userdata,dob:e.target.value})}/></td>
            </tr>
            <tr>
                <td>Gender name</td>
                <td><input type="radio" name="gender" value="male" onChange={(e)=>setUserData({...userdata,gender:e.target.value})} />Male |<input type="radio" name="gender" value="female" onChange={(e)=>setUserData({...userdata,gender:e.target.value})}/>FeMale </td>
            </tr>
<tr>
    <td colspan="2" align="center">
        <input type="button" value="Signup" onClick={saveUser} /></td>
</tr>
        </table>
        </section>
                </>

        );

}