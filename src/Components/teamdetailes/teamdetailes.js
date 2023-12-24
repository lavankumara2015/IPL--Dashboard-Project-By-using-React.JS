import { useParams } from "react-router-dom"
import Navbarr from "../Navbar/Navbar"
import "./team.css"
import { useEffect, useState } from "react"



const TeamDetails =()=>{

    const { id } = useParams();

    // const [data ,setData]=useState(null)



    // useEffect(()=>{
    //     setData(id)
    // },[data])
  
    const  Team=[{
        id:1,
        Name:"Royal Challengers Bangalore (RCB)",
        bg:"rgb(191, 138, 21)",
        Championships:0,
        Coach:"Sanjay Bangar",
        Captain:"Faf Du Plessis",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Logooutline/RCBoutline.png" ,
       
    },{
        id:2,
        Name:"Sunrisers Hyderabad (SRH)",
        bg:"rgb(241, 161, 46)",
        Championships:2016,
        Coach:"Daniel Vettori",
        Captain:"Aiden Markram",
        image:"https://www.sunrisershyderabad.in/dist/img/srh-logo.gif",
       
    },{
        id:3,
        Name:"Mumbai Indians (MI)",
        bg:"rgb(9, 128, 181)",
        Championships:"2013,2015,2017,2019,2020 ",
        Coach:"Mark Boucher",
        Captain:"Hardik Pandya",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Logooutline/MIoutline.png",
       
    },{
        id:4,
        Name:"Chennai Super Kings (CSK)",
        bg:"rgb(237, 205, 22)",
        Championships:"2010,2011,2018,2021,2023 ",
        Coach:"Stephen Fleming",
        Captain:"MS Dhoni",
        image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhn3plcgt5OnAx_VelXAj9Z8TWBiqg6B-xgCJ__kuFeXr1ClntuhvVu0IugURU6TfyHk9qUuECEpos1E5ayEmx0fAupMIvNLQnLOwavDhBYxkIwvRv9cmm7_qHZmlcSwr3Un-hJpy92AooR9Qn77PUcr4yRgAORYwoTBjTYOmyYlHbZ0nDyaL3HWqUk/s2141/Original%20Chennai%20Super%20Fun%20Logo%20PNG%20-%20SVG%20File%20Download%20Free%20Download.png",
       
    },{
        id:5,
        Name:"Lucknow Super Giants (LSG)",
      
        Championships:0,
        Coach:"Justin Langer",
        Captain:"KL Rahul",
        bg:"rgb(167, 67, 121)",
        backgroundImage:"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        image:"https://branditechture.agency/brand-logos/wp-content/uploads/2022/06/Lucknow-Super-Giants-1024x768.png",
       
    },{
        id:6,
        Name:" Punjab Kings (KXIP)",
        bg:"rgb(225, 56, 58)",
        Championships:"0",
        Coach:"Mark Boucher",
        Captain:"Hardik Pandya",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png",
       
    },{
        id:7,
        Name:" Gujarat Titans (GI)",
        bg:"rgb(131, 85, 130)",
        Championships:"0",
        Coach:"Trevor Bayliss",
        Captain:"Shikhar Dhawan",
        image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAviPjlBbeRYz6ny9-HOVtr9VmyQJ3FXOw60rSy8ye_U_nMy9gPWtgEPpPMAO7va36UX6nyw9BNvWVrC5kwShXJT3V7FtA5HmDO9aAwsBS4iGQWFRQWOX_ltiBkSajurq-ulo_Mu82VYsIMDkIme9jCuqMxKTt0P1fO9bv_tdXBzYj51QgTcD7pz-2/s1024/Original%20Gujarat%20Titans%20Logo%20PNG-SVG%20File%20Download%20Free%20Download.png",
       
    },{
        id:8,
        Name:" Delhi Capitals (DC)",
        bg:"rgb(201, 0, 6)",
        Championships:"0",
        Coach:"Ricky Ponting",
        Captain:"David Warner",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/LogoOutline/DCoutline.png",
       
    },{
        id:9,
        Name:"Rajasthan Royals (RR)",
        bg:"rgb(235, 131, 181)",
        Championships:"2008",
        Coach:"Kumar Sangakkara",
        Captain:"Sanju Samson",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Logooutline/RRoutline.png",
       
    },{
        id:10,
        Name:"Kolkata Knight Riders (KKR)",
        bg:"rgb(66, 37, 111)",
        Championships:"2012,2014",
        Coach:"Chandrakant Pandit",
        Captain:"Shreyas Iyer",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Logooutline/KKRoutline.png",
          
    },]


    let Player=[[{
        
        name:" Virat kohli",
        age: "35",
        Ipl : "7263",
        Matches: "237",
        Wickets:"4",
        bg:"rgb(191, 138, 21)",
        backgroundImage: "linear-gradient(45deg, rgb(229, 191, 101), rgb(185, 130, 8))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/2.png"
    },{
        
        name:" Faf du Plessis",
        age: "39",
        Ipl : "4133",
        Matches: "130",
        Wickets:"0",
        bg:"rgb(191, 138, 21)",
        backgroundImage: "linear-gradient(45deg, rgb(229, 191, 101), rgb(185, 130, 8))",
        image:"https://rbrgloblesolution.in/IPLT2022/images/rcb/faf.png"
    },{
        
        name:"Glenn Maxwell",
        age: "35",
        Ipl : "2719",
        Matches: "124",
        Wickets:"31",
        bg:"rgb(191, 138, 21)",
        backgroundImage: "linear-gradient(45deg, rgb(229, 191, 101), rgb(185, 130, 8))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/28.png"
    },{
        
        name:"Mohammed Siraj",
        age: "29",
        Ipl : "97",
        Matches: "79",
        Wickets:"78",
        bg:"rgb(191, 138, 21)",
        backgroundImage: "linear-gradient(45deg, rgb(229, 191, 101), rgb(185, 130, 8))",
        image:"https://rbrgloblesolution.in/IPLT2022/images/rcb/siraj.png"
    },{
        
        name:"Dinesh Karthik",
        age: "38",
        Ipl : "4516",
        Matches: "242",
        Wickets:"0",
        bg:"rgb(191, 138, 21)",
        backgroundImage: "linear-gradient(45deg, rgb(229, 191, 101), rgb(185, 130, 8))",
        image:"https://rbrgloblesolution.in/IPLT2022/images/rcb/dinesh.png"
    }],[{
        
        name:" Aiden Markram",
        age: "29",
        Ipl : "775",
        Matches: "33",
        Wickets:"2",
        bg:"rgb(241, 161, 46)",
        backgroundImage:"linear-gradient (45deg, rgb(239, 188, 68), rgb(243, 113, 7))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/287.png"
    },{
        
        name:" Rahul Tripathi",
        age: "32",
        Ipl : "2071",
        Matches: "89",
        Wickets:"0",
        bg:"rgb(241, 161, 46)",
        backgroundImage:"linear-gradient (45deg, rgb(239, 188, 68), rgb(243, 113, 7))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/188.png"
    },{
        
        name:"Abhishek Sharma",
        age: "23",
        Ipl : "892",
        Matches: "47",
        Wickets:"9",
        bg:"rgb(241, 161, 46)",
        backgroundImage:"linear-gradient (45deg, rgb(239, 188, 68), rgb(243, 113, 7))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/212.png"
    },{
        
        name:"T Natarajan",
        age: "32",
        Ipl : "3",
        Matches: "47",
        Wickets:"48",
        bg:"rgb(241, 161, 46)",
        backgroundImage:"linear-gradient (45deg, rgb(239, 188, 68), rgb(243, 113, 7))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/224.png"
    },{
        
        name:"Bhuvneshwar Kumar",
        age: "33",
        Ipl : "283",
        Matches: "160",
        Wickets:"170",
        bg:"rgb(241, 161, 46)",
        backgroundImage:"linear-gradient (45deg, rgb(239, 188, 68), rgb(243, 113, 7))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/15.png"
    }],[{
        
        name:" Rohit Sharma",
        age: "36",
        Ipl : "6211",
        Matches: "243",
        Wickets:"15",
        bg:"rgb(9, 128, 181)",
        backgroundImage:"linear-gradient (45deg, rgb(16, 214, 213), rgb(7, 100, 171))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/6.png"
    },{
        
        name:"Suryakumar Yadav",
        age: "33",
        Ipl : "3249",
        Matches: "139",
        Wickets:"0",
        bg:"rgb(9, 128, 181)",
        backgroundImage:"linear-gradient (45deg, rgb(16, 214, 213), rgb(7, 100, 171))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/174.png"
    },{
        
        name:"Ishan Kishan",
        age: "35",
        Ipl : "2324",
        Matches: "91",
        Wickets:"0",
        bg:"rgb(9, 128, 181)",
        backgroundImage:"linear-gradient (45deg, rgb(16, 214, 213), rgb(7, 100, 171))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/164.png"
    },{
        
        name:"N. Tilak Varma",
        age: "29",
        Ipl : "25",
        Matches: "740",
        Wickets:"0",
        bg:"rgb(9, 128, 181)",
        backgroundImage:"linear-gradient (45deg, rgb(16, 214, 213), rgb(7, 100, 171))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/993.png"
    },{
        
        name:"Piyush Chawla",
        age: "38",
        Ipl : "609",
        Matches: "174",
        Wickets:"179",
        bg:"rgb(9, 128, 181)",
        backgroundImage:"linear-gradient (45deg, rgb(16, 214, 213), rgb(7, 100, 171))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/149.png"
    }],[{
        
        name:" Ravindra Jadeja",
        age: "35",
        Ipl : "2692",
        Matches: "226",
        Wickets:"152",
        bg:"rgb(236, 202, 24)",
        backgroundImage:"linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",    
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/46.png"
    },{
        
        name:"MS Dhoni",
        age: "39",
        Ipl : "5082",
        Matches: "250",
        Wickets:"0",
        bg:"rgb(236, 202, 24)",
        backgroundImage:"linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
          image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/57.png"
    },{
        
        name:"Ruturaj Gaikwad",
        age: "35",
        Ipl : "1797",
        Matches: "52",
        Wickets:"0",
        bg:"rgb(236, 202, 24)",
        backgroundImage:"linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/102.png"
    },{
        
        name:"Deepak Chahar",
        age: "29",
        Ipl : "80",
        Matches: "73",
        Wickets:"72",
        bg:"rgb(236, 202, 24)",
        backgroundImage:"linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/91.png"
    },{
        
        name:"Devon Conway",
        age: "38",
        Ipl : "924",
        Matches: "23",
        Wickets:"0",
        bg:"rgb(236, 202, 24)",
        backgroundImage:"linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/601.png"
    }],[{
        
        name:"KL Rahul",
        age: "35",
        Ipl : "4163",
        Matches: "118",
        Wickets:"0",
        bg:"rgb(167, 67, 121)",
        backgroundImage:"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/19.png"
    },{
        
        name:"Quinton de Kock",
        age: "39",
        Ipl : "2907",
        Matches: "96",
        Wickets:"0",
        bg:"rgb(167, 67, 121)",
        backgroundImage:"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/170.png"
    },{
        
        name:"Krunal Pandya",
        age: "35",
        Ipl : "1514",
        Matches: "113",
        Wickets:"70",
        bg:"rgb(167, 67, 121)",
        backgroundImage:"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/17.png"
    },{
        
        name:"Nicholas Pooran",
        age: "29",
        Ipl : "1270",
        Matches: "62",
        Wickets:"0",
        bg:"rgb(167, 67, 121)",
        backgroundImage:"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)", 
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/136.png"
    },{
        
        name:"Amit Mishra",
        age: "38",
        Ipl : "381",
        Matches: "173",
        Wickets:"0",
        bg:"rgb(167, 67, 121)",
        backgroundImage:"linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/107.png"
    }],[{
        
        name:"Jonny Bairstow ",
        age: "35",
        Ipl : "1291",
        Matches: "39",
        Wickets:"0",
        bg:"rgb(225, 56, 58)",
    backgroundImage:"(45deg, rgb(179, 22, 25), rgb(246, 71, 73)), rgb(48, 24, 87))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/216.png"
    },{
        
        name:"Shikhar Dhawan",
        age: "39",
        Ipl : "6617",
        Matches: "217",
        Wickets:"4",
        bg:"rgb(225, 56, 58)",
        backgroundImage:"(45deg, rgb(179, 22, 25), rgb(246, 71, 73)), rgb(48, 24, 87))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/11.png"
    },{
        
        name:"Jitesh Sharma",
        age: "35",
        Ipl : "543",
        Matches: "26",
        Wickets:"0",
        bg:"rgb(225, 56, 58)",
        backgroundImage:"(45deg, rgb(179, 22, 25), rgb(246, 71, 73)), rgb(48, 24, 87))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1000.png"
    },{
        
        name:"Atharva Taide",
        age: "29",
        Ipl : "186",
        Matches: "",
        Wickets:"0",
        bg:"rgb(225, 56, 58)",
        backgroundImage:"(45deg, rgb(179, 22, 25), rgb(246, 71, 73)), rgb(48, 24, 87))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/1001.png"
    },{
        
        name:"Sam Curran",
        age: "38",
        Ipl : "613",
        Matches: "46",
        Wickets:"42",
        bg:"rgb(225, 56, 58)",
        backgroundImage:"(45deg, rgb(179, 22, 25), rgb(246, 71, 73)), rgb(48, 24, 87))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/138.png"
    }],[{
        
        name:"Shubman Gill",
        age: "35",
        Ipl : "2970",
        Matches: "129",
        Wickets:"0",
        bg:"rgb(119, 199, 242)",
        backgroundImage:"linear-gradient (45deg, rgb(111, 69, 150), rgb(48, 24, 187))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/62.png"
    },{
        
        name:"Wriddhiman Saha",
        age: "39",
        Ipl : "2798",
        Matches: "115",
        Wickets:"0",
        bg:"rgb(119, 199, 242)",
        backgroundImage:"linear-gradient (45deg, rgb(111, 69, 150), rgb(48, 24, 187))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/225.png"
    },{
        
        name:"Kane Williamson",
        age: "35",
        Ipl : "2101",
        Matches: "89",
        Wickets:"0",
        bg:"rgb(119, 199, 242)",
        backgroundImage:"linear-gradient (45deg, rgb(111, 69, 150), rgb(48, 24, 187))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/65.png"
    },{
        
        name:"Vijay Shankar",
        age: "29",
        Ipl : "63",
        Matches: "1032",
        Wickets:"9",
        bg:"rgb(119, 199, 242)",
        backgroundImage:"linear-gradient (45deg, rgb(111, 69, 150), rgb(48, 24, 187))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/61.png"
    },{
        
        name:"Mohit Sharma",
        age: "38",
        Ipl : "122",
        Matches: "21",
        Wickets:"119",
        bg:"rgb(119, 199, 242)",
        backgroundImage:"linear-gradient (45deg, rgb(111, 69, 150), rgb(48, 24, 187))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/100.png"
    }],[{
        
        name:"David Warner",
        age: "35",
        Ipl : "6397",
        Matches: "126",
        Wickets:"152",
        bg:"rgb(201, 0, 6)",
        backgroundImage:"linear-gradient (45deg, rgb(220, 181, 47), rgb(185, 36, 26))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/214.png"
    },{
        
        name:"Prithvi Shaw",
        age: "39",
        Ipl : "1694",
        Matches: "99",
        Wickets:"0",
        bg:"rgb(201, 0, 6)",
        backgroundImage:"linear-gradient (45deg, rgb(220, 181, 47), rgb(185, 36, 26))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/51.png"
    },{
        
        name:"Axar Patel",
        age: "35",
        Ipl : "1418",
        Matches: "54",
        Wickets:"0",
        bg:"rgb(201, 0, 6)",
        backgroundImage:"linear-gradient (45deg, rgb(220, 181, 47), rgb(185, 36, 26))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/110.png"
    },{
        
        name:"Lalit Yadav",
        age: "29",
        Ipl : "295",
        Matches: "48",
        Wickets:"10",
        bg:"rgb(201, 0, 6)",
        backgroundImage:"linear-gradient (45deg, rgb(220, 181, 47), rgb(185, 36, 26))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/538.png"
    },{
        
        name:"Lungi Ngidi",
        age: "38",
        Ipl : "0",
        Matches: "14",
        Wickets:"25",
        bg:"rgb(201, 0, 6)",
        backgroundImage:"linear-gradient (45deg, rgb(220, 181, 47), rgb(185, 36, 26))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/99.png"
    }],[{
        
        name:"Sanju Samson",
        age: "35",
        Ipl : "3888",
        Matches: "119",
        Wickets:"0",
        bg:"rgb(235, 131, 181)",
        backgroundImage:"linear-gradient (45deg, rgb(49, 93, 201), rgb(22, 59, 151))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/190.png"
    },{
        
        name:"Jos Buttler",
        age: "39",
        Ipl : "323",
        Matches: "214",
        Wickets:"0",
        bg:"rgb(235, 131, 181)",
        backgroundImage:"linear-gradient (45deg, rgb(49, 93, 201), rgb(22, 59, 151))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/182.png"
    },{
        
        name:"Yashasvi Jaiswal",
        age: "35",
        Ipl : "1172",
        Matches: "32",
        Wickets:"0",
        bg:"rgb(235, 131, 181)",
        backgroundImage:"linear-gradient (45deg, rgb(49, 93, 201), rgb(22, 59, 151))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/533.png"
    },{
        
        name:"Riyan Parag",
        age: "29",
        Ipl : "600",
        Matches: "54",
        Wickets:"4",
        bg:"rgb(235, 131, 181)",
        backgroundImage:"linear-gradient (45deg, rgb(49, 93, 201), rgb(22, 59, 151))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/189.png"
    },{
        
        name:"Ravichandran Ashwin",
        age: "38",
        Ipl : "714",
        Matches: "197",
        Wickets:"171",
        bg:"rgb(235, 131, 181)",
        backgroundImage:"linear-gradient (45deg, rgb(49, 93, 201), rgb(22, 59, 151))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/45.png"
    }],[{
        
        name:"Rinku Singh",
        age: "35",
        Ipl : "725",
        Matches: "31",
        Wickets:"0",
        bg:"rgb(66, 37, 111)",
        backgroundImage:"linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/152.png"
    },{
        
        name:"Nitish Rana",
        age: "39",
        Ipl : "2594",
        Matches: "105",
        Wickets:"10",
        bg:"rgb(66, 37, 111)",
        backgroundImage:"linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/148.png"
    },{
        
        name:"Shreyas Iyer",
        age: "35",
        Ipl : "2776",
        Matches: "101",
        Wickets:"7",
        bg:"rgb(66, 37, 111)",
        backgroundImage:"linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/12.png"
    },{
        
        name:"Andre Russell",
        age: "29",
        Ipl : "2262",
        Matches: "112",
        Wickets:"96",
        bg:"rgb(66, 37, 111)",
        backgroundImage:"linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/141.png"
    },{
        
        name:"Venkatesh Iyer",
        age: "38",
        Ipl : "956",
        Matches: "36",
        Wickets:"3",
        bg:"rgb(66, 37, 111)",
        backgroundImage:"linear-gradient (45deg, rgb(111, 69, 172), rgb(48, 24, 87))",
        image:"https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/584.png"
    }]]
 


  const team=useParams();
    

 const selectedTeam = Team.find((team) => team.id === parseInt(id, 10));

    return(
        <div>
            <>
               <Navbarr/>
               </>
        
      {
        Team.map((value,ind)=>{ 

            if(value.id==selectedTeam.id){
            return(
                <div className="container" key={selectedTeam.id}>
                <div className="child1" style={{backgroundColor:value.bg , backgroundImage:value.backgroundImage}}>
                <center>  <img src={value.image} width={"150px"} height={"150px"} className="imgg"/>

                        
                </center>  
                </div>
                <div className="child2">
                    <h3>{value.Name}</h3> <br/>
                    <p><b>Championships :</b>  {value.Championships}</p>
                    <p><b>Coach :</b>  {value.Coach}</p>
                    <p><b>Captain :</b>  {value.Captain}</p>

                </div>
                </div>
                
            )}

        })
      }<br/><br/>


<h2 className="h22">Player List</h2>

<div id="container2">

          {
            Player[selectedTeam.id-1].map((value)=>{
                return (
                        <div className="child3" key={value.id}>
                            <div className="child4">
                                <img src={value.image} width={300}  style={{backgroundColor:value.bg , backgroundImage:value.backgroundImage}}/><br/><br/>
                           <center> <h3>{value.name}</h3></center>  
                               <div className="inner"> 
                            <center> <div> <h5>{value.Matches}</h5> <p>Matches</p></div></center> <hr style={{border:"0.5px solid"} }/>
                            <center> <div> <h5>{value.Ipl}</h5> <p>Runs</p></div></center> <hr style={{border:"0.5px solid"} }/>
                            <center> <div> <h5>{value.Wickets}</h5> <p>Wickets</p></div></center> 
                                </div>       
                            </div>
                             </div>
                )
            })
          }
          </div>
  </div>
  

    )
}

export default TeamDetails