import styles from "../css/cardZoneBox.module.css";
import reactStringReplace from "react-string-replace";
import Image from "next/image";

export default function CardZone({ 
    boxColorIndex, 
    cardZone,
    activeCardZones,
    assignActiveCardZones
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

    const cardSuits = {
        //Black Suits
        club: "/everdeckSuits/everdeck-suits-club.svg", 
        spade: "/everdeckSuits/everdeck-suits-spade.svg",
        //Red Suits
        heart: "/everdeckSuits/everdeck-suits-heart.svg", 
        diamond: "/everdeckSuits/everdeck-suits-diamond.svg",
        //Yellow Suits
        coin: "/everdeckSuits/everdeck-suits-coin.svg", 
        crown: "/everdeckSuits/everdeck-suits-crown.svg",
        //Blue Suits
        moon: "/everdeckSuits/everdeck-suits-moon.svg", 
        star: "/everdeckSuits/everdeck-suits-star.svg"
    }

    const applySuitIcons = (targetString) => {
        let modifiedString = targetString;
        Object.entries(cardSuits).forEach((suit) => {
            modifiedString = reactStringReplace(modifiedString, RegExp(`(${suit[0]})`, "gi"), (match, i) => (
                <Image key={suit[0] + i}
                    src={suit[1]} height={20} width={20} alt={suit[0]}
                />
            ))
        })
        return modifiedString
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
                className={`${styles.cardZoneBox} ${(activeCardZones.includes(cardZone._id)) ? activeBoxColorStyle[cardZoneColors[boxColorIndex]] : boxColorStyle[cardZoneColors[boxColorIndex]]} ${(!activeCardZones.includes(cardZone._id) && activeCardZones.length > 0) && styles.inactiveCardZone}`}
                onMouseEnter={() => assignActiveCardZones(cardZone._id)}
                onMouseLeave={() => assignActiveCardZones()}
            >
                <p className={styles.cardZoneRule}><b>{cardZone.name}</b>{`: Use ${cardComponentP}`}</p>
                {cardZone.extRules.map((extRule, i) => {
                        let extRuleName = applySuitIcons(Object.keys(extRule)[0]);
                        let extRuleDesc = Object.values(extRule)[0];
                        return (
                            <p className={styles.cardZoneRule} key={"extRule"+i}>
                                <b>{extRuleName}</b>{(extRuleDesc !== "") && ` : ${extRuleDesc}`}
                            </p>
                        )
                    })
                }
            </div>
        </div> 
    );

}