import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import Carousel from "../locations/carosel";
import "../../styles/gallery/gallery.scss";
import mGlass from "../../assets/Gallery/mGlass.svg";
import galSVG from "../../assets/Gallery/gallerySVG.svg";
import UnsplashImg from "./UnsplashImg";
import loader from "./loader";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { FaImages } from "react-icons/fa";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [locationName, setLocationName] = useState();

  function handleChange(event) {
    setLocationName(event.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.React_App_ACCESSKEY;

    axios
      .get(
        /* `${apiRoot}/photos/random?client_id=dnM7u-gLm61JlXTgdpfIiOg3ktUMsXKzrEL4ATXL1rY&count=12` */
        `${apiRoot}/search/photos?page=1&query=${locationName}&client_id=dnM7u-gLm61JlXTgdpfIiOg3ktUMsXKzrEL4ATXL1rY `
      )
      /*  .then((res) => console.log(res.data.results)); */
      .then((res) => setImages([...res.data.results]));
  }

  return (
    <div className="galleryPage">
      <Navbar nav="nav" />
      <div className="galleryHeader">
        <div className="gallHeroBox">
          <h1>Find beautiful images of</h1>

          <h1>any place on earth </h1>

          <div className="greenLine"></div>
          <div className="searchContainer">
            <div className="magGlassContainer shadowRight">
              <img src={mGlass} className="mGlass" alt="magGlass" />
            </div>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                onChange={handleChange}
                className="locationInput shadow"
                placeholder="Search Location"
              />
            </form>
          </div>
        </div>

        <img src={galSVG} className="galSVG" alt="searchImg" />
      </div>

      <div className="wrapperImg">
        {images.map((image) => (
          <UnsplashImg url={image.urls.thumb} key={image.id} />
        ))}
      </div>
    </div>
  );
}
