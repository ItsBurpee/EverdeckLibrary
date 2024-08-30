"use client"

import { useState } from "react";
import { Stack, Button, Image, Offcanvas } from "react-bootstrap";
import styles from "../pages css/rulesPage.module.css";
import RulesImageIcons from "../components/RulesImageIcons"
import CardZone from "../components/CardZone"
import RulesSection from "../components/RulesSection";
import TableSection from "../components/TableSection";
//From layout.js
import "bootstrap/dist/css/bootstrap.min.css";
import ImportBsJS from "../components/importBsJs";
import AppNavbar from "../components/AppNavbar";
import AppFooter from "../components/AppFooter";


const RulesPage = ({ game, rules, cardZones }) => {
    const moveToTop = () => document.getElementById('rulesMain').scrollIntoView();
    const moveToMiddle = () => document.getElementById('middle').scrollIntoView();
    const moveToBottom = () => document.getElementById('bottom').scrollIntoView();
    const moveToRules = () => document.getElementById('rulesSection').scrollIntoView();
    
    const moveToCardZone = () => document.getElementById('cardZone').scrollIntoView();


    /*const handleJump = id => {
        document.getElementById(id).scrollIntoView({behavior: 'smooth'});
    }*/

    // Show warning boxes based on map strength and extra components
    let componentWarning = false;
    let mapWarning = false;

    if(game.mapStrength !== "Perfect") {
        mapWarning = true;
    } 
    if(game.extComponents.length > 0) {
        componentWarning = true;
    }

    // States for the active card zone for the rules section
    // The active card zone for the rule section is set when hovering over a card zone box or a keyword

    // The active card zones are separated by section to limit the page updates when the active card zone changes
    // This is to prevent offscreen updates due to screen space
    const [activeCardZones, setActiveCardZones] = useState([]);

    const assignActiveCardZones = targetCardZoneIDs => {
        if (!targetCardZoneIDs) {
            setActiveCardZones([]);
        } else {
            setActiveCardZones(targetCardZoneIDs);;
        }
    }
    
    return(
        <div className={styles.mainLayout}>
            <ImportBsJS />
            <AppNavbar gameTitleProp={game.title} />
            <div id="rulesMain" className={styles.rulesPage} >
                <h1>{game.title}</h1>
                <div className={styles.stackContainer}>
                    <Stack gap={3} className={styles.mainStack}>
                        <div className={styles.topSection}>
                            <RulesImageIcons
                                cardImg={game.cardImg}
                                plCount={game.plCount}
                                plTime={game.plTime}
                                complexity={game.complexity}
                            />
                            <div className={styles.summary}>
                                <h2>Summary</h2>
                                {/* conditionally render summary to avoid errors while
                                    rules db is not fully populated */}
                                <p>{rules ? rules.summary : "Summary Text"}</p>
                                {
                                    rules &&
                                    <a href={rules.bggLink} target="_blank">
                                        <Image
                                            src={"/bgg-logo.svg"}
                                            height={38}
                                            width={80}
                                        />
                                    </a>
                                }
                            </div>
                        </div>
                        {
                            (componentWarning || mapWarning) &&
                                <div className={styles.warnings}>
                                    {
                                        mapWarning && 
                                        <div className={`${styles.warning} ${styles.mapWarn}`}>
                                            <div className={styles.warningTitle}>    
                                                <div className={styles.warningIcon}><p>!</p></div>
                                                <h3>Mapping Warning</h3>
                                            </div>
                                            { game.mapStrength === "High" ? <p>This game has high mapping strength. The Everdeck version has minor changes/mental tracking but the gameplay is unhindered.<br/>See the <b>Rules</b> section for more details</p>
                                            : <p><b>This game has low mapping strength!</b> While it's still playable with the Everdeck, expect increased mental tracking, frequent references to a card guide, or game features missing entirely.<br/>See the <b>Rules</b> section for more details</p>}  
                                        </div>
                                    }

                                    {
                                        componentWarning &&
                                        <div className={` ${styles.warning} ${styles.compWarn}`}>
                                            <div className={styles.warningTitle}>    
                                                <div className={styles.warningIcon}><p>!</p></div>
                                                <h3>Extra Components</h3>
                                            </div>
                                            <p>This game requires extra components to play:</p>
                                            <ul>
                                                {game.extComponents.map(comp => (
                                                    <li key={comp}>{comp}</li>    
                                                ))}     
                                            </ul>
                                        </div>
                                    }
                                    
                                </div>
                        }
                        <div className={styles.divider}></div>
                        <div id="middle" className={styles.middleSection}>
                            <div id="cardZone" className={styles.cardZone}>
                                <CardZone 
                                    cardZones={cardZones}
                                    activeCardZones={activeCardZones}
                                    assignActiveCardZones={assignActiveCardZones}
                                />
                            </div>
                            <div id="rulesSection" className={styles.rules}>
                                <RulesSection 
                                    objective={rules.rules.objective}     
                                    setup={rules.rules.setup}     
                                    gameplay={rules.rules.gameplay}
                                    ruleSource={rules.rules.ruleSource}
                                    mapDiff={rules.rules.mapDiff}
                                    cardZones={cardZones}
                                    activeCardZones={activeCardZones}
                                    assignActiveCardZones={assignActiveCardZones}
                                    moveToCardZone={moveToCardZone}
                                />
                            </div>
                        </div>
                        <div className={styles.divider}></div>
                        <div id="bottom" className={styles.bottomSection}>
                            <div className={styles.tableSection}>
                                <TableSection 
                                    cardZones={cardZones}
                                    cardTable={rules.cardTable}
                                    extComponents={rules.extComponents}
                                />
                            </div>
                        </div>
                    </Stack>
                    <div className={styles.jumpSection}>
                        <h2>Jump To:</h2>
                        <Button
                            onClick={moveToTop}
                            bsPrefix={styles.jumpButton}
                        >
                            Basic Info
                        </Button>
                        <Button
                            onClick={moveToMiddle}
                            bsPrefix={`${styles.jumpButton} ${styles.jumpButtonCZR}`}
                        >
                            Card Zone/Rules
                        </Button>
                        <Button
                            onClick={moveToMiddle}
                            bsPrefix={`${styles.jumpButton} ${styles.jumpButtonCZ}`}
                        >
                            Card Zones
                        </Button>
                        <Button
                            onClick={moveToRules}
                            bsPrefix={`${styles.jumpButton} ${styles.jumpButtonR}`}
                        >
                            Rules
                        </Button>
                        <Button
                            onClick={moveToBottom}
                            bsPrefix={styles.jumpButton}
                        >
                            Card Table
                        </Button>  
                    </div>
                   
                </div>
            </div>
            <AppFooter />
        </div>

    );
}

export default RulesPage;