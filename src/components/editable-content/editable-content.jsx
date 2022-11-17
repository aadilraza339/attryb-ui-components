


import { EditableContentBlock, Button } from "attryb-ui";
import React, { useState, useEffect, useRef, useCallback } from "react";

import DOMPurify from "dompurify";
export default function EditableContentCard({ productTitleHtml, setProductTitleHtml }) {
    const [editMode, setEditMode] = useState(false)

console.log("you");
    return (

        <div className="center">
            <EditableContentBlock
                editMode={editMode}
                showCharsCount={true}
                maxCharsLimit={400}
                manualSave={false}
                allowEmpty={true}
                onClick={() => {
                    console.log("on clicking...")
                    setEditMode(true)
                }}
                onBlur={(event) => {
                    // const relatedTarget =
                    //     event?.relatedTarget 
                    // if (relatedTarget) relatedTarget.click()
                    setEditMode(false)
                }}
                responseCallback={(
                    res
                ) => {
                    console.log(res, "Please console it")
                    // if (res.innerHTML) 
                    // console.log(res.innerHTML);
                    // setListContent(res?.innerHTML)
                }}
            >
                {/* 
                            This is the children of Editable Content Block
                            We always set HTML here through "dangerouslySetInnerHTML"
                            and also sanitize the html string before passing as an arg
                            to the above function
                        */}
                <div
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(""),
                    }}
                />
            </EditableContentBlock>

        </div>
    )
}