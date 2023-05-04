import { useState, useEffect } from 'react'
import style from './Home.module.css'
import Navbar from "../../component/Navbar/Navbar"
import Footer from "../../component/Footer/Footer"
export default function Home() {

  const imgArr = [
    {
      url: 'https://images.pexels.com/photos/935965/pexels-photo-935965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'BUILD YOUR BODY - TRANSFORM YOUR LIFE'
    },
    {
      url: 'https://images.pexels.com/photos/3838389/pexels-photo-3838389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'ARE U READY TO GET FIT, STRONG AND MOTIVATED'
    },
    {
      url: 'https://images.pexels.com/photos/868483/pexels-photo-868483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'WORKOUT YOUR WAY'
    },
    {
      url: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      text: 'Get Ready to BURN'
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((index + 1) % imgArr.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
 <>
 <Navbar/>
    <div className={style.main}>
        <img src={imgArr[index].url} alt={imgArr[index].text} className={style.img} />
        <div className={style.text}>
          <p>{imgArr[index].text}</p>
      </div>
    </div>
    <Footer/>
 </>
  )
}