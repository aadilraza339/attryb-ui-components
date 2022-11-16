



import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef, useCallback } from "react";

export default function ConponentList() {
 
    return (
        <div>
        <h1>Select components</h1>
        <Link to="specifications">Product specifications</Link>
        {/* <Link to="contact">Click to view our contact page</Link> */}
      </div>
    )
}