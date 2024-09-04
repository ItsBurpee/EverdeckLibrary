import styles from "../css/navFooter.module.css";
import Link from "next/link";

export default function AppNavbar({gameTitleProp}) {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.names}>
                    Created by Nathan, Carl, and Philip
                    <span className={styles.slash}>&ensp;/&ensp;</span>
                    <div className={styles.links}>
                        <a href={"https://github.com/ItsBurpee/EverdeckLibrary"} className={styles.git} target="_blank">Github</a>
                        <span>&ensp;/&ensp;</span>
                        <Link href="/about" className={styles.about}>About Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    )

}