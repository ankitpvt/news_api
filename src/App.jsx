// import React from "react";
// // import NewsList from "./components/NewsList";
// import NewsList from "./components/newList";
// import Sport from "./components/sport";
// import { Route, Routes } from "react-router-dom";
// import "./App.css";

// const App = () => {
//   return (
//     // <div className="app">
//     //   <header>
//     //     <h1>India News App</h1>
       
//     //   </header>
// <Routes>
//     <Route path="/" element = {<NewsList/>} />
//     <Routes path="sport" element = {<Sport/>} />
// </Routes>

//   );
// };

// export default App;


import React from "react";
import NewsList from "./components/newList" // Ensure file name case matches the import
import Sport from "./components/sport"; // Ensure file name case matches the import
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
          <Route path="/" element={<NewsList />} />
          <Route path="/sport" element={<Sport />} />
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
