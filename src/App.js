import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Meat from "./components/Meat";
import About from "./components/About";
import Blog from "./components/Blog";
import Support from "./components/Support";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>

        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/meat" element={<Meat/>}/>
            <Route path="/recipes" element={<Recipes/>}/>
            <Route path="/support" element={<Support/>}/>

        </Routes>

    </div>
  );
}

export default App;
