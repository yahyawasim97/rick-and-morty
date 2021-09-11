import React from "react";
import styled from "styled-components";
import { Colors } from "../config.js/constants/colors";

const Wrapper = styled.section`
  height: 100%;
  background: ${Colors.primaryColor};
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  flex: 0.2;
  color: white;
  border-bottom-right-radius: 35%;
  border-bottom-left-radius: 35%;
  background: black;
  display: flex;
  h2 {
    text-align: center;
    margin: auto;
  }
`;

const Footer = styled.div`
  flex: 0.07;
  color: white;
  background: black;
  display: flex;

  border-top-right-radius: 35%;
  border-top-left-radius: 35%;
  h3 {
    text-align: center;
    margin: auto;
  }
`;

const MainLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <h2>Welcome to the Rick and Morty website</h2>
        <h2>
          <a>Characters</a>
        </h2>
      </Header>
      <div style={{ flex: 0.75, overflow: "auto" }}>{children}</div>
      <Footer>
        <h3>Created by Yahya Wasim</h3>
      </Footer>
    </Wrapper>
  );
};

export default MainLayout;
