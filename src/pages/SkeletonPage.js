"use client"

import { useState } from "react";
import { Stack, Button, Image, Offcanvas } from "react-bootstrap";
import styles from "./css/rulesPage.module.css";
import RulesImageIcons from "../app/components/RulesImageIcons"
import CardZone from "../app/components/CardZone"
import RulesSection from "../app/components/RulesSection";
import TableSection from "../app/components/TableSection";
//From layout.js
import "bootstrap/dist/css/bootstrap.min.css";
import ImportBsJS from "../app/components/importBsJs";
import AppNavbar from "../app/components/AppNavbar";

const ForSalePage = ({ game, rules }) => {

    let componentWarning = false;
    let mapWarning = false;

    if(game.mapStrength !== "Perfect") {
        mapWarning = true;
    } 
    else if(game.extComponents.length > 0) {
        componentWarning = true;
    }

    return(
        <div className={styles.mainLayout}>
            <ImportBsJS />
            <AppNavbar />
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
                                    <a href={rules.bggLink}>
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
                                            <p>This game does not perfectly map to the Everdeck.</p>    
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
                        <div className={styles.middleSection}>
                            <div className={styles.cardZone}>
                                {/*
                                <CardZone />  //needs to take in paramaters to fill itself
                                */}
                            </div>
                            <div className={styles.rules}>
                                {/*
                                <RulesSection />   //needs to take in paramaters to fill itself
                                */}
                            </div>
                        </div>

                        <div className={styles.bottomSection}>
                            <div className={styles.tableSection}>
                                {/*
                                <TableSection />   //needs to take in paramaters to fill itself
                                */}
                            </div>
                        </div>
                    </Stack>
                </div>
            </div>
        </div>

    );
}

export default ForSalePage;