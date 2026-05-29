import { useState,useCallback } from "react";
export default function CallbackDemo() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log(`changed  ${count}`);
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  return (

     <div className="container-fluid py-5" style={{'marginTop':'50px'}}>
        <div className="container">
            <div className="text-center">
                    <h2>Usecallback demo</h2>
    <button onClick={increment}>
      Count: {count}
    </button>  
    </div>
    </div>
    </div>
  );
}