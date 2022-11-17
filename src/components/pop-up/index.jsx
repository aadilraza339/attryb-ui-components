import React from 'react'
import ComponentList from '../component-list'
import Alertpopup from './pop-up'
import {
    AlertPopup,
    AlertPopupHeader,
    AlertPopupBody,
    AlertPopupFooter,
    Button,
    useModal,
} from "attryb-ui"
export default function PopUP() {
    const { modalState, modalRef, exitModal, showModal } = useModal()

    return (
        <div className="center">
            <ComponentList />
            <Alertpopup />
            
        </div>
    )
}
