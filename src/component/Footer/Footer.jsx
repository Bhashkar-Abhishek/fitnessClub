import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={style.main}>
      <div className={style.head}>
        <h2> Fitness Club </h2>
        <p>
          Our mission is to build a community that empowers our clients to
          <br />
          become a better version of themselves with every session
        </p>
        <a href="https://www.facebook.com/" target="blank">
          
          <FacebookIcon sx={{ fontSize: "2rem", color: "white" , padding:'.4rem' }} />
        </a>
        <a href="https://twitter.com/" target="blank">
          
          <TwitterIcon sx={{ fontSize: "2rem", color: "white" , padding:'.4rem' }} />
        </a>
        <a href="https://www.instagram.com/" target="blank">
          
          <InstagramIcon sx={{ fontSize: "2rem", color: "white" , padding:'.4rem' }} />
        </a>
        <a href="https://web.whatsapp.com/" target="blank">
          
          <WhatsAppIcon sx={{ fontSize: "2rem", color: "white" , padding:'.4rem' }} />
        </a>
      </div>

      <div className={style.list}>
        <ul>
          <li>Home</li>
          <li>About </li>
          <li>Program</li>
          <li>Training </li>
          <li>Pricing </li>
        </ul>
        <ul>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Testimonials</li>
          <li>Work Culture</li>
          <li>Blogs</li>
        </ul>
        <ul>
          <li>Press Room</li>
          <li>Events</li>
          <li>Amazing Offers</li>
          <li>Group Program</li>
          <li>Gallery</li>
        </ul>
      </div>
    </div>
  );
}
