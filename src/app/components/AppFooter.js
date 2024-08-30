import styles from "../css/navFooter.module.css";
import Link from "next/link";

export default function AppNavbar({gameTitleProp}) {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.names}>
                    Created by Nathan, Carl, and Philip
                    &ensp;/&ensp;
                    <a href={"https://github.com/ItsBurpee/EverdeckLibrary"} className={styles.git} target="_blank">Github</a>
                    &ensp;/&ensp;
                    <Link href="/about" className={styles.about}>About Us</Link>
                </p>
            </div>
        </footer>
    )

}