import { Route, Routes } from "react-router-dom"
import TeamDetails from "../teamdetailes/teamdetailes"
import AddPlayers from "../addplayes/addplayes"
import Searchplayer from "../searchplayer/searchplayer"




const PostLogin=()=>{

    return(
        

        <Routes>

<Route path="/TeamDetails/:id" element={<TeamDetails />} />
{/* <Route path="/add" element={<AddPlayers/>}/> */}
{/* <Route path="/Searchplayer" element={<Searchplayer/>}/> */}

        
        </Routes>
        
       


    )
}
export default PostLogin