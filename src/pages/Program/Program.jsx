import style from './Program.module.css'
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
// import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Navbar from "../../component/Navbar/Navbar"
import Footer from "../../component/Footer/Footer"
import { Navigate } from 'react-router-dom';
export default function Program () {
const isLogedIn=localStorage.getItem("isLogedIn")
    const Data = [
        {
          id: 1,
          Img: "https://cdn.pixabay.com/photo/2015/01/18/23/08/mobility-603558__340.jpg",
          Name: "Flexibility",
        },
        {
          id: 2,
          Img: "https://cdn.pixabay.com/photo/2016/10/11/02/00/fitness-1730327__340.jpg",
          Name: "Yoga",
        },
        {
          id: 3,
          Img: " https://cdn.pixabay.com/photo/2014/09/28/19/50/fitness-465205__340.jpg",
          Name: "Body Building",
        },
        {
          id: 4,
          Img: "https://cdn.pixabay.com/photo/2016/11/22/22/25/abs-1850926__340.jpg",
          Name: "Aeobic",
        },
        {
          id: 5,
          Img: " https://cdn.pixabay.com/photo/2020/12/06/05/24/woman-5807825__340.jpg ",
          Name: "Fitness",
        },
        {
          id: 6,
          Img: " https://cdn.pixabay.com/photo/2017/02/09/16/37/kettlebell-2052793__340.jpg",
          Name: "Flexibility",
        },
      ];
      
      

    return(
        <>
        <Navbar/>
       {
        isLogedIn?(
          <div className={style.mainDiv}>
          <h1 className = {style.heading}> Trainers Program </h1>
  
  <div className = {style.main}>
  {
      Data.map((item , index) =>{
          return(
              <div key = {item.id} className = {style.container}>
          <img src = {item.Img} alt='program' className = {style.img} />
          <p> {item.Name} </p>
          </div>
          )
          
      })
  }
  </div>
          </div>
              
        ):<Navigate to ="/login"/>
       }
            <Footer/>
        </>
    )
}