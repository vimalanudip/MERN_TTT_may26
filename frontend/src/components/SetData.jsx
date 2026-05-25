import { useContext } from "react";
import { NameContext } from "../App";
export default function SetData()
{
    const {setName} = useContext(NameContext);
    return (
            <>
                <input type="text" onChange={(e)=>setName(e.target.value)} />
            </>


    );

}