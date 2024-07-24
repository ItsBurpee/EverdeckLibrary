"use client"

import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

export default function GameAlertModal() {
    //States and hooks are form the React-Bootstrap example
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <>
            <Button onClick={handleOpen}>Warning Test</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Game Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>This game has some warnings!</Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Ok</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}