import { Button, Form, InputGroup } from "react-bootstrap"

export default function SearchBar() {
    /*TO-DO: 
        - Icon for search-button
    */

    return (
        <div className="search-bar">
            <InputGroup className="p-3">
                <Form.Control
                    placeholder="Search" 
                    aria-label="Game Library Search Field"
                    aria-describedby="button-search"
                />
                <Button>
                    Go
                </Button>
            </InputGroup>
        </div>
    )

}