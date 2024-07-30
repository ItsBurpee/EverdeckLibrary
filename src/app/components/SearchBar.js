"use client"

import { Button, Form, InputGroup } from "react-bootstrap"
import Image from "next/image"
import styles from "../css/searchBar.module.css";

export default function SearchBar() {
    /*TO-DO: 
        - ???
    */

    return (
        <div className="p-3">
            <InputGroup className={styles.searchField}>
                <Form.Control
                    placeholder="Search" 
                    aria-label="Game Library Search Field"
                    aria-describedby="button-search"
                />
                <Button className={styles.searchButton} id="button-search">
                    <Image src={"/search-svgrepo-com.svg"} width={20} height={20} alt="Search button"/> 
                </Button>
            </InputGroup>
        </div>
    )

}