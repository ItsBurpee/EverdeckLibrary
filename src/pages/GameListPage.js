"use client"

import { useState } from "react";
import { Stack, Button, Image, Offcanvas } from "react-bootstrap";
import styles from "./css/mainPage.module.css";
import SearchBar from "../app/components/SearchBar";
import SearchFilters from "../app/components/SearchFilters";
import FilterMenu from "../app/components/FilterMenu";
import Card from "../app/components/Card";

//From layout.js
import "bootstrap/dist/css/bootstrap.min.css";
import ImportBsJS from "../app/components/importBsJs";
import AppNavbar from "../app/components/AppNavbar";

import { Alegreya, Alegreya_Sans } from "next/font/google";

// font variables from index were not reaching the offcanvas
// so reinitialize those variables
const alegreya = Alegreya({ subsets: ["latin"], variable: "--font-alegreya"});
const alegreyaSans = Alegreya_Sans({ weight: ["500"], subsets: ["latin"], variable: "--font-alegreya-sans" });

const GameListPage = ( {allGames} ) => {
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

    // This seems to work but bundling through getServerSideProps for client side my not be a good practice?
    let games = JSON.parse(allGames)

    //First div is a replica of layout.js
    return (
        <div className={styles.mainLayout}>
            <ImportBsJS />
            <AppNavbar />
            <div id="main" className={styles.mainPage}>
                <div className={styles.stackContainer}>
                    <Stack gap={3} className={styles.mainStack}>
                        <div className={styles.searchArea}>
                            <SearchBar />
                            <SearchFilters />
                        </div>
                        <div className={styles.cards}>

                            {games.map((game) => (
                                <Card
                                    key={game._id}
                                    game={game}
                                />
                            ))}

                        </div>
                    </Stack>
                </div>
                <Button
                    variant="primary"
                    onClick={handleShow}
                    bsPrefix={styles.filterButton}
                >
                    <Image src="/filter-svgrepo-com.svg" width={30} height={30} />
                </Button>
                <Offcanvas show={showFilters} onHide={handleClose} placement="end" className={`${alegreya.variable} ${alegreyaSans.variable}`}>
                    <Offcanvas.Header closeButton className={styles.filterMenuOffcanvas}>
                        <Offcanvas.Title style={{fontSize:"1.75rem", fontWeight:"bold"}}>Filter Menu</Offcanvas.Title>
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
        </div>
    );
    
}

export default GameListPage;