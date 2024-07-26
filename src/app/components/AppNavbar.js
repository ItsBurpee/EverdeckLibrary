import { Container, Navbar } from "react-bootstrap";
import Image from "next/image";
import { Alegreya_SC } from "next/font/google";

const alegreya_sc = Alegreya_SC({
    weight: '400', 
    subsets: ['latin']
})

export default function AppNavbar() {
    /*TO-DO: 
        - Middle Game Name while on a rules page
    */

    return (
        <header>
            <Navbar className="bg-body-primary">
                <Container>
                    <h1 className={alegreya_sc.className}><Image src={"/everdeck-clam.svg"} width={50} height={50} alt="Website Icon"/> Everdeck Library</h1>
                </Container>
            </Navbar>
        </header>
    )

}