import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Index from "./components";
import ResponsiveAppBar from "./navbar";
import Footer from "./Footer";


function App() {

  return (
    <>
      <ResponsiveAppBar/>
      <Index/>
      <Footer/>
    </>
  );
}

export default App;
