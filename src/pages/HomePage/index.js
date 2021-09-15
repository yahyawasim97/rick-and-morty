import React from "react";
import IntroImage from "../../assets/images/4.png";
import Slider1 from "../../assets/images/1.png";
import Slider2 from "../../assets/images/2.jpeg";
import Slider3 from "../../assets/images/3.jpeg";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Colors } from "../../config/constants/colors";

const HomePage = () => {
  const StyledRow = styled(Row)`
    padding: 5rem 0;
  `;

  const StyledShowDescription = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
  `;

  const StyledIntroImageContainer = styled.div`
    background: black;
    border-radius: 35%;
  `;

  const StyledIntroImage = styled.img`
    width: 85%;
    height: auto;
  `;

  const StyleSecondaryContainer = styled(Container)`
    background: ${Colors.secondaryColor};
    color: ${Colors.secondaryText};
  `;

  return (
    <section>
      <Container>
        <StyledRow>
          <Col md="5" xs="12" className="m-auto">
            <StyledShowDescription>
              Rick and Morty is an American adult animated science fiction
              sitcom created by Justin Roiland and Dan Harmon for Cartoon
              Network's nighttime programming block, Adult Swim.
            </StyledShowDescription>
            <StyledShowDescription>
              The series follows the misadventures of cynical mad scientist Rick
              Sanchez and his good-hearted, but fretful grandson Morty Smith,
              who split their time between domestic life and interdimensional
              adventures.
            </StyledShowDescription>
          </Col>
          <Col md="2" xs="2" className="my-3" />
          <Col md="5" xs="12">
            <StyledIntroImageContainer>
              <StyledIntroImage src={IntroImage} />
            </StyledIntroImageContainer>
          </Col>
        </StyledRow>
      </Container>
      <StyleSecondaryContainer fluid>
        <StyledRow className="justify-content-center p-5">
          <Col md="5" className="m-auto">
            <StyledShowDescription>
              Rick and Morty is an American adult animated science fiction
              sitcom created by Justin Roiland and Dan Harmon for Cartoon
              Network's nighttime programming block, Adult Swim.
            </StyledShowDescription>
            <StyledShowDescription>
              The series follows the misadventures of cynical mad scientist Rick
              Sanchez and his good-hearted, but fretful grandson Morty Smith,
              who split their time between domestic life and interdimensional
              adventures.
            </StyledShowDescription>
          </Col>
          <Col md="7">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Slider1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Slider2}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Slider3}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </StyledRow>
      </StyleSecondaryContainer>
      <Container>
        <StyledRow>
          <h1 className="mb-5">Recent Episodes</h1>
          <Col md="6" xs="12">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width="100%"
              height="auto"
            />
          </Col>
          <Col md="6" xs="12">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width="100%"
              height="auto"
            />
          </Col>
        </StyledRow>
      </Container>
    </section>
  );
};

export default HomePage;
