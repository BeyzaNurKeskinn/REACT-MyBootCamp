
import React,{useState} from "react"

function App() {
  const [name,setName]= useState(null)
  const [data,setData]=useState([])
  console.log(name,"name") 
  const targetFunc=(e)=>{
    console.log(e,"e")
    setName(e.target.value)
  
  }
  const clickFunc = () =>{
    setData(prev =>([...prev, name]))
  }
 console.log(data,"data")
  return (
    <>
     <input type="text" onChange={targetFunc} />
    <button onClick={clickFunc}>Tıkla</button>
    <div>
     {
      data.map((dt,i)=>(
        <div key={i}>{dt}</div>
      ))
     }
     </div>
    </>
  )
}

export default App
