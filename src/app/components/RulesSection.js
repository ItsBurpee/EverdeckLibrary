import styles from "../css/rulesSection.module.css";
import reactStringReplace from "react-string-replace";

export default function RulesSection({
    objective,
    setup,   
    gameplay,
    cardZones
}) {

    const formattedObjective = objective.replaceAll('\\t', '\t');
    const formattedSetup = setup.replaceAll('\\t', '\t');
    const formattedGameplay = gameplay.replaceAll('\\t', '\t');

    let keywordedObjective = formattedObjective;
    let keywordedSetup = formattedSetup;
    let keywordedGameplay = formattedGameplay;

    let keywordDictionary = {};

    //Replace all keywords with unique placeholders
    cardZones.forEach((cardZone,i) => {
        cardZone.keywords.forEach((keyword,j) => {
            Object.defineProperty(keywordDictionary, "keyword"+i+j, {value: keyword, enumerable: true})

            //Main issue with casing. Requires a changes in the DB or more tags to remember proper case
            const keywordCaselessRegEx = RegExp(keyword, "gi")
            keywordedObjective = keywordedObjective.replaceAll(keywordCaselessRegEx, "keyword"+i+j)
            keywordedSetup = keywordedSetup.replaceAll(keywordCaselessRegEx, "keyword"+i+j)
            keywordedGameplay = keywordedGameplay.replaceAll(keywordCaselessRegEx, "keyword"+i+j)
        })
    })
    
    //Then replace the unique placeholders with the proper keywords
    Object.keys(keywordDictionary).forEach((key) => {
        console.log(keywordDictionary[key]);
        keywordedObjective = reactStringReplace(keywordedObjective, key, (match, i) => <u key={"objective"+match+i} className={styles.keyword}>{keywordDictionary[key]}</u>)
        keywordedSetup = reactStringReplace(keywordedSetup, key, (match, i) => <u key={"setup"+match+i} className={styles.keyword}>{keywordDictionary[key]}</u>)
        keywordedGameplay = reactStringReplace(keywordedGameplay, key, (match, i) => <u key={match+i} className={styles.keyword}>{keywordDictionary[key]}</u>)
    })

    return (
            <div className={styles.rulesSection}>
                <div className={styles.title}>
                    <h2>Game Rules</h2>
                </div>
                <div className={styles.mainText}>
                    <h3>Objective of the Game</h3>
                    <p>{keywordedObjective}</p>
                    <h3>Setup</h3>
                    <p className={styles.para}>{keywordedSetup}</p>
                    <h3>Gameplay</h3>
                    <p className={styles.para}>{keywordedGameplay}</p>
                </div>
            </div>
            
    )

}