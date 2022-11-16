



import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef, useCallback } from "react";

export default function ComponentList() {
 
    return (
        <div className="list-component">
        <h1>Select components</h1>
        <Link to="/specifications">Product Specifications</Link>
        <Link to="/editable-content">Editable Content</Link>
        <Link to="/drop-down">Drop Down</Link>

      </div>
    )
}