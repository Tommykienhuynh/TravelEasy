import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import Carousel from "../locations/carosel";
import { laPics } from "./unPicData";
import "../../styles/locations/location.scss";
import UnsplashImg from "../Gallery/UnsplashImg";
import axios from "axios";

export default function Location() {
  const [picData, setPicData] = useState(laPics);
  const [infoSlide, setSlide] = useState("Overview");
  const [images, setImages] = useState([]);

  //Onload render pictures for gallery
  useEffect(() => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.React_App_ACCESSKEY;

    axios
      .get(
        /* `${apiRoot}/photos/random?client_id=dnM7u-gLm61JlXTgdpfIiOg3ktUMsXKzrEL4ATXL1rY&count=12` */
        `${apiRoot}/search/photos?page=1&query=losangeles&client_id=dnM7u-gLm61JlXTgdpfIiOg3ktUMsXKzrEL4ATXL1rY `
      )
      /*  .then((res) => console.log(res.data.results)); */
      .then((res) => setImages([...images, ...res.data.results]));
  }, []);

  //Function for onclick on slidedeck to change information
  function reSlide(infoTopic) {
    setSlide(infoTopic);
  }

  return (
    <>
      <Navbar nav="nav" />
      <Carousel picData={laPics} locName={"Los Angeles"} />

      <section> </section>
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
              Made famous by the glitz and glamor of Hollywood, Los Angeles is
              home to some of the leading arts, cuisine, and shopping
              experiences in the world. Not to mention its gorgeous beaches,
              historical landmarks, and richness of diverse culture, which makes
              Los Angeles one of the top travel destinations in the world!
              Explore the heart of these 472 square miles that make up the
              exciting and beautiful city, and walk away with the satisfaction
              of crossing “Los Angeles” off of your bucket list.
            </p>
            <p
              className={
                infoSlide === "tSpots" ? "singleSlide active" : "singleSlide"
              }
            >
              Picture this: you arrive in this beautiful city, greeted by
              California sunshine kisses to your face and the endless
              possibilities Los Angeles has to bring. Do you really want to
              waste a second of your time in LA trying to figure out what to do
              next? Let’s plan it out now so you can enjoy every moment in this
              remarkable city.
            </p>

            <p
              className={
                infoSlide === "tSpots" ? "singleSlide active" : "singleSlide"
              }
            >
              <br></br>
              If you are traveling with young children or if you are just young
              at heart, theme parks will soak up most of your time and energy…
              but it will be well worth it! With theme parks such as Disneyland,
              Disney’s California Adventures, Universal Studios, Legoland, and
              Pacific Park, you are sure to find endless fun! Another highlight
              of the Los Angeles experience is the shopping. Your budget is not
              just restricted to Rodeo Drive or China Town (although those are
              some pretty cool choices), but you can also enjoy the shopping
              experience that the 30+ shopping malls and outlets offer. After
              running crazy with youthful delight in theme parks, and
              regenerating with some well-deserved retail therapy, take in some
              of the sights and historical landmarks of Los Angeles.
            </p>

            <p
              className={
                infoSlide === "Hotels" ? "singleSlide active" : "singleSlide"
              }
            >
              Los Angeles’ hotel style choices are as vast as they come. From
              5-star hotels to affordable motels or even hostels, this city is
              sure to offer the right accommodations for your needs. Keep in
              mind that the closer a hotel is to major attractions, the price
              typically tends to weigh on the more expensive end. However, don’t
              rule those out too quickly. Many times, these hotels do offer
              deals depending on season and availability. Not to mention the
              amount of money you will be saving on car ride services to or
              parking fees at those major attractions.
            </p>
            <p
              className={
                infoSlide === "Food" ? "singleSlide active" : "singleSlide"
              }
            >
              Traveling and Food just go together. In Los Angeles, you will find
              an infinite range of culinary choices to drool over. Take, for
              example, Grand Central Market. This spot is more than any ordinary
              food court. This is a gathering of brilliant culinary minds who
              come up with mind blowing dishes. Another top spot is the Taste
              Food Hall at the FIGat7th shopping center serving all kinds of
              delicious creations. If you happen to find yourself with a hearty
              appetite on a Sunday afternoon, head over to Smorgasburg LA to
              satisfy that hunger.
            </p>
          </div>
        </div>
      </div>

      <div className="locGallery">
        <h1> Gallery </h1>
        <div className="wrapperGalImg">
          {images.map((image) => (
            <UnsplashImg url={image.urls.thumb} key={image.id} />
          ))}
        </div>
      </div>
    </>
  );
}
