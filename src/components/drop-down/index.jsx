

import DropDownSearch from "./drop-down-search.jsx"
import React, { useState, useEffect, useRef, useCallback } from "react";

export default function DropDown() { 
    const [products,setProducts] =useState([
        {
            _id: "0AKGxNWVoFgYy5nnJu5ece4797eaf5e",
            value: "Fannie Morgan",
            data: {
                _id: "0AKGxNWVoFgYy5nnJu5ece4797eaf5e",
                value: "Fannie Morgan",
                email: "na@zed.az",
            },
        },
        {
            _id: "DKSmS636ccc0e4a2e9",
            value: "Derrick Banks",
            data: {
                _id: "DKSmS636ccc0e4a2e9",
                value: "Derrick Banks",
                email: "gaktertin@ho.br",
            },
        },
        {
            _id: "5SOVguIqGRY54uSece4797eauqe",
            value: "Leo Schultz",
            data: {
                _id: "5SOVguIqGRY54uSece4797eauqe",
                value: "Leo Schultz",
                email: "wetel@ra.az",
            },
        },
        {
            _id: "tn9598MB2BXNk2ERlTnJ636ccc0e4a2f1",
            value: "Blake Roy",
            data: {
                _id: "tn9598MB2BXNk2ERlTnJ636ccc0e4a2f1",
                value: "Blake Roy",
                email: "cem@birna.edu",
            },
        },
    ])
const [activeItem,SetActiveItem]= useState({})
 return (
    <DropDownSearch
        products={products}
        activeItem={activeItem}
        SetActiveItem={SetActiveItem}
    />
 )
}
