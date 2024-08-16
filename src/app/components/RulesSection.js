import styles from "../css/rulesSection.module.css";
import reactStringReplace from "react-string-replace";

export default function RulesSection({
    rulesObjective,
    rulesSetup,   
    rulesGameplay

}) {

    const keyword = "properties";

    const keywordedObjective = reactStringReplace(rulesObjective, keyword, (match, i) => <b className={styles.keyword}>{match}</b>);

    const formattedSetup = rulesSetup.replaceAll('\\t', '\t');
    const formattedGameplay = rulesGameplay.replaceAll('\\t', '\t');

    return (
            <div className={styles.rulesSection}>
                <div className={styles.title}>
                    <h2>Game Rules</h2>
                </div>
                <div className={styles.mainText}>
                    <h3>Objective of the Game</h3>
                    <p>{rulesObjective}</p>
                    <h3>Setup</h3>
                    <p className={styles.para}>{formattedSetup}</p>
                    <h3>Gameplay</h3>
                    <p className={styles.para}>{formattedGameplay}</p>
                </div>
            </div>
            
    )

}