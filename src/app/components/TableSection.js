
import { useState } from "react";
import styles from "../css/tableSection.module.css";
import MappingTable from "./MappingTable";
import CardZoneBox from "./CardZoneBox";

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

    const [activeCardZones, setActiveCardZones] = useState([]);

    const assignActiveCardZones = targetCardZoneIDs => {
        if (!targetCardZoneIDs) {
            setActiveCardZones([]);
        } else {
            setActiveCardZones(targetCardZoneIDs);
        }
    }
    
    // object to hold counts for cards of each card zone
    let cardCounts = {}

    let totalCards = cardTable.length;
    // initialize object with keys that are the card zone ids
    cardZones.forEach(cardZone => {
        cardCounts = {...cardCounts, [cardZone._id]: 0}
    })
    
    // loop through the card table and increment proper card zone count
    cardTable.forEach(card => {
        card.cardZone.forEach(zone => {
            cardCounts[zone]++;
        })
    });

    return (
        
            <div className={styles.tableSection}>
                <h1>Card Table</h1>
                <p>These are the cards you require for the game</p>
                
                <div className={styles.table}>
                    <MappingTable 
                        tableColor={"black"}
                        tableCards={blackCards}
                        activeCardZones={activeCardZones}
                        setActiveCardZones={setActiveCardZones}    
                        assignActiveCardZones={assignActiveCardZones}
                        AllCardZones={cardZones}    
                    />
                    <MappingTable 
                        tableColor={"red"}
                        tableCards={redCards}
                        activeCardZones={activeCardZones}
                        setActiveCardZones={setActiveCardZones}
                        assignActiveCardZones={assignActiveCardZones}
                        AllCardZones={cardZones}     
                    />
                    <MappingTable 
                        tableColor={"yellow"}
                        tableCards={yellowCards}
                        activeCardZones={activeCardZones}
                        setActiveCardZones={setActiveCardZones}
                        assignActiveCardZones={assignActiveCardZones} 
                        AllCardZones={cardZones}   
                    />
                    <MappingTable 
                        tableColor={"blue"}
                        tableCards={blueCards}
                        activeCardZones={activeCardZones}
                        setActiveCardZones={setActiveCardZones}
                        assignActiveCardZones={assignActiveCardZones}  
                        AllCardZones={cardZones}   
                    />
                </div>
                
                <div className={styles.cardsBoxes}>
                    <p className={styles.cardTotals}><b>{`Total Cards: ${totalCards}`}</b></p>
                    
                    <div className={styles.cardZoneBoxes}>
                        {
                            cardZones.map((zone, index) => (
                                <div key={zone._id}>
                                    {
                                        !(cardCounts[zone._id] === totalCards) &&
                                        <p className={styles.cardTotals}><b>{`${zone.name}: ${cardCounts[zone._id]}`}</b></p>
                                    }
                                    <CardZoneBox
                                        boxColorIndex={index} 
                                        cardZone={zone} 
                                        activeCardZones={activeCardZones}
                                        assignActiveCardZones={assignActiveCardZones}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                {
                    (extComponents.length > 0) &&
                    <>
                        <h3>Extra Components</h3>
                        <ul>
                            {extComponents.map((comp, index) => {
                                return <li key={index}>{comp}</li>
                            })}
                        </ul>
                    </>
                }
            </div>
    )

}