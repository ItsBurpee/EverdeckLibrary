import styles from "../css/imageIcons.module.css";
import Image from "next/image";


export default function RulesImageIcons() {

    return (
        <div className={styles.imageIcons}>
            <div className={styles.imgContainer}>
                <div className={styles.img}>
                    <Image src={"/gameCardIcons/image-picture-svgrepo-com.svg"} height={125} width={125}  alt="Game Image" />
                </div>
                <div className={styles.statIcons}>
                    <div className={styles.icon}>
                        <div className={styles.iconImage}>
                            <Image src={"/gameCardIcons/person-male-svgrepo-com.svg"} height={25} width={25} alt="Player Count Icon" />
                        </div>
                        <h4>{`3-8`}</h4>
                    </div>
                    {/* time icon */}
                    <div className={styles.icon}>
                        <div className={styles.iconImage}>
                            <Image src={"/gameCardIcons/stopwatch-svgrepo-com.svg"} height={25} width={25} alt="Play Time Icon" />
                        </div> 
                        <h4>{'30'}</h4>
                    </div>
                        {/* complexity icon */}
                    <div className={styles.icon}>
                        <div className={styles.iconImage}>
                            <Image src={"/gameCardIcons/signal-strong-svgrepo-com.svg"} height={25} width={25} alt="Complexity Icon" />
                        </div>
                        <h4>{`2.1/5`}</h4>
                    </div>
                </div>
            </div>
        </div>
    )

}