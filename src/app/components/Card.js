"use client"

import { useState } from "react";
import styles from "../css/card.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button, Modal } from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Alegreya, Alegreya_Sans } from "next/font/google";
import "../css/globals.css";
const alegreya = Alegreya({ subsets: ["latin"] });
const alegreyaSans = Alegreya_Sans({ weight: ["500"], subsets: ["latin"] });

/**
 * Card component for use in the main gamelist page
 * @param {Object} props - props for the component
 * @param {Object} props.game - card object with the following keys: 
 *  title - title for the card 
 *  cardImg - image for the card 
 *  plCount - range of number of players that can play the game 
 *  plTime - range of average time to complete the game 
 *  complexity - range of complexity of game 
 *  shDescription - short description of game
 *  mapStrength - How well the Everdeck can map to the game's components
 *  extComponents - A list of components outside of the Everdeck
 * 
 *  gameWarning - warnings based on map strength & external components
 * @returns {React.ReactElement} - card element
 */

export default function Card({ game }) {
 
    let gameWarning = ""

    //A very simple check on the warnings
    if(game.mapStrength !== "Perfect" && game.extComponents.length > 0) {
        gameWarning = "both"
    }
    else if(game.mapStrength !== "Perfect") {
        gameWarning = "mapping"
    } 
    else if(game.extComponents.length > 0) {
        gameWarning = "component"
    }

    const componentWarning = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          This game has extra components
        </Tooltip>
    );
    
    const mappingWarning = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          This game does not map perfectly to the Everdeck
        </Tooltip>
    );

    const bothWarning = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          This game has extra components; and does not map perfectly to the Everdeck
        </Tooltip>
    );

    // router to direct to the rules page 
    const router = useRouter();
    const gameUrl = game.title.replaceAll(" ", "_") // replace spaces in game name with _ for url

    const pushRoute = () => {
        router.push(`/${gameUrl}`)
    }

    return (
        
        <div className={styles.card}>
            <div onClick={pushRoute} className={styles.cardImgContainer}>
                <div className={styles.cardImg}>
                    <Image src={game.cardImg} fill alt="Game Image" />
                </div>
            </div>
            <div onClick={pushRoute} className={styles.cardInfo}>
                <div className={styles.cardTitle}>
                    <h2
                        className={
                            `${game.title.length >= 20 && styles.titleSmall} ${game.title.length >= 30 && styles.titleXSmall} ${styles.titleText}`
                        }
                    >
                        {game.title}
                    </h2>
                    <div className={styles.statIcons}>
                        {/* player count icon */}
                        <div className={styles.icon}>
                            <div className={styles.iconImage}>
                                <Image src={"/gameCardIcons/person-male-svgrepo-com.svg"} height={25} width={25} alt="Player Count Icon" />
                            </div>
                            <h4>{game.plCount.length == 1 ? `${game.plCount[0]}` : `${game.plCount[0]}-${game.plCount[1]}`}</h4>
                        </div>
                        {/* time icon */}
                        <div className={styles.icon}>
                            <div className={styles.iconImage}>
                                <Image src={"/gameCardIcons/stopwatch-svgrepo-com.svg"} height={25} width={25} alt="Play Time Icon" />
                            </div> 
                            <h4>{game.plTime.length == 1 ? `${game.plTime[0]}` : `${game.plTime[0]}-${game.plTime[1]}`}</h4>
                        </div>
                        {/* complexity icon */}
                        <div className={styles.icon}>
                            <div className={styles.iconImage}>
                                <Image src={"/gameCardIcons/signal-strong-svgrepo-com.svg"} height={25} width={25} alt="Complexity Icon" />
                            </div>
                            <h4>{`${game.complexity}/5`}</h4>
                        </div>
                    </div>
                </div>
                {/* <p className={ alegreyaSans.className }>{game.shDescription}</p> */}
                <p>{game.shDescription}</p>
            </div>
            <div id="game-warning-button">
                {   //create different overlays if warning is component || mapping || both 
                    gameWarning == "component" &&
                        <OverlayTrigger placement="left" trigger={["click", "hover"]} overlay={componentWarning} >
                            <Button bsPrefix={`${styles.alertCircle} ${styles.alertCircleComponent}`}>!</Button>
                        </OverlayTrigger>
                    
                    || 

                    gameWarning == "mapping" &&
                        <OverlayTrigger placement="left" trigger={["click", "hover"]} overlay={mappingWarning} >
                            <Button bsPrefix={`${styles.alertCircle} ${styles.alertCircleMapping}`} >!</Button>
                        </OverlayTrigger>
                        
                    ||

                    gameWarning == "both" &&
                        <OverlayTrigger placement="left" trigger={["click", "hover"]} overlay={bothWarning} >
                            <Button bsPrefix={`${styles.alertCircle} ${styles.alertCircleBoth}`}>!</Button>
                        </OverlayTrigger>
                }
            </div>
        </div>
        
    );
}
