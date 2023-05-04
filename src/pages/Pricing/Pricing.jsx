
// import { Link } from "react-router-dom";
import styles from "./Pricing.module.css";
import Navbar from "../../component/Navbar/Navbar"
import Footer from "../../component/Footer/Footer"
export default function Pricing() {
  return (
<>
<Navbar/>
<div className={styles.pricing_mainBackground}>
      <div className={styles.pricing_container}>
        <div className={styles.pass_part}>
          <div className={`${styles.pass_box} ${styles.left_box}`}>
            <div>
              <p>Day Pass</p>
              <h1>$20</h1>
              <span>/pass</span>
            </div>
            <p>-- 1 Day Pass</p>
            <p>-- Free Gym Access</p>
            <p>-- 24 Hour Access</p>
            {/* <Link to="/joinUs">
              <button className={styles.btn}> Buy</button>
            </Link> */}
            <button className={styles.btn}> Buy</button>
          </div>

          <div className={`${styles.pass_box} ${styles.right_box}`}>
            <div>
              <p>Month to Month</p>
              <h1>$90</h1>
              <span>/month</span>
            </div>
            <p>-- $99 Joining Fee</p>
            <p>-- No Contract</p>
            <p>-- Free Gym Access</p>
            <p>-- 1 Group Class Included</p>
            <p>-- 24 Hour Access</p>
            {/* <Link to="/joinUs">
              <button className={styles.btnn}> Buy</button>
            </Link> */}
            <button className={styles.btnn}> Buy</button>
          </div>
        </div>

        <div className={styles.content_part}>
          <h4>
            <span>Member</span>ship
          </h4>

          <h2>From Punch Pass to Monthly or Annual</h2>

          <p>
          At Gym base we offer wide range of membership with opposite to suit every budget.
      Everything from one Day Pass. Punch Pass to monthly or annual prepaid membership. 
      What's more. We won't tie you in to a long term contract giving you greater flexibility.          </p>

          <h3>Each Plan included</h3>

          <ul>
            <li>
              <span>--</span> The best equipment global brand
            </li>
            <li>
              <span>--</span> The gym is open 24 hours a day, 7 days a week
            </li>
            <li>
              <span>--</span> Two safe payment methods
            </li>
            <li>
              <span>--</span> Group fitness classes in the price of the
              subscription
            </li>
            <li>
              <span>--</span> No long-term contract, period
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
</>
  );
}
