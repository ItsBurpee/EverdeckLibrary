"use client"

import { useState } from "react";
import styles from "../css/card.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button, Modal } from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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
 *  gameWarning - warnings for the game "both" "component" or "mapping"
 * @returns {React.ReactElement} - card element
 */

export default function Card({ game }) {
 
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
                    <h2>{game.title}</h2>
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
                <p>{game.shDescription}</p>
            </div>
            <div id="game-warning-button">
                {   //create different overlays if warning is component || mapping || both 
                    game.gameWarning == "component" &&
                        <OverlayTrigger placement="left" trigger={["click", "hover"]} overlay={componentWarning} >
                            <Button bsPrefix={`${styles.alertCircle} ${styles.alertCircleComponent}`} >!</Button>
                        </OverlayTrigger>
                    
                    || 

                    game.gameWarning == "mapping" &&
                        <OverlayTrigger placement="left" trigger={["click", "hover"]} overlay={mappingWarning} >
                            <Button bsPrefix={`${styles.alertCircle} ${styles.alertCircleMapping}`} >!</Button>
                        </OverlayTrigger>
                        
                    ||

                    game.gameWarning == "both" &&
                        <OverlayTrigger placement="left" trigger={["click", "hover"]} overlay={bothWarning} >
                            <Button bsPrefix={`${styles.alertCircle} ${styles.alertCircleBoth}`}>!</Button>
                        </OverlayTrigger>
                }
            </div>
        </div>
        
    );
}
