import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Footer } from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "../src/Components/Pages/Home";
import Login from "./Components/Pages/Login/Login";
import { Globalstyle } from "./Components/Styles/Globalstyle";
const App = () => {
  const theme = {
    color: {
      bg: "#3970F7",
      heading: "#F6FAFE",
    },
    media: {
      mobile: "448px",
      tab: "768px",
      desktop: "1280px",
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Globalstyle />
        <BrowserRouter>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
