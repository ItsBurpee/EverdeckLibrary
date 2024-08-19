
import { useState } from "react";
import styles from "../css/tableSection.module.css";
import MappingTable from "./MappingTable";
import CardZoneBox from "./CardZoneBox";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function TableSection({
    cardZones,
    cardTable,
    extComponents 
}) {

    const blackCards = cardTable.filter((card) => {
        return (card.suit === "club" || card.suit === "spade")
    })
    const redCards = cardTable.filter((card) => {
        return (card.suit === "heart" || card.suit === "diamond")
    })
    const yellowCards = cardTable.filter((card) => {
        return (card.suit === "coin" || card.suit === "crown")
    })
    const blueCards = cardTable.filter((card) => {
        return (card.suit === "moon" || card.suit === "star")
    })

    const [activeCardZone, setActiveCardZone] = useState("");

    const assignActiveCardZone = targetCardZoneID => {
        if (!targetCardZoneID) {
            setActiveCardZone("");
        }
        else {
            setActiveCardZone(targetCardZoneID);
        }
    }
    
    // object to hold counts for cards of each card zone
    let cardCounts = {}

    let totalCards = 0;
    // initialize object with keys that are the card zone ids
    cardZones.forEach(cardZone => {
        cardCounts = {...cardCounts, [cardZone._id]: 0}
    })
    
    // loop through the card table and increment proper card zone count
    cardTable.forEach(card => {
        cardCounts[card.cardZone]++;
        totalCards++;
    });

    return (
        
            <div className={styles.tableSection}>
                <h1>Card Table</h1>
                <p>These are the cards you require for the game</p>
                
                <div className={styles.table}>
                    <MappingTable 
                        tableColor={"black"}
                        tableCards={blackCards}
                        activeCardZone={activeCardZone}
                        setActiveCardZone={setActiveCardZone}    
                        assignActiveCardZone={assignActiveCardZone}
                        cardZones={cardZones}    
                    />
                    <MappingTable 
                        tableColor={"red"}
                        tableCards={redCards}
                        activeCardZone={activeCardZone}
                        setActiveCardZone={setActiveCardZone}
                        assignActiveCardZone={assignActiveCardZone}
                        cardZones={cardZones}     
                    />
                    <MappingTable 
                        tableColor={"yellow"}
                        tableCards={yellowCards}
                        activeCardZone={activeCardZone}
                        setActiveCardZone={setActiveCardZone}
                        assignActiveCardZone={assignActiveCardZone} 
                        cardZones={cardZones}   
                    />
                    <MappingTable 
                        tableColor={"blue"}
                        tableCards={blueCards}
                        activeCardZone={activeCardZone}
                        setActiveCardZone={setActiveCardZone}
                        assignActiveCardZone={assignActiveCardZone}  
                        cardZones={cardZones}   
                    />
                </div>
                
                <div className={styles.cardsBoxes}>
                    <p><b>{`Total Cards: ${totalCards}`}</b></p>
                    
                    <div className={styles.cardZoneBoxes}>
                        {
                            cardZones.map((zone, index) => (
                                <div key={zone._id}>
                                    <p><b>{`${zone.name}: ${cardCounts[zone._id]}`}</b></p>
                                    <CardZoneBox
                                        boxColorIndex={index} 
                                        cardZone={zone} 
                                        activeCardZone={activeCardZone}
                                        assignActiveCardZone={assignActiveCardZone}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <h3>Extra Components</h3>
                    <ul>
                        {extComponents.map((comp, index) => {
                            return <li key={index}>{comp}</li>
                        })}
                    </ul>
            </div>
    )

}