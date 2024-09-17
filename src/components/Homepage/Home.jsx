// import Footer from "../Footer/Footer";
import "./Home.css";
import Chatpop from "../Chatpopup/chatpop";
import romanShoes1 from "../../assets/romanShoes1.png";
import romanGallery from "../../assets/romanGallery.jpeg";

export default function Home() {
  return (
    <>
      <div className="home ">
        <section id="norm" className="cover-sect">
          <div className="title-text">
            <h1 style={{ color: "blue", fontSize: "50px" }}>Roman Shoes</h1>
            <p style={{ background: "inherit", color: "black" }}>
              A shoe shop is a retail destination that offers a diverse
              selection of footwear for men, women, and children. With a focus
              on style, comfort, and quality, it provides customers with a wide
              range of options for various occasions and preferences. The shop
              features organized displays, knowledgeable staff, and a
              customer-friendly environment, ensuring a pleasant and convenient
              shopping experience for all shoe enthusiasts.
            </p>
          </div>
          <div className="box-feature">
            <img
              className="cover-image"
              src={romanShoes1}
              alt="Living room sample"
            />
          </div>
        </section>
        <section id="story" className="story-sect">
          <div className="section-text">
            <h2>Roman Gallery</h2>
            <p style={{ backgroundColor: "inherit" }}>
              we fulfilled our shared dream of opening a cozy shoe shop in our
              neighborhood. The store quickly became a bustling hub of foot
              fashion, attracting customers with our impeccable taste and
              personalized service. However, as the digital age advanced, we
              faced a crucial decision. With heavy hearts, we chose to close our
              physical store and embark on the journey of establishing an online
              shop. Undeterred, we poured our energy into building a captivating
              website, carefully curating our shoe collection, and expanding our
              reach beyond geographical boundaries. Through the power of
              technology, we transcended limitations, connecting with customers
              around the globe, and transforming our passion for shoes into an
              international phenomenon.
            </p>
          </div>
          <div className="box-feature">
            <img src={romanGallery} />
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="section-text">
            <h2>Get in touch</h2>
            <p>
              We would love to hear from you! <br />
              <br />
              If you would like to receive our monthly catalogue subscribe by
              filling in the form with your name and email address
            </p>
          </div>

          <ul className="social-networks square spin-icon">
            <li>
              <a href="https://www.linkedin.com/" className="icon-linkedin">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" className="icon-twitter">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" className="icon-facebook">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitch.tv" className="icon-twitch">
                Twitch
              </a>
            </li>
            <li>
              <a href="https://github.com" className="icon-github">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://pinterest.com" className="icon-pinterest">
                Pinterest
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="icon-instagram">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://vimeo.com" className="icon-vimeo">
                Vimeo
              </a>
            </li>
          </ul>
        </section>
        <footer className="footer-section">
          <div className="footer-info">
            <ul style={{ listSstyle: "none", backgroundColor: "inherit" }}>
              <li>
                <span>Privacy</span>
              </li>
              <li>
                <span>Terms</span>
              </li>
              <li>
                <span>Contact</span>
              </li>
            </ul>
          </div>
          <span className="personal-info">
            Created by AI Spark
            <br />
            Reach out on Discord
          </span>
          <span>Copyright 2023</span>
        </footer>
      </div>
      <Chatpop />
    </>
  );
}
