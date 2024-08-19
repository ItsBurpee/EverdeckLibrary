import styles from "../css/cardZoneBox.module.css";

export default function CardZone({ 
    boxColorIndex, 
    cardZone,
    activeCardZone,
    assignActiveCardZone
}) {
    const cardZoneColors = ["Red", "Blue", "Yellow"];
 
    let cardId = `cardZone${cardZoneColors[boxColorIndex]}`;
    const boxColorStyle = {
        Red: styles.cardZoneRed,
        Yellow: styles.cardZoneYellow,
        Blue: styles.cardZoneBlue
    }
    const activeBoxColorStyle = {
        Red: styles.cardZoneRedActive,
        Yellow: styles.cardZoneYellowActive,
        Blue: styles.cardZoneBlueActive
    }

    let cardComponentP = "";

    if (cardZone) {
        cardComponentP = cardZone.cardComponents.join(", ");
        const lastComma = cardComponentP.lastIndexOf(", ")
        if (lastComma >= 0) {
            cardComponentP = cardComponentP.substring(0, lastComma) + " & " + cardComponentP.substring(lastComma + 2), cardComponentP.length;
        }
    }

    return (
        <div className={styles.cardZoneBoxes} tabIndex={0}>
            <div id={cardId} 
                className={`${styles.cardZoneBox} ${(activeCardZone === cardZone._id) ? activeBoxColorStyle[cardZoneColors[boxColorIndex]] : boxColorStyle[cardZoneColors[boxColorIndex]]} ${(activeCardZone !== cardZone._id && activeCardZone !== "") && styles.inactiveCardZone}`}
                onMouseEnter={() => assignActiveCardZone(cardZone._id)}
                onMouseLeave={() => assignActiveCardZone()}
            >
                <p><b>{cardZone.name}</b>{`: Use ${cardComponentP}`}</p>
            </div>
        </div> 
    );

}