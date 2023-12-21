import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../HomeScreen/Homescreen"
import TeamDetails from "../teamdetailes/teamdetailes"








const Navigation =()=>{

    return(
        <>
        <BrowserRouter>
    <Routes>

        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/TeamDetails/:id" element={<TeamDetails/>}/>


    </Routes>
        
        </BrowserRouter>
        
        </>
    )
}

export default Navigation