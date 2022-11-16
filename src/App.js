import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useRef, useCallback } from "react";
import ProductSpecifications from "./components/specifications/index.jsx";

import uniqid from "uniqid";
import { Routes, Route } from "react-router-dom"
import ComponentList from "./components/component-list/index";
import EditableContent from "./components/editable-content/index";
import DropDown from "./components/drop-down/index.jsx";
function App() {
  

    return (
     
        <div className="App">
        <Routes>
          <Route path="/editable-content" element={ <EditableContent/> } />
          <Route path="/specifications" element={  <ProductSpecifications /> } />
          <Route path="/drop-down" element={  <DropDown/> } />

          <Route path="/" element={  <ComponentList/> } />
        </Routes>
      </div>
      );
}


export default App;
