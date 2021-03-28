import React from "react";
import { useSpring, animated } from "react-spring";
import "./styles/App.scss";
import whatIsSvg from "../src/assets/home/whatIs.svg";
import headerPic from "../src/assets/home/headerPic.svg";
import road from "./assets/home/roadPic.jpg";
import hotAirBallon from "./assets/home/hotAirBallonPic.jpg";
import boat from "./assets/home/boatPic.jpg";
import canyon from "./assets/home/canyonPic.jpg";
import LaCard from "./components/Home/card";
/* import nyPic from "./assets/home/nyCard.jpg";
import japanPic from "./assets/home/japanCard.jpg";
import laPic from "./assets/home/laCard.jpg";
import vancouverPic from "./assets/home/vancouverCard.jpg"; */
/* import circleBG from "./assets/home/desBG.svg"; */

export default function Home() {
  return (
    <div className="homePage">
      <section className="homeHeader">
        <nav>
          <ul className="navList">
            <li>Home</li>
            <li>About</li>
            <li>Locations</li>
            <li>Gallery</li>
          </ul>
        </nav>
        <div className="heroBox">
          <h1 className="titleName">Travel Easy</h1>
          <h3 className="heroDesc">Explore the World!</h3>
          <div className="headerBTNContainer">
            <button className="exploreBTN">Explore</button>
            <button className="actionBTN">Action</button>
          </div>
        </div>
        <img
          className="headerSVG"
          src={headerPic}
          alt="travelers standing below an airplane"
        />
      </section>
      <section className="whatIsHome">
        <h2 className="whatIsHeader">What is Travel Easy?</h2>
        <div className="orangeLine">-</div>
        <p className="whatIsPara">
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
          {/*    <div className="card">
            <div className="cardPic la"> </div>
            <h3 className="cardTitle"> Los Angeles </h3>
            <button> More Info </button>
          </div> */}
          <LaCard />
          <div className="card ">
            <div className="cardPic ny"> </div>
            <h3 className="cardTitle"> New York </h3>
            <button> More Info </button>
          </div>
          <div className="card ">
            <div className="cardPic japan"> </div>
            <h3 className="cardTitle"> Japan </h3>
            <button> More Info </button>
          </div>
          <div className="card ">
            <div className="cardPic vancouver"> </div>
            <h3 className="cardTitle"> Vancouver </h3>
            <button> More Info </button>
          </div>
        </div>
      </section>

      {/*   <section className="homeGallery">
        <div className="galleryBox">
          <h2> Browse Gallery Photos </h2>
          <div className="orangeLine">-</div>
          <button> Gallery </button>
        </div>
        <div className="galleryPics">
          <img src={boat} />
          <img src={canyon} />
          <img src={road} />
          <img src={hotAirBallon} />
        </div>
      </section>
      <section className="homeEnding">
        <h2>
          Plan Vacation. Find and book hotel. Discover and confirm location!
          <div className="orangeLine">-</div>
        </h2>
      </section> */}
    </div>
  );
}
