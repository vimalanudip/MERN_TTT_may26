import { useState } from "react";


export default function StateDemo()
{
  const [msg,setMsg] =useState('');
  const [name,setName] =useState('');
    function changevalue()
    {
            setMsg('hello how are you');        
    }
  return (
        <>
         <div className="container-fluid py-5">
             <div className="container" style={{'padding':'30px'}}>
            
                <p><b>Value of state variable </b> <br />
                {msg.length>0 && msg  }
                
                </p>
                <input type="button"  onClick={changevalue} value="Click" /> <br />
                <input type="text" onChange={(e)=>setName(e.target.value)}/>  {name}
                </div>
                </div>
        </>


  );
}
