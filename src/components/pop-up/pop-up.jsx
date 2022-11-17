import React, { useState } from "react"
import {
    AlertPopup,
    AlertPopupHeader,
    AlertPopupBody,
    AlertPopupFooter,
    Button,
    useModal,
} from "attryb-ui"

const Alertpopup = () => {
    const { modalState, modalRef, exitModal, showModal } = useModal()

    const modalOkayHandler = () => {
        console.log("Accepted")
        exitModal()
    }

    const modalCancelHandler= () => {
        console.log("Cencelled")
        exitModal()
    }

    console.log({ modalState })
   const testFunc = ()=>{
    showModal()
   }
    return (
  
            <div className="DocEntry">
                <div className="Example" style={{ gridGap: "2rem" }}>

                    <AlertPopup
                        ref={modalRef}
                        name="example-popup-1"
                        visibility={modalState}
                        onBackdropClick={modalCancelHandler}>
                        <AlertPopupHeader>Header</AlertPopupHeader>
                        <AlertPopupBody>Some body content</AlertPopupBody>
                        <AlertPopupFooter>
                            <Button onClick={modalCancelHandler} variant="link">
                                Cancel
                            </Button>
                            <Button onClick={modalOkayHandler}>Okay</Button>
                        </AlertPopupFooter>
                    </AlertPopup>
                </div>
                <div onClick={testFunc}>click</div>
            </div>
    )
}

export default Alertpopup