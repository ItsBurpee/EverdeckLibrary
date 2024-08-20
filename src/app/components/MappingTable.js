"use client"

import { useEffect, useState } from "react";
import styles from "../css/mappingTable.module.css";
import Image from "next/image";
import CardZoneBox from "./CardZoneBox";
//The generic table which will have information passed into it

//TODO: It is currently causing a hydration error
//Needs to actually take in paramaters and use them to fill table

export default function MappingTable({
    tableColor,
    tableCards,
    activeCardZones,
    assignActiveCardZones,
    AllCardZones
}) {

    const cardColors = {
        black: {
            club: "/everdeckSuits/everdeck-suits-club.svg", 
            spade: "/everdeckSuits/everdeck-suits-spade.svg"
        },
        red: {
            heart: "/everdeckSuits/everdeck-suits-heart.svg", 
            diamond: "/everdeckSuits/everdeck-suits-diamond.svg"
        },
        yellow: {
            coin: "/everdeckSuits/everdeck-suits-coin.svg", 
            crown: "/everdeckSuits/everdeck-suits-crown.svg"
        },
        blue: {
            moon: "/everdeckSuits/everdeck-suits-moon.svg", 
            star: "/everdeckSuits/everdeck-suits-star.svg"
        }
    }
    const colorStyles = {
        black: styles.blackTable,
        red: styles.redTable,
        yellow: styles.yellowTable,
        blue: styles.blueTable
    }

    const cardRanks = ["0","1","2","3","4","5","6","7","8","9","X","J","Q","K","A"];

    const targetColor = cardColors[tableColor];
    const targetSuits = Object.keys(targetColor);
    
    function findByRankSuit(targetObject, targetRank, targetSuit) {
        return targetObject.find((card) => {return (card.rank === targetRank && card.suit === targetSuit)});
    }
    

    //state to control the tooltip
    const [showOverlay, setShowOverlay] = useState(false);

    // handlers for the table hover and click
    const handleMouseEnter = targetCard => {
        setShowOverlay(true);
        assignActiveCardZones(targetCard.cardZone);
    }

    const handleMouseLeave = () => {
        setShowOverlay(false);
        assignActiveCardZones();
    }

    const handleClick = targetCard => {
        if (activeCardZones.length > 0) {
            setShowOverlay(false);
            assignActiveCardZones();
        } else {
            setShowOverlay(true);
            assignActiveCardZones(targetCard.cardZone);
        }
    }

    // filter card zones to get the active zone and the indexes of the active zones
    let cardZoneInds = [];
    const cardZones = AllCardZones.filter((zone, index) => {
        if (activeCardZones.includes(zone._id)) {
            cardZoneInds.push(index);
            return true;
        }
        return false;
    });

    // effect that adds mouse movement listener to the table and
    // adjusts the positioning of the overlay based on mouse location (or tap location on mobile)
    useEffect(() => {
        const tableContainer = document.querySelectorAll(`#tableContainer`);
        const overlayProxy = document.getElementById(`overlayProxy${tableColor}`);
        if (tableContainer) {
            tableContainer.forEach(tb => {
                tb.addEventListener("mousemove", e => {
                    overlayProxy.style.top = (e.pageY + 30) + "px";
                    // prevents tooltip from going offscreen (left) or causing overflow (right)
                    overlayProxy.style.left = Math.max(0, Math.min((window.innerWidth - 320),(e.pageX - 150))) + "px";
                })
            })
        }
    }, []);

    return (
        <div id="tableContainer" className={styles.tableContainer}>
            <div id={`overlayProxy${tableColor}`} className={`${styles.overlayProxy} ${showOverlay && styles.showOverlay}`}>
                {
                    (showOverlay) &&
                    cardZones.map((zone, index) => (
                        <CardZoneBox
                            key={zone._id}
                            boxColorIndex={cardZoneInds[index]} 
                            cardZone={zone} 
                            activeCardZones={activeCardZones}
                            assignActiveCardZones={assignActiveCardZones}
                        />    
                    ))
                }
            </div>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th></th>
                    {Object.entries(targetColor).map((suit) => (
                        <th key={suit[0]}><Image src={suit[1]} height={30} width={30} alt={suit[0]} /></th>
                    ))}
                </tr>
                </thead>
                <tbody>
                    {cardRanks.map((rank) => (
                        <tr key={tableColor + "_" + rank}>
                            <td><h3>{rank}</h3></td>
                            {
                                targetSuits.map((suit) => {
                                    const targetCard = findByRankSuit(tableCards, rank, suit)
                                    if(targetCard) {
                                        return <td className={`${colorStyles[tableColor]} ${(!targetCard.cardZone.some(el => activeCardZones.includes(el)) && activeCardZones.length > 0) && styles.inactiveCard} ${styles.cardColumn}`}
                                            onMouseEnter={() => handleMouseEnter(targetCard)} 
                                            onMouseLeave={handleMouseLeave}
                                            onClick={() => handleClick(targetCard)} 
                                            key={rank + "_" + suit}
                                            >
                                                {targetCard.label}
                                            </td>
                                    }
                                    else {
                                        return <td key={rank + "_" + suit}></td>
                                    }
                                })
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
      </div>
    )

}