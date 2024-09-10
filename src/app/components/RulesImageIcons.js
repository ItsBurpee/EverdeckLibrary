import styles from "../css/imageIcons.module.css";
import Image from "next/image";


export default function RulesImageIcons({cardImg, plCount, plTime, complexity}) {

    return (
        <div className={styles.imageIcons}>
            <div className={styles.imgContainer}>
                <div className={styles.img}>
                    <img src={cardImg} alt="Game Image" />
                </div>
                <div className={styles.statIcons}>
                    <div className={styles.icon}>
                        <div className={styles.iconImage}>
                            <Image src={"/gameCardIcons/person-male-svgrepo-com.svg"} height={25} width={25} alt="Player Count Icon" />
                        </div>
                        <h4>{plCount.plCountMin === plCount.plCountMax ? `${plCount.plCountMin}` : `${plCount.plCountMin}-${plCount.plCountMax}`}</h4>
                    </div>
                    {/* time icon */}
                    <div className={styles.icon}>
                        <div className={styles.iconImage}>
                            <Image src={"/gameCardIcons/stopwatch-svgrepo-com.svg"} height={25} width={25} alt="Play Time Icon" />
                        </div> 
                        <h4>{plTime.plTimeMin === plTime.plTimeMax ? `${plTime.plTimeMin}` : `${plTime.plTimeMin}-${plTime.plTimeMax}`}</h4>
                    </div>
                        {/* complexity icon */}
                    <div className={styles.icon}>
                        <div className={styles.iconImage}>
                            <Image src={"/gameCardIcons/signal-strong-svgrepo-com.svg"} height={25} width={25} alt="Complexity Icon" />
                        </div>
                        <h4>{`${complexity}/5`}</h4>
                    </div>
                </div>
            </div>
        </div>
    )

}