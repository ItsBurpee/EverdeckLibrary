import styles from "../css/cardZoneBox.module.css";

export default function CardZone() {

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