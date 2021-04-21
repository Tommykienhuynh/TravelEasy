import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import Carousel from "../locations/carosel";
import { JapanPics } from "./japanData";
import "../../styles/locations/location.scss";

export default function Location() {
  const [picData, setPicData] = useState(JapanPics);
  const [infoSlide, setSlide] = useState("Overview");

  //Function for onclick on slidedeck to change information
  function reSlide(infoTopic) {
    setSlide(infoTopic);
  }

  return (
    <>
      <Navbar nav="nav" />
      <Carousel picData={JapanPics} />

      <div className="infoContainer">
        <div className="infoBar">
          <ul className="infoList">
            <li
              onClick={() => reSlide("Overview")}
              className={infoSlide === "Overview" ? "active" : ""}
            >
              Overview{" "}
            </li>
            <li
              onClick={() => reSlide("tSpots")}
              className={infoSlide === "tSpots" ? "active" : ""}
            >
              Tourist Spots
            </li>
            <li
              onClick={() => reSlide("Hotels")}
              className={infoSlide === "Hotels" ? "active" : ""}
            >
              Hotels{" "}
            </li>
            <li
              onClick={() => reSlide("Food")}
              className={infoSlide === "Food" ? "active" : ""}
            >
              Food{" "}
            </li>
          </ul>

          <div className="locInfoContainer">
            <p
              className={
                infoSlide === "Overview" ? "singleSlide active" : "singleSlide"
              }
            >
              Known as the “Land of the Rising Sun”, Japan has managed to
              maintain its heritage, culture, and traditions while adapting to
              modern times. When you visit this beautiful country, it will be
              obvious how important tradition remains to its people, even in the
              most urban areas.
            </p>
            <p
              className={
                infoSlide === "tSpots" ? "singleSlide active" : "singleSlide"
              }
            >
              Along with the beautiful culture and traditions, Japan proudly
              presents a number of natural and historical attractions. To name a
              few would be Mt. Fuji, Historic Kyoto, Imperial Tokyo, The Island
              Shrine of Itsukushima, and pretty much any cherry blossom tree as
              they bloom in March. All of these spots are sure to offer awe
              inspiring sights that no high-definition 4K computer screen can
              ever hold a candle to. Around town you will find architectural
              sights such as Tokyo Tower and Tokyo Skytree.
            </p>

            <p
              className={
                infoSlide === "tSpots" ? "singleSlide active" : "singleSlide"
              }
            >
              <br></br>
              While in Tokyo you can visit the fashion capitals Shibuya and
              Harajuku to do some shopping and exploring. Another great
              attraction is Tokyo Disneyland. While Japan is a fairly small
              country, getting around to visit all of these places has been made
              easy by use of the Japan Rail (JR). This well operated train
              system is punctual and covers the majority of travel from and to
              Tokyo. For visitors, passes should be purchased in advance.
            </p>

            <p
              className={
                infoSlide === "Hotels" ? "singleSlide active" : "singleSlide"
              }
            >
              The hotel aspect of Japan travel is slightly different from travel
              within the US, in that the rooms are very modern but extremely
              tiny. Japanese living is very minimalistic in a sense, and you can
              see that in their hotel rooms. Most rooms will have flat screen
              TV, a full or queen size bed, a small walk way around the bed and
              a small shelf for your room card and cell phone. But don’t get it
              wrong, the hotel rooms are quite comfortable and the staff are
              very friendly.
            </p>
            <p
              className={
                infoSlide === "Food" ? "singleSlide active" : "singleSlide"
              }
            >
              Japanese cuisine is a huge part of their culture. They incorporate
              their traditions in creating every dish. Sushi is prepared with
              freshly caught fish, so fresh that the fish nearly melts in your
              mouth in the most satisfying way. The ramen is prepared with great
              detail, elevating every ingredient to give bursts of flavor to the
              last drop. The pastries can pass as works of art, as they are
              creatively and beautifully designed to please not only the pallet
              but also the eyes.
            </p>
          </div>
        </div>
      </div>

      <div className="locGallery"></div>
    </>
  );
}
