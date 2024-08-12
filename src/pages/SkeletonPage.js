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

const ForSalePage = ({ game }) => {
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
                                <p>Summary Text</p>
                            </div>
                        </div>
                        <div className={styles.warnings}>
                             {/* warnings go here, activate if flagged */}

                        </div>
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