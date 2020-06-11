import React,{useState} from 'react'
import './App.css'
function App() {
  const [isLig , setLig] = useState(true);
  const [temp , setTemp] = useState(72)

  const output = isLig ? 'light' : 'dark'

  const tempout = isLig ? temp : 22
  return (
    <div className = {`room ${output}`}>
     
      <h1>{`its ${output} Mode`}</h1>
      <h2>{` Temprature : ${tempout}`}</h2>   
      <button onClick ={ () => setLig(false)}>OFF</button>

      <button onClick ={ () => setLig(true)}>ON</button>

      <button onClick = { () =>setTemp(tempout+1)} >Increase Temp</button>
    </div>
  )
}

export default App
