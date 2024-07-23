import { Container, Navbar } from "react-bootstrap";

export default function AppNavbar() {
    /*TO-DO: 
        - Icon to the left of h1/Navbar.Brand
            ! Navbar.Brand doesn't seem to work?
        - Middle Game Name while on a rules page
    */

    return (
        <header>
            <Navbar className="bg-body-primary">
                <Container>
                    <h1>Everdeck Library</h1>
                </Container>
            </Navbar>
        </header>
    )

}