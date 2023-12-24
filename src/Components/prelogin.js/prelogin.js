






import { Route, Routes } from "react-router-dom"
import HomeScreen from "../HomeScreen/Homescreen"
import LoginScreen from "../Loginscreen"
import TeamDetails from "../teamdetailes/teamdetailes"
import RegisterScreen from "../Registerscreen"


const PreLogin=()=>{

    return(
       
        <Routes>
        <Route path="/" element={<HomeScreen/>}/> 
        <Route path="/LoginScreen" element={<LoginScreen/>}/> 
        <Route path="/TeamDetails/:id" element={<TeamDetails />} />
        <Route path="/Register" element={<RegisterScreen/>}/>
        </Routes>
       
    )
}
export default PreLogin