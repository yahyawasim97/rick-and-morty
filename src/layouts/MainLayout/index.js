import React from "react";
import styled from "styled-components";
import { Colors } from "../../config/constants/colors";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Wrapper = styled.section`
  height: 100%;
  background: ${Colors.primaryColor};
`;

const MainLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default MainLayout;
