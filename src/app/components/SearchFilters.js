"use client"

import { Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import Image from "next/image";
import styles from "../css/searchFilters.module.css";

export default function SearchFilters() {
    // state for search sort filters
    // filter name = "name" or "plCount" or "plTime" or "complexity"
    // filterDirec = "asc" or "desc"
    const [searchFilters, setSearchFilters] = useState({
        "filterName": "name",
        "filterDirec": "asc"
    });

    // switches filter to selected filter and toggles the filter direction if the same button 
    // is pressed again
    const handleClick = filter => {
        if (filter === searchFilters["filterName"]) {
            const filterDirec = searchFilters["filterDirec"] === "asc" ? "desc" : "asc";
            setSearchFilters({ "filterName": filter, "filterDirec": filterDirec });
        } else {
            setSearchFilters({ "filterName": filter, "filterDirec": "asc" });
        }
            
    }
    return (
        <ButtonGroup className={styles.searchFilters}>
            <Button
                onClick={() => handleClick("name")}
                className={searchFilters["filterName"] === "name" && "active"}
            >
                {/* empty div to push name <p> down in line with others on smallest breakpoint */}
                <div style={{height: 20}}></div>
                <p>Name</p>
                { 
                    searchFilters["filterName"] === "name" &&
                    <Image
                        src={searchFilters["filterDirec"] === "asc" ? "/arrow-up-svgrepo-com.svg" : "/arrow-down-svgrepo-com.svg"}
                        width={25}
                        height={25}
                        alt={searchFilters["filterDirec"] === "asc" ? "up arrow icon" : "down arrow icon"}
                    />
                }
            </Button>
            <Button
                onClick={() => handleClick("plCount")}
                className={searchFilters["filterName"] === "plCount" && "active"}
            >
                <Image
                    src={"/gameCardIcons/person-male-svgrepo-com.svg"}
                    width={20}
                    height={20}
                    alt="Player Count Icon"
                />
                <p>Player Count</p>
                { 
                    searchFilters["filterName"] === "plCount" &&
                    <Image
                        src={searchFilters["filterDirec"] === "asc" ? "/arrow-up-svgrepo-com.svg" : "/arrow-down-svgrepo-com.svg"}
                        width={25}
                        height={25}
                        alt={searchFilters["filterDirec"] === "asc" ? "up arrow icon" : "down arrow icon"}
                    />
                }
            </Button>
            <Button
                onClick={() => handleClick("plTime")}
                className={searchFilters["filterName"] === "plTime" && "active"}
            >
                <Image
                    src={"/gameCardIcons/stopwatch-svgrepo-com.svg"}
                    width={20}
                    height={20}
                    alt="Play Time Icon"
                />
                <p>Play Time</p>
                { 
                    searchFilters["filterName"] === "plTime" &&
                    <Image
                        src={searchFilters["filterDirec"] === "asc" ? "/arrow-up-svgrepo-com.svg" : "/arrow-down-svgrepo-com.svg"}
                        width={25}
                        height={25}
                        alt={searchFilters["filterDirec"] === "asc" ? "up arrow icon" : "down arrow icon"}
                    />
                }
            </Button>
            <Button
                onClick={() => handleClick("complexity")}
                className={searchFilters["filterName"] === "complexity" && "active"}
            >
                <Image
                    src={"/gameCardIcons/signal-strong-svgrepo-com.svg"}
                    width={20}
                    height={20}
                    alt="Complexity Icon"
                />
                <p>Complexity</p>
                { 
                    searchFilters["filterName"] === "complexity" &&
                    <Image
                        src={searchFilters["filterDirec"] === "asc" ? "/arrow-up-svgrepo-com.svg" : "/arrow-down-svgrepo-com.svg"}
                        width={25}
                        height={25}
                        alt={searchFilters["filterDirec"] === "asc" ? "up arrow icon" : "down arrow icon"}
                    />
                }
            </Button>
        </ButtonGroup>
    )
}