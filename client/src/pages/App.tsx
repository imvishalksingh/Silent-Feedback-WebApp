import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreateRoom from "./CreateRoom"
import JoinRoom from "./JoinRoom"
import Home from "./Home"
function App(){
    return(

        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/createroom/:uuid" element={<CreateRoom/>}/>
                <Route path="/joinroom" element={<JoinRoom/>}/>
            </Routes>
        </Router>

    )
}

export default App

