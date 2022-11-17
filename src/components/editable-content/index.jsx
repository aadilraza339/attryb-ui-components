
import EditableContentCard from "./editable-content.jsx"



import uniqid from "uniqid";

import React, { useState, useEffect, useRef, useCallback } from "react";
import ComponentList from "../component-list/index.jsx";


export default function EditableContent(){
    const [productTitleText, setProductText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat elit sit amet congue pretium. Nulla sit ametmetus ligula. Cras quis laoreet enim. Vestibulum aliquet sem a tortor blandit pharetra. Proin sed erat sit amet felis commodo sagittis. Phasellus feugiat volutpat mauris quis vestibulum. Proin sed erat sit amet felis commodo sagittis. Feugiat volutpat mauris quis vestibulum.")
    const [productTitleHtml,setProductTitleHtml] = useState()
    const generateEditableContentHtml = (passedData, type = "plain") => {
        let clonedData = passedData.slice().trim(); 
        // Slice returns a duplicate
        /**
         * Splitting the string at newline into array of strings
         */
        let placeholder = clonedData.split(/\r\n|\r|\n/);
        /**
         *  We are returning the array after converting the string type items to HTML type
         */
        const tag = type === "plain" ? "div" : "li";
        const parentTag = type === "plain" ? "div" : "ul";
        const generatedHtml = placeholder.map((entry)=>{
            const key = uniqid();
            return `<${tag} key=${key}>${entry ? entry : `<br />`}</${tag}>`;
        })
        return `<${parentTag}> ${generatedHtml.join("")} </${parentTag}>`;

      };   
      useEffect(()=>{
        // setProductTitleHtml(generateEditableContentHtml(productTitleText))
      },[])
    return (
        <div className="">
          <ComponentList/>
          <div className="" style={{marginTop:"3rem"}}>Write something</div>
          <EditableContentCard
              productTitleHtml={productTitleHtml}
              setProductTitleHtml={setProductTitleHtml}
          />
          </div>
    )


}