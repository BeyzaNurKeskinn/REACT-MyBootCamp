import React ,{ useRef,useState,useMemo } from "react"

function App6()  {
    const[count,setCount]=useState(0)
    const[textChange, setTextChange]=useState("")
    const largeDataFunc = useMemo(() => {
        [...new Array(1000)].forEach((item) => {})
        return count*3
    },[])
  return (
    <>
    <div>{count}</div>
     <button onClick={() => setCount(count +1)}>
        artır !!
    </button>

    <input type="text" onChange={e=> setTextChange(e.target.value)}/>
    </>
   
  )
}

export default App6