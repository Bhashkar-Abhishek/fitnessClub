import { useState } from "react";
import style from "./Training.module.css";
import Button from "@mui/material/Button";

export function Training() {
  const [show, setShow] = useState(3);
  const [buttonText, setButtonText] = useState("Show More");

  const data = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/972833328/photo/male-personal-trainer-helping-sportswoman-to-do-exercises-with-barbell-at-gym.jpg?s=612x612&w=0&k=20&c=5kIxaobVDjjDrYvv8qNB2lGJoBImzHvj-csu30o_lZY=",
      name: "Amitee Loisell",
      trainer: "Fitness Coach",
    },
    {
      id: 2,
      image:
        "https://www.muscleandfitness.com/wp-content/uploads/2018/12/Personal-Trainer-Training-Partner-GettyImages-654427364.jpg?quality=86&strip=all",
      name: "Liam Harpaul",
      trainer: "Crossfit Coach",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSzgYbF5MQQAk16ZFkpMgqMJKDv3pll-kJucKar-N6aIWga18jflx_f4K_OYUa48tK7RU&usqp=CAU",
      name: "Mark Anthony",
      trainer: "Crossfit Coach",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkkQa2mc3Jzofna3iQ73nd6HNU7thLqNIIRg&usqp=CAU",
      name: "Ron Richardson",
      trainer: "Body Building",
    },
    {
      id: 5,
      image:
        "https://www.ufcgym.me/backend/assets/DSC00928(1)%20.jpg",
      name: "Israel Adesanya",
      trainer: "MMA Coach",
    },
    {
      id: 6,
      image:
        "https://www.bjjee.com/wp-content/uploads/2020/08/chimaev-jiu-jitsu.jpg",
      name: "Abhishek Bhashkar",
      trainer: "Jiu Jitsu Coach",
    },
    {
      id: 7,
      image:
        "https://www.eju.net/wp-content/uploads/2017/06/deb88ea9adc2b0348defcb849224d344_1024.jpg",
      name: "Jigoro Kano ",
      trainer: "Judo Coach",
    },
    {
      id: 8,
      image:
        "https://images.squarespace-cdn.com/content/v1/54e26481e4b0c4ae29d7db50/1577831405862-K06RJW0SV0XBQF8CCXXY/sebastian.jpg?format=1000w",
      name: "Morihei Ueshiba",
      trainer: "Aikido Coach",
    },
  ];

  const handleShow = () => {
    if (show === data.length) {
      setShow(3);
      setButtonText("Show More");
    } else {
      setShow(data.length);
      setButtonText("Show Less");
    }
  };

  return (
    <div className = {style.main}>
    <h1 className={style.h1}> Trainers </h1>
      <h2 className = {style.h2}>Meet our team </h2>

      <p className={style.p}>
        We are the team experience people, nutirition, sports and fitness
        passionate experts with talent <br />
        and knowledge unsurpassed in the industry.Get to know us.
      </p>

     {/* <div className={style.cards}> */}
     {data.slice(0, show).map((item) => {
        return (
          <div key={item.id}  className={style.cardbox}>
            <div  className={style.card} >
            <img src={item.image} alt="" />
            <div className={style.content}>
            <p>{item.name}</p>
            <span>{item.trainer}</span>
            </div>
            </div>
          </div>
        );
      })}
     {/* </div> */}
      <br />

      <div
        style={{
          justifyContent: "center",
          alignItem: "center",
          display: "flex",
        }}
      >
        <Button
          variant="contained"
          sx={{
            textAlign: "center",
            margin: "1rem",
            fontSize: "1.5rem",
          }}
          onClick={handleShow}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
