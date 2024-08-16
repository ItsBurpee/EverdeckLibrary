import styles from "../css/cardZoneBox.module.css";

export default function CardZone({ boxColorIndex, cardZone }) {
    const cardZoneColors = ["Red", "Blue", "Yellow"];

    let boxColorStyle = styles.cardZoneRed; 
    let cardId = `cardZone${cardZoneColors[boxColorIndex]}`;
    switch (boxColorIndex) {
        case 0:
            boxColorStyle = styles.cardZoneRed;
            break;
        case 1:
            boxColorStyle = styles.cardZoneBlue;
            break;
        case 2:
            boxColorStyle = styles.cardZoneYellow;
            break;
    };

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
            <div id={cardId} className={`${styles.cardZoneBox} ${boxColorStyle}`}>
                <p><b>{cardZone.name}</b>{`: Use ${cardComponentP}`}</p>
            </div>
        </div> 
    );

}