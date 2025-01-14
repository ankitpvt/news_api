

import React from "react";
import Home from "./components/Home";
import NewsList from "./components/newList" // Ensure file name case matches the import
import Sport from "./components/sport"; // Ensure file name case matches the import
import Marathi from "./components/marathi";
import Education from "./components/Education";
import Enter from "./components/enter";

import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>India News App</h1>
      </header>

      <main>
        <Routes>
           <Route path="/" element={<Home/>}/> 
          <Route path="top" element={<NewsList />} />
          <Route path="sport" element={<Sport/>}/>
          <Route path="education" element={<Education/>}/>
          <Route path="marathi" element={<Marathi/>}/>
          <Route path="enter" element={<Enter/>}/>
        
        </Routes>
      </main>

      <footer>
        <p>by Ankit Rajput</p>
        <p>ankit9307@gmail.com || 9307240899</p>
      </footer>
    </div>
  );
};

export default App;
