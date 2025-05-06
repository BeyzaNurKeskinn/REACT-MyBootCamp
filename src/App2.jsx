import React, { useState,useEffect } from 'react'

.

function App2() {
  const [name, setName] = useState("react")
  

 // useEffect( () => {
    //setName("react güncellendi...")
  //},[])
//sayfa yuklendiğinde onclik vs yapmadan değişim yaptı use effect sayesinde.

useEffect( () => {
  setTimeout(() => {
setName("react güncellendi...")
  },4000) //4 saniye sonra değişti
  
},[])

  return (
    <>
   {
    name
   }
    </>
  )
}

export default App2