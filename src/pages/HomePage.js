import React from "react";
import { Fade } from "react-slideshow-image";
import Slider1 from "../assets/images/4.png";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";
import ReactPlayer from "react-player";

const HomePage = () => {
  const Wrapper = styled.div`
    display: flex;
    padding: 4rem;
    flex-wrap: wrap;
  `;
  return (
    <>
      <Wrapper>
        <div style={{ flex: 1 }}></div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 2,
            lineHeight: 1.5,
            padding: 30,
            borderRadius: "5%",
          }}
        >
          <h3>
            Rick and Morty is an American adult animated science fiction sitcom
            created by Justin Roiland and Dan Harmon for Cartoon Network's
            nighttime programming block, Adult Swim. The series follows the
            misadventures of cynical mad scientist Rick Sanchez and his
            good-hearted, but fretful grandson Morty Smith, who split their time
            between domestic life and interdimensional adventures.
          </h3>
        </div>
        <div style={{ flex: 1 }}></div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 2,
            background: "black",
            padding: 30,
            margin: "0 50px",
            borderRadius: "35%",
          }}
        >
          <img src={Slider1} height="500" />
        </div>
      </Wrapper>
      <div
        style={{
          textAlign: "center",
          marginBottom: 100,
        }}
      >
        <h1>Recent Episodes</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ margin: 10 }}>
            <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
          </div>
          <div style={{ margin: 10 }}>
            <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
