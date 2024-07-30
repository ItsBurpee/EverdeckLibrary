"use client"

import { useState } from "react";
import styles from "../css/card.module.css";
import Image from "next/image";
import { Button, Modal } from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

/**
 * Card component for use in the main gamelist page
 * @param {Object} props - props for the component
 * @param {string} props.title - title for the card 
 * @param {string} props.cardImg - image for the card 
 * @param {array} props.plyCount - range of number of players that can play the game 
 * @param {array} props.time - range of average time to complete the game 
 * @param {float} props.complexity - range of complexity of game 
 * @param {string} props.shDescription - short description of game
 * @param {string} props.gameWarning - warnings for the game "both" "component" or "mapping"
 * @returns {React.ReactElement} - card element
 */

export default function Card(props) {
 
    const componentWarning = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          This game has extra components
        </Tooltip>
    );
    
    const mappingWarning = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          This game does not map perfectly to the everdeck
        </Tooltip>
    );

    const bothWarning = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          This game has extra components; and does not map perfectly to the everdeck
        </Tooltip>
    );

    return (
        
        <div className={styles.card}>
            <div className={styles.cardImgContainer}>
                <div className={styles.cardImg}>
                    <Image src={props.cardImg} fill alt="Game Image" />
                </div>
            </div>
            <div className={styles.cardInfo}>
                <div className={styles.cardTitle}>
                    <h2>{props.title}</h2>
                    <div className={styles.statIcons}>
                        {/* player count icon */}
                        <div className={styles.icon}>
                            <div className={styles.iconImage}>
                                <Image src={"/gameCardIcons/person-male-svgrepo-com.svg"} height={25} width={25} alt="Player Count Icon" />
                            </div>
                            <h4>{props.plyCount.length == 1 ? `${props.plyCount[0]}` : `${props.plyCount[0]}-${props.plyCount[1]}`}</h4>
                        </div>
                        {/* time icon */}
                        <div className={styles.icon}>
                            <div className={styles.iconImage}>
                                <Image src={"/gameCardIcons/stopwatch-svgrepo-com.svg"} height={25} width={25} alt="Play Time Icon" />
                            </div> 
                            <h4>{props.time.length == 1 ? `${props.time[0]}` : `${props.time[0]}-${props.time[1]}`}</h4>
                        </div>
                        {/* complexity icon */}
                        <div className={styles.icon}>
                            <div className={styles.iconImage}>
                                <Image src={"/gameCardIcons/signal-strong-svgrepo-com.svg"} height={25} width={25} alt="Complexity Icon" />
                            </div>
                            <h4>{`${props.complexity}/5`}</h4>
                        </div>
                    </div>
                </div>
                <p>{props.shDescription}</p>
            </div>
            <div id="game-warning-button">
                {   //create different overlays if warning is component || mapping || both 
                    props.gameWarning == "component" &&
                        <OverlayTrigger placement="left" overlay={componentWarning} >
                            <Button className={`${styles.alertCircle} ${styles.alertCircleComponent}`} >!</Button>
                        </OverlayTrigger>
                    
                    || 

                    props.gameWarning == "mapping" &&
                        <OverlayTrigger placement="left" overlay={mappingWarning} >
                            <Button className={`${styles.alertCircle} ${styles.alertCircleMapping}`} >!</Button>
                        </OverlayTrigger>
                        
                    ||

                    props.gameWarning == "both" &&
                        <OverlayTrigger placement="left" overlay={bothWarning} >
                            <Button className={`${styles.alertCircle} ${styles.alertCircleBoth}`}>!</Button>
                        </OverlayTrigger>
                }
            </div>
        </div>
        
    );
}
