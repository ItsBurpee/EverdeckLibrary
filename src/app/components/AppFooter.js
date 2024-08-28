import styles from "../css/navFooter.module.css";
import Link from "next/link";

export default function AppNavbar({gameTitleProp}) {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.names}>Created by Nathan, Carl, and Philip</p>
                <a href={"https://github.com/ItsBurpee/EverdeckLibrary"} className={styles.git}>Github</a>
                <Link href="/about" className={styles.about}>About Us</Link>
            </div>
        </footer>
    )

}