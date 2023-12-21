


import { Link } from "react-router-dom"
import Navbarr from "../Navbar/Navbar"
import Footer from "../footer/Footer"
import "./Homestyle.css"
import TeamDetails from "../teamdetailes/teamdetailes"




const HomeScreen=()=>{
    

  const  Team=[{
    id:1,
    Name:"RCB",
    bg:"rgb(191, 138, 21)",
    image:"https://i.pinimg.com/originals/33/8c/c5/338cc5c01c06ef477b0c88c9983df677.png" ,
   
},{
    id:2,
    Name:"SRH",
    bg:"rgb(241, 161, 46)",
    image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFNUOHxX-5sofC3Iioht3A6_naxWEImhNUKs6eU6xqjxYJjOa1OLc_hxKRkckg_F6bnG2XzSrAsKQpgYpeXPzFkwNLHQwS5xVrYaL7aKn155nR2J0dPCunLn4LrR8d-bLjqfaLhpAG2tGRZF4RuWgblEy_1DhbmszchchOWOs3ZwAZ_Lj-1bT535Ye/s7200/Original%20Sunrisers%20Hyderabad%20PNG-SVG%20File%20Download%20Free%20Download.png",
   
},{
    id:3,
    Name:"MI",
    bg:"rgb(9, 128, 181)",
    image:"https://www.pngall.com/wp-content/uploads/2017/04/Mumbai-Indians-Logo-PNG.png",
   
},{
    id:4,
    Name:"CSK",
    bg:"rgb(236, 202, 24)",
    image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhn3plcgt5OnAx_VelXAj9Z8TWBiqg6B-xgCJ__kuFeXr1ClntuhvVu0IugURU6TfyHk9qUuECEpos1E5ayEmx0fAupMIvNLQnLOwavDhBYxkIwvRv9cmm7_qHZmlcSwr3Un-hJpy92AooR9Qn77PUcr4yRgAORYwoTBjTYOmyYlHbZ0nDyaL3HWqUk/s2141/Original%20Chennai%20Super%20Fun%20Logo%20PNG%20-%20SVG%20File%20Download%20Free%20Download.png",
   
},{
    id:5,
    Name:"LSG",
    bg:"rgb(167, 67, 121)",
    image:"https://branditechture.agency/brand-logos/wp-content/uploads/2022/06/Lucknow-Super-Giants-1024x768.png",
   
},{
    id:6,
    Name:"KXIP",
    bg:"rgb(225, 56, 58)",
    image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWofXDOj6B3eYR3eBKQaPeJjTsblyohHrqK1JO4BEojD0u_Izr_2kIxmrI7Oli8_EvW9tNxB4Qi_OotqkyIWTkOsg6xIroj5U39vvmbGDPSJJXkSn5mzAF58_Mz5Fg8uIrXfJnXWlWrqSig2uxfuUGCrV3wPlZwuZ1OtWVXZUhWYeIzJyrH7klLVer/s1540/Original%20Punjab%20Kings%20PNG-SVG%20File%20Download%20Free%20Download.png",
   
},{
    id:7,
    Name:"GI",
    bg:"rgb(131, 85, 130)",
    image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAviPjlBbeRYz6ny9-HOVtr9VmyQJ3FXOw60rSy8ye_U_nMy9gPWtgEPpPMAO7va36UX6nyw9BNvWVrC5kwShXJT3V7FtA5HmDO9aAwsBS4iGQWFRQWOX_ltiBkSajurq-ulo_Mu82VYsIMDkIme9jCuqMxKTt0P1fO9bv_tdXBzYj51QgTcD7pz-2/s1024/Original%20Gujarat%20Titans%20Logo%20PNG-SVG%20File%20Download%20Free%20Download.png",
   
},{
    id:8,
    Name:"DC",
    bg:"rgb(203, 111, 37)",
    image:"https://www.delhicapitals.in/static-assets/images/cssimages/logo.png",
   
},{
    id:9,
    Name:"RR",
    bg:"rgb(27, 66, 161)",
    image:"https://i.pinimg.com/originals/e2/94/64/e2946441d760920aca4a458c2e873ed9.png",
   
},{
    id:10,
    Name:"KKR",
    bg:"rgb(66, 37, 111)",
    image:"https://www.pngall.com/wp-content/uploads/2017/04/Kolkata-Knight-Riders-Logo-PNG.png",
      
},
]
    return(
        <>
            <Navbarr/>
      
        <div className="mainDiv">
            {
                Team.map((value,ind)=>{

                return(
         <div key={value.ind}>
   <Link to={`./TeamDetails/${value.id}` }> <div style={{backgroundColor:value.bg}} id="Container">
                   
                  <center > <img style={{marginTop:"30px"}} src={value.image} width={"113px"} height={"111px"}/>
                   <h4>{value.Name}</h4></center> 
                    
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