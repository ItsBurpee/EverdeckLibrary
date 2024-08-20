"use client"

import styles from "../css/cardZone.module.css";
import Image from "next/image";
import CardZoneBox from "./CardZoneBox"
import { useEffect } from "react";

export default function CardZone({
    cardZones,
    activeCardZones,
    assignActiveCardZones
}) {
    
    const cardComponentsZones = {
        "Rank": styles.compRank,
        "Suit": styles.compSuit,
        "Dots": styles.compDots,
        "Sequence Number": styles.compSeqNum,
        "Border": styles.compBorder,
        "Image": styles.compImg,
        "Name": styles.compName
    }

    const cardZoneColors = ["Red", "Blue", "Yellow"];

    const cardZoneColorStyle = {
        Red: styles.cardZoneRed,
        Blue: styles.cardZoneBlue,
        Yellow: styles.cardZoneYellow
    }

    const tempZoneTarget = {
        Red: styles.cardZoneSeq,
        Blue: styles.cardZoneRaS,
        Yellow: styles.cardZoneImg
    }

    let cardZoneIndex = 0;

    // TODO: apply highlight id's and classNames based on card zone cardComponents
    return (
            <div className={styles.cardZone}>
                <div className={styles.title}>
                    <h2>Card Zones</h2>
                </div>
                <div className={styles.img}>
                    <Image src={"/everdeck-card.svg"} height={275} width={225}  alt="Card Image" />
                    {cardZones.map((cardZone) => {
                        const currentColor = cardZoneColors[cardZoneIndex];
                        const zoneKey = "highlight"+currentColor;
                        const cardZoneStyle = cardZoneColorStyle[currentColor];
                        cardZoneIndex++;
                        return (cardZone.cardComponents.map((cardComponent) => {
                            return (
                                <div 
                                    key={zoneKey+cardComponent}
                                    className={`${styles.cardZoneHighlight} ${cardZoneStyle} ${cardComponentsZones[cardComponent]} ${(activeCardZones.includes(cardZone._id))  && styles.showHighlight}`}
                                >
                                </div>
                            )
                        }))
                    })}
                </div>
                <div className={styles.cardZoneBoxes}>
                {
                    cardZones.map((zone, index) => (
                        <CardZoneBox 
                            key={zone._id}
                            boxColorIndex={index}
                            cardZone={zone}
                            activeCardZones={activeCardZones}
                            assignActiveCardZones={assignActiveCardZones}
                        />
                    ))
                }
                </div>
            </div>      
    )

}