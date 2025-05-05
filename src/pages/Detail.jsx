import { useParams, useLocation } from "react-router-dom"
import { data } from "./Home";
import React, { useEffect, useState } from "react";

const Detail = () => {
  const {id} = useParams();//idiyi çekebiliyoruz
  const location= useLocation();
  const[getData, setGetData] = useState(null)
  console.log(location,"location")//pathname ulaşmayı sağladı
  useEffect(() => {
    if(id){
      setGetData(data.find(dt => dt.id == id))
    }
      
  },[id])

  console.log(getData,"getData")


  return (
    <div>
      <div>{getData?.name}</div>
    <div>{getData?.description}</div>
    </div>
    
  )
}

export default Detail