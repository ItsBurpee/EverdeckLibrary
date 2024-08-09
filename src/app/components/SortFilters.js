"use client"

import { Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import Image from "next/image";
import styles from "../css/sortFilters.module.css";

export default function SortFilters({
    sortFilters,
    setSortFilters
}) {
    // state for sort filters:
    // filter name = "name" or "plCount" or "plTime" or "complexity"
    // sortDirec = "asc" or "desc"

    // switches filter to selected filter and toggles the filter direction if the same button 
    // is pressed again
    const handleClick = (filter) => {
        if (filter === sortFilters["sortName"]) {
            const sortDirec = sortFilters["sortDirec"] === "asc" ? "desc" : "asc";
            setSortFilters({ "sortName": filter, "sortDirec": sortDirec });
        } else {
            setSortFilters({ "sortName": filter, "sortDirec": "asc" });
        }
    }
    return (
        <ButtonGroup className={styles.sortFilters}>
            <Button
                onClick={() => handleClick("name")}
                className={sortFilters["sortName"] === "name" && "active"}
            >
                {/* empty div to push name <p> down in line with others on smallest breakpoint */}
                <div style={{height: 20}}></div>
                <p>Name</p>
                { 
                    sortFilters["sortName"] === "name" &&
                    <Image
                        src={sortFilters["sortDirec"] === "asc" ? "/arrow-up-svgrepo-com.svg" : "/arrow-down-svgrepo-com.svg"}
                        width={25}
                        height={25}
                        alt={sortFilters["sortDirec"] === "asc" ? "up arrow icon" : "down arrow icon"}
                    />
                }
            </Button>
            <Button
                onClick={() => handleClick("plCount")}
                className={sortFilters["sortName"] === "plCount" && "active"}
            >
                <Image
                    src={"/gameCardIcons/person-male-svgrepo-com.svg"}
                    width={20}
                    height={20}
                    alt="Player Count Icon"
                />
                <p>Player Count</p>
                { 
                    sortFilters["sortName"] === "plCount" &&
                    <Image
                        src={sortFilters["sortDirec"] === "asc" ? "/arrow-up-svgrepo-com.svg" : "/arrow-down-svgrepo-com.svg"}
                        width={25}
                        height={25}
                        alt={sortFilters["sortDirec"] === "asc" ? "up arrow icon" : "down arrow icon"}
                    />
                }
            </Button>
            <Button
                onClick={() => handleClick("plTime")}
                className={sortFilters["sortName"] === "plTime" && "active"}
            >
                <Image
                    src={"/gameCardIcons/stopwatch-svgrepo-com.svg"}
                    width={20}
                    height={20}
                    alt="Play Time Icon"
                />
                <p>Play Time</p>
                { 
                    sortFilters["sortName"] === "plTime" &&
                    <Image
                        src={sortFilters["sortDirec"] === "asc" ? "/arrow-up-svgrepo-com.svg" : "/arrow-down-svgrepo-com.svg"}
                        width={25}
                        height={25}
                        alt={sortFilters["sortDirec"] === "asc" ? "up arrow icon" : "down arrow icon"}
                    />
                }
            </Button>
            <Button
                onClick={() => handleClick("complexity")}
                className={sortFilters["sortName"] === "complexity" && "active"}
            >
                <Image
                    src={"/gameCardIcons/signal-strong-svgrepo-com.svg"}
                    width={20}
                    height={20}
                    alt="Complexity Icon"
                />
                <p>Complexity</p>
                { 
                    sortFilters["sortName"] === "complexity" &&
                    <Image
                        src={sortFilters["sortDirec"] === "asc" ? "/arrow-up-svgrepo-com.svg" : "/arrow-down-svgrepo-com.svg"}
                        width={25}
                        height={25}
                        alt={sortFilters["sortDirec"] === "asc" ? "up arrow icon" : "down arrow icon"}
                    />
                }
            </Button>
        </ButtonGroup>
    )
}