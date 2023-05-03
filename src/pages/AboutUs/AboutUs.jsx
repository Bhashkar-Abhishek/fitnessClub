// import { Video1 } from "./video";
// import { Video2 } from "./video";
import ReactPlayer from "react-player";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.aboutUsPage}>
      <div className={styles.aboutUsText}>
        <h2>About Us</h2>
        <p>
          Our gym is dedicated to providing a fun and challenging workout
          experience for people of all fitness levels. We offer a variety of
          classes and training programs to help you achieve your health and
          fitness goals.
        </p>
        <p>
          Our Trainers are experienced professionals who are passionate about
          helping you succeed. Whether you are just starting out or looking to
          take your fitness ti the next level ,we are here to support and
          motivated you every step of the way.
        </p>
      </div>
      <div className={styles.videoContainer}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=BvuaBsHMiOQ"
          controls
          width="100%"
          height="100%"
        />
      </div>
      <div className={styles.videoContainer}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ItuhDytDOYE"
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
export default AboutUs;
