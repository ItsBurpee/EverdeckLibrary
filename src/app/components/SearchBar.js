"use client"

import { Button, Form, InputGroup } from "react-bootstrap"
import Image from "next/image"

export default function SearchBar() {
    /*TO-DO: 
        - ???
    */

    return (
        <div className="search-bar">
            <InputGroup className="p-3">
                <Form.Control
                    placeholder="Search" 
                    aria-label="Game Library Search Field"
                    aria-describedby="button-search"
                />
                <Button id="button-search">
                    <Image src={"/search-svgrepo-com.svg"} width={20} height={20} alt="Search button"/> 
                </Button>
            </InputGroup>
        </div>
    )

}