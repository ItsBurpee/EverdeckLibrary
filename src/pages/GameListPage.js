"use client"

import { useState } from "react";
import { Stack, Button, Image, Offcanvas } from "react-bootstrap";
import styles from "./css/mainPage.module.css";
import SearchBar from "../app/components/SearchBar";
import SortFilters from "../app/components/SortFilters";
import FilterMenu from "../app/components/FilterMenu";
import Card from "../app/components/Card";
import Tutorial from "../app/components/Tutorial";

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
    const handleCloseFilters = () => setShowFilters(false);
    const handleShowFilters = () => setShowFilters(true);

    const [showTutorial, setShowTutorial] = useState(false);
    const handleCloseTut = () => setShowTutorial(false);
    const handleShowTut = () => setShowTutorial(true);

    //section to determine slider endpoint values
    let plCountMinEndpoint, plCountMaxEndpoint;
    let plTimeMinEndpoint, plTimeMaxEndpoint;
    let complexityMinEndpoint, complexityMaxEndpoint;
    JSON.parse(allGames).forEach(function(game,gameIndex) {
        if (gameIndex === 0) {
            plCountMinEndpoint = game.plCount.plCountMin;
            plCountMaxEndpoint = game.plCount.plCountMax;
            plTimeMinEndpoint = game.plTime.plTimeMin;
            plTimeMaxEndpoint = game.plTime.plTimeMax;
            complexityMinEndpoint = game.complexity;
            complexityMaxEndpoint = game.complexity;
        }
        else {
            if (game.plCount.plCountMin < plCountMinEndpoint) {
                plCountMinEndpoint = game.plCount.plCountMin;
            }
            if (game.plCount.plCountMax > plCountMaxEndpoint) {
                plCountMaxEndpoint = game.plCount.plCountMax;
            }

            if (game.plTime.plTimeMin < plTimeMinEndpoint) {
                plTimeMinEndpoint = game.plTime.plTimeMin;
            }
            if (game.plTime.plTimeMax > plTimeMaxEndpoint) {
                plTimeMaxEndpoint = game.plTime.plTimeMax;
            }

            if (game.complexity < complexityMinEndpoint) {
                complexityMinEndpoint = game.complexity;
            }
            else if (game.complexity > complexityMaxEndpoint) {
                complexityMaxEndpoint = game.complexity;
            }
        }
    });
    console.log(Math.floor(complexityMinEndpoint))
    complexityMinEndpoint = Math.floor(complexityMinEndpoint)
    complexityMaxEndpoint = Math.ceil(complexityMaxEndpoint)

    // state for slider endpoints
    const sliderEndpoints = {
        "plCountMinEndpoint" : plCountMinEndpoint,
        "plCountMaxEndpoint" : plCountMaxEndpoint,
        "plTimeMinEndpoint" : plTimeMinEndpoint,
        "plTimeMaxEndpoint" : plTimeMaxEndpoint,
        "complexityMinEndpoint": complexityMinEndpoint,
        "complexityMaxEndpoint" : complexityMaxEndpoint
    };

    const [searchName, setSearchName] = useState("");

    // state for slider ranges
    const [sortFilters, setSortFilters] = useState({
        "sortName": "name",
        "sortDirec": "asc"
    });

    // state for slider ranges
    const [sliderRanges, setSliderRanges] = useState({
        "plCountMin": plCountMinEndpoint,
        "plCountMax": plCountMaxEndpoint,
        "plTimeMin": plTimeMinEndpoint,
        "plTimeMax": plTimeMaxEndpoint,
        "complexityMin": complexityMinEndpoint,
        "complexityMax": complexityMaxEndpoint
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

    games = games.filter(function(game) {
        const regExSearch = RegExp(searchName, "i")
        return (game.title.match(regExSearch));
    })

    function getKeysByValue(targetObject, targetValue) {
        return Object.keys(targetObject).filter((key) => targetObject[key] === targetValue);
    }

    //Filter Menu section
    games = games.filter(function(game) {
        let filterFlag = true

        if ((game.plCount.plCountMin < sliderRanges.plCountMin) || (game.plCount.plCountMax > sliderRanges.plCountMax)) {
            filterFlag = false;
        }
        if ((game.plTime.plTimeMin < sliderRanges.plTimeMin) || (game.plTime.plTimeMax > sliderRanges.plTimeMax)) {
            filterFlag = false;
        }
        if ((game.complexity < sliderRanges.complexityMin) || (game.complexity > sliderRanges.complexityMax)) {
            filterFlag = false;
        }

        // Filtering with Map Strength might be too strict any may have to change
        if ((game.mapStrength !== mappingStrength) && (mappingStrength !== "Any")) {
            filterFlag = false;
        }

        if (game.extComponents.length > 0) {
            const uncheckedComponents = getKeysByValue(checkedComponents, false);
            game.extComponents.forEach(extComponent => {
                if (uncheckedComponents.includes(extComponent)) {
                    filterFlag = false;
                }
            });
        }

        const selectedCheckedTypes = getKeysByValue(checkedTypes, true);
        let inSelectedTypes = false
        game.gameType.forEach(gType => {
            if (selectedCheckedTypes.includes(gType)) {
                inSelectedTypes = true;
            }
        });
        if (!inSelectedTypes) {
            filterFlag = false;
        }

        return filterFlag;
    });

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
        //plCount & plTime: IF the target comparison values MATCH, then the order is based on the other value
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
                            <SearchBar searchName={ searchName } setSearchName={setSearchName}/>
                            <SortFilters 
                                sortFilters={sortFilters}
                                setSortFilters={setSortFilters}
                            />
                        </div>
                        {games.length > 0 ?
                            <div className={styles.cards}>
                                {games.map((game) => (
                                    <Card
                                        key={game._id}
                                        game={game}
                                    />
                                ))}
                            </div>
                            : <p className={styles.noCardsMessage}>No known games that match the search criteria!<br />Try changing the search name or adjusting the filters. </p>
                        }
                    </Stack>
                </div>
                <Button
                    variant="primary"
                    onClick={handleShowFilters}
                    bsPrefix={`${styles.floatingButton} ${styles.filterButton}`}
                >
                    <Image src="/filter-svgrepo-com.svg" width={30} height={30} />
                </Button>
                <Offcanvas show={showFilters} onHide={handleCloseFilters} placement="end" className={`${alegreya.variable} ${alegreyaSans.variable}`}>
                    <Offcanvas.Header closeButton className={styles.offcanvas}>
                        <Offcanvas.Title style={{fontSize:"1.75rem", fontWeight:"bold"}}>Filter Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <FilterMenu
                            sliderEndpoints={sliderEndpoints}
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
                <Button
                    variant="primary"
                    onClick={handleShowTut}
                    bsPrefix={`${styles.floatingButton} ${styles.tutButton}`}
                >
                    <Image src="/question-svgrepo-com.svg" width={30} height={30} />
                </Button>
                <Offcanvas show={showTutorial} onHide={handleCloseTut} placement="start" className={`${alegreya.variable} ${alegreyaSans.variable} ${styles.offcanvasTutorial}`}>
                    <Offcanvas.Header closeButton className={styles.offcanvas}>
                        <Offcanvas.Title style={{fontSize:"1.75rem", fontWeight:"bold"}}>How To Use This App</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="pt-0">
                        <Tutorial />
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    );
    
}

export default GameListPage;