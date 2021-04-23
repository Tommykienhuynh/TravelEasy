import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import Carousel from "../locations/carosel";
import { vancouverPics } from "./unPicData";
import "../../styles/locations/location.scss";
import UnsplashImg from "../Gallery/UnsplashImg";
import axios from "axios";

export default function Location() {
  const [picData, setPicData] = useState(vancouverPics);
  const [infoSlide, setSlide] = useState("Overview");
  const [images, setImages] = useState([]);

  //Onload render pictures for gallery
  useEffect(() => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.React_App_ACCESSKEY;

    axios
      .get(
        /* `${apiRoot}/photos/random?client_id=dnM7u-gLm61JlXTgdpfIiOg3ktUMsXKzrEL4ATXL1rY&count=12` */
        `${apiRoot}/search/photos?page=1&query=Vancouver&client_id=dnM7u-gLm61JlXTgdpfIiOg3ktUMsXKzrEL4ATXL1rY `
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
      <Carousel picData={vancouverPics} locName={"Vancouver"} />

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
              Want to get away and become more acquainted with nature while
              still having a quick connection to the city urban life? Vancouver
              is the place for you. All sorts of adventures await you in this
              beautiful city. This is definitely a city where you can get back
              to the simple things in life while enjoying mother nature.
            </p>
            <p
              className={
                infoSlide === "tSpots" ? "singleSlide active" : "singleSlide"
              }
            >
              Explore the 400 hectares of rainforest in Stanley Park, which is
              nearly totally surrounded by water. Resting on the West Coast,
              this urban park offers gorgeous views of the ocean, mountains, and
              rainforest. The beaches in Vancouver inspire beachfront living.
              Local beaches include English Bay Beach, Jericho Beach, Locarno
              Beach, Second Beach, Spanish Banks Beach, Sunset Beach, Third
              Beach, and Trout Lake Beach. With so much nature around, Vancouver
              is the perfect place for activities such as bike riding,
              ziplining, fishing, surfing, and wildlife viewing.
            </p>

            <p
              className={
                infoSlide === "tSpots" ? "singleSlide active" : "singleSlide"
              }
            >
              <br></br>
              When you’re ready for a taste of the city life again, hop over to
              the metro area of Vancouver that offers numerous shopping malls
              and street vendors. Vancouver presents itself with adorable
              boutiques and shops, sure to please any shopper.
            </p>

            <p
              className={
                infoSlide === "Hotels" ? "singleSlide active" : "singleSlide"
              }
            >
              Vancouver offers an amazing assortment of hotel and rental options
              for its tourists and visitors. Just looking through the various
              postings of hotel rooms boasts modern and comfortable
              accommodations. These hotel rooms are also pretty affordable in
              comparison to other travel destinations. An added bonus would be
              that since Vancouver is heavily surrounded by water, it Is likely
              that your hotel room will offer refreshingly beautiful views of
              the West Coast.
            </p>
            <p
              className={
                infoSlide === "Food" ? "singleSlide active" : "singleSlide"
              }
            >
              Being a sea port city, Vancouver is famous for its fresh seafood
              and sushi. In fact, Vancouver has been dubbed the “sushi capital
              of North America”, since it was one of the first North American
              cities to introduce sushi into the main scene. Other dishes to
              expect in Vancouver would be infused with maple syrup. Don’t
              forget to try the candied salmon sticks, or the Japadog stand on
              Robson Street.
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
