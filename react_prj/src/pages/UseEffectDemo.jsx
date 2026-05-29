import { useEffect, useState } from "react";
export default function UseEffectDemo()
{
     const [no,setNo] = useState(1);
   const [counter,setCounter] = useState();
   useEffect(()=>{
        //console.log("Useeffect is called");
   // setNo(100);
   setCounter(()=>no*5);
   },[no]);
  
      return (
            <>
             <div className="container-fluid py-5" style={{'margin-top':'50px'}}>
        <div className="container">
            <div className="text-center">
                    <h2>UseEffect demo</h2>
                     Click on button to change the value of counter <br />
                     <p>no value = {no}</p>
                     <input type="button" value="Increament" onClick={()=>setNo((c)=>c+1)} /> | <input type="button" value="Decreament" onClick={()=>setNo((c)=>c-1)} /> 
                     <p>Counter :{counter} </p>
                    </div>
                    </div>
                    </div>
            </>
      );
}