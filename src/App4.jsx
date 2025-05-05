import React ,{ useRef } from "react"
//BUTONA TIKLAYINCA CONSOLDA SAYI ARTIYOR
function App4()  {
    const countRef =useRef(0);
 
    const clickFunc= () => {
         countRef.current++; 
         console.log(countRef.current,"countRef")
    }

  return (
    <button onClick={clickFunc}>
        click me !!
    </button>
  )
}

export default App4