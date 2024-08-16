
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

    const [activeCardZone, setActiveCardZone] = useState("");

    
    const assignActiveCardZone = targetCardZoneID => {
        if (!targetCardZoneID) {
            setActiveCardZone("");
        }
        else {
            setActiveCardZone(targetCardZoneID);
        }
    }
    
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
                    />
                    <MappingTable 
                        tableColor={"red"}
                        tableCards={redCards}
                        activeCardZone={activeCardZone}
                        setActiveCardZone={setActiveCardZone}
                        assignActiveCardZone={assignActiveCardZone}  
                    />
                    <MappingTable 
                        tableColor={"yellow"}
                        tableCards={yellowCards}
                        activeCardZone={activeCardZone}
                        setActiveCardZone={setActiveCardZone}
                        assignActiveCardZone={assignActiveCardZone} 
                    />
                    <MappingTable 
                        tableColor={"blue"}
                        tableCards={blueCards}
                        activeCardZone={activeCardZone}
                        setActiveCardZone={setActiveCardZone}
                        assignActiveCardZone={assignActiveCardZone}  
                    />
                </div>
                <div className={styles.cardsBoxes}>
                    <p><b>Total Cards: 60   Property Cards: 30   Currency Cards: 30</b></p>
                    <div className={styles.cardZoneBoxes}>
                        {
                            cardZones.map((zone, index) => (
                                <CardZoneBox key={zone._id} boxColorIndex={index} cardZone={zone} />
                            ))
                        }
                    </div>
                </div>
                <h3>Extra Components</h3>
                    <ul>
                        {extComponents.map((comp) => {
                            return <li key={comp}>{comp}</li>
                        })}
                    </ul>
            </div>
    )

}