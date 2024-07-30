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

    // state for the range sliders
    // sliderRanges[0] = [current min, current max] of player count 
    // sliderRanges[1] = [current min, current max] of play time 
    // sliderRanges[2] = [current min, current max] of complexity 
    // const [sliderRanges, setSliderRanges] = useState(
    //     [
    //         [1, 8],
    //         [15, 120],
    //         [1, 5]
    //     ]
    // );
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

    return (
        <div id="main" className={styles.mainPage}>
            <div className={styles.stackContainer}>
                <Stack gap={3} className={styles.mainStack}>
                    <div className={styles.searchArea}>
                        <SearchBar />
                        <SearchFilters />
                    </div>
                    <div className={styles.cards}>
                        <Card
                            title="Game Title"
                            cardImg="/gameCardIcons/image-picture-svgrepo-com.svg"
                            plyCount={[1, 8]}
                            time={[30, 45]}
                            complexity={2.44}
                            // "yes" is placeholder, replace with more appropriate warning names. Does { A | B } work?
                            gameWarning="both"
                            shDescription="A loaded example of a game"
                        />
                        <Card
                            title="Game Title"
                            cardImg="/gameCardIcons/image-picture-svgrepo-com.svg"
                            plyCount={[2]}
                            time={[20]}
                            complexity={2}
                            shDescription="A minimal example of a game"
                        />
                        <Card
                            title="Game Title"
                            cardImg="/gameCardIcons/image-picture-svgrepo-com.svg"
                            plyCount={[2]}
                            time={[20]}
                            complexity={2}
                            shDescription="A minimal example of a game"
                        />
                        <Card
                            title="Game Title"
                            cardImg="/gameCardIcons/image-picture-svgrepo-com.svg"
                            plyCount={[1, 8]}
                            time={[30, 45]}
                            complexity={2.44}
                            gameWarning="mapping"
                            shDescription="A loaded example of a game"
                        />
                        <Card
                            title="Game Title"
                            cardImg="/gameCardIcons/image-picture-svgrepo-com.svg"
                            plyCount={[1, 8]}
                            time={[30, 45]}
                            complexity={2.44}
                            gameWarning="component"
                            shDescription="A loaded example of a game"
                        />
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