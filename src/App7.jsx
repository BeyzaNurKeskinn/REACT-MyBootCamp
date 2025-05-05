import {
    BrowserRouter as Router,
   Route,
   Routes
  } from "react-router-dom";
  import Home from "./pages/Home";
  import Detail from "./pages/Detail";
function App7() {
  
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detail/:id' element={<Detail/>} />
          
        </Routes>
    </Router>
    
    </>
   
  )
}

export default App7