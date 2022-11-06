import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { HiMenu, HiXCircle } from "react-icons/hi";

const Navbar = () => {
  const [openbtn, setopenbtn] = useState(false);
  return (
    <>
      <Nav>
        <div>
          <ul className="navbar-list">
            <li>
              <NavLink to="/" className="navbar-link">
                <label>
                  <input
                    type="text"
                    placeholder="Search for products,brands and more"
                    style={{ position: "relative" }}
                  />
                  <AiOutlineSearch
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      position: "absolute",
                      top: "10px",
                      left: "585px",
                      color: "#3970F7",
                    }}
                  />
                </label>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="navbar-link"
                style={{
                  border: "2px solid white",
                  background: "white",
                  height: "30px",
                  width: "100px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#3970F7",
                }}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="navbar-link">
                Become a Seller
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="navbar-link">
                More
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="navbar-link">
                <AiOutlineShoppingCart
                  style={{
                    width: "40px",
                    position: "absolute",
                    top: "12px",
                    right: "240px",
                  }}
                />
                Cart
              </NavLink>
            </li>
          </ul>
          <div>
            <p
              className="toogle"
              style={{ fontSize: "25px" }}
              onClick={() => {
                setopenbtn((cur) => !cur);
              }}
            >
              {openbtn ? <HiXCircle /> : <HiMenu />}
            </p>
          </div>
        </div>
      </Nav>
    </>
  );
};

const Nav = styled.div`
  .navbar-list {
    display: flex;
    gap: 4rem;
    padding: 0 3rem;
    li {
      list-style-type: none;
      font-weight: 500;
      display: flex;
      align-items: center;
      .navbar-link {
        color: ${({ theme }) => theme.color.heading};
        &:link,
        &:visited {
          display: inline-block;
          font-size: 1.7rem;
          text-decoration: none;
          input {
            width: 400px;
            height: 4rem;
            padding-left: 4px;
          }
        }
      }
    }
  }
  @media (min-width:${({ theme }) => theme.media.tab}){
    .toogle{
      display:none;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .navbar-list {
      display: none;
    }
    
    


    
  
`;

export default Navbar;
