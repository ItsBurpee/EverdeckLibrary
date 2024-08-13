"use client"

import { useEffect } from "react";
import styles from "../css/cardZoneBox.module.css";

export default function CardZone() {
    useEffect(() => {
        const redZone = document.getElementById("cardZoneRed");
        const blueZone = document.getElementById("cardZoneBlue");
        const yellowZone = document.getElementById("cardZoneYellow");

        // mouse over and mouse out events for red card zone
        redZone.addEventListener("mouseover", () => {
            blueZone.classList.add(styles.halfOpacity);
            yellowZone.classList.add(styles.halfOpacity);
        })

        redZone.addEventListener("mouseout", () => {
            blueZone.classList.remove(styles.halfOpacity);
            yellowZone.classList.remove(styles.halfOpacity);
        })

        // mouse over and mouse out events for blue card zone
        blueZone.addEventListener("mouseover", () => {
            redZone.classList.add(styles.halfOpacity);
            yellowZone.classList.add(styles.halfOpacity);
        })

        blueZone.addEventListener("mouseout", () => {
            redZone.classList.remove(styles.halfOpacity);
            yellowZone.classList.remove(styles.halfOpacity);
        })

        // mouse over and mouse out events for yellow card zone
        yellowZone.addEventListener("mouseover", () => {
            blueZone.classList.add(styles.halfOpacity);
            redZone.classList.add(styles.halfOpacity);
        })

        yellowZone.addEventListener("mouseout", () => {
            blueZone.classList.remove(styles.halfOpacity);
            redZone.classList.remove(styles.halfOpacity);
        })
    }, []);
    

    return (
        <div id="cardZones" className={styles.cardZoneBoxes}>
            <div id="cardZoneRed" className={`${styles.cardZoneBox} ${styles.cardZoneRed}`}>
                <p><b>Currency Cards</b>: Use Rank & Suit</p>
            </div>
            <div id="cardZoneBlue" className={`${styles.cardZoneBox} ${styles.cardZoneBlue}`}>
                <p><b>Property Cards</b>: Use Sequence Number</p>
            </div>
            <div id="cardZoneYellow" className={`${styles.cardZoneBox} ${styles.cardZoneYellow}`}>
                <p><b>Something Cards</b>: Use Image</p>
            </div>
        </div> 
    );

}