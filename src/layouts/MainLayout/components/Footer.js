import React from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Colors } from "../../../config.js/constants/colors";

const StyledRow = styled(Row)`
  background: ${Colors.secondaryColor};
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  color: ${Colors.secondaryText};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  font-weight: 500;
  font-size: 1.5rem;
`;

const Footer = () => {
  return (
    <Container fluid>
      <StyledRow>Created by Yahya Wasim</StyledRow>
    </Container>
  );
};

export default Footer;
