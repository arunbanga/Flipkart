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
            <p>
              Explore <span>Plus+</span>
            </p>
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
  heigth: auto;
  padding: 1rem 0;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.bg};
  color: ${({ theme }) => theme.color.heading};
  h3 {
    font-size: 2.5rem;
  }
  p {
    font-size: 1.2rem;
    span {
      color: #f9f038;
      font-weight: 700;
    }
  }

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
  }
  .logo {
    position: absolute;
    left: 110px;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 70px;
    width: 100%;
    .logo {
      position: absolute;
      left: 42px;
    }
    .container {
      width: 95%;
      heigth: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0 12px;
      h3 {
        font-size: 2rem;
      }
      p {
        font-size: 1.2rem;
        span {
          color: #f9f038;
          font-weight: 700;
        }
      }
    }
  }
`;
export default Header;
