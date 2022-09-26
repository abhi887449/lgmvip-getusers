import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Usercards from "./components/Usercards";
function App() {
  return (
    <>
      <Router>
        <div className="grid">
        <div>
        <Navbar/>
        </div>
        <div>
        <Routes>
          <Route exact path="/getusers" element={<Usercards/>}></Route>
          <Route exact path="/lgmvip-getusers" element={<Intro/>}></Route>
        </Routes>
        </div>
        </div>
      </Router>
    </>
  );
}

export default App;
