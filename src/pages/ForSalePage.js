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

const ForSalePage = () => {
    const moveToTop = () => document.getElementById('top').scrollIntoView();
    const moveToMiddle = () => document.getElementById('middle').scrollIntoView();
    const moveToBottom = () => document.getElementById('bottom').scrollIntoView();

    return(
        <div className={styles.mainLayout}>
        <ImportBsJS />
        <AppNavbar />
        <div id="rulesMain" className={styles.rulesPage} >
            <h1 id="top">For Sale</h1>
            <div className={styles.stackContainer}>
                    <Stack gap={3} className={styles.mainStack}>
                        <div  className={styles.topSection}>
                            <RulesImageIcons />
                            <div className={styles.summary}>
                                <h2>Summary</h2>
                                <p>For Sale is a quick, fun game nominally about buying and selling real estate. 
                                    During the game's two distinct phases, players first bid for several buildings then, after all buildings have been bought, sell the buildings for the greatest profit possible.
                                </p>
                            </div>
                        </div>
                        <div className={styles.warnings}>
                             {/* warnings go here, activate if flagged */}

                        </div>
                        <div id="middle" className={styles.middleSection}>
                            <div className={styles.cardZone}>
                                <CardZone />
                            </div>
                            <div className={styles.rules}>
                                <RulesSection />
                            </div>
                        </div>

                        <div id="bottom" className={styles.bottomSection}>
                            <div className={styles.tableSection}>
                                <TableSection />
                            </div>
                        </div>
                    </Stack>
                </div>
                <div className={styles.jumpSection}>
                    <Button
                        variant="top"
                        onClick={moveToTop}
                        bsPrefix={styles.jumpButton}
                    >
                        Basic Info
                    </Button>
                    <Button
                        variant="middle"
                        onClick={moveToMiddle}
                        bsPrefix={styles.jumpButton}
                    >
                        Card Zone/Rules
                    </Button>
                    <Button
                        variant="bottom"
                        onClick={moveToBottom}
                        bsPrefix={styles.jumpButton}
                    >
                        Card Table
                    </Button>  
                </div>
                
        </div>
    </div>

    );
}

export default ForSalePage;