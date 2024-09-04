"use client"

import styles from "../css/card.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import "../css/globals.css";

/**
 * Card component for use in the main gamelist page
 * @param {Object} props - props for the component
 * @param {Object} props.game - card object with the following keys: 
 *  title - title for the card 
 *  cardImg - image for the card 
 *  plCount - range of number of players that can play the game 
 *      {plCountMin, plCountMax}
 *  plTime - range of average time to complete the game 
 *      {plTimeMin, plTimeMax}
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

    const getRoute = () => {
        let gameUrl = game.title.replaceAll(" ", "_");
        gameUrl = encodeURIComponent(gameUrl);
        // encode special characters ignored by encodeURIComponent to UTF-8 ASCII encoding
        gameUrl = gameUrl.replaceAll("'", "%27");
        gameUrl = gameUrl.replaceAll("-", "%2D");
        gameUrl = gameUrl.replaceAll("!", "%2D");
        gameUrl = gameUrl.replaceAll(".", "%2E");
        return gameUrl
    }

    const pushRoute = () => {
        router.push(`/${getRoute()}`);
    }

    return (
        
        <div className={styles.card}>
            <a href={`/${getRoute()}`} onClick={pushRoute} className={styles.cardImgContainer}>
                <div className={styles.cardImg}>
                    <Image src={game.cardImg} fill sizes="70vw" alt="Game Image" />
                </div>
            </a>
            <a href={`/${getRoute()}`} onClick={pushRoute} className={styles.cardInfo}>
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
                            <h4>{game.plCount.plCountMin === game.plCount.plCountMax ? `${game.plCount.plCountMin}` : `${game.plCount.plCountMin}-${game.plCount.plCountMax}`}</h4>
                        </div>
                        {/* time icon */}
                        <div className={styles.icon}>
                            <div className={styles.iconImage}>
                                <Image src={"/gameCardIcons/stopwatch-svgrepo-com.svg"} height={25} width={25} alt="Play Time Icon" />
                            </div> 
                            <h4>{game.plTime.plTimeMin === game.plTime.plTimeMax ? `${game.plTime.plTimeMin}` : `${game.plTime.plTimeMin}-${game.plTime.plTimeMax}`}</h4>
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
            </a>
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
