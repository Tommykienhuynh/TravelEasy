import React from "react";
import styled from "styled-components";

export default function UnsplashImg({ url, key }) {
  return <img className="galImg" src={url} key={key} alt="" />;
}
