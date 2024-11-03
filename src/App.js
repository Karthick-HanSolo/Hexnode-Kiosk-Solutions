import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Mode from "./pages/Mode";
import Hexnode from "./pages/Hexnode";
import Support from "./pages/Support";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Possibilities from "./pages/Possibilities";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Mode />
      <Possibilities />
      <Hexnode />
      <Support />
      <Signup />
      <Footer />
    </>
  );
}

export default App;
