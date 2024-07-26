"use client"

import { Modal } from "react-bootstrap";

export default function GameAlertModal() {

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Game Warning</Modal.Title>
            </Modal.Header>
            <Modal.Body>This game has some warnings!</Modal.Body>
        </>
    )
}