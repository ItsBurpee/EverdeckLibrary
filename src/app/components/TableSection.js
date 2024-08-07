import styles from "../css/tableSection.module.css";
import MappingTable from "./MappingTable"
import CardZoneBox from "./CardZoneBox"

export default function TableSection() {

    return (
            <div className={styles.tableSection}>
                <h1>Card Table</h1>
                <p>These are the cards you require for the game</p>
                <div className={styles.table}> {/*Currently the tables are throwing a 'hydration error' thus most of <MappingTable> is commented out */}
                    <MappingTable />
                    <MappingTable />
                    <MappingTable />
                    <MappingTable />
                </div>
                <div className={styles.cardsBoxes}>
                    <p><b>Total Cards: 60   Property Cards: 30   Currency Cards: 30</b></p>
                    <CardZoneBox />
                    <p>Extra components <br></br>72 Coin</p><ul><li>60 $1000 Coins</li><li>12 $2,000 Coins</li></ul>
                </div>
            </div>
    )

}