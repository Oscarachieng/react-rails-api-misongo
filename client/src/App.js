import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import NavBar from "./NavBar";

function App() {
  return (
    <div >

    <Router>
       <NavBar />
       <Routes > 
         <Route ></Route>
      </Routes>
    </Router>
    
    <h5 className="text-3xl font-bold underline bg-red-200"> Hello world!</h5>
    
   
    </div>
  );
}

export default App;
