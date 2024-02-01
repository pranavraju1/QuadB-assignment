import React from "react";
import "./App.css";
import Movie from "./components/movie/Movie";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import BookShow from "./components/bookShow/BookShow";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movie />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/book" element={<BookShow/>}/>
      </Routes>
    </>
  );
};

export default App;
