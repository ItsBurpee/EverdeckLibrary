import styles from "../css/cardZone.module.css";
import Image from "next/image";
import CardZoneBox from "./CardZoneBox"

export default function CardZone({cardZones}) {
    return (
            <div className={styles.cardZone}>
                <div className={styles.title}>
                    <h2>Card Zones</h2>
                </div>
                <div className={styles.img}>
                    <Image src={"/everdeck-card.svg"} height={275} width={225}  alt="Card Image" />
                </div>
                <div className={styles.cardZoneBoxes}>
                {
                    cardZones.map((zone, index) => (
                        <CardZoneBox key={zone._id} boxColorIndex={index} cardZone={zone} />
                    ))
                }
                </div>
            </div>      
    )

}