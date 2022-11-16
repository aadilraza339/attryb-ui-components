import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef, useCallback } from "react";
import ProductSpecifications from "./specifications.jsx"
import uniqid from "uniqid";

function App() {
  let [specifications, setSpecifications] = useState([
    {
      label: "Brand Name",
      value: "Enter Brand Name",
      name: "Enter specification value",
      _id: uniqid(),
      active: false,
      canEditLabel: false,
      canRemove: false,
    },
  ]);

  return (
    <div className="App">
      <ProductSpecifications
        setSpecifications={setSpecifications}
        specifications={specifications}
      />
    </div>
  );
}

export default App;
