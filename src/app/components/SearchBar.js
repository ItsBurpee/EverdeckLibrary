"use client"

import { Button, Form, InputGroup } from "react-bootstrap"
import Image from "next/image"
import styles from "../css/searchBar.module.css";

export default function SearchBar({
    setSearchName,
    searchName
}) {

    return (
        <div className="p-3">
            <InputGroup bsPrefix={`${styles.searchField}`}>
                <Form.Control
                    placeholder="Search" 
                    aria-label="Game Library Search Field"
                    value={searchName}
                    onChange={e => {
                        setSearchName(e.currentTarget.value);
                    }}
                    bsPrefix={styles.searchBar}
                />
                <div
                    className={`${styles.clearButton} ${searchName !== "" && styles.activeButton}`}
                    onClick={() => { setSearchName("") }}
                    aria-label="Clear search"
                >
                    <Image src={"/close-svgrepo-com.svg"} width={20} height={20} alt="Clear search button" />
                </div>
            </InputGroup>
        </div>
    )

}