import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//export const data =[
  /*{
    id:0,
    name:"React",
    description:"React açıklama"
  },
  {
    id:1,
    name:"Vue",
    description:"React açıklama"
  },
  {
    id:2,
    name:"Angular",
    description:"React açıklama"
  },
//]*/
const Home = () => {
  const navigate = useNavigate();//eğer bir sayfada clik yaptıktan sonra yönlenmesini istersen bunu kullanabilirsin.
  const [allData,setAllData]= useState([])
  const[loading,setLoading]=useState(true)

  useEffect(() => {//sayfa yüklendiğinde
    const getData = async() =>{
      setLoading(true)
        const {data} =await axios.get('https://fakestoreapi.com/products')
        setAllData(data)
        setLoading(false)
    }
    getData();
  },[])
console.log(allData,"allData")



  return (
    loading ? <div>Loading...</div>:
    <div>
    {
        allData?.map((data, i) => (
    <div onClick={() => navigate(`detail/${data?.id}`)} style={{marginBottom:'30px',cursor:'pointer'}}  key ={i}>

      <div>{data?.title}</div>
      <img style ={{width:"100px"}} src={data?.image} alt=""></img>
    </div>
  ))


   
   
   /* {
    data.map((dt,index) => (
      <div onClick={() => navigate(`detail/${dt.id}`)} style={{cursor:'pointer', marginBottom:'30px'}} key={index}>
          <div>{dt.name}</div>
          <div>{dt.description}</div>
      </div>
    ) )

    }*/
    
    
    }
    </div>
  )
}

export default Home