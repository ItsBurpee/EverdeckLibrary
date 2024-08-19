import styles from "../css/rulesSection.module.css";
import reactStringReplace from "react-string-replace";

export default function RulesSection({
    objective,
    setup,   
    gameplay,
    cardZones,
    activeCardZone,
    assignActiveCardZone
}) {
    const keywordColors = ["Red", "Blue", "Yellow"];
    const keywordColorStyle = {
        Red: styles.keywordRed,
        Blue: styles.keywordBlue,
        Yellow: styles.keywordYellow
    }
    const activeKeywordColorStyle = {
        Red: styles.activeKeywordRed,
        Blue: styles.activeKeywordBlue,
        Yellow: styles.activeKeywordYellow
    }

    
    const formattedObjective = objective.replaceAll('\\t', '\t');
    const formattedSetup = setup.replaceAll('\\t', '\t');
    const formattedGameplay = gameplay.replaceAll('\\t', '\t');

    let replacedObjective = formattedObjective;
    let replacedSetup = formattedSetup;
    let replacedGameplay = formattedGameplay;

    let cardZoneIndex = 0;
    // iterate over each card zone
    cardZones.forEach((cardZone) => {
        // replaces count used for id to prevent hydration error
        let replaces = 0;
        
        let currentKeywordColor = keywordColors[cardZoneIndex]

        // replace keyword in each section with jsx element
        cardZone.keywords.forEach(keyword => {
            replaces = 0;
            replacedObjective = reactStringReplace(replacedObjective, RegExp(`(${keyword})`, "gi"), (match, i, offset) => {
                replaces++
                return (
                    <u key={"objective" + keyword + offset + replaces} 
                        className={`${(activeCardZone === cardZone._id) ? activeKeywordColorStyle[currentKeywordColor] : keywordColorStyle[currentKeywordColor]}`}
                        onMouseEnter={() => assignActiveCardZone(cardZone._id)}
                        onMouseLeave={() => assignActiveCardZone()}
                    >
                    {match}</u>
                )
            })
            replaces = 0;
            replacedSetup = reactStringReplace(replacedSetup, RegExp(`(${keyword})`, "gi"), (match, i, offset) => {
                replaces++;
                return (
                    <u key={"Setup" + keyword + offset + replaces}
                        className={`${(activeCardZone === cardZone._id) ? activeKeywordColorStyle[currentKeywordColor] : keywordColorStyle[currentKeywordColor]}`}
                        onMouseEnter={() => assignActiveCardZone(cardZone._id)}
                        onMouseLeave={() => assignActiveCardZone()}
                    >
                    {match}</u>
                )
            })
            replaces = 0;
            replacedGameplay = reactStringReplace(replacedGameplay, RegExp(`(${keyword})`, "gi"), (match, i, offset) => {
                replaces++;
                return (
                    <u key={"Gameplay" + keyword + offset}
                        className={`${(activeCardZone === cardZone._id) ? activeKeywordColorStyle[currentKeywordColor] : keywordColorStyle[currentKeywordColor]}`}
                        onMouseEnter={() => assignActiveCardZone(cardZone._id)}
                        onMouseLeave={() => assignActiveCardZone()}
                    >
                    {match}</u>
                )
            })
        })
        cardZoneIndex++;
    });

    return (
            <div className={styles.rulesSection}>
                <div className={styles.title}>
                    <h2>Game Rules</h2>
                </div>
                <div className={styles.mainText}>
                    <h3>Objective of the Game</h3>
                    <p>{replacedObjective}</p>
                    <h3>Setup</h3>
                    <p className={styles.para}>{replacedSetup}</p>
                    <h3>Gameplay</h3>
                    <p className={styles.para}>{replacedGameplay}</p>
                </div>
            </div>
            
    )

}