import React,{useState} from "react"
import Text from "./components/Text"
import Home from "./pages/Home"
import Button from "./components/Button"
//rafce +tab
function AppSub() {
//js tanımlamalarını herzaman returnun üstünde yapacaksın.
let name = "react"
let name2 = "react2"
const [surname, setSurName]= useState("horasan")
//const [değişken, değişkeni setlemek istediğin fonksiyon]
const[gender,setGender]=useState(null)
console.log(gender,"Gender")
const[address,setAddress]= useState(null)
console.log(address,"Address")
const[count,setCount]=useState(0)
const[data,setData]=useState([])
console.log(address,"Address")
const clickFunc= () =>{
console.log("tıklandı..")//consolda bildirim verildi
 setSurName("keskin")
setData(address)
  //setData(prev =>([...prev,address]))
}

const decrement=()=>{//0'ın aşağısına düşürmedi.
  if(count<= 0)return
  setCount(count-1)
}
const targetFunc=(e)=>{
  setAddress(e.target.value)

}
  return (
<>
    <div>
        name
        <br></br>
        {surname}
        <br></br>
        {name} + {name2}
        <br></br>
        react eğitimi 1
        react eğitimi 2
        react eğitimi 3
    </div>
    <div>
         react eğitimi 1
    </div>
    <div>
        react eğitimi 2
    </div>
    <div>
         react eğitimi 3
    </div>
    <Text number="1"  name={"react"}/>
    <Text number="2" name={"reactt"}/>
    <Text number="3" name={"reacttt"}/>
    <Home/>
    <Button name={"buton1"}/>
    <Button name={"buton2"}/>
    <div onClick={clickFunc}>
    {surname}
    <br></br>
    <button onClick={decrement}>Azalt</button>
    <Button name ={"ikişerli Azalt"} onClick={()=> setCount(count-2)}/>
    <div>{count}</div>
    <button onClick={()=> setCount(count+1)}>Artır</button>
    <br></br>
    <br></br>
    <input type="text" onChange={(e)=> setGender(e.target.value)} />
    <br></br>
    <br></br>
    <input type="text" onChange={targetFunc} />
    <button onClick={clickFunc}>Tıkla</button>
    <div>{data}</div>
    
    </div>
    
    
</>
  )
}

export default AppSub
