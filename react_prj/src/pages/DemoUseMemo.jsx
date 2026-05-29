import { useState, useMemo } from "react";
export default function DemoUseMemo()
{
const [count, setCount] = useState(1);

  const summax = (num)=>{
    console.log('clicked', num);
    for (let i = 0; i < 4000000; i++) {}
   console.log('updated');
     //setCount(2 * num);
    return 5;
  }
  const multiply = useMemo(()=>summax(count) ,[count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {summax(2);} }>
        Multiply
      </button>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
 
}