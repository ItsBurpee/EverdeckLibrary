"use client"

import { Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import Image from "next/image";
import styles from "../css/sortFilters.module.css";

export default function SortFilters() {
    // state for sort sort filters
    // filter name = "name" or "plCount" or "plTime" or "complexity"
    // filterDirec = "asc" or "desc"
    const [sortFilters, setSortFilters] = useState({
        "filterName": "name",
        "filterDirec": "asc"
    });

    // switches filter to selected filter and toggles the filter direction if the same button 
    // is pressed again
    const handleClick = filter => {
        if (filter === sortFilters["filterName"]) {
            const filterDirec = sortFilters["filterDirec"] === "asc" ? "desc" : "asc";
            setSortFilters({ "filterName": filter, "filterDirec": filterDirec });
        } else {
            setSortFilters({ "filterName": filter, "filterDirec": "asc" });
        }
            
    }
    return (
        <ButtonGroup className={styles.sortFilters}>
            <Button
                onClick={() => handleClick("name")}
                className={sortFilters["filterName"] === "name" && "active"}
            >
                {/* empty div to push name <p> down in line with others on smallest breakpoint */}
                <div style={{height: 20}}></div>
                <p>Name</p>
                { 
                    sortFilters["filterName"] === "name" &&
                    <Image
                        src={sortFilters["filterDirec"] === "asc" ? "/arrow-up-svgrepo-com.svg" : "/arrow-down-svgrepo-com.svg"}
                        width={25}
                        height={25}
                        alt={sortFilters["filterDirec"] === "asc" ? "up arrow icon" : "down arrow icon"}
                    />
                }
            </Button>
            <Button
                onClick={() => handleClick("plCount")}
                className={sortFilters["filterName"] === "plCount" && "active"}
            >
                <Image
                    src={"/gameCardIcons/person-male-svgrepo-com.svg"}
                    width={20}
                    height={20}
                    alt="Player Count Icon"
                />
                <p>Player Count</p>
                { 
                    sortFilters["filterName"] === "plCount" &&
                    <Image
                        src={sortFilters["filterDirec"] === "asc" ? "/arrow-up-svgrepo-com.svg" : "/arrow-down-svgrepo-com.svg"}
                        width={25}
                        height={25}
                        alt={sortFilters["filterDirec"] === "asc" ? "up arrow icon" : "down arrow icon"}
                    />
                }
            </Button>
            <Button
                onClick={() => handleClick("plTime")}
                className={sortFilters["filterName"] === "plTime" && "active"}
            >
                <Image
                    src={"/gameCardIcons/stopwatch-svgrepo-com.svg"}
                    width={20}
                    height={20}
                    alt="Play Time Icon"
                />
                <p>Play Time</p>
                { 
                    sortFilters["filterName"] === "plTime" &&
                    <Image
                        src={sortFilters["filterDirec"] === "asc" ? "/arrow-up-svgrepo-com.svg" : "/arrow-down-svgrepo-com.svg"}
                        width={25}
                        height={25}
                        alt={sortFilters["filterDirec"] === "asc" ? "up arrow icon" : "down arrow icon"}
                    />
                }
            </Button>
            <Button
                onClick={() => handleClick("complexity")}
                className={sortFilters["filterName"] === "complexity" && "active"}
            >
                <Image
                    src={"/gameCardIcons/signal-strong-svgrepo-com.svg"}
                    width={20}
                    height={20}
                    alt="Complexity Icon"
                />
                <p>Complexity</p>
                { 
                    sortFilters["filterName"] === "complexity" &&
                    <Image
                        src={sortFilters["filterDirec"] === "asc" ? "/arrow-up-svgrepo-com.svg" : "/arrow-down-svgrepo-com.svg"}
                        width={25}
                        height={25}
                        alt={sortFilters["filterDirec"] === "asc" ? "up arrow icon" : "down arrow icon"}
                    />
                }
            </Button>
        </ButtonGroup>
    )
}