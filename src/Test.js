import React,{useState} from 'react'


function Test() {
    const [num , setNum] = useState(1);
    return (
        <div>
            <h1>{num}</h1>
            <button  onClick = { () =>setNum(num+1)}>increase</button>
            <button  onClick = { () =>setNum(num-1)}>increase</button>
        </div>
    )
}

export default Test
