import React from "react";
import Navbar from "../navbar/navbar";
import mapPic from "../../assets/about/map.jpg";
import "../../styles/about/about.scss";
import Footer from "../../components/footer.jsx";
import Logo from "../../assets/General/logo.png";

export default function about() {
  return (
    <>
      <Navbar nav="nav" />
      <div className="aboutHeader">
        <h1> About Us! </h1>
      </div>

      <div className="missionStateContainer">
        <h1 className="headers"> Mission Statement</h1>
        <div className="orangeLine"> </div>
        <p>
          Frequently those who plan their vacations are overwhelmed with
          traveling websites and information that are scattered across the
          internet. With the help of Tommy, Dianna, Kelvin and Koyee, we worked
          as a team to provide an easy to navigate website to assist travel with
          a more suitable approach. Additionally, the resources that were used
          to create our project are the website figma, HTML and CSS, JavaScript,
          MongoDB, Hira ku, and Vercel. Our goal is to assist those who have
          struggles to find a starting point when attempting to coordinate a
          vacation. Similarly to a planned itinerary, the website’s layout
          offers a simplistic design in which users can freely navigate to find
          information about their desired travel destination. Making sure that
          the layout and style of the website is consistent, the navigation will
          be of ease for new users. Entirely, the project brings a stress-free
          space for vacation planners to comfortably research the provided
          summaries found on the website while being engaged. Inspiration from
          other travel websites has shaped the website into what it is currently
          as the “all in one” program.
        </p>
        <img src={Logo} className="aboutLogo" />
      </div>

      <div className="profileQuoteSection">
        <img className="mapPic" src={mapPic} />

        <div className="quoteContainer">
          <p>
            " Planning a trip shouldn’t be stressful. It should be easy. Our
            goal is to spread travel inspiration, with ease in mind."
          </p>
        </div>
      </div>

      <div className="meetTheTeamSection">
        <h1 className="headers ">Meet The Team!</h1>
        <div className="orangeLine"></div>

        <div className="profileCardContainer">
          <div className="profileCard">
            <div className="circle"></div>
            <small className="headers"> Tommy Huynh </small>
            <p> "Working on this project was fun! "</p>
          </div>
          <div className="profileCard">
            <div className="circle"></div>
            <small className="headers"> Dianna Romero </small>
            <p> "Research for the project was interesting"</p>
          </div>
          <div className="profileCard">
            <div className="circle"></div>
            <small className="headers"> Kelvin Chuang</small>
            <p> " I learned a lot about web development "</p>
          </div>
          <div className="profileCard">
            <div className="circle"></div>
            <small className="headers"> Koyee Guan </small>
            <p> " I loved working with my teammates "</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
