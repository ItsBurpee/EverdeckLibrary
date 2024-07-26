"use client"

import { useState } from "react";
import { Stack, Button, Image, Offcanvas } from "react-bootstrap";
import styles from "./css/mainPage.module.css";
import SearchBar from "./components/SearchBar";
import SearchFilters from "./components/SearchFilters";
import FilterMenu from "./components/FilterMenu";
import Card from "./components/Card";

export default function MainPage() {
    const [showFilters, setShowFilters] = useState(false);
    const handleClose = () => setShowFilters(false);
    const handleShow = () => setShowFilters(true);

    // state for the checked components in filter menu
    const  [checkedComponents, setCheckedComponents] = useState({
        "Dice": true,
        "Chips": true,
        "Card Guide": true,
        "Other": true
    });

    // state for checked game types in filter menu
    const [checkedTypes, setCheckedTypes] = useState({
        "Abstract Strategy": true,
        "Customizable": true,
        "Family": true,
        "Thematic": true,
        "Children": true,
        "Party": true,
        "Strategy": true,
        "Wargames": true
    });

    return (
        <div id="main" className={styles.mainPage}>
            <Stack gap={3}>
                <SearchBar />
                <SearchFilters />
                <Card
                    title="Game Title"
                    cardImg="/gameCardIcons/image-picture-svgrepo-com.svg"
                    plyCount={[1, 8]}
                    time={[30, 45]}
                    complexity={[2.44]}
                    // "yes" is placeholder, replace with more appropriate warning names. Does { A | B } work?
                    gameWarning="yes"
                    shDescription="A loaded example of a game"
                />
                <Card
                    title="Game Title"
                    cardImg="/gameCardIcons/image-picture-svgrepo-com.svg"
                    plyCount={[2]}
                    time={[20]}
                    complexity={[2]}
                    shDescription="A minimal example of a game"
                />
            </Stack>
            <Button variant="primary" onClick={handleShow} className={styles.filterButton}>
                <Image src="/filter-svgrepo-com.svg" width={30} height={30} />
            </Button>
            <Offcanvas show={showFilters} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filter Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <FilterMenu
                        checkedComponents={checkedComponents}
                        setCheckedComponents={setCheckedComponents}
                        checkedTypes={checkedTypes}
                        setCheckedTypes={setCheckedTypes}
                    />
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}