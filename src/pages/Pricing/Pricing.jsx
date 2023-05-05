import Style from "./Pricing.module.css";
import Navbar from "../../component/Navbar/Navbar"
import Footer from "../../component/Footer/Footer"
import { useNavigate } from "react-router-dom";
export default function Pricing() {

  const navigate = useNavigate()
  const isLogedIn=localStorage.getItem("isLogedIn")

  return (
<>
<Navbar/>
 
<div id='pricing'>

<div className={Style.container}>
  
  <div className={Style.card1}>
    <span className={Style.s1}> Day Pass </span> <br />
    <span className={Style.s2}> $  </span>  
    <span className={Style.s3}> 20 </span>   <br />
    <span className={Style.s4}> /pass </span> <br />
    <p className={Style.para}>
      ☑️ 1 Day Pass <br /> <br />
      ☑️ Free Gym Access <br /> <br />
      ☑️ 24 Hours Access <br />
    </p>

    
    <button className={Style.btn} onClick={() => {isLogedIn?alert("You have subscribed to our daily pass"):navigate('/login')}}> GET STARTED </button>
  </div>
  

  <div className={Style.card2}>
    <span className={Style.s5}> Month to Month </span>  <br />
    <span className={Style.s6}> $  </span>  
    <span className={Style.s7}> 90 </span>   <br />
    <span className={Style.s8}> /month </span> <br />
    <p className={Style.p}>
    ☑️ $99 Joining Free  <br /> <br />
    ☑️ No Contact  <br /> <br />
    ☑️ Free Gym Access   <br /> <br />
    ☑️ 1 Group Class Include  <br /> <br />
    ☑️ 24 Hours Access <br />
    </p>
    <button className={Style.btns}onClick={() => {isLogedIn?alert("You have subscribed to our monthly pass"):navigate('/login')}}> GET STARTED </button>
  </div>
  

  <div className={Style.content}>

    <p  className={Style.heading}>Membership</p>

    <p className={Style.p1}>From Punch Pass to Monthly or Annual </p>

    <p className={Style.p2}>At Gym base we offer wide range of membership with opposite to suit every budget.
      Everything from one Day Pass. Punch Pass to monthly or annual prepaid membership. 
      What's more. We won't tie you in to a long term contract giving you greater flexibility.
    </p>

      <p className={Style.p3}>Each Plan included </p> <br />

      <p className={Style.p4}>
      ➡️ Best equiement global brands. <br /> 
      ➡️ The gym opens 24 hours a day , 7 days a week  <br />
      ➡️ Two safe payment methods. <br />
      ➡️ Group fitness classes in price of subscription. <br />
      ➡️ No long-term contract , period.
      </p>
      </div>
</div>
    </div>
    <Footer/>
</>
  );
}
