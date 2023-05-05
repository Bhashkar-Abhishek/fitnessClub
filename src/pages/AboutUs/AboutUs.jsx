import Navbar from "../../component/Navbar/Navbar"
import styles from './AboutUs.module.css'
import Footer from "../../component/Footer/Footer"


export default function AboutUs() {

  return (
    <div id='aboutus'>
      <Navbar />
      <div className={styles.aboutus}>
        <div className={styles.left}>

          <iframe
            width="650"
            height="500"
            src="https:www.youtube.com/embed/f6t9TQqdUzg"
            title="YouTube video player"
            allowFullScreen={true}
          >
          </iframe>

        </div>

        <div className={styles.right}>

          <h1> About <span style={{ color: 'red', fontSize: "3rem" }}>Us </span> </h1>
          <p className={styles.p}>
            Latest fitness equipment. 10,000 sq.ft. of gym workout space. A brand new gym.
            Dedicated personal training and CrossFit Studio. Internationally certified personal trainers. We are the champions of fitness.
            We are Waves Gym. If you prefer a more personalized approach, our certified personal trainers are available to
            create custom workout plans tailored to your specific needs and goals.
            We have no qualms in calling ourselves the best gym in Andheri West. Not only do you get assistance at every step and point,
            but you also get personalized and customized workout and dietary programs.
          </p>
          <br />
          <button className={styles.btn} onClick={() => alert('Clicked for AboutUs Section')}>Learn More</button>
        </div>
      </div>


      <div className={styles.aboutus}>

        <div className={styles.right}>

          <h1>Why to <span style={{ color: 'red', fontSize: "3rem" }}>Choose</span>  Us</h1><br />
          <p className={styles.p}>
            We believe that fitness is not just about working out, it's about living a healthy and balanced lifestyle. That's why we offer a range
            of amenities to help you relax and rejuvenate after your workout. Our locker rooms and showers are spacious and well-equipped,
            and our saunas are the perfect place
            to unwind and destress. We also have a juice bar where you can refuel with delicious and healthy drinks and snacks.
            Our club is more than just a gym; it's a community of like-minded individuals who are passionate about living a healthy and
            active lifestyle. We provide a welcoming
            and inclusive environment where everyone is encouraged to unleash their potential and achieve their fitness goals.
          </p>
        </div>

        <div className={styles.left}>

          <iframe
            width="650"
            height="500"
            src="https:www.youtube.com/embed/cllK0z8BrlQ"
            title="YouTube video player 😈"
            allowFullScreen={true}
          >
          </iframe>
        </div>
      </div>

      <Footer />
    </div>

  )
}

