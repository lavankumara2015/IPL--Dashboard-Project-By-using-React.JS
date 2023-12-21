import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../HomeScreen/Homescreen"








const Navigation =()=>{

    return(
        <>
        <BrowserRouter>
    <Routes>

        <Route path="/" element={<HomeScreen/>}/>


    </Routes>
        
        </BrowserRouter>
        
        </>
    )
}

export default Navigation