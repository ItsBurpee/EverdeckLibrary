import styles from "../css/tableSection.module.css";
import MappingTable from "./MappingTable"
import CardZoneBox from "./CardZoneBox"

export default function TableSection( 
    {cardZones,
    cardTable 
}) {

    const cardArray = JSON.parse(cardTable)
    const blackCards = cardArray.filter((card) => {
        return (card.suit === "club" || card.suit === "spade")
    })
    const redCards = cardArray.filter((card) => {
        return (card.suit === "heart" || card.suit === "diamond")
    })
    const yellowCards = cardArray.filter((card) => {
        return (card.suit === "coin" || card.suit === "crown")
    })
    const blueCards = cardArray.filter((card) => {
        return (card.suit === "moon" || card.suit === "star")
    })

    return (
            <div className={styles.tableSection}>
                <h1>Card Table</h1>
                <p>These are the cards you require for the game</p>
                <div className={styles.table}>
                    <MappingTable 
                        tableColor={0}
                        tableCards={blackCards}    
                    />
                    <MappingTable 
                        tableColor={1}
                        tableCards={redCards}    
                    />
                    <MappingTable 
                        tableColor={2}
                        tableCards={yellowCards}    
                    />
                    <MappingTable 
                        tableColor={3}
                        tableCards={blueCards}    
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
                    <p>Extra components <br></br>72 Coin</p><ul><li>60 $1000 Coins</li><li>12 $2,000 Coins</li></ul>
                </div>
            </div>
    )

}