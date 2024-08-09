"use client"

import { useState } from "react";
import { Stack, Button, Image, Offcanvas } from "react-bootstrap";
import styles from "./css/mainPage.module.css";
import SearchBar from "../app/components/SearchBar";
import SortFilters from "../app/components/SortFilters";
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
    const [sortFilters, setSortFilters] = useState({
        "sortName": "name",
        "sortDirec": "asc"
    });

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

    //SWITCH: Sorts the cards based on the sort filter
    switch(sortFilters.sortName) {
        case "name":
            games.sort(function(a,b) {
                const titleA = a.title.toLowerCase();
                const titleB = b.title.toLowerCase();
                if(titleA < titleB) {
                    return -1;
                }
                else if(titleA > titleB) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            if (sortFilters.sortDirec === "desc") {
                games.reverse();
            }
            break;
        //plCount & plTime: IF the target comparisons values MATCH, then the order is based on the other value
        //ex. Minimum player counts match, sort order is instead based on Maximum player count
        case "plCount":
            if (sortFilters.sortDirec === "asc") {
                games.sort(function(a,b) {
                    if (a.plCount.plCountMin === b.plCount.plCountMin) {
                        return a.plCount.plCountMax - b.plCount.plCountMax
                    }
                    return a.plCount.plCountMin - b.plCount.plCountMin
                });
            } 
            else {
                games.sort(function(a,b) {
                    if (a.plCount.plCountMax === b.plCount.plCountMax) {
                        return a.plCount.plCountMin - b.plCount.plCountMin
                    }
                    return a.plCount.plCountMax - b.plCount.plCountMax
                }).reverse();
            }
            break;
        case "plTime":
            if (sortFilters.sortDirec === "asc") {
                games.sort(function(a,b) {
                    if (a.plTime.plTimeMin === b.plTime.plTimeMin) {
                        return a.plTime.plTimeMax - b.plTime.plTimeMax
                    }
                    return a.plTime.plTimeMin - b.plTime.plTimeMin
                });
            } 
            else {
                games.sort(function(a,b) {
                    if (a.plTime.plTimeMax === b.plTime.plTimeMax) {
                        return a.plTime.plTimeMin - b.plTime.plTimeMin
                    }
                    return a.plTime.plTimeMax - b.plTime.plTimeMax
                }).reverse();
            }
            break;
        case "complexity":
            games.sort((a,b) => a.complexity - b.complexity); 
            if (sortFilters.sortDirec === "desc") {
                games.reverse();
            }
            break;

    }

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
                            <SortFilters 
                                sortFilters={sortFilters}
                                setSortFilters={setSortFilters}
                            />
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