import { Container, Navbar } from "react-bootstrap";
import Image from "next/image";
import { Alegreya_SC } from "next/font/google";
import styles from "../css/navBar.module.css";
import { useRouter } from "next/router";

const alegreya_sc = Alegreya_SC({
    weight: '400', 
    subsets: ['latin']
})

export default function AppNavbar() {
    /*TO-DO: 
        - Middle Game Name while on a rules page
    */
    
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
            <Navbar className={styles.navbar}>
                <Container className={styles.container}>
                    <h1
                        className={alegreya_sc.className}
                        onClick={returnHome}
                    >
                        <Image className={styles.titleImage} src={"/everdeck-clam.svg"} width={50} height={50} alt="Website Icon" />
                        Everdeck Library
                    </h1>
                </Container>
            </Navbar>
        </header>
    )

}