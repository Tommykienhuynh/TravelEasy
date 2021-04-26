import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./styles/App.scss";
import Navbar from "./components/navbar/navbar";
import whatIsSvg from "../src/assets/home/whatIs.svg";
import headerPic from "../src/assets/home/headerPic.svg";
import road from "./assets/home/roadPic.jpg";
import hotAirBallon from "./assets/home/hotAirBallonPic.jpg";
import boat from "./assets/home/boatPic.jpg";
import canyon from "./assets/home/canyonPic.jpg";
import LaCard from "./components/Home/card";
import logo from "./assets/General/logo.png";
import housePic from "./assets/home/housePic.svg";
import Footer from "./components/footer";
import { useHistory, Link } from "react-router-dom";

/* import nyPic from "./assets/home/nyCard.jpg";
import japanPic from "./assets/home/japanCard.jpg";
import laPic from "./assets/home/laCard.jpg";
import vancouverPic from "./assets/home/vancouverCard.jpg"; */
/* import circleBG from "./assets/home/desBG.svg"; */

export default function Home() {
  const history = useHistory();
  const [nav, setNav] = useState(false);
  function changeNavbar() {
    if (window.scrollY >= 300) {
      setNav(true);
    } else {
      setNav(false);
    }
  }

  function scrollDown() {
    window.scrollTo({
      top: 505,
      behavior: "smooth",
    });
  }

  window.addEventListener("scroll", changeNavbar);

  return (
    <div className="homePage">
      {/*       {nav ?   <Navbar /> : < sticky/> } */}
      <Navbar nav={nav} />
      <section className="homeHeader">
        <div className="heroBox">
          <img src={logo} className="logo" />
          <h1 className="titleName">Travel Easy</h1>
          <h3 className="heroDesc">Explore the World!</h3>
          <div className="headerBTNContainer">
            <button className="exploreBTN" onClick={scrollDown}>
              {" "}
              Learn More
            </button>
            <Link to="/about">
              <button className="actionBTN">About Us</button>
            </Link>
          </div>
        </div>
        <img
          className="headerSVG"
          src={headerPic}
          alt="travelers standing below an airplane"
        />
      </section>
      <section className="whatIsHome">
        <div className="headerContainer">
          <h2 className="headers">What is Travel Easy?</h2>
          <div className="orangeLine">-</div>
        </div>

        <p>
          Are you planning a vacation or simply need an escape without the
          headaches of planning it? Then, our services are perfect for you. Our
          goal is to provide you with the information you need to plan an
          enjoyable vacation, all at the click of a button. We do all the heavy
          lifting for you. We’ve taken tons of research and analysis, then
          summarized it into easy to digest travel information to plan out the
          amazing trip that you so deserve.
        </p>

        <div className="countersContainer">
          <div className="userCounter">
            <h3>Users</h3>
            <small className="userCount"> 230 </small>
          </div>
          <div className="destinationsCounter">
            <h3>Destinations</h3>
            <small className="desCount"> 122 </small>
          </div>
        </div>

        <img src={whatIsSvg} className="whatIsSVG" alt="travel picture" />
      </section>
      <section className="homeDestinations">
        <ul className="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li className="aniDelay"></li>
          <li className="aniDelay"></li>
          <li className="aniDelay"></li>
          <li className="aniDelay"></li>
          <li className="aniDelay"></li>
        </ul>
        {/* <img className="circleBG" src={circleBG} /> */}
        <h1 className="desTitle"> Popular Destinations </h1>
        <div className="cardContainer">
          <div className="card">
            <div className="cardPic la"> </div>
            <h3 className="cardTitle"> Los Angeles </h3>
            <Link to="/losAngeles">
              <button> More Info </button>
            </Link>
          </div>
          {/*           <LaCard /> */}
          <div className="card ">
            <div className="cardPic ny"> </div>
            <h3 className="cardTitle"> New York </h3>
            <Link to="/newYork">
              <button> More Info </button>
            </Link>
          </div>
          <div className="card ">
            <div className="cardPic japan"> </div>
            <h3 className="cardTitle"> Japan </h3>

            <Link to="/japan">
              <button> More Info </button>
            </Link>
          </div>
          <div className="card ">
            <div className="cardPic vancouver"> </div>
            <h3 className="cardTitle"> Vancouver </h3>
            <Link to="/vancouver">
              <button> More Info </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="homeGallery">
        <div className="galleryBox">
          <h2 className="headers"> Browse Gallery Photos </h2>
          <div className="orangeLine">-</div>
          <p>
            Browse through a college of photos from the destinations we cover
          </p>
          <button
            onClick={() => {
              history.push("/gallery");
            }}
          >
            Gallery
          </button>
        </div>
        <div className="galleryPics">
          <img className="canyonImg" src={canyon} />
          <img className="boatImg" src={boat} />

          <img className="ballonImg" src={hotAirBallon} />
          <img className="roadImg" src={road} />
        </div>
      </section>
      <section className="homeEnding">
        <img src={housePic} className="housePic" />
        <h2 className="headers ">
          Plan Vacation. <br />
          Find and book hotel. <br />
          Discover and confirm location! <br />
          <div className="orangeLine">-</div>
        </h2>
      </section>
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
}
