import ProductSpecificationsCard from "./specifications.jsx";

import uniqid from "uniqid"

import React, { useState, useEffect, useRef, useCallback } from "react";

export default function ProductSpecifications() {
    let [specifications, setSpecifications] = useState([
        {
            label: "Brand Name",
            value: "",
            name: "Enter specification value",
            _id: uniqid(),
            active: false,
            canEditLabel: false,
            canRemove: false,
        },
    ]);
    return (
        <ProductSpecificationsCard
            specifications={specifications}
            setSpecifications={setSpecifications}
        />
    )
}