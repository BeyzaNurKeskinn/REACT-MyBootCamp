import Text from "./components/Text"
import Home from "./pages/Home"
import Button from "./components/Button"
//rafce +tab
function AppSub() {
//js tanımlamalarını herzaman returnun üstünde yapacaksın.
let name = "react"
let name2 = "react2"
  return (
<>
    <div>
        name
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
    <Button name={"Arttır"}/>
    <Button name={"Azalt"}/>
</>
  )
}

export default AppSub
