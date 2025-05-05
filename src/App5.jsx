import React ,{ useRef } from "react"

function App5()  {
    const inputRef =useRef();
 
    const focusFunc= () => {
       inputRef.current.focus();
       // console.log(inputRef,"inputRef")
    }

  return (
    <>
    <input type="text" ref={inputRef}/>
     <button onClick={focusFunc}>
        focus me !!
    </button>
    </>
   
  )
}

export default App5