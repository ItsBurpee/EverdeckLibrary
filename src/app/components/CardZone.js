import styles from "../css/cardZone.module.css";
import Image from "next/image";
import CardZoneBox from "./CardZoneBox"

export default function CardZone() {

    return (
            <div className={styles.cardZone}>
                <div className={styles.title}>
                    <h2>Card Zones</h2>
                </div>
                <div className={styles.img}>
                    <Image src={"/everdeckCard.jpg"} height={175} width={125}  alt="Game Image" />
                </div>
                <div className={styles.groupBoxes}>
                    <CardZoneBox/>
                </div>
            </div>
            
    )

}