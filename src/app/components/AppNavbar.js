import { Navbar } from "react-bootstrap";
import Image from "next/image";
import { Alegreya_SC, Alegreya } from "next/font/google";
import styles from "../css/navBar.module.css";
import { useRouter } from "next/router";

const alegreya_sc = Alegreya_SC({
    weight: '400', 
    subsets: ['latin']
})
const alegreya = Alegreya({ subsets: ["latin"], variable: "--font-alegreya"});

/**
 * Component of the top title / nav bar
 * @param {Object} props - props for the component
 * @param {String} props.gameTitleProp - the Title of the game if the current page is a game's rules page 
 * @returns {React.ReactElement} - nav bar element
 */
export default function AppNavbar({gameTitleProp}) {
    let gameTitle = ""
    let hideTitleStyle = ""

    // check if a game title was passed into the component
    if (gameTitleProp) {
        gameTitle = gameTitleProp;
        hideTitleStyle = styles.hideTitle; 
    }
    
    const router = useRouter();

    return (
        <header className={styles.header}>
            <Navbar bsPrefix={styles.navbar}>
                <div
                    className={`${styles.container} ${hideTitleStyle}`}
                >
                    <a
                        className={alegreya_sc.className}
                        // jump to top of page if at main page or return to main page
                        href={router.pathname === "/" ? "#" : "/"}
                    >
                        <Image className={styles.titleImage} src={"/everdeck-clam.svg"} width={50} height={50} alt="Website Icon" />
                        <h1>Everdeck Library</h1>
                    </a>
                    <h2
                        className={
                            `${gameTitle.length >= 20 && styles.titleSmall} ${gameTitle.length >= 30 && styles.titleXSmall} ${alegreya.className}`
                        }
                    >
                        {gameTitle}
                    </h2>
                </div>
            </Navbar>
        </header>
    )

}