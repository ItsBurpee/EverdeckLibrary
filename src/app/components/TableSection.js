import styles from "../css/tableSection.module.css";
import MappingTable from "./MappingTable"
import CardZoneBox from "./CardZoneBox"

export default function TableSection({ cardZones }) {

    return (
            <div className={styles.tableSection}>
                <h1>Card Table</h1>
                <p>These are the cards you require for the game</p>
                <div className={styles.table}>
                    <MappingTable tableSuit={0}/>
                    <MappingTable tableSuit={1}/>
                    <MappingTable tableSuit={2}/>
                    <MappingTable tableSuit={3}/>
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