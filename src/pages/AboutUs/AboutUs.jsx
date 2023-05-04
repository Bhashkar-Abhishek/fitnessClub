
import Styles from "./AboutUs.module.css";
import Navbar from "../../component/Navbar/Navbar"
import Footer from "../../component/Footer/Footer"
export default function AboutUs() {
  return (
<>
<Navbar/>
<div id="about" className={Styles.Main}>
      <div className={Styles.AboutUs}>
        <div className={Styles.Video1}>
          <iframe
            width="360"
            height="515"
            src="https://www.youtube.com/embed/f6t9TQqdUzg"
            title="YouTube video player"
            // frameborder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen={true}
            allowFullScreen={true}
          ></iframe>
        </div>
        <div className={Styles.ContainerHeading}>
          <h1>About Us</h1>
          <h3>
            Through our 7-day programme we offer you some useful life questions
            to think about. We also offer you some answers on these questions
            but we encourage you to learn more about it yourself. You can read
            it all at once but we advise you to read and think about your life
            for the next 7 days. It may become the most valuable week of your
            life! It can be very valuable in your life. So take some time and
            invest one week in your life and future!
          </h3>
          <button className={Styles.button}>Learn More</button>
        </div>
      </div>

      <div className={Styles.AboutUs}>
        <div>
          <h1>Why Choose Us ?</h1>
          <ul className={Styles.listContainer}>
            <li>
              <strong className={Styles.strong}>
                Consultation with expert
              </strong>
              <h4>
                Plus Fitness franchisee Jacob Awad first started his journey
                with the brand in 2013 after purchasing Plus Fitness Seven Hills
                from a previous owner. In 2017 Jacob then went on to purchase
                his second location, Plus Fitness Northmead.
              </h4>
            </li>
            <li>
              <strong className={Styles.strong}> workout faculitis</strong>
              <h4>
                Plus Fitness franchisee Jacob Awad first started his journey
                with the brand in 2013 after purchasing Plus Fitness Seven Hills
                from a previous owner. In 2017 Jacob then went on to purchase
                his second location, Plus Fitness Northmead.
              </h4>
            </li>
          </ul>
        </div>

        <div className={Styles.Video2}>
          <iframe
            width="360"
            height="515"
            src="https://www.youtube.com/embed/cllK0z8BrlQ"
            title="YouTube video player 😈"
            // frameborder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen={true}
          ></iframe>
        </div>
      </div>
    </div>
    <Footer/>
</>
  );
}
