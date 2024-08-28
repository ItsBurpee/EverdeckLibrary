import { Container, Navbar } from "react-bootstrap";
import Image from "next/image";
import { Alegreya_SC, Alegreya } from "next/font/google";
import styles from "../css/navBar.module.css";
import { useRouter } from "next/router";

const alegreya_sc = Alegreya_SC({
    weight: '400', 
    subsets: ['latin']
})
const alegreya = Alegreya({ subsets: ["latin"], variable: "--font-alegreya"});

export default function AppNavbar({gameTitleProp}) {
    /*TO-DO: 
        - Middle Game Name while on a rules page
    */
    
    let gameTitle = ""
    let hideTitleStyle = ""

    if (gameTitleProp) {
        gameTitle = gameTitleProp;
        hideTitleStyle = styles.hideTitle; 
    }
    
    const router = useRouter();
    // push route to home page if not already on home page.
    // if on homepage, jump to top of page
    //      this is useless as it is now, but it can act as a jump to top button on the home
    //      page if we give the navbar a position: fixed and push everything else down
    const returnHome = () => {
        router.pathname === "/" ? router.push("#") : router.push("/");
    }

    return (
        <header className={styles.header}>
            <bsPrefix className={styles.navbar}>
                <div
                    className={`${styles.container} ${hideTitleStyle}`}
                >
                    <div
                        className={alegreya_sc.className}
                        onClick={returnHome}
                    >
                        <Image className={styles.titleImage} src={"/everdeck-clam.svg"} width={50} height={50} alt="Website Icon" />
                        <h1>Everdeck Library</h1>
                    </div>
                    <h2
                        className={
                            `${gameTitle.length >= 20 && styles.titleSmall} ${gameTitle.length >= 30 && styles.titleXSmall} ${alegreya.className}`
                        }
                    >
                        {gameTitle}
                    </h2>
                </div>
            </bsPrefix>
        </header>
    )

}