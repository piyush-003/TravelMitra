import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
