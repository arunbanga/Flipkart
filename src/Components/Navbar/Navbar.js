import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
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
                  color: "#479DF3",
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
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </Nav>
    </>
  );
};

const Nav = styled.div`
  .navbar-list {
    display: flex;
    gap: 5rem;
    padding: 0 3rem;
    li {
      list-style-type: none;
      font-weight: 600;
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
`;
export default Navbar;
