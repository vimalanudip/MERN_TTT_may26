import { useContext } from "react";
import { NameContext } from "../App";
export default function ViewData()
{
  const {name} = useContext(NameContext); 
    return (
        <>
          Here soon you will see the data passed from app.jsx 
          <p>
            {name}
          </p>
        </>


    );

}