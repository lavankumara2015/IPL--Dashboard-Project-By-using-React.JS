


import { Link, useNavigate } from "react-router-dom"
import Navbarr from "../Navbar/Navbar"
import Footer from "../footer/Footer"
import "./Homestyle.css"
import TeamDetails from "../teamdetailes/teamdetailes"
import { useContext, useState } from "react"
import { LoginInfo } from "../Navigation/navigation"




const HomeScreen=()=>{
const [id,setId]=useState(0)
    // const [login, setlogin]=useState(false);
    const navigate=useNavigate()
    const { login }= useContext(LoginInfo)

  const  Team=[{
    id:1,
    Name:"RCB",
    bg:"rgb(191, 138, 21)",
    backgroundImage: "linear-gradient(45deg, rgb(229, 191, 101), rgb(185, 130, 8))",
    image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Logooutline/RCBoutline.png" ,
   
},{
    id:2,
    Name:"SRH",
    bg:"rgb(241, 161, 46)",
    backgroundImage:"linear-gradient (45deg, rgb(239, 188, 68), rgb(243, 113, 7))",
    image:"https://www.sunrisershyderabad.in/dist/img/srh-logo.gif",
   
},{
    id:3,
    Name:"MI",
    bg:"rgb(9, 128, 181)",
    backgroundImage:"linear-gradient (45deg, rgb(16, 214, 213), rgb(7, 100, 171))",
    image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Logooutline/MIoutline.png",
   
},{
    id:4,
    Name:"CSK",
    bg:"rgb(236, 202, 24)",
    backgroundImage:"linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
    image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhn3plcgt5OnAx_VelXAj9Z8TWBiqg6B-xgCJ__kuFeXr1ClntuhvVu0IugURU6TfyHk9qUuECEpos1E5ayEmx0fAupMIvNLQnLOwavDhBYxkIwvRv9cmm7_qHZmlcSwr3Un-hJpy92AooR9Qn77PUcr4yRgAORYwoTBjTYOmyYlHbZ0nDyaL3HWqUk/s2141/Original%20Chennai%20Super%20Fun%20Logo%20PNG%20-%20SVG%20File%20Download%20Free%20Download.png",
   
},{
    id:5,
    Name:"LSG",
    bg:"rgb(167, 67, 121)",
    backgroundImage:"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
    image:"https://branditechture.agency/brand-logos/wp-content/uploads/2022/06/Lucknow-Super-Giants-1024x768.png",
   
},{
    id:6,
    Name:"KXIP",
    bg:"rgb(225, 56, 58)",
    backgroundImage:"(45deg, rgb(179, 22, 25), rgb(246, 71, 73)), rgb(48, 24, 87))",
    image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png",
   
},{
    id:7,
    Name:"GI",
    bg:"rgb(119, 199, 242)",
    backgroundImage:"linear-gradient (45deg, rgb(111, 69, 150), rgb(48, 24, 187))",
    image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAviPjlBbeRYz6ny9-HOVtr9VmyQJ3FXOw60rSy8ye_U_nMy9gPWtgEPpPMAO7va36UX6nyw9BNvWVrC5kwShXJT3V7FtA5HmDO9aAwsBS4iGQWFRQWOX_ltiBkSajurq-ulo_Mu82VYsIMDkIme9jCuqMxKTt0P1fO9bv_tdXBzYj51QgTcD7pz-2/s1024/Original%20Gujarat%20Titans%20Logo%20PNG-SVG%20File%20Download%20Free%20Download.png",
   
},{
    id:8,
    Name:"DC",
    bg:"rgb(201, 0, 6)",
    backgroundImage:"linear-gradient (45deg, rgb(220, 181, 47), rgb(185, 36, 26))",
    image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/LogoOutline/DCoutline.png",
   
},{
    id:9,
    Name:"RR",
    bg:"rgb(235, 131, 181)",
    backgroundImage:"linear-gradient (45deg, rgb(49, 93, 201), rgb(22, 59, 151))",
    image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Logooutline/RRoutline.png",
   
},{
    id:10,
    Name:"KKR",
    bg:"rgb(66, 37, 111)",
    backgroundImage:"linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
    image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Logooutline/KKRoutline.png",
      
},
]

const handldeclick =()=>{

    if (!login) {
        alert("Please Login");
        navigate("/LoginScreen");
      }
// setId(id)
}

    return(
        <>
            <Navbarr/>
      
        <div className="mainDiv">
            {
                Team.map((value,ind)=>{

                return(

         <div key={value.ind}>

    

   <Link to={login ? `/TeamDetails/${value.id} `:"/Loginscreen"} id="link" onClick={()=>{handldeclick(value.id)}} > <div style={{backgroundColor:value.bg,backgroundImage:value.backgroundImage}} id="Container">

 
                  <center > <img style={{marginTop:"30px"}} src={value.image} width={"120px"} height={"115px"}/>
                   <h4 id="h4">{value.Name}</h4></center> 
                    
                </div>  </Link> 
                </div>              

                )  

                })
            }

        </div>
        <br/>
        <Footer/>
        </>
    )
}



export default HomeScreen