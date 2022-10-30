import React from "react";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
const Header = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="logo">
            <h3>Flipkart</h3>
            <p>Explore Plus+</p>
          </div>
          <div className="main-container">
            <Navbar />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  heigth: 10rem;
  padding: 1rem 0;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.bg};
  color: ${({ theme }) => theme.color.heading};
  h3 {
    font-size: 2.5rem;
    display: flex;
  }
  p {
    font-size: 1.2rem;
  }
  div {
    padding-left: 2rem;
  }
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .logo {
  }
`;
export default Header;
