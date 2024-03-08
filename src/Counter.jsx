import { useState } from "react"

export default function Counter(){
    const [count, setCount] =useState(0)

     const handleAdd = ()=>{
        const newAdd = count+1;
        setCount(newAdd);

     }

     const handleReduce = ()=>{
        const newReduce = count-1;
        setCount(newReduce);
     }


    return(
        <div style={{border: '2px solid yellow'}}>
            <h3>Counter: {count} </h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleReduce}>reduce</button>
        </div>
    )
}