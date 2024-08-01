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

    // state for slider ranges
    const [sliderRanges, setSliderRanges] = useState({
        "plCountMin": 1,
        "plCountMax": 8,
        "plTimeMin": 15,
        "plTimeMax": 120,
        "complexityMin": 1,
        "complexityMax": 5
    });

    // state for the mapping strength dropdown
    const [mappingStrength, setMappingStrength] = useState("Any");

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

    // temporary cards array
    // should get populated by a call to the database in a useEffect
    let cards = [
        {
            "title": "Game Title",
            "cardImg": "/gameCardIcons/image-picture-svgrepo-com.svg",
            "plCount": [1, 8],
            "plTime": [30, 45],
            "complexity": 2.44,
            "gameWarning": "both",
            "shDescription": "A loaded example of a game"
        },
        {
            "title": "Game Title",
            "cardImg": "/gameCardIcons/image-picture-svgrepo-com.svg",
            "plCount": [1, 8],
            "plTime": [30, 45],
            "complexity": 2.44,
            "shDescription": "A loaded example of a game"
        },
        {
            "title": "Game Title",
            "cardImg": "/gameCardIcons/image-picture-svgrepo-com.svg",
            "plCount": [2, 17],
            "plTime": [30, 85],
            "complexity": 4.1,
            "shDescription": "A loaded example of a game"
        },
        {
            "title": "Game Title",
            "cardImg": "/gameCardIcons/image-picture-svgrepo-com.svg",
            "plCount": [1, 8],
            "plTime": [30, 45],
            "complexity": 2.44,
            "gameWarning": "mapping",
            "shDescription": "A loaded example of a game"
        },
        {
            "title": "Game Title",
            "cardImg": "/gameCardIcons/image-picture-svgrepo-com.svg",
            "plCount": [1, 8],
            "plTime": [30, 45],
            "complexity": 2.44,
            "gameWarning": "component",
            "shDescription": "A loaded example of a game"
        },
    ];

    return (
        <div id="main" className={styles.mainPage}>
            <div className={styles.stackContainer}>
                <Stack gap={3} className={styles.mainStack}>
                    <div className={styles.searchArea}>
                        <SearchBar />
                        <SearchFilters />
                    </div>
                    <div className={styles.cards}>

                        {cards.map(card => (
                            <Card
                                card={card}
                            />
                        ))}

                    </div>
                </Stack>
            </div>
            <Button variant="primary" onClick={handleShow} className={styles.filterButton}>
                <Image src="/filter-svgrepo-com.svg" width={30} height={30} />
            </Button>
            <Offcanvas show={showFilters} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filter Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <FilterMenu
                        sliderRanges={sliderRanges}
                        setSliderRanges={setSliderRanges}
                        mappingStrength={mappingStrength}
                        setMappingStrength={setMappingStrength}
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