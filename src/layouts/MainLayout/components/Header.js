import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../assets/images/logo.png";
import { Colors } from "../../../config.js/constants/colors";

const StyledRow = styled(Row)`
  background: ${Colors.secondaryColor};
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
`;

const StyleLogo = styled.img`
  height: auto;
  width: 90%;
`;

const StyleHeading = styled.h2`
  color: ${Colors.secondaryText};
`;

const StyledLink = styled(Link)`
  color: ${Colors.secondaryText};
  text-decoration: none;
  &:hover {
    color: ${Colors.primaryLogo};
  }
`;

const Header = () => {
  return (
    <Container fluid>
      <StyledRow>
        <Col
          md="8"
          xs="12"
          className="d-flex justify-content-center align-items-center p-4"
        >
          <StyleLogo src={Logo} />
        </Col>
        <Col
          md="4"
          xs="12"
          className="d-flex justify-content-center align-items-center p-4"
        >
          <StyleHeading>
            <StyledLink to="/">Home</StyledLink> | <StyledLink to="/characters">Characters</StyledLink>
          </StyleHeading>
        </Col>
      </StyledRow>
    </Container>
  );
};

export default Header;
