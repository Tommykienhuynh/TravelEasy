import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import Carousel from "./carosel";
import { nyPics } from "./unPicData.js";
import "../../styles/locations/location.scss";
import UnsplashImg from "../Gallery/UnsplashImg";
import axios from "axios";

export default function Location() {
  const [picData, setPicData] = useState(nyPics);
  const [infoSlide, setSlide] = useState("Overview");
  const [images, setImages] = useState([]);

  //Onload render pictures for gallery
  useEffect(() => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.React_App_ACCESSKEY;

    axios
      .get(
        /* `${apiRoot}/photos/random?client_id=dnM7u-gLm61JlXTgdpfIiOg3ktUMsXKzrEL4ATXL1rY&count=12` */
        `${apiRoot}/search/photos?page=1&query=newyork&client_id=dnM7u-gLm61JlXTgdpfIiOg3ktUMsXKzrEL4ATXL1rY `
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
      <Carousel picData={nyPics} locName={"New York"} />

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
              Do you have a case of the “small town blues”? Do you want to “wake
              up in the city that never sleeps”? Then get inspired by Frank
              Sinatra and explore “New York, New York”! Mr. Sinatra was 100% on
              point - this is the city that never sleeps. With its amazing
              skyscrapers and landmarks, diverse cuisine, and tirelessly
              exciting night life you are sure to fill any vacation schedule,
              big or small.
            </p>

            <p
              className={
                infoSlide === "tSpots" ? "singleSlide active" : "singleSlide"
              }
            >
              The beauty and history of this amazing city is what attracts most
              sightseers to New York. Getting up close to Lady Liberty, is one
              heavily sought out experience for most tourists. There are a
              number of boat tours that will take you to and from Liberty
              Island, where you can see first hand this symbol of freedom.
              Another “must see” spot would be the 9/11 Memorial and Ground
              Zero. Scared in history, our nation suffered a great blow of
              terrorism. The 9/11 Memorial and Ground Zero honors the lives
              lost. Hear stories from loved ones, and survivors as they describe
              details of that day. When you find yourself wanting to get away
              from the big buildings and taxi drivers, head over to Central Park
              for a scenic stroll while surrounded by greenery.
            </p>

            <p
              className={
                infoSlide === "tSpots" ? "singleSlide active" : "singleSlide"
              }
            >
              <br></br>
              If sightseeing isn’t on your to-do list, head over to Fifth Avenue
              for a world-renowned shopping experience. Indulge yourself in
              Louis Vuitton, Tiffany & Co., Gucci, and the list goes on… If
              shopping on a budget is your objective, then head over to SoHo for
              an adrenaline rush of retail therapy. For souvenirs, China Town
              offers the best experience for shopping unique keepsakes while
              interacting with lively and spirited store attendants
            </p>

            <p
              className={
                infoSlide === "Hotels" ? "singleSlide active" : "singleSlide"
              }
            >
              New York’s hotel style choices are as vast as they come. Whether
              you are looking to stay in a modern, tech savvy hotel or a
              historical hotel adorned in architectural details, you are sure to
              find a multitude of options. There is also an array of hostels you
              can choose from.
            </p>
            <p
              className={
                infoSlide === "Food" ? "singleSlide active" : "singleSlide"
              }
            >
              New York may be called the “Big Apple”, but pizza and hot dogs are
              what it’s famous for. Lucali serves up an amazing pizza pie of
              tomato sauce, cheese, and basil. Don’t forget to fold it in half,
              the New Yorker way. As far as hot dogs, any true New Yorker knows
              that the street vendors dish out the best hot dogs in the city.
              While you’re in the city, don’t forget to try the famous New York
              Cheesecake of Veniero's Pasticceria & Caffe, or the pastrami
              sandwich at Katz’s Deli. Don’t be surprised by the lines at these
              spots, that’s how you know it’s good.
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
