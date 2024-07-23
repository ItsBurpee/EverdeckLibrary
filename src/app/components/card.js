import styles from "../css/card.module.css";
import Image from "next/image";

/**
 * Card component for use in the main gamelist page
 * @param {Object} props - props for the component
 * @param {string} props.title - title for the card 
 * @param {string} props.cardImg - image for the card 
 * @param {array} props.plyCount - range of number of players that can play the game 
 * @param {array} props.time - range of average time to complete the game 
 * @param {int} props.complexity - range of complexity of game 
 * @returns {React.ReactElement} - card element
 */
export default function Card(props) {
    return (
        
        <div className={styles.card}>
            <div className={styles.cardImgContainer}>
                <div className={styles.cardImg}>
                    <Image src={props.cardImg} fill/>
                </div>
            </div>
            <div className={styles.cardInfo}>
                <div className={styles.cardTitle}>
                    <h2>{props.title}</h2>
                    <div className={styles.statIcons}>
                        {/* player count icon */}
                        <div className={styles.icon}>
                            <div className={styles.iconImage}>
                                <Image src={"/gameCardIcons/person-male-svgrepo-com.svg"} fill />
                            </div>
                            <h4>{`${props.plyCount[0]}-${props.plyCount[1]}`}</h4>
                        </div>
                        {/* time icon */}
                        <div className={styles.icon}>
                            <div className={styles.iconImage}>
                                <Image src={"/gameCardIcons/stopwatch-svgrepo-com.svg"} fill />
                            </div>
                            <h4>{`${props.time[0]}-${props.time[1]}`}</h4>
                        </div>
                        {/* complexity icon */}
                        <div className={styles.icon}>
                            <div className={styles.iconImage}>
                                <Image src={"/gameCardIcons/signal-strong-svgrepo-com.svg"} fill />
                            </div>
                            <h4>{`${props.complexity}/5`}</h4>
                        </div>
                    </div>
                </div>
                <p>{props.shDescription}</p>
            </div>
            <div className={styles.alertCircle}>
                <p>!</p>
            </div>
        </div>
        
    );
}