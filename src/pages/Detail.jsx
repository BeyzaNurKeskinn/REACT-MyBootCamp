import { useParams, useLocation } from "react-router-dom"
import axios from "axios";
//import { data } from "./Home";
import React, { useEffect, useState } from "react";

const Detail = () => {
  const {id} = useParams();//idiyi çekebiliyoruz
   const [singleData,setSingleData]= useState()

  console.log(id,"id")

  useEffect(() => {//sayfa yüklendiğinde
    const getData = async() =>{
    
        const {data} =await axios.get(`https://fakestoreapi.com/products/${id}`)
        setSingleData(data)
       
    }
    getData();
  },[id])
  console.log(singleData,"singleData")



 // const location= useLocation();
 // const[getData, setGetData] = useState(null)
//  console.log(location,"location")//pathname ulaşmayı sağladı
 // useEffect(() => {
   // if(id){
   //   setGetData(data.find(dt => dt.id == id))
     // }   
 // },[id])

 // console.log(getData,"getData")


  return (
    <div>
   { /*  <div>{getData?.name}</div>
    <div>{getData?.description}</div>*/}
     <div style={{marginBottom:'30px',cursor:'pointer'}}  >

<div>{singleData?.title}</div>
<img style ={{width:"100px"}} src={singleData?.image} alt=""></img>
</div>
    </div>
    
  )
}

export default Detail